import type { Education } from '../data/education'
import { CompanyLogo } from './CompanyLogo'

export function EducationItem({ item }: { item: Education }) {
  return (
    <article id={`edu-${item.id}`} className="border-l-2 border-border pl-4 py-3">
      <div className="flex items-start gap-3.5">
        <CompanyLogo
          company={item.institution}
          id={item.id}
          className="w-10 h-10 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between flex-wrap gap-x-3">
            <h3 className="font-mono font-bold text-fg">
              {item.degree} in {item.field}
            </h3>
            <span className="text-muted text-xs font-mono">
              {item.start} – {item.end}
            </span>
          </div>
          <p className="text-accent font-mono text-sm mt-0.5">{item.institution}</p>
          <p className="text-muted text-xs font-mono mt-0.5">{item.location}</p>
        </div>
      </div>
    </article>
  )
}
