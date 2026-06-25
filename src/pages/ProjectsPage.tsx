import { SectionHeading } from '../components/SectionHeading'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <section className="py-8">
      <SectionHeading title="projects" />
      <ProjectsGrid projects={projects} />
    </section>
  )
}
