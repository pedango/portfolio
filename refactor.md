Refactor my Next.js + TypeScript + Tailwind portfolio. Keep all copy meaning, routes and project detail pages. Apply every item below, then list the files you changed.

SCREENSHOT PIPELINE (do this first)
- Install Playwright as a devDependency (npm i -D playwright && npx playwright install chromium). Use sharp (already bundled with Next) for image processing.
- Create scripts/capture-screenshots.ts and an npm script "screenshots": "tsx scripts/capture-screenshots.ts".
- Create scripts/screenshots.config.ts exporting an array of targets: { slug, url, waitFor?, auth?, actions?, fullPage: false }. Slugs: healtrac, gps-police-management, mwc-member-registry, plusbuy-trustpay, aer, fhm-meet, digi-receipt, lambda-lms, payvoice (skip payvoice if it has no UI).
- Find each project's live/demo URL in the existing project data files and pre-fill it. If a URL is not found, set url to "TODO_FILL_ME" and make the script skip that target with a clear console warning, never crash.
- Capture settings: viewport 1440x900 (exactly 16:10), deviceScaleFactor 2, colorScheme "dark" unless the target is light-only, wait for networkidle plus an optional waitFor selector, wait 800ms for animations to settle, disable animations and caret (page.addStyleTag with * { animation: none !important; transition: none !important; caret-color: transparent !important }), hide cookie banners and dev overlays.
- Authenticated targets: support auth via env vars (e.g. HEALTRAC_DEMO_EMAIL, HEALTRAC_DEMO_PASSWORD) with a login helper that fills the form and saves Playwright storageState. Read from .env.local, add the vars to .env.example with empty values, make sure .env.local is gitignored. If credentials are missing, capture the public/login page and log that the dashboard was skipped.
- PRIVACY RULE: never capture production data. Add a comment at the top of the config stating that GPS, MWC and HealTrac must only be captured from a local dev server with seeded fake data or a demo environment. Allow a per-target url override via env var (e.g. GPS_URL=http://localhost:3001).
- Output: resize/crop to 1600x1000 (16:10), export WebP quality 82 to public/assets/projects/{slug}.webp. Also write a 800x500 version as {slug}-sm.webp for cards. Do not overwrite an existing file unless the script runs with --force.
- Update the project data (image path fields) to use the new files, with correct width/height (1600x1000) and meaningful alt text, via next/image.
- If a screenshot is mostly a login screen, note it in the console summary so I can replace it by hand. Print a final table: slug, status (captured / skipped / failed), output path.

BUGS
- Add a shared scroll-mt-24 (or scroll-padding-top on html) so every section heading lands fully below the sticky nav, including Contact.
- Fix nav active state: no link is active while the hero is in view; sections highlight only when their section is in view (IntersectionObserver).
- Footer: use grid grid-cols-3 (name+location justify-self-start, social icons justify-self-center, back-to-top justify-self-end) so icons are truly centred.
- All date labels (Experience, Education, Leadership) align to the title's baseline, in a consistent position.
- Project images: every image sits in a frame with aspect-[16/10], object-cover object-top, 1px border, rounded-2xl, bg surface, inner padding 8–12px. Add a subtle dark overlay (bg-black/10) on light screenshots so they don't glare.

STRUCTURE
- Nav: Work, About, Experience, Contact + Resume button (merge Stack into About; fold Code into Work).
- Section order: Hero → Work → About (summary left, Focus card right, then Stack grid below) → Experience → Education & Leadership → Contact.
- Number sections consistently (01–05) in the same teal mono eyebrow style, including Education & Leadership; remove the grey "BACKGROUND" eyebrow.
- Hero: 7/5 grid, items-center, remove excess bottom padding. Add a line under the tagline: "Built HealTrac, used by 2 UPMC hospitals in Pennsylvania." Make the hero social icons part of the button row.
- About: 2–3 sentence summary in text-muted (not pure white), max-w-prose. Delete the "Quality" card and the subtitle under "Profile". Keep the Focus card, top-aligned with the paragraph.
- Stack: regroup into Frontend (React, Next.js, Tailwind CSS, Framer Motion, Zustand, JavaScript, TypeScript), Backend (Node.js, REST APIs, JWT, WebRTC/LiveKit), Data (PostgreSQL, MySQL, Prisma, Supabase, Upstash Redis), Auth & Services (Clerk, Cloudinary, Vercel), Testing & Security (Playwright, JMeter, Snyk). All group icons use the same muted colour; none use the accent.

WORK
- Order: HealTrac (full-width lead card), then GPS, MWC, PlusBuy + TrustPay in a 3-up grid (3 columns on lg, stacked on mobile).
- Unified card anatomy: media frame / role · year (muted) / title / one-line description (line-clamp-2) / 3 stat blocks (large number, small label, no pipes) / "View case study →". Equal heights via h-full flex flex-col; stats pinned with mt-auto.
- Whole card is one <Link>. Replace "Learn More" with "View case study".
- Replace "Live, not in real use" with a "Demo" status badge.
- "More projects": compact divided rows (title, one-line description, year, arrow), no images. Include PayVoice. Remove the Repositories grid, or reduce it to 3 repos with no "Updated X ago" and no truncated descriptions, plus a "View all on GitHub" link.

EXPERIENCE & EDUCATION
- Experience rows: two columns (dates left, role/company/bullets right), max 3 bullets, current/most recent dot uses the accent, others visible muted dots.
- Education & Leadership: one heading "Education & leadership" without duplicate sub-heading words; two balanced columns (items-start), same date alignment. Add a date to the Open the Book / Awana entry.

CONTACT
- Remove the subtitle that duplicates the paragraph and the "Prefer email?" line. Keep the email card (Email me primary, Copy email secondary). Keep Location/LinkedIn/GitHub rows. Footer: copyright + back to top + icons only.

SYSTEM
- Container: max-w-6xl mx-auto px-6 lg:px-8 everywhere. Section spacing py-20 md:py-28 (no extra bottom padding on top of that). Header-to-content gap mb-12. 8px spacing scale.
- Radii: rounded-2xl (16px) for cards and images, rounded-lg (8px) for buttons, chips and inputs. Nothing else.
- Colours (dark): bg #0A0B0D, surface #111317, raised #171A20, border rgba(255,255,255,0.08), text #F3F4F6, muted #9CA3AF. Mono labels/dates/eyebrows use muted at minimum, text-[13px]. One accent (current teal) only for primary buttons, links, active nav, focus rings, current timeline dot, card hover border (40% opacity). Tags/chips are neutral. Verify WCAG AA in both themes.
- Type: H1 clamp(2.5rem,5vw,4rem), H2 text-3xl md:text-4xl, body text-base leading-7, eyebrow text-xs uppercase tracking-widest.
- Respect prefers-reduced-motion; keep Lighthouse accessibility ≥ 95.