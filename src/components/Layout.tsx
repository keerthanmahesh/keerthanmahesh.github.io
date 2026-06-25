import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from './Footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-10 bg-bg/90 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-sm">
          <Link to="/" className="text-accent font-bold">~/keerthan</Link>
          <div className="flex gap-5 text-muted">
            <Link to="/experience" className="hover:text-fg">experience</Link>
            <Link to="/projects" className="hover:text-fg">projects</Link>
            <Link to="/research" className="hover:text-fg">research</Link>
            <a href="/#contact" className="hover:text-fg">contact</a>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">{children}</main>
      <Footer />
    </div>
  )
}
