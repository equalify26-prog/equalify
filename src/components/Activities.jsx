import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Activities.css'

const CARDS = [
  {
    titleKey: 'activities.projectsTitle',
    descKey: 'activities.projectsDesc',
    href: '/projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    image: '/images/projects.jpg',
    cardClassName: '',
  },
  {
    titleKey: 'activities.galleryTitle',
    descKey: 'activities.galleryDesc',
    href: '/news',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
    image: '/images/news-events.jpg',
    cardClassName: 'activities__card--news',
  },
  {
    titleKey: 'activities.resourcesTitle',
    descKey: 'activities.resourcesDesc',
    href: '/resources',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8M8 11h8" />
      </svg>
    ),
    image: '/images/resources.jpg',
    cardClassName: 'activities__card--resources',
  },
]

export default function Activities() {
  const { t } = useLanguage()
  return (
    <section className="activities">
      <div className="activities__inner">
        <h2 className="activities__title">{t('activities.title')}</h2>
        <div className="activities__grid">
          {CARDS.map((card) => (
            <Link
              key={card.titleKey}
              to={card.href}
              className={`activities__card${card.cardClassName ? ` ${card.cardClassName}` : ''}`}
            >
              <div className="activities__card-bg" style={{ backgroundImage: `url(${card.image})` }} />
              <div className="activities__card-overlay" />
              <div className="activities__card-icon">{card.icon}</div>
              <div className="activities__card-body">
                <h3 className="activities__card-title">{t(card.titleKey)}</h3>
                <p className="activities__card-desc">{t(card.descKey)}</p>
                <span className="activities__card-link">
                  {t('activities.learnMore')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/news" className="activities__upcoming">
          {t('activities.upcomingActivities')}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
