# Bass Coast Podiatry website

Preview of the refreshed Bass Coast Podiatry website, built with Astro. Read `BRIEF.md` first.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local server at http://localhost:4321/bass-coast-podiatry/ |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Preview the built site |

## Where things are

- `BRIEF.md`: project brief and rules
- `content/INVENTORY.md`: what was pulled from the old site, problems found and every wording change
- `src/data/site.ts`: phone, address, hours, menu, claims and FAQs
- `src/content/services/`: one markdown file per service page
- `src/styles/brand.css`: brand colours, font and radius (from the brand pack)
- `brand/`: the original brand files

Deploys to GitHub Pages from `main` with `.github/workflows/deploy.yml`.
