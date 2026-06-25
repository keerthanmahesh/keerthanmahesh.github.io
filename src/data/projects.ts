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
    id: 'konfig-agentic-builder',
    title: 'KonfigAI Agentic App Builder',
    description:
      'A multi-agent system on a production no-code platform that generates entire applications from a single prompt — an LLM orchestrator coordinating 18 specialized sub-agents for end-to-end workflow automation.',
    tech: ['Python', 'LangGraph', 'Multi-Agent Systems', 'LLM Orchestration'],
    date: '2023–Present',
    featured: true,
  },
  {
    id: 'konfig-mcp-server',
    title: 'Konfig MCP Tool Server',
    description:
      'A companion MCP tool server (FastMCP over SSE) exposing 100+ Konfig operations to LLMs, with tenacity-based retries, async connection pooling, per-request header forwarding, token-optimized response encoding, and integration across 7 LLM providers.',
    tech: ['Python', 'FastMCP', 'SSE', 'Async', 'MCP'],
    date: '2024',
    featured: true,
  },
  {
    id: 'resume-intelligence',
    title: 'Resume Intelligence (RAG)',
    description:
      'An end-to-end Retrieval-Augmented Generation pipeline for job-description ↔ resume matching: PDF/DOCX ingestion, semantic chunking, embedding generation, HNSW approximate-nearest-neighbor retrieval over a Weaviate vector store, cross-encoder reranking, and LLM-driven scoring, gap analysis, and tailoring recommendations.',
    tech: ['Python', 'FastAPI', 'RAG', 'Weaviate', 'Embeddings', 'Reranking'],
    date: '2024',
    featured: true,
  },
  {
    id: 'ai-mr-reviewer',
    title: 'AI Merge-Request Reviewer',
    description:
      'A standalone AI agent that reviews merge requests, suggests enhancements, remediates SonarQube issues, resolves build failures, and analyzes Trivy vulnerability scans — improving code-quality and security-review efficiency.',
    tech: ['Python', 'LLM Agents', 'CI/CD', 'SonarQube', 'Trivy'],
    date: '2024',
    featured: false,
  },
  {
    id: 'nitrogen-tool',
    title: 'Nitrogen Recommendation Tool',
    description:
      'An end-to-end geospatial decision-support web app built at the UMD Spatial Modeling & Remote Sensing Lab, serving 100+ farmers across Oklahoma and Kansas — interactive React Leaflet maps with low-latency, location-based data processing on AWS.',
    tech: ['React', 'Node.js', 'React Leaflet', 'AWS EC2', 'AWS S3'],
    date: '2022–2023',
    featured: false,
  },
  {
    id: 'k8s-entity-visualizer',
    title: 'Kubernetes Entity Visualizer',
    description:
      'A full-stack progressive web app (built during a JP Morgan internship) that visualizes relationships between entities in a Kubernetes cluster with color-coded workload performance and real-time pod/container log streams, cutting debugging time by 25%.',
    tech: ['React', 'Go', 'Kubernetes'],
    date: '2019',
    featured: false,
  },
]

export const featuredProjects = (): Project[] => projects.filter((p) => p.featured)
