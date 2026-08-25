import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { siteAssets } from '../data/content'
import './styles/HeroSection.css'

const heroSlides = [
  {
    id: 'architecture',
    image: siteAssets.hero.image,
    kicker: 'Jaguar TCS Racing',
    title: 'Built for the Record Books',
    description: 'Jaguar TCS Racing are the 2026 ABB FIA Formula E Teams’ World Champions.',
  },
  {
    id: 'heritage',
    image: siteAssets.timeline.image,
    kicker: 'Our Story',
    title: 'Shaping Tomorrow with Trust',
    description: 'A legacy of enterprise, values, and long-term impact that spans generations.',
  },
  {
    id: 'main',
    image: siteAssets.news.main,
    kicker: 'In Focus',
    title: 'Designing the next chapter',
    description: 'Bold ideas, thoughtful growth, and meaningful experiences for communities worldwide.',
  },
]

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return undefined

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, activeSlide])

  const currentSlide = heroSlides[activeSlide]

  return (
    <section className="hero-section" id="hero" data-section-key="hero" data-section-label="Home">
      <div className="hero-image-wrap">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide.id}
            src={currentSlide.image}
            alt={currentSlide.title || currentSlide.kicker || ''}
            className="hero-image"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.06 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="hero-overlay" aria-hidden="true" />
      </div>

      <motion.div
        className="hero-content container"
        key={currentSlide.id}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <div className="hero-copy-rail">
          <div className="hero-copy-block">
            <small className="eyebrow">{currentSlide.kicker}</small>
            <h1 className="hero-title">{currentSlide.title}</h1>
            <p className="hero-desc">{currentSlide.description}</p>
            <a href="#" className="story-button">Photo feature →</a>
          </div>

        </div>
      </motion.div>

      <div className="hero-controls" aria-label="Hero controls">
        <div className="hero-progress-rail" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <span
              key={slide.id}
              className={`progress-step ${index === activeSlide ? 'active' : ''} ${index < activeSlide ? 'done' : ''}`}
            />
          ))}
        </div>

        <div className="hero-left-status">
          <button
            type="button"
            className="hero-progress-status"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? 'Play hero slideshow' : 'Pause hero slideshow'}
            data-tooltip={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          >
            {isPaused ? (
              <Play size={10} fill="currentColor" strokeWidth={2} aria-hidden="true" />
            ) : (
              <Pause size={10} fill="currentColor" strokeWidth={2} aria-hidden="true" />
            )}
            <span className="hero-index">{String(activeSlide + 1).padStart(2, '0')} / {heroSlides.length}</span>
          </button>
        </div>

      </div>

      <button
        type="button"
        className="hero-down"
        aria-label="Scroll to next section"
        onClick={() => {
          const next = document.getElementById('news') || document.getElementById('brands') || document.getElementById('timeline')
          if (next) next.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <span className="chev" />
        <span className="chev" />
        <span className="chev" />
      </button>
    </section>
  )
}

export default HeroSection
