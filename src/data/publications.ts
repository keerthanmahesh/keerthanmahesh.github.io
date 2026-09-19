export type Publication = {
  id: string
  title: string
  authors: string
  venue?: string
  year?: number
  links?: { pdf?: string; doi?: string; arxiv?: string; repo?: string; demo?: string }
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
  {
    id: 'nitrogen-tool',
    title: 'Nitrogen Recommendation Tool',
    authors: 'K. Mahesh, Dr. V. Bandaru',
    venue: 'Spatial Modeling & Remote Sensing Lab (SMaRS), University of Maryland',
    year: 2023,
    summary:
      'An end-to-end geospatial decision-support web application for precision agriculture, serving 100+ farmers across Oklahoma and Kansas with React Leaflet mapping, localized soil/weather analytics, and optimized nitrogen application modeling.',
    links: {
      repo: 'https://github.com/smarsGroup/nitrogen-recommendation-tool',
      demo: 'http://nitrogen-recommendation-tool.s3-website-us-east-1.amazonaws.com/',
    },
    featured: true,
  },
  {
    id: 'smarslab-webpage',
    title: 'SMaRS Lab Web Platform',
    authors: 'K. Mahesh, D. Radhakrishna, P. K. V. Meduri, Dr. V. Bandaru',
    venue: 'Spatial Modeling & Remote Sensing Lab (SMaRS), University of Maryland',
    year: 2023,
    summary:
      'The official web platform and research portal for the SMaRS Lab at UMD, presenting agricultural decision-support systems, remote sensing research, lab publications, and geospatial tools.',
    links: {
      repo: 'https://github.com/smarsGroup/smarslab-webpage',
      demo: 'https://www.smarsgroup.org/',
    },
    featured: true,
  },
]

export const featuredPublications = (): Publication[] => publications.filter((p) => p.featured)
