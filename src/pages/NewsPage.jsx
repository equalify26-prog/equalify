import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../design/design.css'
import '../design/news.css'
import gamereadyLogo from '../design/gameready-logo.png'

export default function NewsPage() {
  const { t } = useLanguage()
  return (
    <div className="eqd page-news">
      <section className="page-title">
        <h1>
          {t('pages.newsTitle')}
        </h1>
        <div className="accent-rule"></div>
        <p>
          {t('pages.newsIntro')}
        </p>
      </section>
      <div className="rp-big" style={{ width: "100%", background: "#F6F1E7", padding: "90px 7% 110px", boxSizing: "border-box" }}>
        <div className="rg-af" style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(440px,1fr))", gap: "36px", alignItems: "stretch" }}>
          <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#4F7A76 0%,#3f6965 100%)", borderRadius: "28px", padding: "40px", boxSizing: "border-box", boxShadow: "0 26px 56px rgba(47,74,71,.26)", display: "flex", flexDirection: "column", color: "#F6F1E7" }}>
            <div style={{ position: "absolute", right: "-70px", top: "-70px", width: "240px", height: "240px", borderRadius: "50%", background: "rgba(246,241,231,.08)" }}></div>
            <div className="disp" style={{ position: "absolute", right: "26px", bottom: "2px", fontSize: "150px", lineHeight: "1", fontWeight: "700", color: "rgba(246,241,231,.09)" }}>
              01
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ width: "46px", height: "46px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg fill="none" height="22" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
                    <path d="M5 4h12a2 2 0 012 2v13H7a2 2 0 01-2-2zM19 8h2v9a2 2 0 01-2 2M8 8h7M8 12h7M8 16h4" />
                  </svg>
                </span>
                <h2 className="h2" style={{ color: "#F6F1E7" }}>
                  News
                </h2>
              </div>
              <span className="eq"></span>
            </div>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "48px" }}>
              <div style={{ width: "176px", height: "104px", borderRadius: "18px", background: "#FFFFFF", padding: "9px 12px", boxSizing: "border-box", boxShadow: "0 12px 28px rgba(0,0,0,.16)", flex: "none" }}>
                <img alt="Gameready" src={gamereadyLogo} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
              </div>
              <span className="pill" style={{ background: "rgba(246,241,231,.10)", color: "#F6F1E7", border: "1px solid #D9A441", padding: "6px 16px" }}>
                Erasmus+ K210-You
              </span>
            </div>
            <h3 className="disp" style={{ position: "relative", fontWeight: "700", fontSize: "36px", lineHeight: "1.12", letterSpacing: "1px", textTransform: "uppercase", margin: "0 0 36px" }}>
              GameReady has been accepted for Erasmus+ funding!
            </h3>
            <div style={{ position: "relative", marginTop: "auto" }}>
              <Link to="/news/gameready" className="btn">
                Learn more
                {' '}
                <i>
                  <svg fill="none" height="13" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" viewBox="0 0 24 24" width="13">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </i>
              </Link>
            </div>
          </div>
          <div style={{ position: "relative", overflow: "hidden", background: "#FFFFFF", borderRadius: "28px", boxShadow: "0 22px 54px rgba(47,74,71,.13)", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "8px", background: "#D9A441" }}></div>
            <div style={{ padding: "34px 40px 40px", display: "flex", flexDirection: "column", flex: "1", position: "relative" }}>
              <div className="disp" style={{ position: "absolute", right: "26px", bottom: "2px", fontSize: "150px", lineHeight: "1", fontWeight: "700", color: "rgba(79,122,118,.08)" }}>
                02
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px", position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <svg fill="none" height="22" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
                      <rect height="16" rx="2" width="18" x="3" y="5" />
                      <path d="M3 10h18M8 3v4M16 3v4" />
                    </svg>
                  </span>
                  <h2 className="h2" style={{ color: "#2F4A47" }}>
                    Events
                  </h2>
                </div>
                <span className="eq"></span>
              </div>
              <div style={{ position: "relative", display: "flex", flexDirection: "column", flex: "1" }}>
                <div style={{ position: "relative", height: "270px", borderRadius: "24px", background: "linear-gradient(135deg,#F6F1E7 0%,#EEE6D3 100%)", overflow: "hidden", boxShadow: "inset 0 0 0 1px rgba(47,74,71,.08)" }}>
                  <div style={{ position: "absolute", right: "-50px", top: "-50px", width: "190px", height: "190px", borderRadius: "50%", background: "rgba(79,122,118,.10)" }}></div>
                  <div style={{ position: "absolute", left: "-40px", bottom: "-60px", width: "170px", height: "170px", borderRadius: "50%", background: "rgba(217,164,65,.14)" }}></div>
                  <div style={{ position: "absolute", left: "50%", top: "50%", width: "176px", height: "236px", margin: "-118px 0 0 -70px", transform: "rotate(-3deg)", background: "#FFFFFF", borderRadius: "12px", boxShadow: "0 18px 38px rgba(47,74,71,.22)", padding: "10px", boxSizing: "border-box" }}>
                    <div style={{ width: "100%", height: "100%", border: "2px dashed #4F7A76", borderRadius: "7px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", textAlign: "center", color: "#2F4A47" }}>
                      <svg fill="none" height="30" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" width="30">
                        <rect height="16" rx="3" width="18" x="3" y="4" />
                        <circle cx="9" cy="10" r="1.8" />
                        <path d="M21 16l-5-5-8 8" />
                      </svg>
                      <div style={{ fontSize: "13px", fontWeight: "700", lineHeight: "1.2" }}>
                        [Event poster]
                      </div>
                      <div style={{ fontSize: "11px", fontWeight: "600", color: "#4F7A76", lineHeight: "1.3", padding: "0 8px" }}>
                        poster or photo
                      </div>
                    </div>
                  </div>
                  <div className="date" style={{ position: "absolute", left: "18px", top: "18px", width: "68px", height: "76px", borderRadius: "18px", background: "#4F7A76", color: "#F6F1E7", boxShadow: "0 10px 22px rgba(47,74,71,.25)" }}>
                    <b style={{ fontSize: "21px" }}>
                      14–15
                    </b>
                    <span style={{ fontSize: "11px", marginTop: "6px" }}>
                      Nov
                    </span>
                  </div>
                  <span className="eq m" style={{ position: "absolute", right: "20px", bottom: "18px" }}></span>
                </div>
                <div style={{ paddingTop: "24px" }}>
                  <h4 className="evt" style={{ fontSize: "34px", margin: "0 0 12px" }}>
                    Empowerment Lab
                  </h4>
                  <div className="evm">
                    <span>
                      <svg fill="none" height="15" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15">
                        <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      Warsaw
                    </span>
                    <span>
                      <svg fill="none" height="15" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="15">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      [Time]
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "28px", position: "relative" }}>
                <a href="#" onClick={(e) => e.preventDefault()} className="btn" style={{ background: "#4F7A76", color: "#F6F1E7" }}>
                  View all events
                  {' '}
                  <i style={{ background: "#D9A441" }}>
                    <svg fill="none" height="13" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" viewBox="0 0 24 24" width="13">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
