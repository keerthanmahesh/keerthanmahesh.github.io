type Props = { title: string }

export function SectionHeading({ title }: Props) {
  return (
    <h2 className="font-mono text-2xl font-bold text-fg mb-8 scroll-mt-24">
      <span className="text-green">//</span> <span className="text-accent">{title}</span>
    </h2>
  )
}
