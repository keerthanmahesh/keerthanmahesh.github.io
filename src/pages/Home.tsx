import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectsGrid } from '../components/ProjectsGrid'
import { ExperienceList } from '../components/ExperienceList'
import { ResearchList } from '../components/ResearchList'
import { Contact } from '../components/Contact'
import { featuredProjects } from '../data/projects'
import { featuredExperience } from '../data/experience'
import { featuredPublications } from '../data/publications'

export function Home() {
  return (
    <>
      <Hero />
      <About />

      <section id="experience" className="py-12">
        <SectionHeading title="experience" />
        <ExperienceList items={featuredExperience()} />
        <Link to="/experience" className="inline-block mt-6 font-mono text-sm text-green hover:underline">
          all experience →
        </Link>
      </section>

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
