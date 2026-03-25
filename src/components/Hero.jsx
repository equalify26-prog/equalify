import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

const SLIDES = [
  { src: '/images/image-landing%202.jpg', alt: 'Slide 1' },
  { src: '/images/image-landing%205.jpg', alt: 'Slide 2' },
  { src: '/images/landing-about%20us.jpg', alt: 'Slide 3' },
  { src: '/images/image4.jpg', alt: 'Slide 4' },
  { src: '/images/image6.jpg', alt: 'Slide 5' },
]

const INTERVAL_MS = 5000

export default function Hero() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, INTERVAL_MS)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero">
      <div className="hero__slider">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.src})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">EQUALIFY</h1>
        <p className="hero__tagline">{t('hero.tagline')}</p>
        <Link to="/about" className="hero__cta">
          {t('hero.cta')}
        </Link>
      </div>
      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  )
}
