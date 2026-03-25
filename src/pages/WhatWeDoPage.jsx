import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './pages.css'

export default function WhatWeDoPage() {
  const { t } = useLanguage()
  const [expanded, setExpanded] = useState(null)
  const [visibleItems, setVisibleItems] = useState(new Set())
  const accordionItemsRef = useRef([])

  const items = [
    {
      id: 'education',
      titleKey: 'pages.whatWeDoEducation',
      descKey: 'pages.whatWeDoEducationDesc',
      focusKey: 'pages.whatWeDoEducationFocus',
      focusItems: [
        'pages.whatWeDoEducationFocus1',
        'pages.whatWeDoEducationFocus2',
        'pages.whatWeDoEducationFocus3',
        'pages.whatWeDoEducationFocus4',
      ],
    },
    {
      id: 'youthWork',
      titleKey: 'pages.whatWeDoYouthWork',
      descKey: 'pages.whatWeDoYouthWorkDesc',
      supportKey: 'pages.whatWeDoYouthWorkSupport',
      supportItems: [
        'pages.whatWeDoYouthWorkSupport1',
        'pages.whatWeDoYouthWorkSupport2',
        'pages.whatWeDoYouthWorkSupport3',
        'pages.whatWeDoYouthWorkSupport4',
      ],
    },
    {
      id: 'research',
      titleKey: 'pages.whatWeDoResearch',
      descKey: 'pages.whatWeDoResearchDesc',
      workKey: 'pages.whatWeDoResearchWork',
      workItems: [
        'pages.whatWeDoResearchWork1',
        'pages.whatWeDoResearchWork2',
        'pages.whatWeDoResearchWork3',
        'pages.whatWeDoResearchWork4',
      ],
    },
    {
      id: 'community',
      titleKey: 'pages.whatWeDoCommunity',
      descKey: 'pages.whatWeDoCommunityDesc',
    },
    {
      id: 'humanRights',
      titleKey: 'pages.whatWeDoHumanRights',
      descKey: 'pages.whatWeDoHumanRightsDesc',
    },
    {
      id: 'networking',
      titleKey: 'pages.whatWeDoNetworking',
      descKey: 'pages.whatWeDoNetworkingDesc',
    },
    {
      id: 'innovation',
      titleKey: 'pages.whatWeDoInnovation',
      descKey: 'pages.whatWeDoInnovationDesc',
    },
    {
      id: 'support',
      titleKey: 'pages.whatWeDoSupport',
      descKey: 'pages.whatWeDoSupportDesc',
    },
  ]

  const toggleItem = (id) => {
    const itemIndex = items.findIndex(i => i.id === id)
    const item = accordionItemsRef.current[itemIndex]
    
    // Mark this item as visible (permanently)
    setVisibleItems((prev) => {
      const newSet = new Set(prev)
      newSet.add(id)
      return newSet
    })
    
    // Immediately ensure box is visible
    if (item) {
      item.classList.add('page__accordion-item--visible')
    }
    
    setExpanded((prev) => prev === id ? null : id)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Once visible, always keep it visible - never remove the class
          entry.target.classList.add('page__accordion-item--visible')
          // Find which item this is and mark it as visible
          const index = accordionItemsRef.current.indexOf(entry.target)
          if (index !== -1) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev)
              newSet.add(items[index].id)
              return newSet
            })
          }
          // Stop observing this element once it's visible
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    accordionItemsRef.current.forEach((item) => {
      if (item && !item.classList.contains('page__accordion-item--visible')) {
        observer.observe(item)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="page">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">{t('pages.whatWeDoTitle')}</h1>
          <p className="page__hero-subtitle">{t('pages.whatWeDoHeroSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <div className="page__accordion">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              ref={(el) => {
                accordionItemsRef.current[index] = el
                // If this box has been made visible (via scroll or click), ensure it stays visible
                if (el && visibleItems.has(item.id)) {
                  el.classList.add('page__accordion-item--visible')
                }
              }}
              className={`page__accordion-item ${visibleItems.has(item.id) ? 'page__accordion-item--visible' : ''} ${expanded === item.id ? 'page__accordion-item--expanded' : ''}`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <button
                className="page__accordion-header"
                onClick={() => toggleItem(item.id)}
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
                        {item.focusItems?.map((focusKey) => (
                          <li key={focusKey}>{t(focusKey)}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {item.supportKey && (
                    <>
                      <p className="page__subheading">{t(item.supportKey)}</p>
                      <ul className="page__list">
                        {item.supportItems?.map((supportKey) => (
                          <li key={supportKey}>{t(supportKey)}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {item.workKey && (
                    <>
                      <p className="page__subheading">{t(item.workKey)}</p>
                      <ul className="page__list">
                        {item.workItems?.map((workKey) => (
                          <li key={workKey}>{t(workKey)}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
