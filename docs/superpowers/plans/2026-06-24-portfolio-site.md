# Portfolio Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a React portfolio site (developer/dark theme) for Keerthan Mahesh and deploy it to GitHub Pages at `https://keerthanmahesh.github.io`.

**Architecture:** React + Vite + TypeScript SPA with React Router. Home is a single-page scroll (hero → about → featured projects → featured research → contact); `/projects` and `/research` are dedicated full-list pages. All content lives in typed data files under `src/data/`. Styling via Tailwind CSS configured for a GitHub-dark palette. Deployed by a GitHub Actions workflow that builds and publishes to GitHub Pages.

**Tech Stack:** React 18, Vite, TypeScript, React Router v6, Tailwind CSS v3, Vitest + React Testing Library, GitHub Actions.

---

## File Structure

```
keerthanmahesh.github.io/
├── .github/workflows/deploy.yml      # CI: build + deploy to Pages
├── index.html                        # Vite entry HTML
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts                    # Vite + Vitest config
├── tailwind.config.js                # dark palette, fonts
├── postcss.config.js
├── public/
│   └── resume.pdf                     # placeholder resume (replaced later)
├── src/
│   ├── main.tsx                       # React entry, Router mount
│   ├── App.tsx                        # Routes
│   ├── index.css                      # Tailwind directives + base styles
│   ├── data/
│   │   ├── profile.ts                 # name, tagline, bio, socials, resume path
│   │   ├── projects.ts                # Project[] + Project type
│   │   └── publications.ts            # Publication[] + Publication type
│   ├── components/
│   │   ├── Layout.tsx                 # nav + footer wrapper
│   │   ├── SectionHeading.tsx         # monospace "// heading"
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── PublicationCard.tsx
│   │   ├── ResearchList.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── pages/
│       ├── Home.tsx                   # assembles home sections
│       ├── ProjectsPage.tsx           # full project list
│       └── ResearchPage.tsx           # full publication list
└── src/**/__tests__/*.test.tsx        # colocated tests
```

**Key decision — content helpers:** `projects.ts` and `publications.ts` each export the typed array plus a `featured*` selector so the home page and the full page never duplicate filter logic (DRY).

---

## Task 1: Scaffold Vite + React + TypeScript project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tsconfig.node.json`, `vite.config.ts`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`

- [ ] **Step 1: Scaffold with Vite**

Run from `~/Projects/keerthanmahesh.github.io`:
```bash
npm create vite@latest . -- --template react-ts
```
If prompted that the directory is not empty, choose **"Ignore files and continue"** (keeps `.git`, `docs/`, `.gitignore`).

- [ ] **Step 2: Install dependencies**

```bash
npm install
```
Expected: `node_modules/` created, no errors.

- [ ] **Step 3: Verify dev server boots**

```bash
npm run dev
```
Expected: Vite prints `Local: http://localhost:5173/`. Stop it with Ctrl+C.

- [ ] **Step 4: Add node_modules and build output to .gitignore**

Append to `.gitignore` (only lines not already present):
```
node_modules/
dist/
*.local
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold Vite React TypeScript project"
```

---

## Task 2: Install and configure Tailwind CSS (dark theme)

**Files:**
- Create: `tailwind.config.js`, `postcss.config.js`
- Modify: `src/index.css`

- [ ] **Step 1: Install Tailwind toolchain**

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```
Expected: `tailwind.config.js` and `postcss.config.js` created.

- [ ] **Step 2: Configure content paths, palette, and fonts**

Replace `tailwind.config.js` with:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d1117',
        panel: '#161b22',
        border: '#21262d',
        fg: '#e6edf3',
        muted: '#8b949e',
        accent: '#58a6ff',
        green: '#3fb950',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace', 'monospace'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 3: Replace `src/index.css` with Tailwind directives + base**

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-bg text-fg font-sans antialiased; }
}
```

- [ ] **Step 4: Verify Tailwind compiles**

Edit `src/App.tsx` temporarily to render `<div className="text-green font-mono">hello</div>`, run `npm run dev`, confirm green monospace text renders. Then revert the temporary edit.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: configure Tailwind with dark developer palette"
```

---

## Task 3: Install React Router and Vitest testing setup

**Files:**
- Modify: `package.json`, `vite.config.ts`
- Create: `src/test/setup.ts`

- [ ] **Step 1: Install runtime and test dependencies**

```bash
npm install react-router-dom
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

- [ ] **Step 2: Configure Vitest in `vite.config.ts`**

Replace `vite.config.ts` with:
```ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
})
```

- [ ] **Step 3: Create test setup file**

Create `src/test/setup.ts`:
```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Add test script to `package.json`**

In the `"scripts"` object add:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 5: Add a smoke test to verify the harness**

Create `src/test/harness.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('test harness', () => {
  it('renders DOM', () => {
    render(<div>harness ok</div>)
    expect(screen.getByText('harness ok')).toBeInTheDocument()
  })
})
```

- [ ] **Step 6: Run tests**

```bash
npm test
```
Expected: 1 passed.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: add React Router and Vitest testing setup"
```

---

## Task 4: Content data files (profile, projects, publications)

**Files:**
- Create: `src/data/profile.ts`, `src/data/projects.ts`, `src/data/publications.ts`
- Test: `src/data/__tests__/data.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/data/__tests__/data.test.ts`:
```ts
import { describe, it, expect } from 'vitest'
import { profile } from '../profile'
import { projects, featuredProjects } from '../projects'
import { publications, featuredPublications } from '../publications'

describe('content data', () => {
  it('profile has required fields', () => {
    expect(profile.name).toBeTruthy()
    expect(profile.tagline).toBeTruthy()
    expect(profile.socials.github).toContain('github.com')
  })

  it('every project has a unique id and tech list', () => {
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(projects.length)
    projects.forEach((p) => expect(Array.isArray(p.tech)).toBe(true))
  })

  it('featuredProjects returns only featured items', () => {
    expect(featuredProjects().every((p) => p.featured)).toBe(true)
  })

  it('featuredPublications returns only featured items', () => {
    expect(featuredPublications().every((p) => p.featured)).toBe(true)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL — cannot resolve `../profile`, `../projects`, `../publications`.

- [ ] **Step 3: Create `src/data/profile.ts`**

```ts
export type Profile = {
  name: string
  tagline: string
  bio: string
  resumePath: string
  socials: {
    github: string
    linkedin: string
    email: string
  }
}

export const profile: Profile = {
  name: 'Keerthan Mahesh',
  tagline: 'Software Engineer · Systems Architecture & RAG',
  bio: 'Software engineer focused on system design, scalable architecture, and Retrieval-Augmented Generation applications. I build reliable backend systems and explore applied AI research.',
  resumePath: '/resume.pdf',
  socials: {
    github: 'https://github.com/keerthanmahesh',
    linkedin: 'https://www.linkedin.com/in/keerthanmahesh',
    email: 'keerthan.mahesh@konfigai.com',
  },
}
```

- [ ] **Step 4: Create `src/data/projects.ts`**

```ts
export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  links?: { repo?: string; demo?: string }
  date?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'This site — a React + Vite portfolio with a developer/dark theme, deployed to GitHub Pages.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    links: { repo: 'https://github.com/keerthanmahesh/keerthanmahesh.github.io' },
    date: '2026',
    featured: true,
  },
  {
    id: 'example-system',
    title: 'Example Distributed System',
    description: 'Placeholder — replace with a real project. Describe the problem, your approach, and the impact.',
    tech: ['Go', 'PostgreSQL', 'Redis'],
    links: {},
    date: '2025',
    featured: true,
  },
]

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured)
```

- [ ] **Step 5: Create `src/data/publications.ts`**

```ts
export type Publication = {
  id: string
  title: string
  authors: string
  venue?: string
  year?: number
  links?: { pdf?: string; doi?: string; arxiv?: string }
  summary?: string
  featured?: boolean
}

export const publications: Publication[] = [
  {
    id: 'example-paper',
    title: 'Placeholder Research Title',
    authors: 'Keerthan Mahesh, et al.',
    venue: 'To be submitted',
    year: 2026,
    links: {},
    summary: 'Placeholder — replace with a real publication or in-progress research. One or two sentences on the contribution.',
    featured: true,
  },
]

export const featuredPublications = (): Publication[] => publications.filter((p) => p.featured)
```

- [ ] **Step 6: Run test to verify it passes**

Run: `npm test`
Expected: all data tests PASS.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add typed content data files for profile, projects, publications"
```

---

## Task 5: SectionHeading and Footer presentational components

**Files:**
- Create: `src/components/SectionHeading.tsx`, `src/components/Footer.tsx`
- Test: `src/components/__tests__/SectionHeading.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/SectionHeading.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SectionHeading } from '../SectionHeading'

describe('SectionHeading', () => {
  it('renders the title with a // prefix', () => {
    render(<SectionHeading title="projects" />)
    expect(screen.getByText(/\/\/ projects/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/components/__tests__/SectionHeading.test.tsx`
Expected: FAIL — cannot resolve `../SectionHeading`.

- [ ] **Step 3: Create `src/components/SectionHeading.tsx`**

```tsx
type Props = { title: string; id?: string }

export function SectionHeading({ title, id }: Props) {
  return (
    <h2 id={id} className="font-mono text-2xl font-bold text-fg mb-8 scroll-mt-24">
      <span className="text-green">//</span> <span className="text-accent">{title}</span>
    </h2>
  )
}
```

- [ ] **Step 4: Create `src/components/Footer.tsx`**

```tsx
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-muted font-mono text-sm">
      © {profile.name} · built with React + Vite
    </footer>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test src/components/__tests__/SectionHeading.test.tsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add SectionHeading and Footer components"
```

---

## Task 6: Layout with sticky navigation

**Files:**
- Create: `src/components/Layout.tsx`
- Test: `src/components/__tests__/Layout.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Layout.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Layout } from '../Layout'

describe('Layout', () => {
  it('renders nav links and children', () => {
    render(
      <MemoryRouter>
        <Layout>
          <p>page body</p>
        </Layout>
      </MemoryRouter>,
    )
    expect(screen.getByText('page body')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /research/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/components/__tests__/Layout.test.tsx`
Expected: FAIL — cannot resolve `../Layout`.

- [ ] **Step 3: Create `src/components/Layout.tsx`**

```tsx
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-10 bg-bg/90 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
          <Link to="/" className="text-accent font-bold">~/keerthan</Link>
          <div className="flex gap-5 text-muted">
            <Link to="/projects" className="hover:text-fg">projects</Link>
            <Link to="/research" className="hover:text-fg">research</Link>
            <a href="/#contact" className="hover:text-fg">contact</a>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">{children}</main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test src/components/__tests__/Layout.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Layout with sticky navigation"
```

---

## Task 7: Hero and About components

**Files:**
- Create: `src/components/Hero.tsx`, `src/components/About.tsx`
- Test: `src/components/__tests__/Hero.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Hero.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '../Hero'
import { profile } from '../../data/profile'

describe('Hero', () => {
  it('renders name and tagline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument()
    expect(screen.getByText(profile.tagline)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/components/__tests__/Hero.test.tsx`
Expected: FAIL — cannot resolve `../Hero`.

- [ ] **Step 3: Create `src/components/Hero.tsx`**

```tsx
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="py-16">
      <p className="font-mono text-green text-sm mb-3">$ whoami</p>
      <h1 className="text-4xl md:text-5xl font-bold text-fg">{profile.name}</h1>
      <p className="font-mono text-muted mt-4 text-lg">{profile.tagline}</p>
      <div className="flex gap-4 mt-8 font-mono text-sm">
        <a href="#projects" className="bg-green text-bg px-4 py-2 rounded-md font-semibold hover:opacity-90">View Work</a>
        <a href={profile.resumePath} className="border border-border px-4 py-2 rounded-md text-fg hover:border-accent">Résumé</a>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create `src/components/About.tsx`**

```tsx
import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="py-12">
      <SectionHeading title="about" />
      <p className="text-fg/90 leading-relaxed max-w-2xl">{profile.bio}</p>
    </section>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test src/components/__tests__/Hero.test.tsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Hero and About components"
```

---

## Task 8: ProjectCard and ProjectsGrid

**Files:**
- Create: `src/components/ProjectCard.tsx`, `src/components/ProjectsGrid.tsx`
- Test: `src/components/__tests__/ProjectsGrid.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/ProjectsGrid.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectsGrid } from '../ProjectsGrid'
import type { Project } from '../../data/projects'

const sample: Project[] = [
  { id: 'a', title: 'Alpha', description: 'desc a', tech: ['Go'] },
  { id: 'b', title: 'Beta', description: 'desc b', tech: ['Rust'] },
]

describe('ProjectsGrid', () => {
  it('renders one card per project', () => {
    render(<ProjectsGrid projects={sample} />)
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.getByText('Go')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/components/__tests__/ProjectsGrid.test.tsx`
Expected: FAIL — cannot resolve `../ProjectsGrid`.

- [ ] **Step 3: Create `src/components/ProjectCard.tsx`**

```tsx
import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-panel border border-border rounded-lg p-5 hover:border-accent transition-colors">
      <div className="flex items-baseline justify-between">
        <h3 className="font-mono font-bold text-fg">{project.title}</h3>
        {project.date && <span className="text-muted text-xs font-mono">{project.date}</span>}
      </div>
      <p className="text-fg/80 text-sm mt-2 leading-relaxed">{project.description}</p>
      <ul className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <li key={t} className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">{t}</li>
        ))}
      </ul>
      <div className="flex gap-4 mt-4 font-mono text-xs">
        {project.links?.repo && <a href={project.links.repo} className="text-green hover:underline">repo →</a>}
        {project.links?.demo && <a href={project.links.demo} className="text-green hover:underline">demo →</a>}
      </div>
    </article>
  )
}
```

- [ ] **Step 4: Create `src/components/ProjectsGrid.tsx`**

```tsx
import type { Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test src/components/__tests__/ProjectsGrid.test.tsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add ProjectCard and ProjectsGrid components"
```

---

## Task 9: PublicationCard and ResearchList

**Files:**
- Create: `src/components/PublicationCard.tsx`, `src/components/ResearchList.tsx`
- Test: `src/components/__tests__/ResearchList.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/ResearchList.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ResearchList } from '../ResearchList'
import type { Publication } from '../../data/publications'

const sample: Publication[] = [
  { id: 'p1', title: 'Paper One', authors: 'A, B', year: 2025 },
  { id: 'p2', title: 'Paper Two', authors: 'C, D', year: 2026 },
]

describe('ResearchList', () => {
  it('renders one entry per publication', () => {
    render(<ResearchList publications={sample} />)
    expect(screen.getByText('Paper One')).toBeInTheDocument()
    expect(screen.getByText('Paper Two')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/components/__tests__/ResearchList.test.tsx`
Expected: FAIL — cannot resolve `../ResearchList`.

- [ ] **Step 3: Create `src/components/PublicationCard.tsx`**

```tsx
import type { Publication } from '../data/publications'

export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="border-l-2 border-border pl-4 py-3 hover:border-accent transition-colors">
      <h3 className="font-mono font-semibold text-fg">{pub.title}</h3>
      <p className="text-muted text-sm mt-1">
        {pub.authors}
        {pub.venue && <> · <span className="italic">{pub.venue}</span></>}
        {pub.year && <> · {pub.year}</>}
      </p>
      {pub.summary && <p className="text-fg/80 text-sm mt-2 leading-relaxed">{pub.summary}</p>}
      <div className="flex gap-4 mt-2 font-mono text-xs">
        {pub.links?.pdf && <a href={pub.links.pdf} className="text-green hover:underline">pdf →</a>}
        {pub.links?.doi && <a href={pub.links.doi} className="text-green hover:underline">doi →</a>}
        {pub.links?.arxiv && <a href={pub.links.arxiv} className="text-green hover:underline">arxiv →</a>}
      </div>
    </article>
  )
}
```

- [ ] **Step 4: Create `src/components/ResearchList.tsx`**

```tsx
import type { Publication } from '../data/publications'
import { PublicationCard } from './PublicationCard'

export function ResearchList({ publications }: { publications: Publication[] }) {
  return (
    <div className="flex flex-col gap-2">
      {publications.map((p) => (
        <PublicationCard key={p.id} pub={p} />
      ))}
    </div>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test src/components/__tests__/ResearchList.test.tsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add PublicationCard and ResearchList components"
```

---

## Task 10: Contact component

**Files:**
- Create: `src/components/Contact.tsx`
- Test: `src/components/__tests__/Contact.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/__tests__/Contact.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Contact } from '../Contact'
import { profile } from '../../data/profile'

describe('Contact', () => {
  it('renders github, linkedin, and email links', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', profile.socials.github)
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', profile.socials.linkedin)
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute('href', `mailto:${profile.socials.email}`)
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/components/__tests__/Contact.test.tsx`
Expected: FAIL — cannot resolve `../Contact`.

- [ ] **Step 3: Create `src/components/Contact.tsx`**

```tsx
import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <SectionHeading title="contact" />
      <p className="text-fg/90 mb-6">Open to opportunities and research collaboration.</p>
      <div className="flex flex-wrap gap-5 font-mono text-sm">
        <a href={profile.socials.github} className="text-accent hover:underline">GitHub →</a>
        <a href={profile.socials.linkedin} className="text-accent hover:underline">LinkedIn →</a>
        <a href={`mailto:${profile.socials.email}`} className="text-accent hover:underline">Email →</a>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test src/components/__tests__/Contact.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Contact component"
```

---

## Task 11: Home page assembling all sections

**Files:**
- Create: `src/pages/Home.tsx`
- Test: `src/pages/__tests__/Home.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/pages/__tests__/Home.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { Home } from '../Home'
import { profile } from '../../data/profile'

describe('Home', () => {
  it('renders hero, section headings, and contact', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument()
    expect(screen.getByText(/\/\/ about/)).toBeInTheDocument()
    expect(screen.getByText(/\/\/ projects/)).toBeInTheDocument()
    expect(screen.getByText(/\/\/ research/)).toBeInTheDocument()
    expect(screen.getByText(/\/\/ contact/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/pages/__tests__/Home.test.tsx`
Expected: FAIL — cannot resolve `../Home`.

- [ ] **Step 3: Create `src/pages/Home.tsx`**

```tsx
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ResearchList } from '../components/ResearchList'
import { Contact } from '../components/Contact'
import { featuredProjects } from '../data/projects'
import { featuredPublications } from '../data/publications'

export function Home() {
  return (
    <>
      <Hero />
      <About />

      <section id="projects" className="py-12">
        <SectionHeading title="projects" />
        <ProjectsGrid projects={featuredProjects()} />
        <Link to="/projects" className="inline-block mt-6 font-mono text-sm text-green hover:underline">
          all projects →
        </Link>
      </section>

      <section id="research" className="py-12">
        <SectionHeading title="research" />
        <ResearchList publications={featuredPublications()} />
        <Link to="/research" className="inline-block mt-6 font-mono text-sm text-green hover:underline">
          all research →
        </Link>
      </section>

      <Contact />
    </>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test src/pages/__tests__/Home.test.tsx`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Home page assembling all sections"
```

---

## Task 12: ProjectsPage and ResearchPage (full lists)

**Files:**
- Create: `src/pages/ProjectsPage.tsx`, `src/pages/ResearchPage.tsx`
- Test: `src/pages/__tests__/FullPages.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/pages/__tests__/FullPages.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectsPage } from '../ProjectsPage'
import { ResearchPage } from '../ResearchPage'
import { projects } from '../../data/projects'
import { publications } from '../../data/publications'

describe('full list pages', () => {
  it('ProjectsPage renders every project', () => {
    render(<ProjectsPage />)
    projects.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument())
  })

  it('ResearchPage renders every publication', () => {
    render(<ResearchPage />)
    publications.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument())
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/pages/__tests__/FullPages.test.tsx`
Expected: FAIL — cannot resolve `../ProjectsPage`.

- [ ] **Step 3: Create `src/pages/ProjectsPage.tsx`**

```tsx
import { SectionHeading } from '../components/SectionHeading'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <section className="py-8">
      <SectionHeading title="projects" />
      <ProjectsGrid projects={projects} />
    </section>
  )
}
```

- [ ] **Step 4: Create `src/pages/ResearchPage.tsx`**

```tsx
import { SectionHeading } from '../components/SectionHeading'
import { ResearchList } from '../components/ResearchList'
import { publications } from '../data/publications'

export function ResearchPage() {
  return (
    <section className="py-8">
      <SectionHeading title="research" />
      <ResearchList publications={publications} />
    </section>
  )
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test src/pages/__tests__/FullPages.test.tsx`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add full ProjectsPage and ResearchPage"
```

---

## Task 13: Wire up routing in App and main

**Files:**
- Modify: `src/App.tsx`, `src/main.tsx`
- Test: `src/__tests__/App.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/__tests__/App.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import { App } from '../App'
import { profile } from '../data/profile'

describe('App routing', () => {
  it('renders Home at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: profile.name })).toBeInTheDocument()
  })

  it('renders ProjectsPage at /projects', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>,
    )
    // SectionHeading "// projects" is present on the projects page
    expect(screen.getByText(/\/\/ projects/)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test src/__tests__/App.test.tsx`
Expected: FAIL — `App` is not an exported named symbol / routes not defined.

- [ ] **Step 3: Rewrite `src/App.tsx`**

```tsx
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResearchPage } from './pages/ResearchPage'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </Layout>
  )
}
```

- [ ] **Step 4: Rewrite `src/main.tsx`**

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

- [ ] **Step 5: Run the full test suite**

Run: `npm test`
Expected: all tests PASS.

- [ ] **Step 6: Verify the build and visually check the dev server**

```bash
npm run build
npm run dev
```
Expected: build succeeds; dev server shows the full site (hero, sections, working nav to /projects and /research). Stop with Ctrl+C.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: wire up routing for home, projects, and research"
```

---

## Task 14: Placeholder resume asset

**Files:**
- Create: `public/resume.pdf`

- [ ] **Step 1: Add a placeholder resume**

Create a minimal placeholder so the Résumé link resolves (replace with your real PDF later):
```bash
printf '%%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 612 792]>>endobj\ntrailer<</Root 1 0 R>>\n%%%%EOF\n' > public/resume.pdf
```

- [ ] **Step 2: Verify it serves**

Run `npm run dev`, click the **Résumé** button, confirm the browser opens `/resume.pdf` without a 404. Stop with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: add placeholder resume asset"
```

---

## Task 15: GitHub Pages deploy workflow + SPA 404 fallback

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `package.json` (add `postbuild` to copy 404.html)

- [ ] **Step 1: Add a postbuild script to copy index.html → 404.html**

In `package.json` `"scripts"`, add:
```json
"postbuild": "cp dist/index.html dist/404.html"
```
This makes deep links like `/projects` resolve on GitHub Pages (it serves `404.html`, which boots the SPA and React Router renders the route).

- [ ] **Step 2: Verify postbuild works**

```bash
npm run build
ls dist/404.html
```
Expected: `dist/404.html` exists.

- [ ] **Step 3: Create `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - run: npm test
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "ci: add GitHub Pages deploy workflow and SPA 404 fallback"
```

---

## Task 16: Publish to GitHub and enable Pages

**Files:** none (remote setup)

- [ ] **Step 1: Create the GitHub repo**

Using the `gh` CLI (preferred):
```bash
gh repo create keerthanmahesh.github.io --public --source=. --remote=origin
```
If `gh` is not authenticated, run `gh auth login` first (suggest the user run `! gh auth login` in the session).

- [ ] **Step 2: Push main**

```bash
git branch -M main
git push -u origin main
```

- [ ] **Step 3: Enable GitHub Pages with the Actions source**

```bash
gh api -X POST repos/keerthanmahesh/keerthanmahesh.github.io/pages -f build_type=workflow || \
gh api -X PUT repos/keerthanmahesh/keerthanmahesh.github.io/pages -f build_type=workflow
```
Or in the browser: repo **Settings → Pages → Source → GitHub Actions**.

- [ ] **Step 4: Watch the deploy**

```bash
gh run watch
```
Expected: build + deploy jobs succeed.

- [ ] **Step 5: Verify the live site**

Open `https://keerthanmahesh.github.io`. Confirm the home page loads, nav works, and visiting `https://keerthanmahesh.github.io/projects` directly resolves (404 fallback working).

---

## Post-Plan: Replacing placeholder content

After the site is live, edit these to make it yours (no code changes needed):
- `src/data/profile.ts` — bio, socials, tagline
- `src/data/projects.ts` — replace the `example-system` entry with real projects
- `src/data/publications.ts` — replace the placeholder with real/in-progress research
- `public/resume.pdf` — drop in your actual resume

Each push to `main` redeploys automatically.
