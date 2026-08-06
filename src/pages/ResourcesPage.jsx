import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { RESOURCES, RESOURCE_CATEGORIES } from '../data/resources'
import './pages.css'

export default function ResourcesPage() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('All')
  const navigate = useNavigate()

  const filteredResources = RESOURCES.filter(
    (resource) => activeCategory === 'All' || resource.category === activeCategory
  )

  return (
    <div className="page">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">{t('pages.resourcesTitle')}</h1>
          <p className="page__hero-subtitle">{t('pages.resourcesHeroSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <div className="resources__filters">
          {RESOURCE_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`resources__filter${activeCategory === category ? ' resources__filter--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="resources__grid">
          {filteredResources.map((resource) => (
            <article
              key={resource.id}
              className="resource__card"
              role="button"
              tabIndex={0}
              onClick={(event) => {
                if (event.target.closest('a')) return
                navigate(`/resources/${resource.id}`)
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') navigate(`/resources/${resource.id}`)
              }}
            >
              <div className="resource__card-accent" aria-hidden="true" />

              <div className="resource__card-header">
                <span className="resource__category">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  {resource.category}
                </span>
                <span className="resource__year">{resource.year}</span>
              </div>

              <div className="resource__card-body">
                <div className="resource__logo">
                  <img src={resource.logo} alt="" className="resource__logo-img" />
                </div>
                <div className="resource__content">
                  <h3 className="resource__title">{resource.title}</h3>
                  <p className="resource__desc">{resource.description}</p>
                </div>
              </div>

              <div className="resource__meta">
                <span className="resource__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {resource.organization}
                </span>
                {resource.author && (
                  <span className="resource__meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                      <path d="M4 20v-1c0-2.21 1.79-4 4-4h8c2.21 0 4 1.79 4 4v1" />
                    </svg>
                    {resource.author}
                  </span>
                )}
                <span className="resource__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  {resource.language}
                </span>
                <span className="resource__meta-item">{resource.pages} pages</span>
              </div>

              <div className="resource__actions">
                <div className="resource__actions-primary">
                  <a href={resource.pdfUrl} download className="resource__btn resource__btn--download">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download PDF
                  </a>
                  <a href={resource.pdfUrl} target="_blank" rel="noopener noreferrer" className="resource__btn resource__btn--view">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    View
                  </a>
                </div>
                <Link to={`/resources/${resource.id}`} className="resource__details">
                  Details
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
