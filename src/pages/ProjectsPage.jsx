import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../design/design.css'
import '../design/projects.css'
import gamereadyLogo from '../design/gameready-logo.png'

export default function ProjectsPage() {
  const { t } = useLanguage()
  return (
    <div className="eqd page-projects">
      <div style={{ width: "100%", background: "linear-gradient(135deg, #2F4A47 0%, #3f615d 100%)", padding: "70px 8% 78px", boxSizing: "border-box", textAlign: "center" }}>
        <h1 className="heading" style={{ color: "#F6F1E7", fontSize: "48px", letterSpacing: "3px" }}>
          {t('pages.projectsTitle')}
        </h1>
        <p style={{ maxWidth: "900px", margin: "30px auto 0", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: "600", fontSize: "28px", lineHeight: "1.5", color: "#F6F1E7" }}>
          {t('pages.projectsIntro')}
        </p>
      </div>
      <div style={{ width: "100%", background: "#F6F1E7", padding: "80px 8% 110px", boxSizing: "border-box" }}>
        <div className="rg-af" style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "40px", alignItems: "stretch" }}>
          <div className="pcard">
            <div className="phead">
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "60%" }}>
                <span className="tag-on">
                  Ongoing
                </span>
                {' '}
                <span className="tag-prog">
                  Erasmus+ K210-You
                </span>
              </div>
              <div className="ptitle">
                Herizon
              </div>
              <div className="logochip">
                <img alt="Herizon" src="/images/herizon-logo.png" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", transform: "scale(2.1)" }} />
              </div>
            </div>
            <div className="pbody">
              <p className="pdesc">
                Building Essential Life Skills for Young Migrant Women’s Integration
              </p>
              <div className="chips">
                <span className="chip">
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  12 month
                </span>
                {' '}
                <span className="chip">
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20">
                    <rect height="13" rx="2" width="18" x="3" y="7" />
                    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
                  </svg>
                  60 000€
                </span>
              </div>
              <Link to="/projects/herizon" className="more">
                Learn more
                {' '}
                <i>
                  <svg fill="none" height="13" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="13">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </i>
              </Link>
            </div>
          </div>
          <div className="pcard">
            <div className="phead">
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", maxWidth: "60%" }}>
                <span className="tag-on">
                  Ongoing
                </span>
                {' '}
                <span className="tag-prog">
                  Erasmus+ K210-You
                </span>
              </div>
              <div className="ptitle">
                Gameready
              </div>
              <div className="logochip">
                <img alt="Gameready" src={gamereadyLogo} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
            </div>
            <div className="pbody">
              <p className="pdesc">
                Upskilling Youth for Job Readiness Through Gamification
              </p>
              <div className="chips">
                <span className="chip">
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  12 month
                </span>
                {' '}
                <span className="chip">
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="20">
                    <rect height="13" rx="2" width="18" x="3" y="7" />
                    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
                  </svg>
                  60 000€
                </span>
              </div>
              <Link to="/news/gameready" className="more">
                Learn more
                {' '}
                <i>
                  <svg fill="none" height="13" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="13">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
