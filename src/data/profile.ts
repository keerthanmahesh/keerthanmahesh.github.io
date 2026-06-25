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
  tagline: 'Software Engineer · Systems Architecture & Agentic AI',
  bio: 'I am a software engineer and Backend Lead at KonfigAI, where I architect the core microservice of a production no-code platform and build agentic AI systems — including a multi-agent orchestrator that generates entire applications from a single prompt. My work spans distributed backend systems, JVM performance, and LLM tooling (MCP, RAG, multi-agent workflows). I hold a Master of Engineering in Software Engineering from the University of Maryland and a Bachelor of Engineering from BITS Pilani, and I care about reliable, well-architected systems and applied AI.',
  resumePath: '/resume.pdf',
  socials: {
    github: 'https://github.com/keerthanmahesh',
    linkedin: 'https://www.linkedin.com/in/keerthanmahesh',
    email: 'keerthan02@gmail.com',
  },
}
