import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-muted font-mono text-sm">
      © {profile.name} · built with React + Vite
    </footer>
  )
}
