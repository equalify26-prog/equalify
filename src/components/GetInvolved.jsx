import { useCallback, useEffect, useId, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { submitContact } from '../api/contact'
import './GetInvolved.css'

const OPTIONS = [
  { id: 'volunteer', titleKey: 'pages.volunteer', descKey: 'pages.volunteerDesc' },
  { id: 'partner', titleKey: 'pages.partner', descKey: 'pages.partnerDesc' },
]

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
    <section className="get-involved" id="get-involved">
      <div className="get-involved__inner">
        <h2 className="get-involved__title">{t('pages.getInvolvedTitle')}</h2>
        <div className="get-involved__cards">
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className="get-involved__card"
              onClick={() => openModal(opt.id)}
            >
              <h3>{t(opt.titleKey)}</h3>
              <p>{t(opt.descKey)}</p>
            </button>
          ))}
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
    </section>
  )
}
