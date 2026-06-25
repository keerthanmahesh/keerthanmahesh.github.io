import { SectionHeading } from '../components/SectionHeading'
import { ResearchList } from '../components/ResearchList'
import { publications } from '../data/publications'

export function ResearchPage() {
  return (
    <section className="py-8">
      <SectionHeading title="research" />
      <ResearchList publications={publications} />
    </section>
  )
}
