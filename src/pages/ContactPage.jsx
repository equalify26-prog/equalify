import { useState } from 'react'
import { submitContact } from '../api/contact'
import { useLanguage } from '../context/LanguageContext'
import '../design/design.css'
import '../design/contact.css'

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' }
const SUBJECT_KEYS = ['consultation', 'training', 'workshop', 'speaking', 'research', 'mentoring', 'media', 'other']

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState(emptyForm)
  const [submitState, setSubmitState] = useState('idle')
  const [errorDetail, setErrorDetail] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitState('sending')
    setErrorDetail('')
    try {
      await submitContact({ kind: 'contact', ...formData })
      setSubmitState('success')
      setFormData(emptyForm)
    } catch (err) {
      setSubmitState('error')
      setErrorDetail(err instanceof Error ? err.message : t('pages.formError'))
    }
  }
  return (
    <div className="eqd page-contact">
      <section className="page-title">
        <h1>
          {t('pages.contactTitle')}
        </h1>
        <div className="accent-rule"></div>
        <p>
          {t('pages.contactSubtitle')}
        </p>
      </section>
      <div style={{ width: "100%", background: "#F6F1E7", padding: "64px 6% 84px", boxSizing: "border-box" }}>
        <div className="rg-2" style={{ maxWidth: "1020px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,.78fr) minmax(0,1.22fr)", borderRadius: "34px", overflow: "hidden", boxShadow: "0 22px 54px rgba(47,74,71,.14)" }}>
          <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#4F7A76 0%,#3f6965 100%)", color: "#F6F1E7", padding: "44px 34px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ position: "absolute", left: "160px", top: "-90px", width: "240px", height: "240px", borderRadius: "50%", background: "rgba(246,241,231,0.08)" }}></div>
            <div style={{ position: "absolute", left: "-130px", bottom: "-90px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(246,241,231,0.06)" }}></div>
            <div style={{ position: "relative" }}>
              <span className="eq"></span>
              <div style={{ marginTop: "30px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid rgba(246,241,231,.2)" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "50%", background: "rgba(246,241,231,.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg fill="none" height="22" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
                      <rect height="14" rx="2" width="18" x="3" y="5" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441", marginBottom: "5px" }}>
                      {t('pages.emailTitle')}
                    </div>
                    <div style={{ fontSize: "16px", lineHeight: "1.55", fontWeight: "600" }}>
                      equalify26@gmail.com
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", padding: "18px 0", borderTop: "1px solid rgba(246,241,231,.2)" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "50%", background: "rgba(246,241,231,.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg fill="none" height="22" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
                      <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </span>
                  <div>
                    <div style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441", marginBottom: "5px" }}>
                      {t('pages.addressTitle')}
                    </div>
                    <div style={{ fontSize: "16px", lineHeight: "1.55", fontWeight: "600" }}>
                      Warsaw
                      <br />
                      Poland
                    </div>
                  </div>
                </div>
                <div style={{ borderTop: "1px solid rgba(246,241,231,.2)", paddingTop: "22px" }}>
                  <div style={{ fontSize: "11.5px", fontWeight: "800", letterSpacing: "1.5px", textTransform: "uppercase", color: "#D9A441", marginBottom: "14px" }}>
                    {t('pages.connectWithUs')}
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <span aria-label="Facebook" style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#1877F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg height="20" viewBox="0 0 24 24" width="20">
                        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" fill="#FFFFFF" />
                      </svg>
                    </span>
                    <a href="https://www.instagram.com/equalify_pl/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(45deg,#F9CE34 0%,#EE2A7B 50%,#6228D7 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg height="20" viewBox="0 0 24 24" width="20">
                        <rect fill="none" height="18" rx="5" stroke="#FFFFFF" strokeWidth="1.8" width="18" x="3" y="3" />
                        <circle cx="12" cy="12" fill="none" r="4" stroke="#FFFFFF" strokeWidth="1.8" />
                        <circle cx="17.2" cy="6.8" fill="#FFFFFF" r="1.1" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/equalify-foundation/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#0A66C2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg height="19" viewBox="0 0 24 24" width="19">
                        <rect fill="#FFFFFF" height="12" width="3.5" x="3" y="9" />
                        <circle cx="4.7" cy="4.8" fill="#FFFFFF" r="2.2" />
                        <path d="M10 9h3.3v1.8c.6-1 1.8-2.1 3.8-2.1 3.1 0 4.4 2 4.4 5.3V21h-3.5v-6.3c0-1.6-.6-2.7-2-2.7-1.1 0-1.8.8-2.1 1.5-.1.3-.1.6-.1 1V21H10V9z" fill="#FFFFFF" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
                      </div>
          <div className="cf">
            <h2 className="h2" style={{ fontSize: "36px", color: "#2F4A47" }}>
              {t('pages.sendMessage')}
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.7", margin: "10px 0 26px" }}>
              {t('pages.messageDesc')}
            </p>
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="cf__row">
                <div className="cf__field">
                  <label htmlFor="cf-name">{t('pages.nameLabel')}<span>*</span></label>
                  <input autoComplete="name" id="cf-name" name="name" required type="text" value={formData.name} onChange={handleChange} />
                </div>
                <div className="cf__field">
                  <label htmlFor="cf-email">{t('pages.emailLabel')}<span>*</span></label>
                  <input autoComplete="email" id="cf-email" name="email" required type="email" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="cf__field">
                <label htmlFor="cf-phone">{t('pages.phoneLabel')}</label>
                <input autoComplete="tel" id="cf-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="cf__field">
                <label htmlFor="cf-subject">{t('pages.subjectLabel')}<span>*</span></label>
                <select id="cf-subject" name="subject" required value={formData.subject} onChange={handleChange}>
                  <option value="" disabled>{t('pages.selectSubject')}</option>
                  {SUBJECT_KEYS.map((k) => (
                    <option key={k} value={t('pages.subjectOptions.' + k)}>{t('pages.subjectOptions.' + k)}</option>
                  ))}
                </select>
              </div>
              <div className="cf__field">
                <label htmlFor="cf-message">{t('pages.messageLabel')}<span>*</span></label>
                <textarea id="cf-message" name="message" required rows="6" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button className="cf__send" type="submit" disabled={submitState === 'sending'}>
                <svg fill="none" height="18" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24" width="18">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                {submitState === 'sending' ? t('pages.formSending') : t('pages.sendButton')}
              </button>
              <p className={'cf__status' + (submitState === 'error' ? ' is-error' : '')} role={submitState === 'error' ? 'alert' : 'status'}>
                {submitState === 'success' && t('pages.formSuccess')}
                {submitState === 'error' && (errorDetail || t('pages.formError'))}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
