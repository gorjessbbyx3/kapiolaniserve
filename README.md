# KapiolaniServe

Rebuild of the Kapiʻolani Service & Sustainability Learning Program (KSSLP) site,
replacing the legacy Weebly site at kapiolaniserve.weebly.com.

## Stack

- React 19 + TypeScript + Vite
- React Router (client-side routing)
- Tailwind CSS v4
- Deploys to Cloudflare Pages

## Structure

- `src/data/pathways.ts` — the seven KSSLP pathways (Environment, Health, Education, etc.)
- `src/data/siteContent.ts` — route map for all secondary/leaf pages (Resource Library,
  For Students, For Faculty, etc.) — add an entry here to add a new page without touching routing.
- `src/pages/` — top-level route components
- `src/components/` — shared layout, nav, and UI pieces

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Deploy — Cloudflare Pages

1. Connect this repo in the Cloudflare Pages dashboard, or deploy via Wrangler:
   ```bash
   npx wrangler pages deploy dist --project-name=kapiolaniserve
   ```
2. Build command: `npm run build`
3. Build output directory: `dist`
4. `public/_redirects` handles SPA fallback routing so deep links resolve correctly.

## Content still to migrate from the legacy site

The Resource Library, For Students, and For Faculty leaf pages currently ship with
short placeholder copy in `src/data/siteContent.ts`. Swap in the real content from
kapiolaniserve.weebly.com as it's finalized — each entry's `body` array maps directly
to paragraphs on the page.
