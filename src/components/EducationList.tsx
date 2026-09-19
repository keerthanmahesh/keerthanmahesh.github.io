import type { Education } from '../data/education'
import { EducationItem } from './EducationItem'

export function EducationList({ items }: { items: Education[] }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((e) => (
        <EducationItem key={e.id} item={e} />
      ))}
    </div>
  )
}
