import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { RESOURCES, RESOURCE_CATEGORIES } from '../data/resources'
import '../design/design.css'
import '../design/resources.css'
import herizonCover from '../design/herizon-report-cover.jpg'

// Real cover photos, keyed by resource id. Resources without one use the designed placeholder cover.
const COVER_IMAGES = {
  'herizon-comparative-research-report': herizonCover,
}

const COVER_BG = [
  'linear-gradient(135deg,#2F4A47 0%,#4F7A76 100%)',
  'linear-gradient(135deg,#2F4A47 0%,#3f615d 100%)',
]

export default function ResourcesPage() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('All')
  const filtered = RESOURCES.filter((r) => filter === 'All' || r.category === filter)

  return (
    <div className="eqd page-resources">
      <section className="page-title">
        <h1>
          {t('pages.resourcesTitle')}
        </h1>
        <div className="accent-rule"></div>
        <p>
          {t('pages.resourcesHeroSubtitle')}
        </p>
      </section>
      <div style={{ width: "100%", background: "#F6F1E7", padding: "64px 8% 0", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "30px", flexWrap: "wrap", borderBottom: "2px solid rgba(47,74,71,0.16)" }}>
          <div style={{ display: "flex", gap: "38px" }}>
            {RESOURCE_CATEGORIES.map((category) => (
              <button
                key={category}
                className={'tab' + (filter === category ? ' on' : '')}
                onClick={() => setFilter(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
          <div style={{ paddingBottom: "14px" }}>
            <span className="eq"></span>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", background: "#F6F1E7", padding: "54px 8% 110px", boxSizing: "border-box" }}>
        <div className="rg-n" style={{ maxWidth: "1160px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "54px 40px", alignItems: "stretch" }}>
          {filtered.map((r, i) => (
              <div className="item" key={r.id}>
                {COVER_IMAGES[r.id] ? (
                <div className="cover cover--img" style={{ aspectRatio: "990 / 1400" }}>
                  <img alt={r.title} src={COVER_IMAGES[r.id]} />
                </div>
                ) : (
                <div className="cover" style={{ background: COVER_BG[i % COVER_BG.length], color: "#F6F1E7" }}>
                  <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "210px", height: "210px", borderRadius: "50%", background: "rgba(246,241,231,.09)" }}></div>
                  <div style={{ position: "absolute", left: "-70px", bottom: "40px", width: "190px", height: "190px", borderRadius: "50%", background: "rgba(246,241,231,.07)" }}></div>
                  <div style={{ position: "absolute", right: "-6px", top: "150px", width: "150px", height: "96px", opacity: "1", background: "linear-gradient(rgba(246,241,231,.10),rgba(246,241,231,.10)) top/100% 30px no-repeat,linear-gradient(rgba(246,241,231,.10),rgba(246,241,231,.10)) bottom/100% 30px no-repeat" }}></div>
                  <div style={{ position: "relative", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ display: "inline-flex", border: "1px solid rgba(246,241,231,.4)", background: "rgba(246,241,231,.14)", color: "#F6F1E7", borderRadius: "999px", padding: "6px 14px", fontSize: "11px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase" }}>
                        {r.category}
                      </span>
                      {' '}
                      <span className="kept" style={{ fontWeight: "700", fontSize: "22px" }}>
                        {r.year}
                      </span>
                    </div>
                    <div style={{ marginTop: "26px" }}>
                      <div style={{ width: "68px", height: "68px", borderRadius: "16px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", padding: "9px", boxSizing: "border-box" }}>
                        <img alt="" src={r.logo} style={{ width: "100%", height: "auto", display: "block" }} />
                      </div>
                    </div>
                    <div className="kept" style={{ fontWeight: "700", fontSize: "28px", lineHeight: "1.08", marginTop: "auto", paddingBottom: "16px" }}>
                      {r.title}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span className="eq" style={{ width: "38px", height: "15px", background: "linear-gradient(#D9A441,#D9A441) top/100% 4.5px no-repeat,linear-gradient(#D9A441,#D9A441) bottom/100% 4.5px no-repeat" }}></span>
                      <span style={{ fontSize: "13px", fontWeight: "700", opacity: ".9" }}>
                        {r.pages} pages
                      </span>
                    </div>
                  </div>
                </div>
                )}
                <p className="desc">
                  {r.description}
                </p>
                <div className="meta">
                  <span>
                    <svg fill="none" height="16" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
                    </svg>
                    {r.organization}
                  </span>
                  <span>
                    <svg fill="none" height="16" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
                    </svg>
                    {r.language}
                  </span>
                  <span>
                    {r.pages} pages
                  </span>
                </div>
                <div className="acts">
                  <a href={r.pdfUrl} download className="dl">
                    <svg fill="none" height="17" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24" width="17">
                      <path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 20h14" />
                    </svg>
                    Download PDF
                  </a>
                  <a href={r.pdfUrl} target="_blank" rel="noopener noreferrer" className="rb" title="View">
                    <svg fill="none" height="17" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24" width="17">
                      <path d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5" />
                    </svg>
                  </a>
                  <Link to={`/resources/${r.id}`} className="rb dk" title="Details">
                    <svg fill="none" height="17" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" viewBox="0 0 24 24" width="17">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                </div>
              </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ gridColumn: "1 / -1", textAlign: "center", color: "#2F4A47", fontSize: "18px", margin: "20px 0" }}>
              No resources in this category yet.
            </p>
          )}
        </div>
      </div>

    </div>
  )
}
