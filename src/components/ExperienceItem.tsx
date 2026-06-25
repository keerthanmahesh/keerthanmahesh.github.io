import type { Experience } from '../data/experience'

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <article id={`exp-${item.id}`} className="border-l-2 border-border pl-4 py-3 scroll-mt-24">
      <div className="flex items-baseline justify-between flex-wrap gap-x-3">
        <h3 className="font-mono font-bold text-fg">
          {item.role} <span className="text-accent">@ {item.company}</span>
        </h3>
        <span className="text-muted text-xs font-mono">
          {item.start} – {item.end}
        </span>
      </div>
      <p className="text-muted text-xs font-mono mt-1">{item.location}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {item.highlights.map((h, i) => (
          <li key={i} className="text-fg/80 text-sm leading-relaxed flex gap-2">
            <span className="text-green">▹</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
