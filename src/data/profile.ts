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
  bio: 'I am a Senior Software Engineer at Wells Fargo, building enterprise-grade compliance monitoring and risk management systems. Previously, I was the Backend Lead at KonfigAI, where I architected the core microservice of a production no-code platform and built agentic AI systems — including a multi-agent orchestrator that generates entire applications from a single prompt. My work spans distributed backend systems, JVM performance, and LLM tooling (MCP, RAG, multi-agent workflows). I hold a Master of Engineering in Software Engineering from the University of Maryland and a Bachelor of Engineering from BITS Pilani, and I care about reliable, well-architected systems and applied AI.',
  resumePath: '/resume.pdf',
  socials: {
    github: 'https://github.com/keerthanmahesh',
    linkedin: 'https://www.linkedin.com/in/keerthanmahesh',
    email: 'keerthan02@gmail.com',
  },
}
