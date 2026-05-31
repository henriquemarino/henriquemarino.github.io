// Single source of truth for the canonical site URL and base path defaults.
// Imported by both the Next.js app (lib/site.ts) and the static-asset build
// script (scripts/generate-static-assets.mjs). The env vars NEXT_PUBLIC_SITE_URL
// and NEXT_PUBLIC_BASE_PATH (set in CI) override these defaults at build time.
// The site is published as a GitHub user/org site (repo: henriquemarino.github.io),
// so it is served at the domain root with no base path.
export const DEFAULT_SITE_URL = 'https://henriquemarino.github.io'
export const DEFAULT_BASE_PATH = ''
