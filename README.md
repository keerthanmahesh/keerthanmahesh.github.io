# keerthanmahesh.github.io

Personal portfolio for **Keerthan Mahesh** — software engineer focused on systems architecture and RAG applications.

Live at **https://keerthanmahesh.github.io**

## Stack

- React + Vite + TypeScript
- React Router (`/`, `/projects`, `/research`)
- Tailwind CSS (developer/dark theme)
- Vitest + React Testing Library
- Deployed to GitHub Pages via GitHub Actions

## Develop

```bash
npm install
npm run dev      # local dev server
npm test         # run tests
npm run build    # production build → dist/
```

## Editing content

All content lives in typed data files — no component edits needed:

- `src/data/profile.ts` — name, tagline, bio, social links, resume path
- `src/data/projects.ts` — projects (set `featured: true` to surface on the home page)
- `src/data/publications.ts` — research / publications
- `public/resume.pdf` — your résumé (currently a placeholder)

Push to `main` and the GitHub Actions workflow builds and redeploys automatically.
