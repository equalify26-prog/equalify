import { useLanguage } from '../context/LanguageContext'
import './pages.css'

export default function NewsPage() {
  const { t } = useLanguage()
  return (
    <div className="page page--news">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">{t('pages.newsTitle')}</h1>
          <p className="page__hero-subtitle">{t('pages.newsHeroSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <div className="page__intro-box">
          <p className="page__intro">{t('pages.newsIntro')}</p>
        </div>
      </div>
    </div>
  )
}
