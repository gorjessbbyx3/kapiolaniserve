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
5. `functions/api/contact.ts` is a Cloudflare Pages Function — Cloudflare auto-detects the
   top-level `functions/` directory and deploys it alongside the static site. See below for
   the one-time email setup required for it to actually send mail.

## Contact form email setup (one-time)

The contact form on the homepage POSTs to `/api/contact`, a Cloudflare Pages Function that
emails submissions to **kccserve@hawaii.edu** using [Resend](https://resend.com).

1. Create a free Resend account at resend.com.
2. Under **API Keys**, create a new key.
3. In the Cloudflare Pages dashboard: Settings → Environment variables → add
   `RESEND_API_KEY` (as a **secret**, not plain text) with that key, for the Production
   environment (and Preview too, if you want form testing on preview deploys).
4. Redeploy the site (or it'll pick up the variable on the next deploy).

**About the sending address**: the function currently sends from
`onboarding@resend.dev`, Resend's shared test address — this works immediately with no
setup, but looks like an unfamiliar sender and has lower deliverability. For a more
trustworthy sender (e.g. `noreply@kapiolaniserve.techsavvyhawaii.com` or similar):
1. In Resend, add and verify your sending domain (a few DNS records — SPF/DKIM — added
   wherever the domain's DNS is managed, e.g. Cloudflare DNS).
2. Update `FROM_EMAIL` in `functions/api/contact.ts` to use that verified address.

Until a custom domain is verified, keep using `onboarding@resend.dev` — Resend will
reject sends from an unverified domain.

## Content still to migrate from the legacy site

The Resource Library, For Students, and For Faculty leaf pages currently ship with
short placeholder copy in `src/data/siteContent.ts`. Swap in the real content from
kapiolaniserve.weebly.com as it's finalized — each entry's `body` array maps directly
to paragraphs on the page.
