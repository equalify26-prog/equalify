import { Link } from 'react-router-dom'
import '../design/design.css'
import '../design/news-gameready.css'
import gamereadyLogo from '../design/gameready-logo.png'
import euLogo from '../design/eu-cofunded.png'

export default function NewsDetailPage() {

  return (
    <div className="eqd page-news-gameready">
      <div style={{ position: "relative", width: "100%" }}>
        <div style={{ background: "linear-gradient(135deg,#2F4A47 0%,#3f615d 100%)", padding: "6px 8% 80px", boxSizing: "border-box", textAlign: "center" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link to="/news" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#F6F1E7", fontWeight: "700", fontSize: "14px", marginBottom: "26px", textShadow: "0 2px 12px rgba(20,40,38,.4)" }}>
              <svg fill="none" height="16" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewBox="0 0 24 24" width="16">
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              Back to News & Events
            </Link>
            <div style={{ width: "190px", height: "112px", margin: "0 auto 22px", borderRadius: "20px", background: "#FFFFFF", padding: "10px 14px", boxSizing: "border-box", boxShadow: "0 12px 28px rgba(0,0,0,.18)" }}>
              <img alt="Gameready" src={gamereadyLogo} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <span className="pill" style={{ background: "rgba(246,241,231,.12)", color: "#F6F1E7", border: "1px solid #D9A441", padding: "6px 16px" }}>
                Erasmus+ K210-You
              </span>
            </div>
            <h1 className="disp" style={{ fontWeight: "700", fontSize: "44px", lineHeight: "1.1", letterSpacing: "1px", textTransform: "uppercase", color: "#F6F1E7", margin: "0", textShadow: "0 2px 14px rgba(20,40,38,.35)" }}>
              GameReady has been accepted for Erasmus+ funding!
            </h1>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", background: "#FFFFFF", padding: "84px 7% 88px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,.8fr)", gap: "52px", alignItems: "start" }}>
            <div>
              <span className="pill" style={{ border: "1px solid #D9A441", background: "#FFFFFF", color: "#2F4A47", padding: "6px 16px", letterSpacing: "1.5px", textTransform: "uppercase", fontSize: "11.5px" }}>
                The announcement
              </span>
              <h2 className="h2" style={{ color: "#2F4A47", fontSize: "38px", lineHeight: "1.08", margin: "16px 0 0" }}>
                Big news for Equalify
              </h2>
              <div style={{ marginTop: "22px" }}>
                <p style={{ fontSize: "18px", lineHeight: "1.75", fontWeight: "600", color: "#2F4A47", margin: "0 0 16px" }}>
                  <b>
                    GameReady: Upskilling Youth for Job Readiness Through Gamification
                  </b>
                  {' '}
                  has been accepted for funding under Erasmus+. From 1 October 2026 to 30 September 2027, Malmö Akademiska Förening (Sweden), JuBuK (Germany) and Equalify Foundation (Poland) will help young people aged 18–30 get ready for work through games, role-plays and realistic workplace scenarios.
                </p>
                <p style={{ fontSize: "16.5px", lineHeight: "1.8", margin: "0" }}>
                  The project focuses on NEETs and young people from migrant, refugee or disadvantaged backgrounds, who face the biggest barriers to employment.
                </p>
              </div>
              <div style={{ marginTop: "26px", borderLeft: "4px solid #D9A441", paddingLeft: "18px", fontSize: "15.5px", lineHeight: "1.7", fontWeight: "600", color: "#2F4A47" }}>
                Youth unemployment in the EU was 14.7% in 2025 (Eurostat). Many young people have never practised an interview or built a professional profile. GameReady teaches by doing.
              </div>
            </div>
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "28px", background: "linear-gradient(135deg,#4F7A76 0%,#3f6965 100%)", boxShadow: "0 26px 56px rgba(47,74,71,.26)", padding: "30px 30px 18px", color: "#F6F1E7" }}>
              <div style={{ position: "absolute", right: "-70px", top: "-70px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(246,241,231,.08)" }}></div>
              <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h3 className="disp" style={{ fontWeight: "700", fontSize: "28px", letterSpacing: "1px", textTransform: "uppercase", margin: "0" }}>
                  At a glance
                </h3>
                <span className="eq m"></span>
              </div>
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "14px 0", borderTop: "1px solid rgba(246,241,231,.18)" }}>
                  <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(246,241,231,.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg fill="none" height="19" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="19">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441", marginBottom: "3px" }}>
                      Programme
                    </div>
                    <div style={{ fontSize: "15px", lineHeight: "1.5", fontWeight: "600" }}>
                      Erasmus+ small-scale partnership in youth
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "14px 0", borderTop: "1px solid rgba(246,241,231,.18)" }}>
                  <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(246,241,231,.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg fill="none" height="19" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="19">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441", marginBottom: "3px" }}>
                      Duration
                    </div>
                    <div style={{ fontSize: "15px", lineHeight: "1.5", fontWeight: "600" }}>
                      12 months · Oct 2026 – Sep 2027
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "14px 0", borderTop: "1px solid rgba(246,241,231,.18)" }}>
                  <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(246,241,231,.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg fill="none" height="19" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="19">
                      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441", marginBottom: "3px" }}>
                      Countries
                    </div>
                    <div style={{ fontSize: "15px", lineHeight: "1.5", fontWeight: "600" }}>
                      Sweden · Germany · Poland
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "14px 0", borderTop: "1px solid rgba(246,241,231,.18)" }}>
                  <span style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(246,241,231,.12)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg fill="none" height="19" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="19">
                      <circle cx="9" cy="8" r="3.5" />
                      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 010 6.4M18 14.4c2.2.7 3.5 2.6 3.5 5.6" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441", marginBottom: "3px" }}>
                      Target group
                    </div>
                    <div style={{ fontSize: "15px", lineHeight: "1.5", fontWeight: "600" }}>
                      Young people aged 18–30, especially NEETs and young people with migrant or disadvantaged backgrounds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", background: "#F6F1E7", padding: "84px 7% 88px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ maxWidth: "820px", marginBottom: "30px" }}>
            <span className="pill" style={{ border: "1px solid #D9A441", background: "#FFFFFF", color: "#2F4A47", padding: "6px 16px", letterSpacing: "1.5px", textTransform: "uppercase", fontSize: "11.5px" }}>
              Aim and goals
            </span>
            <p className="disp" style={{ fontWeight: "700", fontSize: "32px", lineHeight: "1.28", color: "#2F4A47", margin: "18px 0 0" }}>
              To strengthen the employability and confidence of young people aged 18–30, and to improve the quality of youth work across Europe.
            </p>
          </div>
          <div className="rg-n" style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "16px" }}>
            <div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "22px 18px 22px", boxShadow: "0 12px 30px rgba(47,74,71,.08)" }}>
              <div style={{ marginBottom: "14px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.2" />
                  </svg>
                </span>
              </div>
              <h4 className="evt" style={{ fontSize: "21px", margin: "0 0 8px" }}>
                Build job skills
              </h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Communication, teamwork and decision-making.
              </p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "22px 18px 22px", boxShadow: "0 12px 30px rgba(47,74,71,.08)" }}>
              <div style={{ marginBottom: "14px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <path d="M7 3h8l4 4v14H7z" />
                    <path d="M15 3v4h4M10 12h6M10 16h6" />
                  </svg>
                </span>
              </div>
              <h4 className="evt" style={{ fontSize: "21px", margin: "0 0 8px" }}>
                Create application tools
              </h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                CV, LinkedIn profile, elevator pitch and career plan.
              </p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "22px 18px 22px", boxShadow: "0 12px 30px rgba(47,74,71,.08)" }}>
              <div style={{ marginBottom: "14px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z" />
                  </svg>
                </span>
              </div>
              <h4 className="evt" style={{ fontSize: "21px", margin: "0 0 8px" }}>
                Practise interviews
              </h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Mock interviews with feedback from peers and facilitators.
              </p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "22px 18px 22px", boxShadow: "0 12px 30px rgba(47,74,71,.08)" }}>
              <div style={{ marginBottom: "14px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <circle cx="12" cy="9" r="5" />
                    <path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5" />
                  </svg>
                </span>
              </div>
              <h4 className="evt" style={{ fontSize: "21px", margin: "0 0 8px" }}>
                Stay motivated
              </h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                Progress & Rewards with badges and certificates.
              </p>
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: "22px", padding: "22px 18px 22px", boxShadow: "0 12px 30px rgba(47,74,71,.08)" }}>
              <div style={{ marginBottom: "14px" }}>
                <span style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                  <svg fill="none" height="20" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <circle cx="9" cy="8" r="3.5" />
                    <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 010 6.4M18 14.4c2.2.7 3.5 2.6 3.5 5.6" />
                  </svg>
                </span>
              </div>
              <h4 className="evt" style={{ fontSize: "21px", margin: "0 0 8px" }}>
                Strengthen youth work
              </h4>
              <p style={{ fontSize: "14px", lineHeight: "1.6", margin: "0" }}>
                12 youth workers trained; resources shared openly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", background: "#F6F1E7", padding: "64px 7% 0", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#2F4A47 0%,#4F7A76 100%)", borderRadius: "28px", padding: "34px 32px", boxSizing: "border-box", boxShadow: "0 22px 50px rgba(47,74,71,.22)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "28px", flexWrap: "wrap" }}>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(246,241,231,.08)" }}></div>
          <div style={{ position: "relative", flex: "1 1 320px" }}>
            <h3 className="disp" style={{ fontWeight: "700", fontSize: "32px", lineHeight: "1.15", color: "#F6F1E7", margin: "0" }}>
              Want to know more about this project?
            </h3>
          </div>
          <Link to="/projects" className="btn" style={{ position: "relative" }}>
            Learn more about the project
            {' '}
            <i>
              <svg fill="none" height="13" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" viewBox="0 0 24 24" width="13">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </i>
          </Link>
        </div>
      </div>
      <div style={{ width: "100%", background: "#F6F1E7", padding: "44px 7% 48px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "22px", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ width: "190px", height: "104px", borderRadius: "14px", background: "#FFFFFF", padding: "10px 14px", boxSizing: "border-box", flex: "none", boxShadow: "0 8px 20px rgba(47,74,71,.08)" }}>
              <img alt="Co-funded by the European Union" src={euLogo} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
            </div>
            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#4F4F4F", margin: "0", flex: "1 1 260px" }}>
              Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the Swedish Agency for Youth and Civil Society. Neither the European Union nor the granting authority can be held responsible for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
