import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../design/design.css'
import '../design/about.css'

export default function AboutPage() {
  const { t } = useLanguage()
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash])
  return (
    <div className="eqd page-about">
      <div style={{ width: "100%", background: "linear-gradient(135deg, #2F4A47 0%, #3f615d 100%)", padding: "70px 24px", boxSizing: "border-box", textAlign: "center" }}>
        <h1 className="heading" style={{ color: "#F6F1E7", fontSize: "48px", letterSpacing: "3px" }}>
          {t('pages.aboutTitle')}
        </h1>
        <div className="accent-rule center"></div>
        <p style={{ color: "#e3ded0", fontSize: "18px", fontFamily: "'Cormorant Garamond', Georgia, serif", margin: "0" }}>
          {t('pages.aboutHeroSubtitle')}
        </p>
      </div>
      <div className="rp-big" style={{ width: "100%", background: "#ffffff", padding: "90px 8%", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "64px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 380px", minWidth: "300px" }}>
            <img alt="The Equalify Foundation team" src="/images/design/about-team.jpg" style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "10px", boxShadow: "0 18px 40px rgba(47,74,71,0.18)" }} />
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "300px" }}>
            <div className="eyebrow">
              OUR STORY
            </div>
            <h2 className="heading" style={{ fontSize: "30px" }}>
              {t('pages.whoWeAre')}
            </h2>
            <div className="accent-rule"></div>
            <p className="body-copy">
              Equalify Foundation is a non-profit organisation working to advance equality, participation, and social justice. We operate at the intersection of youth empowerment, migration, human rights, and community development.
            </p>
            <p className="body-copy" style={{ marginBottom: "0" }}>
              Our work is rooted in cooperation with communities. We design initiatives together with those who experience barriers, ensuring our actions respond to real needs and produce sustainable impact.
            </p>
          </div>
        </div>
      </div>
      <div className="rp-big" style={{ width: "100%", background: "#FFFFFF", padding: "90px 8%", boxSizing: "border-box" }}>
        <div className="rg-af" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "36px" }}>
          <div className="card">
            <img alt="Hands joined together" src="/images/design/about-mission.jpg" style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "30px 4px 0" }}>
              <h2 className="heading" style={{ fontSize: "28px" }}>
                {t('pages.mission')}
              </h2>
              <div className="accent-rule"></div>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#262322" }}>
                Our mission is to empower marginalized communities, especially youth, migrants, and underrepresented groups, by promoting inclusion, equality, and social justice. We work to dismantle systemic obstacles, expand access to opportunities, and strengthen active citizenship through dialogue, education, and innovation.
              </p>
            </div>
          </div>
          <div className="card">
            <img alt="Two hands linking fingers" src="/images/design/about-vision.jpg" style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }} />
            <div style={{ padding: "30px 4px 0", flex: "1" }}>
              <h2 className="heading" style={{ fontSize: "28px" }}>
                {t('pages.vision')}
              </h2>
              <div className="accent-rule"></div>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.7", color: "#262322" }}>
                We envision societies where every individual can participate fully and with dignity, where diversity is valued as a strength, and where cooperation across differences creates fair and sustainable futures.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rp-big" style={{ width: "100%", background: "#F6F1E7", padding: "90px 8% 100px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="heading" style={{ fontSize: "30px" }}>
            {t('pages.ourValues')}
          </h2>
          <div className="accent-rule center"></div>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "28px", marginTop: "46px", maxWidth: "880px", marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ width: "180px", height: "180px", borderRadius: "50%", background: "#4F7A76", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "18px", boxSizing: "border-box", boxShadow: "0 14px 28px rgba(47,74,71,0.3)" }}>
              <div style={{ color: "#F6F1E7", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: "700", fontSize: "17px", marginBottom: "8px" }}>
                Inclusion
              </div>
              <div style={{ color: "#F6F1E7", fontSize: "13px", lineHeight: "1.45" }}>
                Everyone deserves access, voice, and opportunity.
              </div>
            </div>
            <div style={{ width: "180px", height: "180px", borderRadius: "50%", background: "#D9A441", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "18px", boxSizing: "border-box", boxShadow: "0 14px 28px rgba(217,164,65,0.35)" }}>
              <div style={{ color: "#2F4A47", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: "700", fontSize: "17px", marginBottom: "8px" }}>
                Diversity
              </div>
              <div style={{ color: "#2F4A47", fontSize: "13px", lineHeight: "1.45" }}>
                Different experiences enrich societies.
              </div>
            </div>
            <div style={{ width: "180px", height: "180px", borderRadius: "50%", background: "#2F4A47", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "18px", boxSizing: "border-box", boxShadow: "0 14px 28px rgba(47,74,71,0.3)" }}>
              <div style={{ color: "#F6F1E7", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: "700", fontSize: "17px", marginBottom: "8px" }}>
                Social Justice
              </div>
              <div style={{ color: "#F6F1E7", fontSize: "13px", lineHeight: "1.45" }}>
                Inequality must be challenged at its roots.
              </div>
            </div>
            <div style={{ width: "180px", height: "180px", borderRadius: "50%", background: "#4F7A76", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "18px", boxSizing: "border-box", boxShadow: "0 14px 28px rgba(47,74,71,0.3)" }}>
              <div style={{ color: "#F6F1E7", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: "700", fontSize: "17px", marginBottom: "8px" }}>
                Human Dignity
              </div>
              <div style={{ color: "#F6F1E7", fontSize: "13px", lineHeight: "1.45" }}>
                Every person's worth must be respected and protected.
              </div>
            </div>
            <div style={{ width: "180px", height: "180px", borderRadius: "50%", background: "#D9A441", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "18px", boxSizing: "border-box", boxShadow: "0 14px 28px rgba(217,164,65,0.35)" }}>
              <div style={{ color: "#2F4A47", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: "700", fontSize: "17px", marginBottom: "8px" }}>
                Solidarity
              </div>
              <div style={{ color: "#2F4A47", fontSize: "13px", lineHeight: "1.45" }}>
                Collective action creates lasting change.
              </div>
            </div>
            <div style={{ width: "180px", height: "180px", borderRadius: "50%", background: "#2F4A47", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "18px", boxSizing: "border-box", boxShadow: "0 14px 28px rgba(47,74,71,0.3)" }}>
              <div style={{ color: "#F6F1E7", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: "700", fontSize: "17px", marginBottom: "8px" }}>
                Active Citizenship
              </div>
              <div style={{ color: "#F6F1E7", fontSize: "13px", lineHeight: "1.45" }}>
                People should shape the communities they live in.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="what-we-do" className="rp-big" style={{ width: "100%", background: "#FFFFFF", padding: "100px 8% 110px", boxSizing: "border-box", fontFamily: "'Manrope',system-ui,sans-serif" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center" }}>
            <span className="pill">
              <i className="eq s"></i>
              How We Work
            </span>
            <h2 className="h2" style={{ marginTop: "20px" }}>
              {t('pages.whatWeDoTitle')}
            </h2>
            <div style={{ marginTop: "18px" }}>
              <span className="eq"></span>
            </div>
          </div>
          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px", marginTop: "56px" }}>
            <div className="wrow">
              <div className="t">
                <span className="eq s"></span>
                Education & Capacity-Building
              </div>
              <span className="go">
                <svg fill="none" height="14" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="14">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
            <div className="wrow">
              <div className="t">
                <span className="eq s"></span>
                Youth Work & Leadership Development
              </div>
              <span className="go">
                <svg fill="none" height="14" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="14">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
            <div className="wrow">
              <div className="t">
                <span className="eq s"></span>
                Research & Policy Advocacy
              </div>
              <span className="go">
                <svg fill="none" height="14" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="14">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
            <div className="wrow">
              <div className="t">
                <span className="eq s"></span>
                Community Empowerment & Integration
              </div>
              <span className="go">
                <svg fill="none" height="14" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="14">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
            <div className="wrow">
              <div className="t">
                <span className="eq s"></span>
                Promotion of Human Rights & Social Justice
              </div>
              <span className="go">
                <svg fill="none" height="14" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="14">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
            <div className="wrow">
              <div className="t">
                <span className="eq s"></span>
                Networking & International Cooperation
              </div>
              <span className="go">
                <svg fill="none" height="14" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="14">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
            <div className="wrow">
              <div className="t">
                <span className="eq s"></span>
                Innovation for Inclusion
              </div>
              <span className="go">
                <svg fill="none" height="14" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="14">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
            <div className="wrow">
              <div className="t">
                <span className="eq s"></span>
                Support for Youth Workers & Organisations
              </div>
              <span className="go">
                <svg fill="none" height="14" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" viewBox="0 0 24 24" width="14">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
