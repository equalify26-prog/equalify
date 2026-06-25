import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './pages.css'

const PROJECTS = [
  {
    id: 'herizon',
    name: 'Herizon',
    logo: '/images/herizon-logo.png',
    description: 'Empowering women through leadership development and community engagement programs.',
    status: 'Ongoing',
    program: 'Erasmus+ K210-You',
    duration: '12 month',
    budget: '60 000€',
  },
]

export default function ProjectsPage() {
  const { t } = useLanguage()
  return (
    <div className="page">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">{t('pages.projectsTitle')}</h1>
          <p className="page__hero-subtitle">{t('pages.projectsHeroSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <p className="page__intro">
          Equalify Foundation implements local and international initiatives that promote inclusion, leadership, and participation. Our projects combine education, research, and community action to create measurable impact.
        </p>
        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <div key={project.name} className="project__card">
              <div className="project__header">
                <div className="project__badges">
                  <span className="project__status">{project.status}</span>
                  <span className="project__program">{project.program}</span>
                </div>
                <div className="project__logo">
                  <img src={project.logo} alt={project.name} className="project__logo-img" />
                </div>
              </div>
              <h3 className="project__name">{project.name}</h3>
              <p className="project__desc">{project.description}</p>
              <div className="project__details">
                <div className="project__detail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>{project.duration}</span>
                </div>
                <div className="project__detail">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>{project.budget}</span>
                </div>
              </div>
              <Link to={`/projects/${project.id}`} className="project__learn-more">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
