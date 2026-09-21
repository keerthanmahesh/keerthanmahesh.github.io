export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  links?: { repo?: string; demo?: string }
  affiliation?: string
  date?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'resume-intelligence',
    title: 'Resume Intelligence (RAG)',
    description:
      'An end-to-end RAG pipeline for Job-Description ↔ Resume matching: document ingestion (PDF/DOCX parsing) → semantic chunking → embedding generation (text-embedding-3-large) → HNSW-based Approximate Nearest Neighbors (ANN) retrieval over a Weaviate vector store → cross-encoder reranking → LLM-driven scoring, gap analysis, and tailoring recommendations using FastAPI.',
    tech: ['Python', 'FastAPI', 'RAG', 'Weaviate', 'Embeddings', 'Reranking'],
    date: '2026',
    featured: true,
  },
  {
    id: 'remit-ranker',
    title: 'RemitRanker',
    description:
      'A real-time USD → INR remittance intelligence platform aggregating quotes across 10+ fintech apps and global banks. Eliminates hidden FX markups by computing effective exchange rates, regulatory account routing (NRE, NRO, To Others), and ranking providers strictly by net rupee payout delivered.',
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Fintech APIs', 'Edge Caching'],
    links: {
      repo: 'https://github.com/keerthanmahesh/remit-ranker',
      demo: 'https://remit-ranker.vercel.app/',
    },
    date: '2026',
    featured: true,
  },
  {
    id: 'pivot',
    title: 'Pivot',
    description:
      'A real-time cash-drag and Treasury yield optimization platform evaluating idle liquid cash across checking buffers, HYSAs, short-term Treasury bond ETFs (SGOV, USFR, BIL), and direct T-Bills. Models exact federal, state, and local tax-equivalent yields (TEY) to quantify lost yield and automate capital reallocation.',
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Java 21', 'MongoDB'],
    links: {
      demo: 'https://pivot-ui.vercel.app/',
    },
    date: '2026',
    featured: true,
  },
]

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured)

