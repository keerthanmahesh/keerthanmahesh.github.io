import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ResearchList } from '../components/ResearchList'
import { Contact } from '../components/Contact'
import { featuredProjects } from '../data/projects'
import { featuredPublications } from '../data/publications'

export function Home() {
  return (
    <>
      <Hero />
      <About />

      <section id="projects" className="py-12">
        <SectionHeading title="projects" />
        <ProjectsGrid projects={featuredProjects()} />
        <Link to="/projects" className="inline-block mt-6 font-mono text-sm text-green hover:underline">
          all projects →
        </Link>
      </section>

      <section id="research" className="py-12">
        <SectionHeading title="research" />
        <ResearchList publications={featuredPublications()} />
        <Link to="/research" className="inline-block mt-6 font-mono text-sm text-green hover:underline">
          all research →
        </Link>
      </section>

      <Contact />
    </>
  )
}
