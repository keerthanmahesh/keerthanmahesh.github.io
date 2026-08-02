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
    start: 'Jun 2026',
    end: 'Present',
    highlights: [
      'Spearheaded the engineering of core Risk & Governance platforms, drove the architecture for building scalable systems to manage complex corporate risk hierarchies, major requirements planning and scoping across Risk/Control Assessable Units.',
      'Architected database schemas and managed database migrations using Liquibase DDL/DML scripts, creating strategic indexes, ensuring seamless data model evolution and data integrity across environments.',
      'Automated CI/CD deployments and observability, orchestrating containerized application delivery via Harness to OpenShift Container Platform (OCP) while leveraging Splunk for centralized logging, real-time alerting, and rapid issue resolution.',
    ],
    featured: true,
  },
  {
    id: 'konfigai-lead',
    company: 'KonfigAI',
    role: 'Backend Lead Engineer',
    location: 'Charlotte, NC',
    start: 'May 2023',
    end: 'May 2026',
    highlights: [
      'Sole architect of the main microservice for KonfigAI, a no-code platform, responsible for the architecture and design of a production-level web application; developed Agentic AI capabilities enabling users to generate entire applications from a single prompt; a multi-agent system pairing an LLM orchestrator with 18 specialized sub-agents for workflow automation.',
      'Designed the companion MCP tool server (FastMCP over SSE) exposing 100+ Konfig operations; with tenacity-based retries, async connection pooling, per-request header forwarding, and token-optimized response encoding; integrated 7 LLM providers.',
      'Optimized JVM performance using GC (G1) tuning, -Xms/-Xmx heap sizing, pause-time targets, heap dump analysis, and Java 21 features (Records, Virtual Threads), reducing application memory limits by 60%; increasing concurrent users by 200%.',
      'Built a standalone AI agent to review merge requests, suggest enhancements, remediate SonarQube issues, resolve build failures, and analyze Trivy vulnerability scan results, improving code quality and security review efficiency.',
      'Developed high-performance, responsive UI using React.js and React Redux, implementing a component-driven architecture using custom hooks and efficient state management. Optimized application delivery through code-splitting and lazy loading.',
    ],
    featured: true,
  },
  {
    id: 'umd-smars',
    company: 'Spatial Modeling and Remote Sensing Lab, University of Maryland',
    role: 'Research Assistant - Advisor: Dr. Varaprasad Bandaru - SMaRS Lab',
    location: 'College Park, MD',
    start: 'Aug 2022',
    end: 'May 2023',
    highlights: [
      'Nitrogen Recommendation Tool: Built an end-to-end React + Node.js decision support web application featuring React Leaflet geospatial mapping that optimized location-based data processing for over 100+ farmers across Oklahoma and Kansas.',
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
      'Implemented and optimized scheduled batch operations using Spring Batch; processed 200,000 complex transactions in under 5 minutes, significantly improving system performance and efficiency.',
      'Designed a multi-layer caching strategy using Redis (LRU cache eviction strategy, custom TTL) for distributed caching and Caffeine for in-memory caching for connection pool managers across MongoDB, MySQL, PostgreSQL, DynamoDB, and SAP HANA, improving latency, throughput, and backend resource utilization.',
      'Implemented secure authentication and authorization using Okta and Keycloak, JWT token validation, custom OAuth 2.0 grant flows - Authorization Code, Implicit, Client Credentials, ROPC - OIDC integration, OWASP Top 10 controls and role-based access control (RBAC) to enhance security for user applications.',
      'Collaborated with DevSecOps team using Jenkins for CI/CD automation, Helm charts for Kubernetes deployments, Rancher for container orchestration, Grafana for log monitoring, GC monitoring, CPU utilization dashboards, OpenTelemetry for observability, and OpenBao for secrets management, improving deployment reliability and operational visibility.',
      'Used JProfiler and Cryostat for JVM profiling, runtime diagnostics, memory leak analysis, and performance monitoring.',
      'Engineered comprehensive testing strategy - unit tests using JUnit and Mockito, embedded database tests, integration tests, and load testing using k6 to validate application reliability, API behavior, and performance under high traffic.',
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
      'Engineered a React + Golang web application that visualizes Kubernetes entity relationships using D3 graph.',
    ],
    featured: false,
  },
]

export const featuredExperience = (): Experience[] => experience.filter((e) => e.featured)

export const experienceById = (id: string): Experience | undefined =>
  experience.find((e) => e.id === id)

