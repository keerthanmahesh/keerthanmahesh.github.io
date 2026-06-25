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
  tagline: 'Software Engineer · Systems Architecture & RAG',
  bio: 'Software engineer focused on system design, scalable architecture, and Retrieval-Augmented Generation applications. I build reliable backend systems and explore applied AI research.',
  resumePath: '/resume.pdf',
  socials: {
    github: 'https://github.com/keerthanmahesh',
    linkedin: 'https://www.linkedin.com/in/keerthanmahesh',
    email: 'keerthan.mahesh@konfigai.com',
  },
}
