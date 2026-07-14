# KapiolaniServe — Remaining Work

Tracking list for what's left before this site is 100% ready to fully replace the legacy Weebly site.

## Content still needed from the client/legacy site

- [x] **Assessment Reports Archive** — real 13-year fact sheet archive (2011–2024) now linked, pulled from legacy site
- [x] **Faculty Resources** — real curated reading list now added (dropped stale 2021 Campus Compact event announcements as no longer current)
- [x] **Plastic Pollution World Crisis** — real facts and external resource links added
- [x] **Meet the Team** — real names/roles/bios now in place (Denise Pierson, Krista Hiser, plus 4 student pathway leaders), with real photos for Denise & Krista

## Photos needed (placeholders currently in place)

See **[PHOTO_SHOTLIST.md](./PHOTO_SHOTLIST.md)** for the full breakdown with framing suggestions. Short version:

- [x] Pohukaina Food Pantry, KCC Ecology Club, MINA — real photos now in place (hotlinked from legacy site, see rehosting note below)
- [x] Māla Māunuunu campus program photo — real photo now in place (properly hosted, not hotlinked)
- [ ] One hero photo per pathway page (6 remaining — Environment now has a real photo)
- [ ] 4 student pathway leader headshots (Darlene Michubu, Barbara Keola, Kai Yamasato, Ari Smith)
- [x] State Farm & Hawaiian Electric sponsor logos — real logos now in place, properly hosted in `/public/images/sponsors` (not hotlinked)

## Files to rehost

- [ ] **Ecology Club flyer PDF** and **MINA Factsheet PDF** currently link directly to the legacy Weebly file host (`kapiolaniserve.weebly.com/uploads/...`) — these need to be rehosted (e.g. Google Drive, like the Civic Action Plan and Sustainability Plan links) before the old site is retired, or the links will break
- [ ] **All 13 Assessment Reports Archive PDFs** (2011–2024) are also on the legacy Weebly file host — same rehosting need, ideally in bulk before Weebly is retired
- [ ] **Some real photos are still hotlinked from the legacy Weebly host**: Pohukaina Food Pantry photo, the Carnegie Foundation logo, and Denise Pierson & Krista Hiser's headshots. (KCC Ecology Club, Māla Māunuunu, and MINA are now properly hosted in `/public/images/programs` — no longer hotlinked.) Download the remaining ones and drop them into `/public/images` before Weebly retires, or those photos will break.

## Functionality

- [ ] Contact form on the homepage is a front-end stub only — needs a real backend (Cloudflare Pages Function, Formspree, etc.) to actually deliver submissions
- [ ] Decide on final domain/subdomain and confirm DNS once client is ready to fully cut over from Weebly

## Nice-to-haves / possible next steps

- [ ] Replace remaining stock-style copy in Resource Library leaf pages with more specific real content if/when available
- [ ] Add real sponsor logos (State Farm, Hawaiian Electric) instead of text-only sponsor strip
- [ ] Consider an events/calendar page if KSSLP wants to surface upcoming workdays (MINA calendar, 808 Cleanups calendar, etc. are currently just linked externally)
