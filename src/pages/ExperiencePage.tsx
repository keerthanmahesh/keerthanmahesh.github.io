import { SectionHeading } from '../components/SectionHeading'
import { ExperienceList } from '../components/ExperienceList'
import { experience } from '../data/experience'

export function ExperiencePage() {
  return (
    <section className="py-8">
      <SectionHeading title="experience" />
      <ExperienceList items={experience} />
    </section>
  )
}
