import { useParams, Link } from 'react-router-dom'
import './pages.css'

const PROJECTS = {
  herizon: {
    name: 'HERIZON',
    description: 'Herizon empowers young migrant women with the life skills, confidence, and practical tools needed to successfully integrate into education, employment, and community life.',
    logo: '/images/herizon-logo.png',
    duration: '12 month',
    budget: '60 000€',
    partners: '3',
    summary: `Young migrant women often face multiple barriers to education, employment, and active participation in society. Herizon strengthens their essential life skills, confidence, and resilience so they can successfully integrate into their communities and pursue their personal and professional goals.

By developing practical competencies and creating supportive learning environments, the project empowers young migrant women while equipping youth workers and NGOs with innovative, gender-sensitive tools to better support their integration journey.`,
    objectives: [
      'Empower young migrant women through life skills development',
      'Strengthen the capacity of youth workers and NGOs supporting migrant women',
      'Promote social inclusion, gender equality, and active participation',
      'Develop innovative and transferable educational resources and methodologies',
      'Enhance cooperation and knowledge exchange among youth organisations across Europe',
    ],
    deliverables: [
      'Comparative Needs Assessment Report identifying barriers, needs, and opportunities for young migrant women',
      'Herizon Empowerment Labs with practical, non-formal learning activities focused on personal and professional development',
      'Digital Herizon Toolkit featuring interactive exercises, life skills resources, and inspiring participant stories',
      'Personal Action Plans supporting participants in setting and achieving individual goals',
      'Peer Exchange Methodology for youth workers and organisations working with migrant women',
      'Multiplier Events & Sustainability Resources to ensure long-term impact and wider adoption across Europe',
    ],
    beneficiaries: [
      'Young migrant women seeking greater confidence, independence, and opportunities for integration',
      'Youth workers, mentors, and NGO professionals looking for practical, inclusive, and gender-sensitive tools',
      'Youth organisations and civil society organisations aiming to improve support services for migrant women',
      'Local communities and stakeholders working towards greater inclusion, diversity, and social cohesion',
    ],
  },
}

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = PROJECTS[projectId]

  if (!project) {
    return (
      <div className="page">
        <div className="page__container">
          <p>Project not found</p>
          <Link to="/projects" className="page__cta">Back to Projects</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page__container">
        <h1 className="page__title">{project.name}</h1>
        <p className="project-detail__intro">{project.description}</p>
        <div className="project-detail__logo">
          <img src={project.logo} alt={project.name} className="project-detail__logo-img" />
        </div>
        <div className="project-detail__stats">
          <div className="project-detail__stat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <div>
              <span className="project-detail__stat-label">Duration</span>
              <span className="project-detail__stat-value">{project.duration}</span>
            </div>
          </div>
          <div className="project-detail__stat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <div>
              <span className="project-detail__stat-label">Budget</span>
              <span className="project-detail__stat-value">{project.budget}</span>
            </div>
          </div>
          <div className="project-detail__stat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div>
              <span className="project-detail__stat-label">Partners</span>
              <span className="project-detail__stat-value">{project.partners}</span>
            </div>
          </div>
        </div>
        <div className="project-detail__summary">
          <h2 className="project-detail__summary-title">Project Summary</h2>
          <p className="project-detail__summary-text">{project.summary}</p>
        </div>
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Project Deliverables</h2>
          <ul className="project-detail__list">
            {project.deliverables.map((deliverable, index) => (
              <li key={index} className="project-detail__list-item">
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Who Benefits</h2>
          <ul className="project-detail__list">
            {project.beneficiaries.map((beneficiary, index) => (
              <li key={index} className="project-detail__list-item">
                <span>{beneficiary}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/projects" className="page__cta">Back to Projects</Link>
      </div>
    </div>
  )
}
