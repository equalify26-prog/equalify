import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../design/design.css'
import '../design/donation.css'

// TODO: paste your payment link here (Stripe Payment Link, PayU, Przelewy24, PayPal.me ...)
const PAYMENT_URL = ''

export default function DonationPage() {
  const { t } = useLanguage()
  const [amount, setAmount] = useState('20')
  const [other, setOther] = useState('')
  const [status, setStatus] = useState('')

  const total = amount === 'other' ? parseFloat(other) || 0 : parseFloat(amount)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (total < 5) {
      setStatus('Please choose an amount (minimum 5 zł).')
      return
    }
    if (PAYMENT_URL) {
      window.location.href = PAYMENT_URL
      return
    }
    setStatus('Online payment is not switched on yet. Please write to equalify26@gmail.com and we will send you the details.')
  }
  return (
    <div className="eqd page-donation">
      <section className="page-title">
        <h1>
          {t('pages.donationTitle')}
        </h1>
        <div className="accent-rule"></div>
        <p>
          {t('pages.donationHeroSubtitle')}
        </p>
      </section>
      <div style={{ width: "100%", background: "#FFFFFF", padding: "64px 6% 84px", boxSizing: "border-box" }}>
        <div className="rg-2" style={{ maxWidth: "1020px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,.82fr) minmax(0,1.18fr)", borderRadius: "34px", overflow: "hidden", boxShadow: "0 22px 54px rgba(47,74,71,.14)" }}>
          <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#4F7A76 0%,#3f6965 100%)", color: "#F6F1E7", padding: "44px 36px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ position: "absolute", left: "180px", top: "-80px", width: "240px", height: "240px", borderRadius: "50%", background: "rgba(246,241,231,0.08)" }}></div>
            <div style={{ position: "absolute", left: "-130px", top: "370px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(246,241,231,0.06)" }}></div>
            <div style={{ position: "relative" }}>
              <span style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#D9A441", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg fill="none" height="29" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="29">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
                </svg>
              </span>
              <h2 className="disp" style={{ fontWeight: "700", fontSize: "40px", lineHeight: "1.04", letterSpacing: "1px", textTransform: "uppercase", margin: "24px 0 16px" }}>
                Make a donation
              </h2>
              <span className="eq"></span>
              <p style={{ fontSize: "16px", lineHeight: "1.8", margin: "22px 0 0", color: "#F6F1E7" }}>
                Your support helps us empower marginalised communities, promote inclusion, and advance social justice. Every contribution makes a difference.
              </p>
            </div>
          </div>
          <form className="dn" onSubmit={handleSubmit}>
            <h3 className="dn__h">
              Amount
            </h3>
            <div className="dn__grid" aria-label="Donation amount" role="radiogroup">
              <label className={'amt' + (amount === '20' ? ' is-selected' : '')}>
                <input name="amount" type="radio" value="20" checked={amount === '20'} onChange={() => setAmount('20')} />
                {' '}
                <span className="amt__top">
                  <span className="amt__icon">
                    <svg fill="none" height="19" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="19">
                      <circle cx="9" cy="8" r="3.5" />
                      <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M16 4.8a3.5 3.5 0 010 6.4M18 14.4c2.2.7 3.5 2.6 3.5 5.6" />
                    </svg>
                  </span>
                  <span className="amt__radio"></span>
                </span>
                {' '}
                <span className="amt__value">
                  20 zł
                </span>
                <span className="amt__desc">
                  Support one local workshop
                </span>
              </label>
              {' '}
              <label className={'amt' + (amount === '50' ? ' is-selected' : '')}>
                <input name="amount" type="radio" value="50" checked={amount === '50'} onChange={() => setAmount('50')} />
                {' '}
                <span className="amt__top">
                  <span className="amt__icon">
                    <svg fill="none" height="19" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="19">
                      <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM4 19a2 2 0 012-2h13" />
                      <path d="M9 7h6" />
                    </svg>
                  </span>
                  <span className="amt__radio"></span>
                </span>
                {' '}
                <span className="amt__value">
                  50 zł
                </span>
                <span className="amt__desc">
                  Support educational materials
                </span>
              </label>
              {' '}
              <label className={'amt' + (amount === '100' ? ' is-selected' : '')}>
                <input name="amount" type="radio" value="100" checked={amount === '100'} onChange={() => setAmount('100')} />
                {' '}
                <span className="amt__top">
                  <span className="amt__icon">
                    <svg fill="none" height="19" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="19">
                      <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
                      <path d="M5 19c2-4 5-7 9-10" />
                    </svg>
                  </span>
                  <span className="amt__radio"></span>
                </span>
                {' '}
                <span className="amt__value">
                  100 zł
                </span>
                <span className="amt__desc">
                  Support community activities
                </span>
              </label>
              {' '}
              <label className={'amt' + (amount === 'other' ? ' is-selected' : '')}>
                <input name="amount" type="radio" value="other" checked={amount === 'other'} onChange={() => setAmount('other')} />
                {' '}
                <span className="amt__top">
                  <span className="amt__icon">
                    <svg fill="none" height="19" stroke="#4F7A76" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="19">
                      <path d="M4 20l1-4L16 5l3 3L8 19z" />
                    </svg>
                  </span>
                  <span className="amt__radio"></span>
                </span>
                {' '}
                <span className="amt__value">
                  Other
                </span>
                <span className="amt__desc">
                  Custom amount
                </span>
              </label>
            </div>
            <div className="dn__other" hidden={amount !== 'other'}>
              <label htmlFor="dn-other-input">
                Custom amount (zł)
              </label>
              <input id="dn-other-input" inputMode="numeric" min="5" placeholder="e.g. 75" step="1" type="number" value={other} onChange={(e) => setOther(e.target.value)} />
            </div>
            <div className="dn__total">
              <span>
                Total
              </span>
              <strong>
                {total.toFixed(2)} zł
              </strong>
            </div>
            <p className="dn__note">
              Secure online payment. You will choose how to pay (card, Apple Pay) on the next step.
            </p>
            <button className="dn__btn" type="submit">
              <svg fill="none" height="21" stroke="#2F4A47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24" width="21">
                <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
              </svg>
              Donate
              <i>
                <svg fill="none" height="13" stroke="#F6F1E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" viewBox="0 0 24 24" width="13">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </i>
            </button>
            <p className={'dn__status' + (status ? ' is-error' : '')} role="status">{status}</p>
          </form>
        </div>
      </div>
    </div>
  )
}
