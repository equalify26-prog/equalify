import { useLanguage } from '../context/LanguageContext'
import './pages.css'

export default function ResourcesPage() {
  const { t } = useLanguage()
  const items = [
    t('pages.resourcesPublications'),
    t('pages.resourcesPolicy'),
    t('pages.resourcesTraining'),
    t('pages.resourcesMedia'),
  ]
  return (
    <div className="page">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">{t('pages.resourcesTitle')}</h1>
          <p className="page__hero-subtitle">{t('pages.resourcesHeroSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <p className="page__intro">
          We share knowledge, tools, and research to support practitioners, policymakers, and communities working toward equality and inclusion.
        </p>
        <p className="page__heading" style={{ marginBottom: '0.5rem' }}>{t('pages.hereYouCanFind')}</p>
        <ul className="page__list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
