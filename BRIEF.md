# Bass Coast Podiatry website: project brief

This is the source of truth for this project. Read it before making changes.

## The client

- **Business:** Bass Coast Podiatry, a long running podiatry clinic, opened July 2007.
- **Address:** 182 Graham Street, Wonthaggi VIC 3995
- **Phone:** (03) 5672 2309 (tel link: `tel:+61356722309`)
- **Hours:** Monday to Friday 8:40 am to 5:30 pm. Before and after hours appointments available.
- **Bookings:** by phone or the contact form. No online booking.
- **Claims and rebates:** Medicare, DVA, HICAPS, TAC, WorkSafe.
- **Facebook:** https://www.facebook.com/basscoastpodiatry/
- **Current site:** https://basscoastpodiatry.com.au (WordPress, looks dated).

## Goal

A modern refresh: clean, calm, professional, easy to read for older patients, mobile first.
Main actions: call, find the clinic, understand the services.

## Brand (approved)

- Logo: a single footprint icon with a sand coloured arch, a thin divider and the wordmark "Bass Coast Podiatry" in Lexend.
- Brand files: `bcp-brand.zip` from `~/Desktop/Business/Clients/Bass Coast Podiatry/Brand/`, unzipped into `brand/`.
- `brand/brand.css` is copied to `src/styles/brand.css`. Every colour, the font and the corner radius come from its variables.
- Colours:
  - Ocean blue `#0B4F7C`: logo, headings, buttons, glows
  - Sand `#F4C97B`: logo arch, the current page marker in the menu, and warm light near the bottom of the home hero. Never text.
  - Light sand `#FBEFD6`: in the brand pack, but no longer used for backgrounds (design round 2)
  - White and Mist `#F8F9FA`: the base
  - Ink `#1E2A33`: body text
  - Added in design round 2, in `src/styles/tokens.css` (brand.css stays as supplied): Sea cyan `#7FD3E6` for glows and tints, Deep Ocean blue `#073A5C` for contrast sections, the footer, the mobile menu and the contact panel.
- Font: Lexend from Google Fonts. Medium (500) for headings, Regular (400) for text.
- Header uses `bcp-logo-horizontal-blue.svg`, footer uses `bcp-logo-horizontal-white.svg` on Ocean blue. Favicons are in `public/`.

## Technical decisions

- Astro static site, same approach as `~/Documents/Code/portfolio` (Astro 7, GitHub Pages workflow).
- Plain CSS on the brand variables, no Tailwind. Global styles in `src/styles/global.css`.
- Icons: Lucide (`lucide-static`, pinned), through `src/components/Icon.astro`, 1.75 stroke, in soft tinted circles.
- Page transitions: Astro `ClientRouter`. Scripts must survive page swaps: use `astro:page-load` and event delegation, and add listeners once.
- Base path `/bass-coast-podiatry` for GitHub Pages. Always build links with `url()` from `src/data/site.ts`.
- Clinic details, menu, claims list and FAQs live in `src/data/site.ts`.
- Service pages are markdown in `src/content/services/`. The file name is the page address.
- Images are in `src/assets/images/` and optimised by Astro at build time.
- Future repo: `asmithdigital/bass-coast-podiatry`. Deploys with `.github/workflows/deploy.yml` on every push to `main`.
- Old content pulled from the WordPress feed is kept in `content/raw/` and `content/images/`. See `content/INVENTORY.md`.

## Page addresses (keep these)

`/about-us/`, `/claims-rebates/`, `/faqs/`, `/our-services/`, `/contact/`, and each service at its current slug:
`/general-podiatry/`, `/laser-treatment-for-fungal-nail-infections/`, `/biomechanical-assessment/`, `/paediatric-assessment/`,
`/nail-surgery/`, `/prescription-orthotic-therapy/`, `/diabetes-foot-assessment/`, `/visiting-pedorthist/`.
Old `/appointments/` redirects to `/contact/` and old `/news/` redirects to the home page. `/styleguide/` shows the brand.
`/contact/` must always work as a normal page for direct links.

## Content rules

- Use the current site's wording. Only fix obvious typos, and list every change in `content/INVENTORY.md`.
- Never invent facts, services, staff, prices or claims.
- If something is unclear, show a visible note `[CHECK WITH CLIENT]` (class `check`) rather than guessing.
- No patient testimonials (AHPRA advertising rules).
- Partner and membership logos (design round 3): one muted row, set in `partners` in `src/data/site.ts`. Never the AHPRA logo.
  Medicare, DVA and WorkSafe restrict logo use, so they show as text until the client has permission. See `content/INVENTORY.md`.

## Writing rules

- Australian spelling. Plain words.
- No em dashes or en dashes anywhere. Search all copy for dashes before finishing.
- No hype words such as seamless, cutting edge or world class.

## Design rules (current: design round 3)

- Wide and open: content up to 1440px with side margins of 5vw. The hero and feature images run the full width of the screen.
- Text always sits on white, a solid or frosted card, or a deep blue surface, never directly on a busy photo or glow. Body text at least 18px.
- Soft Ocean blue and Sea cyan glows (`Glows.astro`, CSS only) behind some sections, drifting very slowly.
- Large headings; section headings are Lexend Regular and reveal line by line once.
- Frosted glass and white cards with soft shadows; images zoom gently on hover; buttons carry a small arrow that moves on hover.
- One full width deep blue section per page at most. Deep blue footer with a large "Book an appointment" line.
- Page changes: a soft blue to cyan wash, about 600ms. Header becomes compact and frosted on scroll. Mobile menu is a full screen deep blue overlay.
- Contact panel: any link with `data-contact` opens a full screen contact panel with a growing blue circle (about 700ms).
  It closes with X, Escape or Back, keeps focus inside and returns it to the link.
- Missing photos: a soft blue glass placeholder labelled "Photo to come".
- All motion is gentle and plays once, and reduce motion turns it off. No sliders, counters or parallax on text.
- The desktop menu and Call button stay visible. On phones a Call button is fixed to the bottom of the screen.
- Previous designs are tagged `round-1-design` and `round-2-design` in git.

## Homepage order (design round 3)

1. Header: logo, menu (Services, About, Claims and rebates, FAQs, Contact), Call button
2. Full width hero: beach photo, blue glass veil, white H1 "Podiatry care in Wonthaggi since 2007", intro line, Call and Contact buttons,
   and a frosted "Visit us" card with today's hours, address, phone and Get directions
3. Quick actions: Call us, Get directions, Send a message, Claims and rebates
4. Services: feature card for General Podiatry plus seven glass cards and a call card
5. Meet the team: large photo, names, link to About
6. Claims and rebates: deep blue section with the five names as badges
7. Logo row
8. Hours and location with the map
9. Three FAQs and a link to all FAQs
10. Footer

## Preview mode (remove all of this at launch)

- `<meta name="robots" content="noindex, nofollow">` on every page (`src/layouts/Layout.astro`).
- `public/robots.txt` disallows everything. Note: on GitHub Pages a project site's robots.txt is not at the domain root, so the meta tag is what actually keeps it out of search.
- The "Preview only" banner was removed in design round 2.
- Password screen (`src/components/PasswordGate.astro`), password `bcp-preview`, remembered for the browser session, switched off on localhost. It only stops casual viewers; it is not secure.
- Contact form uses Formspree with a placeholder form ID in `src/data/site.ts`.

## Quality checks before finishing any change

Check at 375px, 1280px and 1920px wide: no horizontal scrolling, one H1 per page, headings in order, alt text on every image,
every tel link works, and `npm run build` has no errors.
