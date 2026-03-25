import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Header.css'

const NAV_LINKS = [
  { labelKey: 'nav.aboutUs', href: '/about' },
  { labelKey: 'nav.projects', href: '/projects' },
  { labelKey: 'nav.resources', href: '/resources' },
  { labelKey: 'nav.newsEvents', href: '/news' },
  { labelKey: 'nav.donation', href: '/donation' },
  { labelKey: 'nav.contactUs', href: '/contacts' },
]

const LANGUAGES = [
  { code: 'en', labelKey: 'lang.english', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'pl', labelKey: 'lang.polish', flag: 'https://flagcdn.com/w40/pl.png' },
]

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0]
  const isHome = location.pathname === '/'

  return (
    <header className={`header ${isHome ? 'header--hero' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          <span className="header__logo-text">Equalify</span>
        </Link>

        <button
          type="button"
          className="header__burger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} onClick={() => setMenuOpen(false)}>{t(link.labelKey)}</Link>
              </li>
            ))}
          </ul>
          <div className="header__actions">
            <div className="header__lang-wrap" ref={langRef}>
              <button
                type="button"
                className="header__lang"
                aria-label="Change language"
                aria-expanded={langOpen}
                aria-haspopup="true"
                onClick={() => setLangOpen(!langOpen)}
              >
                <img src={currentLang.flag} alt="" width="24" height="24" className="header__lang-flag" />
                <span>{language === 'pl' ? 'PL' : 'EN'}</span>
              </button>
              {langOpen && (
                <div className="header__lang-dropdown">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      className={`header__lang-option ${language === lang.code ? 'header__lang-option--active' : ''}`}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangOpen(false)
                      }}
                    >
                      <img src={lang.flag} alt="" width="24" height="24" />
                      <span>{t(lang.labelKey)}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
