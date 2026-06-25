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
    id: 'depression-semantics-reddit',
    title:
      'Investigating Depression Semantics on Reddit using Machine Learning and Deep Learning Techniques',
    authors: 'S. Agarwal, K. Mahesh, P. Singh, J. Shah, N. Sanjeev',
    summary:
      'Applies machine learning and deep learning techniques to detect and analyze depression-related semantics in Reddit posts.',
    featured: true,
  },
]

export const featuredPublications = (): Publication[] => publications.filter((p) => p.featured)
