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
        <Link to="/resources" className="resource-detail__back">
          ← Back to Resources
        </Link>

        <div className="resource-detail__header">
          <div className="resource-detail__logo">
            <img src={resource.logo} alt="" className="resource-detail__logo-img" />
          </div>
          <div>
            <span className="resource__category resource__category--large">
              {resource.category}
            </span>
            <h1 className="page__title resource-detail__title">{resource.title}</h1>
            <p className="resource-detail__meta-line">
              {resource.organization} · {resource.language} · {resource.pages} pages · {resource.year}
            </p>
          </div>
        </div>

        <div className="resource-detail__content">
          <p>{resource.description}</p>
          <p>
            The report identifies key barriers, needs, and opportunities for young migrant women across partner countries,
            providing evidence-based insights to support youth workers, NGOs, and policymakers in designing more inclusive
            and gender-sensitive integration programmes.
          </p>
        </div>

        <div className="resource-detail__actions">
          <a href={resource.pdfUrl} download className="resource__btn resource__btn--download">
            Download PDF
          </a>
          <a href={resource.pdfUrl} target="_blank" rel="noopener noreferrer" className="resource__btn resource__btn--view">
            View PDF
          </a>
        </div>
      </div>
    </div>
  )
}
