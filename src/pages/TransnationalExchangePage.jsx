import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

export default function TransnationalExchangePage() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const photos = [
    '/images/denmark-7.jpg',
    '/images/denmark-1.jpg',
    '/images/denmark-2.jpg',
    '/images/denmark-5.jpg',
    '/images/denmark-6.jpg',
    '/images/denmark-8.jpg',
  ]

  const handleImageError = (e) => {
    e.target.src = '/images/image-landing 2.jpg' // Fallback image
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoPlay, photos.length])

  const handlePrevPhoto = () => {
    setAutoPlay(false)
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const handleNextPhoto = () => {
    setAutoPlay(false)
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const handleDotClick = (index) => {
    setAutoPlay(false)
    setCurrentPhotoIndex(index)
  }

  return (
    <div className="page">
      <div className="page__container">
        <h1 className="page__title">Transnational Peer Exchange & Co-Design in Denmark 🇩🇰</h1>
        
        <div className="transnational__info">
          <p className="transnational__date"><strong>1–2 August 2026 | Ishøj, Denmark</strong></p>
          
          <p className="transnational__intro">
            As part of the <strong>Erasmus+ HERIZON project</strong>, partners from <strong>Denmark, Poland, and Italy</strong> came together in Ishøj for a two-day Transnational Peer Exchange & Co-Design meeting.
          </p>
          
          <p className="transnational__focus">
            The meeting focused on <strong>sharing good practices, exchanging experiences, and turning research findings into practical solutions</strong> for young migrant women.
          </p>

          <h2 className="transnational__subtitle">During the two days, partners:</h2>
          <ul className="transnational__list">
            <li>Shared approaches and good practices from the three countries</li>
            <li>Co-designed the structure of the <strong>HERIZON Digital Toolkit</strong></li>
            <li>Developed the methodology for the <strong>HERIZON Empowerment Labs</strong></li>
            <li>Agreed on key actions and next steps for the project</li>
          </ul>

          <p className="transnational__conclusion">
            The meeting was an important step in transforming research and shared expertise into practical tools that support <strong>life skills, confidence, empowerment, and integration of young migrant women</strong>.
          </p>

          <p className="transnational__tagline">🤝 <strong>Different countries. Different experiences. One shared goal.</strong></p>
        </div>

        <div className="transnational__gallery">
          <h2 className="transnational__gallery-title">Photo Gallery</h2>
          
          <div className="transnational__slider">
            <div className="transnational__slide">
              <img 
                src={photos[currentPhotoIndex]} 
                alt={`Denmark Exchange ${currentPhotoIndex + 1}`} 
                className="transnational__image"
                onError={handleImageError}
              />
            </div>

            <button className="transnational__arrow transnational__arrow--prev" onClick={handlePrevPhoto}>
              ❮
            </button>
            <button className="transnational__arrow transnational__arrow--next" onClick={handleNextPhoto}>
              ❯
            </button>
          </div>

          <div className="transnational__dots">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`transnational__dot ${index === currentPhotoIndex ? 'transnational__dot--active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>

          <p className="transnational__counter">
            {currentPhotoIndex + 1} / {photos.length}
          </p>
        </div>

        <Link to="/projects/herizon" className="page__cta">Back to Project</Link>
      </div>
    </div>
  )
}
