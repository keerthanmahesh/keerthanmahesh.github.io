import type { Project } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
