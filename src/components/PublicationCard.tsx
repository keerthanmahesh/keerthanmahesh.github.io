import type { Publication } from '../data/publications'

export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="border-l-2 border-border pl-4 py-3 hover:border-accent transition-colors">
      <h3 className="font-mono font-semibold text-fg">{pub.title}</h3>
      <p className="text-muted text-sm mt-1">
        {pub.authors}
        {pub.venue && <> · <span className="italic">{pub.venue}</span></>}
        {pub.year && <> · {pub.year}</>}
      </p>
      {pub.summary && <p className="text-fg/80 text-sm mt-2 leading-relaxed">{pub.summary}</p>}
      <div className="flex gap-4 mt-2 font-mono text-xs">
        {pub.links?.pdf && <a href={pub.links.pdf} className="text-green hover:underline">pdf →</a>}
        {pub.links?.doi && <a href={pub.links.doi} className="text-green hover:underline">doi →</a>}
        {pub.links?.arxiv && <a href={pub.links.arxiv} className="text-green hover:underline">arxiv →</a>}
      </div>
    </article>
  )
}
