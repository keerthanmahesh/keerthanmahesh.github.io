import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="py-12">
      <SectionHeading title="about" />
      <p className="text-fg/90 leading-relaxed max-w-2xl">{profile.bio}</p>
    </section>
  )
}
