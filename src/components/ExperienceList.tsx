import type { Experience } from '../data/experience'
import { ExperienceItem } from './ExperienceItem'

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <div className="flex flex-col gap-5">
      {items.map((e) => (
        <ExperienceItem key={e.id} item={e} />
      ))}
    </div>
  )
}
