import { Link, useParams } from 'react-router-dom'
import '../design/design.css'
import '../design/herizon.css'

const COORDINATOR = {
  name: 'ANKI – Associazione Nazionale Kirghizistan Italia',
  country: 'Italy',
  logo: '/images/partners/anki.png',
  url: 'https://ankimilano.tilda.ws/',
}

const PARTNERS = [
  { name: 'Equalify Foundation', country: 'Poland', logo: '/images/logo.png', to: '/' },
  { name: 'Ishøj Ung Kultur', country: 'Denmark', logo: '/images/partners/ishoj.png', url: 'https://ishojungkultur.dk/' },
]

function PinIcon() {
  return (
    <svg fill="none" height="16" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
      <path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

function PartnerRow({ org, lead }) {
  const inner = (
    <>
      <span className="pp-logo">
        <img alt={org.name} src={org.logo} />
      </span>
      <span className="pp-text">
        <span className="pp-name">{org.name}</span>
        <span className="pp-loc">
          <PinIcon />
          {org.country}
        </span>
      </span>
      <span className="pp-visit">
        Visit website
        <i>
          <svg fill="none" height="12" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" viewBox="0 0 24 24" width="12">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </i>
      </span>
    </>
  )
  const cls = 'pp-row' + (lead ? ' pp-row--lead' : '')
  return org.to ? (
    <Link className={cls} to={org.to}>{inner}</Link>
  ) : (
    <a className={cls} href={org.url} target="_blank" rel="noopener noreferrer">{inner}</a>
  )
}

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  if (projectId !== 'herizon') {
    return (
      <div className="eqd page-herizon" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 className="heading" style={{ fontSize: 36 }}>Project not found</h1>
        <p style={{ margin: '20px 0' }}>
          <Link to="/projects" className="btn" style={{ display: 'inline-flex' }}>Back to Projects</Link>
        </p>
      </div>
    )
  }
  return (
    <div className="eqd page-herizon">
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ background: "linear-gradient(135deg,#2F4A47 0%,#3f615d 100%)", padding: "26px 8% 150px", boxSizing: "border-box", textAlign: "center" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            <Link to="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#F6F1E7", fontWeight: "700", fontSize: "14px", marginBottom: "22px", textShadow: "0 2px 12px rgba(20,40,38,.4)" }}>
              <svg fill="none" height="16" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewBox="0 0 24 24" width="16">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              Back to Projects
            </Link>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "18px" }}>
              <span className="pill" style={{ background: "#D9A441", color: "#2F4A47", padding: "6px 16px" }}>
                Ongoing
              </span>
              <span className="pill" style={{ background: "rgba(246,241,231,.12)", color: "#F6F1E7", border: "1px solid #D9A441", padding: "6px 16px" }}>
                Erasmus+ K210-You
              </span>
            </div>
            <h1 className="disp" style={{ fontWeight: "700", fontSize: "60px", lineHeight: "1.04", letterSpacing: "3px", textTransform: "uppercase", color: "#F6F1E7", margin: "0", textShadow: "0 2px 14px rgba(20,40,38,.35)" }}>
              Herizon
            </h1>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: "1", width: "100%", background: "#FFFFFF", borderRadius: "46px 46px 0 0", marginTop: "-46px", padding: "0 7% 96px", boxSizing: "border-box", boxShadow: "0 -14px 34px rgba(47,74,71,.10)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ margin: "-84px auto 24px", display: "inline-block", background: "#FFFFFF", borderRadius: "30px", padding: "20px", boxShadow: "0 18px 44px rgba(47,74,71,.16)" }}>
              <img alt="Herizon" src="/images/herizon-logo.png" style={{ display: "block", width: "170px", height: "auto", borderRadius: "12px" }} />
            </div>
            <p style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontWeight: "700", fontSize: "30px", lineHeight: "1.35", color: "#2F4A47", margin: "0 auto 30px", maxWidth: "1000px" }}>
              Building Essential Life Skills for Young
              <br />
              Migrant Women’s Integration
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#F6F1E7", borderRadius: "999px", padding: "10px 22px 10px 10px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="20" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <span style={{ textAlign: "left" }}>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441" }}>
                    Duration
                  </span>
                  <span className="disp" style={{ display: "block", fontWeight: "700", fontSize: "24px", lineHeight: "1.1", color: "#2F4A47" }}>
                    12 month
                  </span>
                </span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#F6F1E7", borderRadius: "999px", padding: "10px 22px 10px 10px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="20" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <rect height="13" rx="2" width="18" x="3" y="7" />
                    <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" />
                  </svg>
                </span>
                <span style={{ textAlign: "left" }}>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441" }}>
                    Budget
                  </span>
                  <span className="disp" style={{ display: "block", fontWeight: "700", fontSize: "24px", lineHeight: "1.1", color: "#2F4A47" }}>
                    60 000€
                  </span>
                </span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "12px", background: "#F6F1E7", borderRadius: "999px", padding: "10px 22px 10px 10px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#FFFFFF", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="20" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 010 6.4M18 14.4c2.2.7 3.5 2.6 3.5 5.6" />
                  </svg>
                </span>
                <span style={{ textAlign: "left" }}>
                  <span style={{ display: "block", fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441" }}>
                    Partners
                  </span>
                  <span className="disp" style={{ display: "block", fontWeight: "700", fontSize: "24px", lineHeight: "1.1", color: "#2F4A47" }}>
                    3
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: "2", width: "100%", background: "#F6F1E7", borderRadius: "46px 46px 0 0", marginTop: "-46px", padding: "72px 7% 96px", boxSizing: "border-box", boxShadow: "0 -14px 34px rgba(47,74,71,.10)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "34px" }}>
            <h2 className="h2" style={{ fontSize: "38px", color: "#2F4A47", textAlign: "center" }}>
              Project Summary
            </h2>
            <div style={{ marginTop: "14px" }}>
              <span className="eq"></span>
            </div>
          </div>
          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 1px minmax(0,1fr)", gap: "40px" }}>
            <p style={{ fontSize: "17px", lineHeight: "1.85", margin: "0" }}>
              Young migrant women often face multiple barriers to education, employment, and active participation in society. Herizon strengthens their essential life skills, confidence, and resilience so they can successfully integrate into their communities and pursue their personal and professional goals.
            </p>
            <div style={{ background: "#E3D9C2" }}></div>
            <p style={{ fontSize: "17px", lineHeight: "1.85", margin: "0" }}>
              By developing practical competencies and creating supportive learning environments, the project empowers young migrant women while equipping youth workers and NGOs with innovative, gender-sensitive tools to better support their integration journey.
            </p>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: "3", width: "100%", background: "linear-gradient(135deg,#4F7A76 0%,#3f6965 100%)", borderRadius: "46px 46px 0 0", marginTop: "-46px", padding: "72px 7% 96px", boxSizing: "border-box", boxShadow: "0 -14px 34px rgba(47,74,71,.14)", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "830px", top: "-120px", width: "360px", height: "360px", borderRadius: "50%", background: "rgba(246,241,231,0.07)" }}></div>
        <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "38px" }}>
            <h2 className="h2" style={{ fontSize: "38px", color: "#F6F1E7", textAlign: "center" }}>
              Project Deliverables
            </h2>
            <div style={{ marginTop: "14px" }}>
              <span className="eq"></span>
            </div>
          </div>
          <div className="rg-n" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "18px" }}>
            <div style={{ position: "relative", overflow: "hidden", background: "#F6F1E7", borderRadius: "26px", padding: "30px 24px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#4F7A76", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="25" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="25">
                    <path d="M7 3h8l4 4v14H7z" />
                    <path d="M15 3v4h4M10 12h6M10 16h6" />
                  </svg>
                </span>
                <div className="disp" style={{ fontWeight: "700", fontSize: "44px", lineHeight: "1", color: "#D9A441" }}>
                  01
                </div>
              </div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", margin: "0", color: "#2F4A47", fontWeight: "600" }}>
                Comparative Needs Assessment Report identifying barriers, needs, and opportunities for young migrant women
              </p>
            </div>
            <div style={{ position: "relative", overflow: "hidden", background: "#F6F1E7", borderRadius: "26px", padding: "30px 24px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#4F7A76", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="25" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="25">
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 010 6.4M18 14.4c2.2.7 3.5 2.6 3.5 5.6" />
                  </svg>
                </span>
                <div className="disp" style={{ fontWeight: "700", fontSize: "44px", lineHeight: "1", color: "#D9A441" }}>
                  02
                </div>
              </div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", margin: "0", color: "#2F4A47", fontWeight: "600" }}>
                Herizon Empowerment Labs with practical, non-formal learning activities focused on personal and professional development
              </p>
            </div>
            <div style={{ position: "relative", overflow: "hidden", background: "#F6F1E7", borderRadius: "26px", padding: "30px 24px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span style={{ width: "52px", height: "52px", borderRadius: "50%", background: "#4F7A76", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="25" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="25">
                    <rect height="11" rx="2" width="16" x="4" y="5" />
                    <path d="M2 20h20" />
                  </svg>
                </span>
                <div className="disp" style={{ fontWeight: "700", fontSize: "44px", lineHeight: "1", color: "#D9A441" }}>
                  03
                </div>
              </div>
              <p style={{ fontSize: "15.5px", lineHeight: "1.7", margin: "0", color: "#2F4A47", fontWeight: "600" }}>
                Digital Herizon Toolkit featuring interactive exercises, life skills resources, and inspiring participant stories
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: "4", width: "100%", background: "#FFFFFF", borderRadius: "46px 46px 0 0", marginTop: "-46px", padding: "72px 7% 96px", boxSizing: "border-box", boxShadow: "0 -14px 34px rgba(47,74,71,.10)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h2 className="h2" style={{ fontSize: "38px", color: "#2F4A47", textAlign: "center" }}>
              Who Benefits
            </h2>
            <div style={{ marginTop: "14px" }}>
              <span className="eq"></span>
            </div>
          </div>
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            <div style={{ display: "flex", gap: "22px", alignItems: "center", padding: "22px 0" }}>
              <span style={{ width: "58px", height: "58px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg fill="none" height="27" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="27">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
                </svg>
              </span>
              <p style={{ fontSize: "18px", lineHeight: "1.65", margin: "0", color: "#262322" }}>
                Young migrant women seeking greater confidence, independence, and opportunities for integration
              </p>
            </div>
            <div style={{ display: "flex", gap: "22px", alignItems: "center", padding: "22px 0", borderTop: "1px solid #E3D9C2" }}>
              <span style={{ width: "58px", height: "58px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg fill="none" height="27" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="27">
                  <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19a2 2 0 012-2h13" />
                  <path d="M9 7h6" />
                </svg>
              </span>
              <p style={{ fontSize: "18px", lineHeight: "1.65", margin: "0", color: "#262322" }}>
                Youth workers, mentors, and NGO professionals looking for practical, inclusive, and gender-sensitive tools
              </p>
            </div>
            <div style={{ display: "flex", gap: "22px", alignItems: "center", padding: "22px 0", borderTop: "1px solid #E3D9C2" }}>
              <span style={{ width: "58px", height: "58px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg fill="none" height="27" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="27">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <p style={{ fontSize: "18px", lineHeight: "1.65", margin: "0", color: "#262322" }}>
                Youth organisations and civil society organisations aiming to improve support services for migrant women
              </p>
            </div>
            <div style={{ display: "flex", gap: "22px", alignItems: "center", padding: "22px 0", borderTop: "1px solid #E3D9C2" }}>
              <span style={{ width: "58px", height: "58px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg fill="none" height="27" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="27">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
                </svg>
              </span>
              <p style={{ fontSize: "18px", lineHeight: "1.65", margin: "0", color: "#262322" }}>
                Local communities and stakeholders working towards greater inclusion, diversity, and social cohesion
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: "5", width: "100%", background: "#F6F1E7", borderRadius: "46px 46px 0 0", marginTop: "-46px", padding: "72px 7% 80px", boxSizing: "border-box", boxShadow: "0 -14px 34px rgba(47,74,71,.10)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "34px" }}>
            <h2 className="h2" style={{ fontSize: "38px", color: "#2F4A47", textAlign: "center" }}>
              Project Partners
            </h2>
            <div style={{ marginTop: "14px" }}>
              <span className="eq"></span>
            </div>
          </div>
          <div className="pp-panel">
            <div className="pp-label pp-label--lead">Project Coordinator</div>
            <PartnerRow org={COORDINATOR} lead />
            <div className="pp-label">Partners</div>
            {PARTNERS.map((o) => (
              <PartnerRow key={o.name} org={o} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Link to="/projects" className="btn" style={{ background: "#4F7A76", color: "#F6F1E7", padding: "14px 28px 14px 16px" }}>
              <i style={{ background: "#D9A441" }}>
                <svg fill="none" height="13" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" viewBox="0 0 24 24" width="13">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </i>
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
