import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToHash } from './components/ScrollToHash'
import { Home } from './pages/Home'
import { ExperiencePage } from './pages/ExperiencePage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResearchPage } from './pages/ResearchPage'

export function App() {
  return (
    <Layout>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
      </Routes>
    </Layout>
  )
}
