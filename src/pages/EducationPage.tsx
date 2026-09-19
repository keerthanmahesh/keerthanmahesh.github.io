import { SectionHeading } from '../components/SectionHeading'
import { EducationList } from '../components/EducationList'
import { education } from '../data/education'

export function EducationPage() {
  return (
    <section className="py-8">
      <SectionHeading title="education" />
      <EducationList items={education} />
    </section>
  )
}
