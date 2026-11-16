import { existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { chromium, type Browser, type Page } from "playwright";
import sharp from "sharp";
import { screenshotTargets, type ScreenshotTarget } from "./screenshots.config";

interface Row {
  slug: string;
  status: "captured" | "skipped" | "failed";
  output: string;
  note?: string;
}

const OUT_DIR = path.join(process.cwd(), "public", "assets", "projects");
const AUTH_DIR = path.join(process.cwd(), "scripts", ".auth");
const FORCE = process.argv.includes("--force");

function loadEnvLocal() {
  const file = path.join(process.cwd(), ".env.local");
  if (!existsSync(file)) return;

  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

function isLocalUrl(url: string) {
  try {
    const host = new URL(url).hostname;
    return host === "localhost" || host === "127.0.0.1";
  } catch {
    return false;
  }
}

function resolveUrl(target: ScreenshotTarget) {
  const override = process.env[target.urlEnv]?.trim();
  return override || target.url;
}

async function settle(page: Page, target: ScreenshotTarget) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
      [id*="cookie" i], [class*="cookie" i], [id*="consent" i], [class*="consent" i],
      nextjs-portal, [data-nextjs-dialog], [data-nextjs-toast], [data-next-badge] {
        display: none !important;
      }
    `,
  });
  await page.evaluate(() => {
    document.querySelectorAll("nextjs-portal").forEach((node) => node.remove());
  });
  if (target.waitFor) {
    await page
      .waitForSelector(target.waitFor, { timeout: 15000 })
      .catch(() => undefined);
  }
  await page.waitForTimeout(800);
}

async function looksLikeLogin(page: Page) {
  return page.evaluate(() => {
    const text = document.body?.innerText?.toLowerCase() ?? "";
    const hasPassword = Boolean(document.querySelector('input[type="password"]'));
    const signIn = /sign in|log in|login/.test(text);
    return hasPassword && signIn;
  });
}

async function login(page: Page, target: ScreenshotTarget, email: string, password: string) {
  const auth = target.auth;
  if (!auth) return;
  const loginUrl = new URL(auth.loginPath ?? "/login", resolveUrl(target)).href;
  await page.goto(loginUrl, { waitUntil: "networkidle" });
  await page
    .locator(auth.emailSelector ?? 'input[type="email"], input[name="email"]')
    .first()
    .fill(email);
  await page
    .locator(auth.passwordSelector ?? 'input[type="password"]')
    .first()
    .fill(password);
  await page
    .locator(auth.submitSelector ?? 'button[type="submit"]')
    .first()
    .click();
  await page.waitForLoadState("networkidle");
  mkdirSync(AUTH_DIR, { recursive: true });
  await page.context().storageState({
    path: path.join(AUTH_DIR, `${target.slug}.json`),
  });
}

async function writeImages(buffer: Buffer, slug: string) {
  const full = path.join(OUT_DIR, `${slug}.webp`);
  const small = path.join(OUT_DIR, `${slug}-sm.webp`);
  await sharp(buffer)
    .resize(1600, 1000, { fit: "cover", position: "top" })
    .webp({ quality: 82 })
    .toFile(full);
  await sharp(buffer)
    .resize(800, 500, { fit: "cover", position: "top" })
    .webp({ quality: 82 })
    .toFile(small);
  return full;
}

async function captureTarget(browser: Browser, target: ScreenshotTarget): Promise<Row> {
  const output = path.join(OUT_DIR, `${target.slug}.webp`);

  if (target.noUi) {
    console.warn(`${target.slug}: skipped, no web UI to capture.`);
    return { slug: target.slug, status: "skipped", output: "", note: "no UI" };
  }

  const url = resolveUrl(target);
  if (!url || url === "TODO_FILL_ME") {
    console.warn(
      `${target.slug}: skipped, url is TODO_FILL_ME. Set ${target.urlEnv} and run again.`
    );
    return { slug: target.slug, status: "skipped", output: "", note: "TODO_FILL_ME" };
  }

  if (target.localOnly && !isLocalUrl(url)) {
    console.warn(
      `${target.slug}: skipped. GPS, MWC, and HealTrac can only be captured from a local dev server with seeded fake data. Set ${target.urlEnv}=http://localhost:<port>.`
    );
    return { slug: target.slug, status: "skipped", output: "", note: "production refused" };
  }

  if (!FORCE && existsSync(output)) {
    console.warn(`${target.slug}: skipped, ${output} exists. Re-run with --force to replace it.`);
    return { slug: target.slug, status: "skipped", output, note: "exists" };
  }

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: target.colorScheme ?? "dark",
  });

  try {
    if (target.actions?.length) {
      console.log(`${target.slug}: actions — ${target.actions.join("; ")}`);
    }

    let dashboardSkipped = false;
    if (target.auth) {
      const email = process.env[target.auth.emailEnv]?.trim();
      const password = process.env[target.auth.passwordEnv]?.trim();
      if (!email || !password) {
        dashboardSkipped = true;
        console.warn(
          `${target.slug}: dashboard skipped, ${target.auth.emailEnv} or ${target.auth.passwordEnv} is missing. Capturing the public page.`
        );
      } else {
        await login(page, target, email, password);
      }
    }

    await page.goto(url, { waitUntil: "networkidle" });
    await settle(page, target);

    const loginScreen = await looksLikeLogin(page);
    const buffer = await page.screenshot({ fullPage: target.fullPage, type: "png" });
    const written = await writeImages(buffer, target.slug);
    const notes = [
      dashboardSkipped ? "dashboard skipped" : "",
      loginScreen ? "mostly a login screen — replace by hand" : "",
    ].filter(Boolean);

    if (loginScreen) {
      console.warn(`${target.slug}: screenshot looks like a login screen. Replace it by hand.`);
    }

    return {
      slug: target.slug,
      status: "captured",
      output: written,
      note: notes.join("; ") || undefined,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`${target.slug}: failed — ${message}`);
    return { slug: target.slug, status: "failed", output: "", note: message };
  } finally {
    await page.close();
  }
}

async function main() {
  loadEnvLocal();
  mkdirSync(OUT_DIR, { recursive: true });

  let browser: Browser | null = null;
  const rows: Row[] = [];

  try {
    browser = await chromium.launch({ headless: true });
    for (const target of screenshotTargets) {
      rows.push(await captureTarget(browser, target));
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Runner failed — ${message}`);
    for (const target of screenshotTargets) {
      if (!rows.some((row) => row.slug === target.slug)) {
        rows.push({ slug: target.slug, status: "failed", output: "", note: message });
      }
    }
  } finally {
    await browser?.close();
  }

  const slugWidth = Math.max(4, ...rows.map((row) => row.slug.length));
  console.log(`\n${"slug".padEnd(slugWidth)}  status    output`);
  for (const row of rows) {
    console.log(
      `${row.slug.padEnd(slugWidth)}  ${row.status.padEnd(8)}  ${row.output || "—"}`
    );
    if (row.note) console.log(`${"".padEnd(slugWidth)}  note: ${row.note}`);
  }
}

main();
