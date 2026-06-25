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
