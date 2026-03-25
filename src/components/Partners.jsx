import { useLanguage } from '../context/LanguageContext'
import './Partners.css'

export default function Partners() {
  const { t } = useLanguage()
  return (
    <section className="partners">
      <div className="partners__inner">
        <h2 className="partners__title">{t('partners.title')}</h2>
        {/* Empty for now – add partner logos/links later */}
      </div>
    </section>
  )
}
