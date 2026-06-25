# Portfolio Site — Design Spec

**Date:** 2026-06-24
**Status:** Approved (pending GitHub username)

## Goal

A comprehensive personal portfolio website serving four purposes at once:
- Job applications (recruiters, hiring managers)
- EB1A / research credibility (publications, research interests)
- Personal brand
- Project showcase

Hosted on **GitHub Pages** as a user site.

## Visual Direction

**Developer / Dark theme.**
- Dark background in the GitHub-dark family (base `#0d1117`, panel `#161b22`, border `#21262d`).
- Monospace for headings, labels, and accents (JetBrains Mono or SF Mono / `ui-monospace`).
- Clean sans-serif for body copy (system font stack) for readability.
- Terminal-style accents: green (`#3fb950`) and blue (`#58a6ff`).
- Tasteful and professional — terminal-flavored, not a gimmick.

## Tech Stack

- **React + Vite + TypeScript**
- **React Router** for routing
- **Tailwind CSS** for styling (dark theme configured in Tailwind config)
- **Vitest + React Testing Library** for component tests
- Content stored as **typed data files** (no CMS, no markdown pipeline)

## Site Structure (Hybrid)

- `/` — single-page scroll home:
  - Hero (name, tagline, primary CTA, social links)
  - About (short bio)
  - Featured Projects (subset where `featured: true`)
  - Featured Research (subset where `featured: true`)
  - Contact
- `/projects` — full project list
- `/research` — full publications / research list

Sticky top nav links to home sections (anchor scroll) and to `/projects` and `/research`.

## Components

- `Layout` — sticky nav + footer, wraps all routes
- `Hero` — name, tagline, CTAs, social links
- `About` — bio block
- `SectionHeading` — reusable monospace section header (e.g. `// projects`)
- `ProjectCard` / `ProjectsGrid` — renders a project
- `PublicationCard` / `ResearchList` — renders a publication
- `Contact` — GitHub / LinkedIn / email links
- `Footer`

## Content Model

`src/data/projects.ts` — array of:
```ts
type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  links?: { repo?: string; demo?: string };
  date?: string;
  featured?: boolean;
};
```

`src/data/publications.ts` — array of:
```ts
type Publication = {
  id: string;
  title: string;
  authors: string;
  venue?: string;
  year?: number;
  links?: { pdf?: string; doi?: string; arxiv?: string };
  summary?: string;
  featured?: boolean;
};
```

`src/data/profile.ts` — name, tagline, bio, social links, resume path.

Resume PDF lives in `public/resume.pdf` and is linked from the site.

Adding content = editing a typed array. Type errors guard against malformed entries.

## Hosting / Deploy

- **User site:** repo named `<username>.github.io`, served at `https://<username>.github.io` (root path — no Vite `base` override needed).
- **GitHub Actions workflow** (`.github/workflows/deploy.yml`):
  - Triggers on push to `main`
  - Steps: checkout → setup Node → `npm ci` → `npm run build` → upload `dist/` artifact → deploy to GitHub Pages (`actions/deploy-pages`)
- Pages source set to "GitHub Actions" in repo settings.
- SPA routing note: React Router with `BrowserRouter` needs a `404.html` fallback (copy of `index.html`) so deep links like `/projects` resolve on GitHub Pages. Build step copies `index.html` → `404.html`. (Alternatively use `HashRouter`; we go with `BrowserRouter` + 404 fallback for clean URLs.)

## Testing

Vitest + React Testing Library smoke tests:
- App renders without crashing
- Nav contains expected links
- `ProjectsGrid` renders one card per data entry
- `ResearchList` renders one entry per publication
- Featured filters return only `featured: true` items

## Out of Scope (YAGNI)

- Blog / markdown content pipeline (data files are enough for now; can add later)
- CMS or admin UI
- Backend / forms (contact is mailto + social links)
- Dark/light theme toggle (dark only)
- Analytics

## Open Item

- GitHub username (determines repo name `<username>.github.io` and final URL). Everything else is decided.
