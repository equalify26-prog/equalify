import { useMemo, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './pages.css'

export default function DonationPage() {
  const { t } = useLanguage()
  const [selectedAmount, setSelectedAmount] = useState('20')
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')

  const amountOptions = [
    { value: '20', label: '20 zl', description: 'Support one local workshop' },
    { value: '50', label: '50 zl', description: 'Support educational materials' },
    { value: '100', label: '100 zl', description: 'Support community activities' },
    { value: 'custom', label: 'Other', description: 'Custom amount' },
  ]

  const totalValue = useMemo(() => {
    if (selectedAmount === 'custom') {
      const parsed = Number(customAmount)
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
    }
    return Number(selectedAmount)
  }, [selectedAmount, customAmount])

  const displayTotal = `${totalValue.toFixed(2)} zl`

  const handleSubmit = (e) => {
    e.preventDefault()
    if (paymentMethod === 'applePay') {
      alert('Apple Pay is not connected yet. Please choose Card for now.')
    }
  }

  return (
    <div className="page">
      <div className="page__hero">
        <div className="page__hero-content">
          <h1 className="page__hero-title">{t('pages.donationTitle')}</h1>
          <p className="page__hero-subtitle">{t('pages.donationHeroSubtitle')}</p>
        </div>
      </div>
      <div className="page__container">
        <section className="page__donation-card" aria-label="Donation form">
          <div className="page__donation-icon" aria-hidden="true">♥</div>
          <h2 className="page__donation-title">Make a Donation</h2>
          <p className="page__donation-support">
            Your support helps us empower marginalised communities, promote inclusion, and advance social justice. Every contribution makes a difference.
          </p>

          <form className="page__donation-form" onSubmit={handleSubmit}>
            <fieldset className="page__donation-fieldset">
              <legend className="page__donation-label">Amount</legend>
              <div className="page__donation-amount-grid">
                {amountOptions.map((option) => (
                  <label key={option.value} className={`page__donation-amount-card${selectedAmount === option.value ? ' is-selected' : ''}`}>
                    <input
                      type="radio"
                      name="donation-amount"
                      value={option.value}
                      checked={selectedAmount === option.value}
                      onChange={(e) => setSelectedAmount(e.target.value)}
                    />
                    <span className="page__donation-amount-title">{option.label}</span>
                    <span className="page__donation-amount-desc">{option.description}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {selectedAmount === 'custom' && (
              <div className="page__form-group page__donation-custom-row">
                <label className="page__form-label" htmlFor="custom-donation-amount">Custom amount (zl)</label>
                <input
                  id="custom-donation-amount"
                  className="page__form-input"
                  type="number"
                  min="1"
                  step="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                />
              </div>
            )}

            <div className="page__donation-total-row">
              <span>Total</span>
              <strong>{displayTotal}</strong>
            </div>

            <fieldset className="page__donation-fieldset">
              <legend className="page__donation-label">Payment method</legend>
              <div className="page__donation-payment-methods" role="radiogroup" aria-label="Payment method">
                <label className={`page__donation-payment-method${paymentMethod === 'card' ? ' is-selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment-method"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <span>Card</span>
                </label>
                <label className={`page__donation-payment-method${paymentMethod === 'applePay' ? ' is-selected' : ''}`}>
                  <input
                    type="radio"
                    name="payment-method"
                    value="applePay"
                    checked={paymentMethod === 'applePay'}
                    onChange={() => setPaymentMethod('applePay')}
                  />
                  <span>Apple Pay</span>
                </label>
              </div>
            </fieldset>

            {paymentMethod === 'card' ? (
              <div className="page__donation-card-row">
                <input className="page__form-input" type="text" placeholder="Card number" inputMode="numeric" />
                <input className="page__form-input" type="text" placeholder="MM / YY" />
                <input className="page__form-input" type="text" placeholder="CVC" inputMode="numeric" />
              </div>
            ) : (
              <button className="page__donation-applepay" type="button">Pay with Apple Pay</button>
            )}

            <button className="page__donation-submit" type="submit">Donate</button>
          </form>
        </section>
      </div>
    </div>
  )
}
