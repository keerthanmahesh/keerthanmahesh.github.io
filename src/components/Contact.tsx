import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="py-12">
      <SectionHeading title="contact" />
      <p className="text-fg/90 mb-6">Open to opportunities and research collaboration.</p>
      <div className="flex flex-wrap gap-5 font-mono text-sm">
        <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub →</a>
        <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LinkedIn →</a>
        <a href={`mailto:${profile.socials.email}`} className="text-accent hover:underline">Email →</a>
      </div>
    </section>
  )
}
