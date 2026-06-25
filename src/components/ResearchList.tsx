import type { Publication } from '../data/publications'
import { PublicationCard } from './PublicationCard'

export function ResearchList({ publications }: { publications: Publication[] }) {
  return (
    <div className="flex flex-col gap-2">
      {publications.map((p) => (
        <PublicationCard key={p.id} pub={p} />
      ))}
    </div>
  )
}
