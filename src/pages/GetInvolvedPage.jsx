import { useLanguage } from '../context/LanguageContext'
import './pages.css'

export default function GetInvolvedPage() {
  const { t } = useLanguage()
  const options = [
    { titleKey: 'pages.volunteer', descKey: 'pages.volunteerDesc' },
    { titleKey: 'pages.partner', descKey: 'pages.partnerDesc' },
    { titleKey: 'pages.joinProgramme', descKey: 'pages.joinProgrammeDesc' },
    { titleKey: 'pages.forYouthWorkers', descKey: 'pages.forYouthWorkersDesc' },
  ]
  return (
    <div className="page">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">{t('pages.getInvolvedTitle')}</h1>
          <p className="page__hero-subtitle">{t('pages.getInvolvedHeroSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <div className="page__cards page__cards--two">
          {options.map((opt) => (
            <article key={opt.titleKey} className="page__card">
              <h3>{t(opt.titleKey)}</h3>
              <p>{t(opt.descKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
