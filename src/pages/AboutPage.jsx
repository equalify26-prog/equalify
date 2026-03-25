import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './pages.css'

const WHAT_WE_DO_ITEMS = [
  { id: 'education', titleKey: 'pages.whatWeDoEducation', descKey: 'pages.whatWeDoEducationDesc', focusKey: 'pages.whatWeDoEducationFocus', focusItems: ['pages.whatWeDoEducationFocus1', 'pages.whatWeDoEducationFocus2', 'pages.whatWeDoEducationFocus3', 'pages.whatWeDoEducationFocus4'] },
  { id: 'youthWork', titleKey: 'pages.whatWeDoYouthWork', descKey: 'pages.whatWeDoYouthWorkDesc', supportKey: 'pages.whatWeDoYouthWorkSupport', supportItems: ['pages.whatWeDoYouthWorkSupport1', 'pages.whatWeDoYouthWorkSupport2', 'pages.whatWeDoYouthWorkSupport3', 'pages.whatWeDoYouthWorkSupport4'] },
  { id: 'research', titleKey: 'pages.whatWeDoResearch', descKey: 'pages.whatWeDoResearchDesc', workKey: 'pages.whatWeDoResearchWork', workItems: ['pages.whatWeDoResearchWork1', 'pages.whatWeDoResearchWork2', 'pages.whatWeDoResearchWork3', 'pages.whatWeDoResearchWork4'] },
  { id: 'community', titleKey: 'pages.whatWeDoCommunity', descKey: 'pages.whatWeDoCommunityDesc' },
  { id: 'humanRights', titleKey: 'pages.whatWeDoHumanRights', descKey: 'pages.whatWeDoHumanRightsDesc' },
  { id: 'networking', titleKey: 'pages.whatWeDoNetworking', descKey: 'pages.whatWeDoNetworkingDesc' },
  { id: 'innovation', titleKey: 'pages.whatWeDoInnovation', descKey: 'pages.whatWeDoInnovationDesc' },
  { id: 'support', titleKey: 'pages.whatWeDoSupport', descKey: 'pages.whatWeDoSupportDesc' },
]

export default function AboutPage() {
  const { t } = useLanguage()
  const valueBoxesRef = useRef([])
  const [expanded, setExpanded] = useState(null)
  const [visibleItems, setVisibleItems] = useState(new Set())
  const accordionItemsRef = useRef([])

  const toggleAccordionItem = (id) => {
    const itemIndex = WHAT_WE_DO_ITEMS.findIndex((i) => i.id === id)
    const item = accordionItemsRef.current[itemIndex]
    setVisibleItems((prev) => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
    if (item) item.classList.add('page__accordion-item--visible')
    setExpanded((prev) => (prev === id ? null : id))
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('page__value-box--visible')
        } else {
          entry.target.classList.remove('page__value-box--visible')
        }
      })
    }, observerOptions)

    valueBoxesRef.current.forEach((box) => {
      if (box) {
        observer.observe(box)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('page__accordion-item--visible')
          const index = accordionItemsRef.current.indexOf(entry.target)
          if (index !== -1) {
            setVisibleItems((prev) => {
              const next = new Set(prev)
              next.add(WHAT_WE_DO_ITEMS[index].id)
              return next
            })
            observer.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)
    accordionItemsRef.current.forEach((el) => {
      if (el && !el.classList.contains('page__accordion-item--visible')) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">{t('pages.aboutTitle')}</h1>
          <p className="page__hero-subtitle">{t('pages.aboutHeroSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <section className="page__section page__section--with-image">
          <div className="page__section-image page__section-image--left">
            <img src="/images/about%20us%201.jpg" alt="Community collaboration" />
          </div>
          <div className="page__section-content">
            <h2 className="page__heading">{t('pages.whoWeAre')}</h2>
            <p className="page__paragraph">
              Equalify Foundation is a non-profit organisation working to advance equality, participation, and social justice. We operate at the intersection of youth empowerment, migration, human rights, and community development.
            </p>
            <p className="page__paragraph">
              Our work is rooted in cooperation with communities. We design initiatives together with those who experience barriers, ensuring our actions respond to real needs and produce sustainable impact.
            </p>
          </div>
        </section>

        <section className="page__section page__section--with-image">
          <div className="page__section-content">
            <h2 className="page__heading">{t('pages.mission')}</h2>
            <p className="page__paragraph">
              Our mission is to empower marginalized communities, especially youth, migrants, and underrepresented groups, by promoting inclusion, equality, and social justice. We work to dismantle systemic obstacles, expand access to opportunities, and strengthen active citizenship through dialogue, education, and innovation.
            </p>
          </div>
          <div className="page__section-image page__section-image--right">
            <img src="/images/landing-about%20us.jpg" alt="Community empowerment" />
          </div>
        </section>

        <section className="page__section page__section--with-image">
          <div className="page__section-image page__section-image--left">
            <img src="/images/about%20us%202.jpg" alt="Inclusive participation" />
          </div>
          <div className="page__section-content">
            <h2 className="page__heading">{t('pages.vision')}</h2>
            <p className="page__paragraph">
              We envision societies where every individual can participate fully and with dignity, where diversity is valued as a strength, and where cooperation across differences creates fair and sustainable futures.
            </p>
          </div>
        </section>

        <section className="page__section page__section--centered">
          <h2 className="page__heading page__heading--centered">{t('pages.ourValues')}</h2>
          <div className="page__values-chain">
            {[
              { title: 'Inclusion', desc: 'Everyone deserves access, voice, and opportunity.' },
              { title: 'Diversity', desc: 'Different experiences enrich societies.' },
              { title: 'Social Justice', desc: 'Inequality must be challenged at its roots.' },
              { title: 'Human Dignity', desc: "Every person's worth must be respected and protected." },
              { title: 'Solidarity', desc: 'Collective action creates lasting change.' },
              { title: 'Active Citizenship', desc: 'People should shape the communities they live in.' },
            ].map((value, i) => (
              <div
                key={value.title}
                className="page__value-circle-wrap"
                style={{ zIndex: 6 - i, marginLeft: i === 0 ? 0 : undefined }}
              >
                <div
                  ref={(el) => (valueBoxesRef.current[i] = el)}
                  className="page__value-circle"
                  style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                >
                  <span className="page__value-circle-inner">
                    <span className="page__value-circle-content">
                      <span className="page__value-circle-title">{value.title}</span>
                      <span className="page__value-circle-desc">{value.desc}</span>
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="what-we-do" className="page__section page__section--centered">
          <h2 className="page__heading page__heading--centered">{t('pages.whatWeDoTitle')}</h2>
          <div className="page__accordion">
            {WHAT_WE_DO_ITEMS.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  accordionItemsRef.current[index] = el
                  if (el && visibleItems.has(item.id)) el.classList.add('page__accordion-item--visible')
                }}
                className={`page__accordion-item ${visibleItems.has(item.id) ? 'page__accordion-item--visible' : ''} ${expanded === item.id ? 'page__accordion-item--expanded' : ''}`}
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <button
                  className="page__accordion-header"
                  onClick={() => toggleAccordionItem(item.id)}
                  aria-expanded={expanded === item.id}
                >
                  <span className="page__accordion-title">{t(item.titleKey)}</span>
                  <span className="page__accordion-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {expanded === item.id && (
                  <div className="page__accordion-content">
                    <p className="page__paragraph">{t(item.descKey)}</p>
                    {item.focusKey && (
                      <>
                        <p className="page__subheading">{t(item.focusKey)}</p>
                        <ul className="page__list">
                          {item.focusItems?.map((key) => <li key={key}>{t(key)}</li>)}
                        </ul>
                      </>
                    )}
                    {item.supportKey && (
                      <>
                        <p className="page__subheading">{t(item.supportKey)}</p>
                        <ul className="page__list">
                          {item.supportItems?.map((key) => <li key={key}>{t(key)}</li>)}
                        </ul>
                      </>
                    )}
                    {item.workKey && (
                      <>
                        <p className="page__subheading">{t(item.workKey)}</p>
                        <ul className="page__list">
                          {item.workItems?.map((key) => <li key={key}>{t(key)}</li>)}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
