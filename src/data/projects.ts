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
    id: 'konfig-agentic-builder',
    title: 'KonfigAI Agentic App Builder',
    description:
      'A multi-agent system on a production no-code platform that generates entire applications from a single prompt — an LLM orchestrator coordinating 18 specialized sub-agents for end-to-end workflow automation.',
    tech: ['Python', 'LangGraph', 'Multi-Agent Systems', 'LLM Orchestration'],
    affiliation: 'konfigai-lead',
    date: '2023–2026',
    featured: true,
  },
  {
    id: 'konfig-mcp-server',
    title: 'Konfig MCP Tool Server',
    description:
      'A companion MCP tool server (FastMCP over SSE) exposing 100+ Konfig operations to LLMs, with tenacity-based retries, async connection pooling, per-request header forwarding, token-optimized response encoding, and integration across 7 LLM providers.',
    tech: ['Python', 'FastMCP', 'SSE', 'Async', 'MCP'],
    affiliation: 'konfigai-lead',
    date: '2024',
    featured: true,
  },
  {
    id: 'resume-intelligence',
    title: 'Resume Intelligence (RAG)',
    description:
      'An end-to-end RAG pipeline for Job-Description ↔ Resume matching: document ingestion (PDF/DOCX parsing) → semantic chunking → embedding generation (text-embedding-3-large) → HNSW-based Approximate Nearest Neighbors (ANN) retrieval over a Weaviate vector store → cross-encoder reranking → LLM-driven scoring, gap analysis, and tailoring recommendations using FastAPI.',
    tech: ['Python', 'FastAPI', 'RAG', 'Weaviate', 'Embeddings', 'Reranking'],
    date: '2024',
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
    },
    date: '2026',
    featured: true,
  },
  {
    id: 'ai-mr-reviewer',
    title: 'AI Merge-Request Reviewer',
    description:
      'A standalone AI agent that reviews merge requests, suggests enhancements, remediates SonarQube issues, resolves build failures, and analyzes Trivy vulnerability scan results — improving code-quality and security-review efficiency.',
    tech: ['Python', 'LLM Agents', 'CI/CD', 'SonarQube', 'Trivy'],
    affiliation: 'konfigai-lead',
    date: '2024',
    featured: false,
  },
  {
    id: 'k8s-entity-visualizer',
    title: 'Kubernetes Entity Visualizer',
    description:
      'A full-stack progressive web app (built during a JP Morgan internship) that visualizes relationships between entities in a Kubernetes cluster using D3 graph visualization.',
    tech: ['React', 'Go', 'Kubernetes', 'D3'],
    affiliation: 'jpmc-intern',
    date: '2019',
    featured: false,
  },
]

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured)

