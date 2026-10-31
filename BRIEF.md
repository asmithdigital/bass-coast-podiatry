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
  - Ocean blue `#0B4F7C`: logo, headings, buttons
  - Sand `#F4C97B`: accent only, never text
  - Light sand `#FBEFD6` and Mist `#F8F9FA`: section backgrounds
  - Ink `#1E2A33`: body text
- Font: Lexend from Google Fonts. Medium (500) for headings, Regular (400) for text.
- Header uses `bcp-logo-horizontal-blue.svg`, footer uses `bcp-logo-horizontal-white.svg` on Ocean blue. Favicons are in `public/`.

## Technical decisions

- Astro static site, same approach as `~/Documents/Code/portfolio` (Astro 7, GitHub Pages workflow).
- Plain CSS on the brand variables, no Tailwind. Global styles in `src/styles/global.css`.
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

## Content rules

- Use the current site's wording. Only fix obvious typos, and list every change in `content/INVENTORY.md`.
- Never invent facts, services, staff, prices or claims.
- If something is unclear, show a visible note `[CHECK WITH CLIENT]` (class `check`) rather than guessing.
- No patient testimonials (AHPRA advertising rules).
- Do not use partner logos (Medicare, DVA and so on). Write their names as text.

## Writing rules

- Australian spelling. Plain words.
- No em dashes or en dashes anywhere. Search all copy for dashes before finishing.
- No hype words such as seamless, cutting edge or world class.

## Design rules

- Plenty of white space. Body text at least 18px. Rounded cards.
- Ocean blue for headings and buttons. Sand as an accent only. Light sand and Mist for section backgrounds.
- Soft fade ins on scroll, once only, and none when the visitor has reduced motion turned on.
- No sliders, no counters, no parallax.
- On phones, a "Call" button is fixed to the bottom of the screen.

## Homepage order

1. Header: logo, menu (Services, About, Claims and rebates, FAQs, Contact), "Call (03) 5672 2309" button
2. Hero: H1 "Podiatry care in Wonthaggi since 2007", a line from the current intro, Call and Contact buttons, photo
3. Services: eight cards with line icon, name, one sentence and link
4. Meet the team: short intro and link to the team section of About
5. Claims and rebates: five names as text badges, link to the claims page
6. Hours, address and Google Maps embed (no API key)
7. Three FAQs in an accordion, link to all FAQs
8. Footer: white logo on Ocean blue, address, phone, hours, Facebook, page links, copyright 2026

## Preview mode (remove all of this at launch)

- `<meta name="robots" content="noindex, nofollow">` on every page (`src/layouts/Layout.astro`).
- `public/robots.txt` disallows everything. Note: on GitHub Pages a project site's robots.txt is not at the domain root, so the meta tag is what actually keeps it out of search.
- Banner on every page: "Preview only. Not the live website."
- Password screen (`src/components/PasswordGate.astro`), password `bcp-preview`, remembered for the browser session, switched off on localhost. It only stops casual viewers; it is not secure.
- Contact form uses Formspree with a placeholder form ID in `src/data/site.ts`.

## Quality checks before finishing any change

Check at 375px and 1280px wide: no horizontal scrolling, one H1 per page, headings in order, alt text on every image,
every tel link works, and `npm run build` has no errors.
