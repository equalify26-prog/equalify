import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Activities.css'

const ARROW = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const CARDS = [
  {
    titleKey: 'nav.projects',
    descKey: 'activities.projectsDesc',
    href: '/projects',
    image: '/images/activities/projects.jpg',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
      </svg>
    ),
  },
  {
    titleKey: 'nav.newsEvents',
    descKey: 'activities.galleryDesc',
    href: '/news',
    image: '/images/activities/news-events.jpg',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    titleKey: 'nav.resources',
    descKey: 'activities.resourcesDesc',
    href: '/resources',
    image: '/images/activities/resources.jpg',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19a2 2 0 012-2h13M9 7h6" />
      </svg>
    ),
  },
]

export default function Activities() {
  const { t } = useLanguage()
  return (
    <section className="act">
      <div className="act__inner">
        <h2 className="act__title">{t('activities.title')}</h2>
        <span className="act__eq" aria-hidden="true" />
        <div className="act__grid">
          {CARDS.map((card) => (
            <Link key={card.titleKey} to={card.href} className="act__card">
              <img className="act__img" src={card.image} alt="" loading="lazy" />
              <span className="act__chip">{card.icon}</span>
              <div className="act__foot">
                <div>
                  <h3>{t(card.titleKey)}</h3>
                  <p>{t(card.descKey)}</p>
                </div>
                <span className="act__go">{ARROW}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="act__cta">
          <Link to="/news" className="act__btn">
            {t('activities.upcomingActivities')}
            <i>{ARROW}</i>
          </Link>
        </div>
      </div>
    </section>
  )
}
