import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-panel border border-border rounded-lg p-5 hover:border-accent transition-colors">
      <div className="flex items-baseline justify-between">
        <h3 className="font-mono font-bold text-fg">{project.title}</h3>
        {project.date && <span className="text-muted text-xs font-mono">{project.date}</span>}
      </div>
      <p className="text-fg/80 text-sm mt-2 leading-relaxed">{project.description}</p>
      <ul className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t) => (
          <li key={t} className="font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded">{t}</li>
        ))}
      </ul>
      <div className="flex gap-4 mt-4 font-mono text-xs">
        {project.links?.repo && <a href={project.links.repo} className="text-green hover:underline">repo →</a>}
        {project.links?.demo && <a href={project.links.demo} className="text-green hover:underline">demo →</a>}
      </div>
    </article>
  )
}
