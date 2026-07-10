export type Experience = {
  id: string
  company: string
  role: string
  location: string
  start: string
  end: string
  url?: string
  highlights: string[]
  featured?: boolean
}

export const experience: Experience[] = [
  {
    id: 'wells-fargo-sse',
    company: 'Wells Fargo',
    role: 'Senior Software Engineer',
    location: 'Charlotte, NC',
    start: 'July 2026',
    end: 'Present',
    highlights: [
      'Leading the architecture and development of an enterprise-grade compliance monitoring web application using Spring Boot and React to automate the scoping, planning, and tracking of Risk Assessable Units (RAUs) against Major Requirements (MREs).',
      'Designed a robust, normalized SQL database schema to model and query complex, multi-tiered relationships between risk categories, compliance frameworks, and organizational units.',
      'Orchestrated CI/CD pipelines and automated deployments using Harness, ensuring secure, high-availability delivery across enterprise environments.',
      'Built interactive React dashboards with automated compliance reporting, enabling risk management and compliance teams to monitor audit readiness in real time.',
    ],
    featured: true,
  },
  {
    id: 'konfigai-lead',
    company: 'KonfigAI',
    role: 'Backend Lead',
    location: 'Charlotte, NC',
    start: 'May 2023',
    end: 'Present',
    highlights: [
      'Sole architect of the core microservice of a production no-code platform; built Agentic AI that generates entire applications from a single prompt via an LLM orchestrator paired with 18 specialized sub-agents.',
      'Designed the companion MCP tool server (FastMCP over SSE) exposing 100+ operations with retries, async connection pooling, and token-optimized encoding across 7 LLM providers.',
      'Tuned the JVM (G1 GC, heap sizing, Java 21 Records & Virtual Threads), cutting memory limits 60% and raising concurrent users 200%.',
      'Built a standalone AI agent that reviews merge requests, remediates SonarQube issues, resolves build failures, and triages Trivy vulnerability scans.',
    ],
    featured: true,
  },
  {
    id: 'umd-smars',
    company: 'UMD — Spatial Modeling & Remote Sensing Lab',
    role: 'Research Assistant',
    location: 'College Park, MD',
    start: 'Aug 2022',
    end: 'May 2023',
    highlights: [
      'Built an end-to-end React/Node.js decision-support tool (Nitrogen Recommendation Tool) serving 100+ farmers across Oklahoma and Kansas.',
      'Integrated geospatial features with React Leaflet for low-latency, location-based analysis, deployed on AWS EC2 with S3 storage.',
    ],
    featured: true,
  },
  {
    id: 'konfigai-swe',
    company: 'KonfigAI',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    start: 'Aug 2020',
    end: 'Aug 2022',
    highlights: [
      'Processed 200,000 complex transactions in under 5 minutes with Spring Batch scheduled operations.',
      'Designed a multi-layer caching strategy (Redis LRU + Caffeine) across MongoDB, MySQL, PostgreSQL, DynamoDB, and SAP HANA connection pools.',
      'Implemented secure auth: Okta, Keycloak, JWT, custom OAuth 2.0 flows, OIDC, RBAC, and OWASP Top 10 controls.',
      'Drove CI/CD and observability with Jenkins, Helm, Rancher, Grafana, OpenTelemetry, and OpenBao.',
    ],
    featured: false,
  },
  {
    id: 'jpmc-intern',
    company: 'JP Morgan Chase & Co.',
    role: 'Software Development Intern',
    location: 'Hyderabad, India',
    start: 'Jul 2019',
    end: 'Dec 2019',
    highlights: [
      'Built a full-stack React + Go progressive web app visualizing relationships between entities in a Kubernetes cluster.',
      'Added real-time pod/container log streaming for troubleshooting, reducing debugging time by 25%.',
    ],
    featured: false,
  },
]

export const featuredExperience = (): Experience[] => experience.filter((e) => e.featured)

export const experienceById = (id: string): Experience | undefined =>
  experience.find((e) => e.id === id)
