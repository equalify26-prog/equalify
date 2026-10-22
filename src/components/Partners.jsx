import { useLanguage } from '../context/LanguageContext'
import './Partners.css'

// To add a partner: put its logo in public/images/partners/ and add a line here.
// Optional: add `url: 'https://...'` to make the logo a link.
const PARTNERS = [
  { name: 'ANKI – Associazione Nazionale Kirghizistan Italia', logo: '/images/partners/anki.png' },
  { name: 'DANAKER – Diaspora of Women from Kyrgyzstan in Poland', logo: '/images/partners/danaker.png' },
  { name: 'Ishøj Ung Kultur', logo: '/images/partners/ishoj.png' },
  { name: 'JUBUK', logo: '/images/partners/jubuk.png' },
  { name: 'MAF', logo: '/images/partners/maf.png' },
]

export default function Partners() {
  const { t } = useLanguage()
  return (
    <section className="partners">
      <div className="partners__inner">
        <h2 className="partners__title">{t('partners.title')}</h2>
        <span className="partners__eq" aria-hidden="true" />
        <ul className="partners__list">
          {PARTNERS.map((p) => {
            const img = <img src={p.logo} alt={p.name} title={p.name} loading="lazy" />
            return (
              <li key={p.name} className="partners__item">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="partners__logo">{img}</a>
                ) : (
                  <span className="partners__logo">{img}</span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
