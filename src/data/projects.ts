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
  {
    id: 'caliber',
    title: 'Caliber',
    description:
      'An automated recruiter email intelligence and recruitment pipeline platform. Ingests incoming recruiter emails via Gmail API, classifies contract types (C2C, W2, C2H, FTE) using a hybrid regex and multi-tier LLM engine (Ollama & Gemini), and streamlines candidate workflows with 1-click thread-preserving response dispatch and resume attachments.',
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Java 21', 'MongoDB', 'LLMs'],
    links: {
      demo: 'https://caliber-ui.vercel.app/',
    },
    date: '2026',
    featured: true,
  },
  {
    id: 'summa',
    title: 'Summa',
    description:
      'A real-time personal wealth and portfolio intelligence platform aggregating financial accounts across 12,000+ banks and brokerages via Plaid and SnapTrade. Features automated multi-tier valuation engines for real estate and automotive assets, net-worth analytics, and field-level AES-256-GCM encrypted credential storage.',
    tech: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Java 21', 'MongoDB', 'Plaid API'],
    links: {
      demo: 'https://summa-ui.vercel.app/',
    },
    date: '2026',
    featured: true,
  },
]

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured)

