import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { submitContact } from '../api/contact'
import './pages.css'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState(emptyForm)
  const [submitState, setSubmitState] = useState('idle')
  const [errorDetail, setErrorDetail] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitState('sending')
    setErrorDetail('')
    try {
      await submitContact({
        kind: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      })
      setSubmitState('success')
      setFormData(emptyForm)
    } catch (err) {
      setSubmitState('error')
      setErrorDetail(err instanceof Error ? err.message : t('pages.formError'))
    }
  }

  return (
    <div className="page">
      <div className="page__contact-hero">
        <div className="page__contact-hero-content">
          <h1 className="page__contact-hero-title">{t('pages.contactTitle')}</h1>
          <p className="page__contact-hero-subtitle">{t('pages.contactSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <div className="page__contact-form-section">
          <div className="page__contact-form-header">
            <h3 className="page__contact-form-title">{t('pages.sendMessage')}</h3>
            <p className="page__contact-form-desc">{t('pages.messageDesc')}</p>
          </div>
          <form className="page__contact-form" onSubmit={handleSubmit}>
            {submitState === 'success' && (
              <p className="page__form-feedback page__form-feedback--success" role="status">
                {t('pages.formSuccess')}
              </p>
            )}
            {submitState === 'error' && (
              <p className="page__form-feedback page__form-feedback--error" role="alert">
                {errorDetail || t('pages.formError')}
              </p>
            )}
            <div className="page__form-row">
              <div className="page__form-group">
                <label htmlFor="name" className="page__form-label">
                  {t('pages.nameLabel')} <span className="page__form-required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="page__form-input"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="page__form-group">
                <label htmlFor="email" className="page__form-label">
                  {t('pages.emailLabel')} <span className="page__form-required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="page__form-input"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="page__form-group">
              <label htmlFor="phone" className="page__form-label">
                {t('pages.phoneLabel')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="page__form-input"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="page__form-group">
              <label htmlFor="subject" className="page__form-label">
                {t('pages.subjectLabel')} <span className="page__form-required">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                className="page__form-select"
                required
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">{t('pages.selectSubject')}</option>
                <option value={t('pages.subjectOptions.consultation')}>{t('pages.subjectOptions.consultation')}</option>
                <option value={t('pages.subjectOptions.training')}>{t('pages.subjectOptions.training')}</option>
                <option value={t('pages.subjectOptions.workshop')}>{t('pages.subjectOptions.workshop')}</option>
                <option value={t('pages.subjectOptions.speaking')}>{t('pages.subjectOptions.speaking')}</option>
                <option value={t('pages.subjectOptions.research')}>{t('pages.subjectOptions.research')}</option>
                <option value={t('pages.subjectOptions.mentoring')}>{t('pages.subjectOptions.mentoring')}</option>
                <option value={t('pages.subjectOptions.media')}>{t('pages.subjectOptions.media')}</option>
                <option value={t('pages.subjectOptions.other')}>{t('pages.subjectOptions.other')}</option>
              </select>
            </div>
            <div className="page__form-group">
              <label htmlFor="message" className="page__form-label">
                {t('pages.messageLabel')} <span className="page__form-required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="page__form-textarea"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="page__form-submit" disabled={submitState === 'sending'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              {submitState === 'sending' ? t('pages.formSending') : t('pages.sendButton')}
            </button>
          </form>
        </div>

        <div className="page__contact-info-section">
            <div className="page__contact-info-block">
              <div className="page__contact-info-item">
                <div className="page__contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </div>
                <div className="page__contact-info-content">
                  <h3 className="page__contact-info-title">{t('pages.emailTitle')}</h3>
                  <a href="mailto:equalify26@gmail.com" className="page__contact-info-link">
                    equalify26@gmail.com
                  </a>
                </div>
              </div>
              <div className="page__contact-info-item">
                <div className="page__contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="page__contact-info-content">
                  <h3 className="page__contact-info-title">{t('pages.addressTitle')}</h3>
                  <p className="page__contact-info-text">
                    Warsaw<br />
                    Poland
                  </p>
                </div>
              </div>
            </div>
            <div className="page__contact-social">
              <h3 className="page__contact-social-title">{t('pages.connectWithUs')}</h3>
              <div className="page__contact-social-links">
                <a href="https://www.facebook.com/suatas.project.academy" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="page__contact-social-link page__contact-social-link--facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/suatas.project.academy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="page__contact-social-link page__contact-social-link--instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/suatas-project-academy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="page__contact-social-link page__contact-social-link--linkedin">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
