import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="py-16">
      <p className="font-mono text-green text-sm mb-3">$ whoami</p>
      <h1 className="text-4xl md:text-5xl font-bold text-fg">{profile.name}</h1>
      <p className="font-mono text-muted mt-4 text-lg">{profile.tagline}</p>
      <div className="flex gap-4 mt-8 font-mono text-sm">
        <a href="#projects" className="bg-green text-bg px-4 py-2 rounded-md font-semibold hover:opacity-90">View Work</a>
        <a href={profile.resumePath} target="_blank" rel="noopener noreferrer" className="border border-border px-4 py-2 rounded-md text-fg hover:border-accent">Résumé</a>
      </div>
    </section>
  )
}
