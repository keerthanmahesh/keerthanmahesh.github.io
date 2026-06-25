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
