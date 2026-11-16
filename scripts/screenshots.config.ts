/**
 * PRIVACY: GPS, MWC, and HealTrac must only be captured from a local dev
 * server with seeded fake data or a demo environment. Never point these
 * targets at production. Override each URL with an env var, for example
 * GPS_URL=http://localhost:3001.
 */

export interface ScreenshotAuth {
  emailEnv: string;
  passwordEnv: string;
  loginPath?: string;
  emailSelector?: string;
  passwordSelector?: string;
  submitSelector?: string;
}

export interface ScreenshotTarget {
  slug: string;
  url: string;
  waitFor?: string;
  auth?: ScreenshotAuth;
  /** Optional page actions described for the operator. The runner logs them. */
  actions?: string[];
  fullPage: false;
  /** Dark unless the product is light-only. */
  colorScheme?: "dark" | "light";
  /** Production hosts are refused. Capture only via a local override. */
  localOnly?: boolean;
  /** Env var that replaces url, for example GPS_URL. */
  urlEnv: string;
  /** Skip when the project has no web UI. */
  noUi?: boolean;
}

export const screenshotTargets: ScreenshotTarget[] = [
  {
    slug: "healtrac",
    url: "https://www.healtrac.com",
    urlEnv: "HEALTRAC_URL",
    localOnly: true,
    fullPage: false,
    auth: {
      emailEnv: "HEALTRAC_DEMO_EMAIL",
      passwordEnv: "HEALTRAC_DEMO_PASSWORD",
      loginPath: "/login",
    },
    waitFor: "main",
  },
  {
    slug: "gps-police-management",
    url: "TODO_FILL_ME",
    urlEnv: "GPS_URL",
    localOnly: true,
    fullPage: false,
    waitFor: "main",
  },
  {
    slug: "mwc-member-registry",
    url: "https://mwc-member-registry.vercel.app",
    urlEnv: "MWC_URL",
    localOnly: true,
    fullPage: false,
    auth: {
      emailEnv: "MWC_DEMO_EMAIL",
      passwordEnv: "MWC_DEMO_PASSWORD",
      loginPath: "/login",
    },
    waitFor: "main",
  },
  {
    slug: "plusbuy-trustpay",
    url: "https://plusbuy-trustpay.vercel.app",
    urlEnv: "PLUSBUY_URL",
    fullPage: false,
    colorScheme: "light",
    waitFor: "main",
  },
  {
    slug: "aer",
    url: "https://www.aer.africa",
    urlEnv: "AER_URL",
    fullPage: false,
    colorScheme: "light",
    waitFor: "main",
  },
  {
    slug: "fhm-meet",
    url: "TODO_FILL_ME",
    urlEnv: "FHM_MEET_URL",
    fullPage: false,
    waitFor: "main",
  },
  {
    slug: "digi-receipt",
    url: "TODO_FILL_ME",
    urlEnv: "DIGI_RECEIPT_URL",
    fullPage: false,
    colorScheme: "light",
    waitFor: "main",
  },
  {
    slug: "lambda-lms",
    url: "TODO_FILL_ME",
    urlEnv: "LAMBDA_LMS_URL",
    fullPage: false,
    waitFor: "main",
  },
  {
    slug: "payvoice",
    url: "TODO_FILL_ME",
    urlEnv: "PAYVOICE_URL",
    fullPage: false,
    noUi: true,
  },
];
