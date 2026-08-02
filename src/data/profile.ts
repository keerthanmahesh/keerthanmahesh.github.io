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
  tagline: 'Senior Software Engineer · Systems Architecture & Agentic AI',
  bio: 'I am a Senior Software Engineer at Wells Fargo, architecting scalable Risk & Governance platforms. Previously, I was the Backend Lead Engineer at KonfigAI, where I architected the core microservice of a production no-code platform and built agentic AI systems — including a multi-agent orchestrator pairing an LLM orchestrator with 18 specialized sub-agents. My work spans distributed backend systems, JVM performance tuning, and LLM tooling (MCP, RAG, multi-agent workflows). I hold a Master of Engineering in Software Engineering from the University of Maryland, College Park and a Bachelor of Engineering from BITS Pilani.',
  resumePath: '/resume.pdf',
  socials: {
    github: 'https://github.com/keerthanmahesh',
    linkedin: 'https://www.linkedin.com/in/keerthan-mahesh',
    email: 'keerthan02@gmail.com',
  },
}

