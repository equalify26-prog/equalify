import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './pages.css'

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
        <Link to="/contacts" className="page__cta">
          {t('pages.exploreProjects')}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
