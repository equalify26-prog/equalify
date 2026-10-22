import { useCallback, useEffect, useId, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { submitContact } from '../api/contact'
import '../design/design.css'
import '../design/index.css'
import './GetInvolved.css'

export default function GetInvolved() {
  const { t } = useLanguage()
  const titleId = useId()
  const [modalType, setModalType] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitState, setSubmitState] = useState('idle')
  const [errorDetail, setErrorDetail] = useState('')

  const closeModal = useCallback(() => {
    setModalType(null)
  }, [])

  useEffect(() => {
    if (!modalType) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [modalType, closeModal])

  const openModal = (type) => {
    setFormData({ name: '', email: '', phone: '', message: '' })
    setSubmitState('idle')
    setErrorDetail('')
    setModalType(type)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!modalType) return
    setSubmitState('sending')
    setErrorDetail('')
    try {
      await submitContact({
        kind: modalType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })
      setSubmitState('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => {
        closeModal()
        setSubmitState('idle')
      }, 1600)
    } catch (err) {
      setSubmitState('error')
      setErrorDetail(err instanceof Error ? err.message : t('pages.formError'))
    }
  }

  return (
    <>
      <div className="eqd page-index" id="get-involved">
        <div className="rp-big" style={{ width: "100%", background: "#F6F1E7", padding: "88px 7% 92px", boxSizing: "border-box" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center" }}>
              <h2 className="h2" style={{ fontSize: "38px", color: "#2F4A47", textAlign: "center" }}>
                {t('pages.getInvolvedTitle')}
              </h2>
              <div style={{ marginTop: "14px", textAlign: "center" }}>
                <span className="eq"></span>
              </div>
            </div>
            <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", marginTop: "44px", borderRadius: "32px", overflow: "hidden", boxShadow: "0 24px 54px rgba(47,74,71,.18)" }}>
              <div className="rp-card" style={{ padding: "48px 44px", background: "linear-gradient(135deg,#4F7A76 0%,#3f6965 100%)", color: "#F6F1E7" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <span style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg fill="none" height="28" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28">
                      <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
                    </svg>
                  </span>
                  <h3 className="disp" style={{ fontWeight: "700", fontSize: "34px", margin: "0", color: "#F6F1E7" }}>
                    {t('pages.volunteer')}
                  </h3>
                </div>
                <p style={{ fontSize: "16.5px", lineHeight: "1.75", margin: "0 0 24px", color: "rgba(246,241,231,.92)" }}>
                  {t('pages.volunteerDesc')}
                </p>
                <button type="button" onClick={() => openModal('volunteer')} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "14px", color: "#F6F1E7", background: "none", border: 0, padding: 0, cursor: "pointer", font: "inherit", fontFamily: "inherit" }}>
                  {t('activities.learnMore')}
                  <svg fill="none" height="14" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" viewBox="0 0 24 24" width="14">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
              <div className="rp-card" style={{ padding: "48px 44px", background: "#FFFFFF", color: "#2F4A47" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <span style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#4F7A76", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                    <svg fill="none" height="28" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28">
                      <circle cx="9" cy="8" r="3.5" />
                      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 010 6.4M18 14.4c2.2.7 3.5 2.6 3.5 5.6" />
                    </svg>
                  </span>
                  <h3 className="disp" style={{ fontWeight: "700", fontSize: "34px", margin: "0", color: "#2F4A47" }}>
                    {t('pages.partner')}
                  </h3>
                </div>
                <p style={{ fontSize: "16.5px", lineHeight: "1.75", margin: "0 0 24px", color: "#4F4F4F" }}>
                  {t('pages.partnerDesc')}
                </p>
                <button type="button" onClick={() => openModal('partner')} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "14px", color: "#4F7A76", background: "none", border: 0, padding: 0, cursor: "pointer", font: "inherit", fontFamily: "inherit" }}>
                  {t('activities.learnMore')}
                  <svg fill="none" height="14" stroke="#D9A441" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" viewBox="0 0 24 24" width="14">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalType && (
        <div
          className="get-involved__modal-backdrop"
          role="presentation"
          onClick={closeModal}
        >
          <div
            className="get-involved__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="get-involved__modal-close"
              onClick={closeModal}
              aria-label={t('pages.closeModal')}
            >
              ×
            </button>
            <h3 id={titleId} className="get-involved__modal-title">
              {modalType === 'volunteer' ? t('pages.volunteer') : t('pages.partner')}
            </h3>
            <p className="get-involved__modal-intro">{t('pages.getInvolvedFormIntro')}</p>
            {submitState === 'success' && (
              <p className="get-involved__feedback get-involved__feedback--success" role="status">
                {t('pages.formSuccess')}
              </p>
            )}
            {submitState === 'error' && (
              <p className="get-involved__feedback get-involved__feedback--error" role="alert">
                {errorDetail || t('pages.formError')}
              </p>
            )}
            <form className="get-involved__form" onSubmit={handleSubmit}>
              <div className="get-involved__form-row">
                <div className="get-involved__form-group">
                  <label htmlFor="gi-name" className="get-involved__label">
                    {t('pages.nameLabel')} <span className="get-involved__required">*</span>
                  </label>
                  <input
                    id="gi-name"
                    name="name"
                    type="text"
                    className="get-involved__input"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>
                <div className="get-involved__form-group">
                  <label htmlFor="gi-email" className="get-involved__label">
                    {t('pages.emailLabel')} <span className="get-involved__required">*</span>
                  </label>
                  <input
                    id="gi-email"
                    name="email"
                    type="email"
                    className="get-involved__input"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="get-involved__form-group">
                <label htmlFor="gi-phone" className="get-involved__label">
                  {t('pages.phoneLabel')}
                </label>
                <input
                  id="gi-phone"
                  name="phone"
                  type="tel"
                  className="get-involved__input"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
              <div className="get-involved__form-group">
                <label htmlFor="gi-message" className="get-involved__label">
                  {t('pages.messageLabel')} <span className="get-involved__required">*</span>
                </label>
                <textarea
                  id="gi-message"
                  name="message"
                  className="get-involved__textarea"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="get-involved__submit" disabled={submitState === 'sending'}>
                {submitState === 'sending' ? t('pages.formSending') : t('pages.sendButton')}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
