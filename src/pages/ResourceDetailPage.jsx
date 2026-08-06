import { useParams, Link } from 'react-router-dom'
import { RESOURCES } from '../data/resources'
import './pages.css'

export default function ResourceDetailPage() {
  const { resourceId } = useParams()
  const resource = RESOURCES.find((item) => item.id === resourceId)

  if (!resource) {
    return (
      <div className="page">
        <div className="page__container">
          <p>Resource not found</p>
          <Link to="/resources" className="page__cta">Back to Resources</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page__container">
        <div className="resource-detail__page-header page__hero">
          <div className="page__hero-content">
            <div className="resource-detail__page-header-inner">
            <div className="resource-detail__page-header-main">
              <div className="resource-detail__page-header-top">
                <Link to="/resources" className="resource__category resource__category--large resource__category--link">Resources</Link>
              </div>
              <h1 className="resource-detail__page-title">{resource.title}</h1>
              <div className="resource__meta resource-detail__page-meta">
                <span className="resource__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="10" cy="7" r="4" />
                    <path d="M20 8v1a3 3 0 0 1-3 3H14" />
                  </svg>
                  {resource.organization}
                </span>
                <span className="resource__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M2.5 12H21.5" />
                    <path d="M12 2.5C15.5 6 15.5 18 12 21.5C8.5 18 8.5 6 12 2.5Z" />
                    <path d="M5.5 6.5C8.7 9.7 15.3 9.7 18.5 6.5" />
                    <path d="M5.5 17.5C8.7 14.3 15.3 14.3 18.5 17.5" />
                  </svg>
                  {resource.language}
                </span>
                <span className="resource__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M4 4h16v16H4z" />
                    <path d="M8 4v16" />
                  </svg>
                  {resource.pages} pages
                </span>
                <span className="resource__meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <path d="M3 10h18" />
                  </svg>
                  {resource.year}
                </span>
              </div>
            </div>
            <div className="resource-detail__page-logo-card">
              <img src={resource.logo} alt="" className="resource-detail__logo-img" />
            </div>
          </div>
          </div>
        </div>

        <div className="resource-detail__hero">
          <div className="resource-detail__overview">
            <h3 className="resource__subheading">Overview</h3>
            <p className="resource-detail__overview-text">{resource.description}</p>

            <div className="resource-detail__who">
              <h4 className="resource__subheading">Who Is This For</h4>
              <p className="resource-detail__text">
                This report contributes to the development of practice-based tools that strengthen life skills and support inclusive, gender-responsive youth work with young migrant women across European contexts.
              </p>
            </div>

            <div className="resource-detail__highlights">
              <h4 className="resource__subheading">Key Highlights</h4>
              <ul className="resource-detail__highlight-list">
                <li>Survey of 105 young migrant women conducted across Italy, Poland, and Denmark</li>
                <li>15 in-depth interviews with youth workers, community leaders, and migrant women themselves</li>
                <li>Diverse participants: community coordinators, educators, caseworkers, and NGO founders</li>
                <li>Focus on young migrant women aged 18–30 navigating integration, employment, and belonging</li>
                <li>Each country brought a distinct barrier profile — bureaucratic, legal, and social</li>
                <li>Data collected between May – July 2026</li>
                <li>Sessions and surveys focused on real experiences, uncovering both visible and invisible barriers to integration</li>
              </ul>
            </div>
          </div>
          <aside className="resource-detail__info-card">
            <div className="resource-detail__info-card-top">
              <span className="resource-detail__info-card-label">Access the resource</span>
              <h2 className="resource-detail__info-card-title">{resource.title}</h2>
            </div>
            <div className="resource-detail__actions resource-detail__actions--stacked">
              <a href={resource.pdfUrl} download className="resource__btn resource__btn--download">
                Download PDF
              </a>
              <a href={resource.pdfUrl} target="_blank" rel="noopener noreferrer" className="resource__btn resource__btn--view">
                View Online
              </a>
            </div>
            <div className="resource-detail__info-meta">
              <h3 className="resource__section-heading">Details</h3>
              <div className="resource-detail__info-row">
                <span>Type</span>
                <strong>{resource.category}</strong>
              </div>
              <div className="resource-detail__info-row">
                <span>Year</span>
                <strong>{resource.year}</strong>
              </div>
              {resource.author && (
                <div className="resource-detail__info-row">
                  <span>Author</span>
                  <strong>{resource.author}</strong>
                </div>
              )}
              <div className="resource-detail__info-row">
                <span>Language</span>
                <strong>{resource.language}</strong>
              </div>
              <div className="resource-detail__info-row">
                <span>Pages</span>
                <strong>{resource.pages}</strong>
              </div>
            </div>
          </aside>
        </div>

      </div>
    </div>
  )
}
