import { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import TimelineSection from './components/TimelineSection'
import CareersSection from './components/CareersSection'
import BrandsSection from './components/BrandsSection'
import Footer from './components/Footer'
import './App.css'

import CareersPage from './pages/CareersPage'
import StoryPage from './pages/StoryPage'
import AboutPage from './pages/AboutPage'

const sectionNames = {
  hero: 'Home',
  news: 'News',
  timeline: 'Timeline',
  careers: 'Careers',
  brands: 'Brands',
  footer: 'Footer',
}

const App = () => {
  const [theme, setTheme] = useState('dark')
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [showSectionMarker, setShowSectionMarker] = useState(false)
  const [route, setRoute] = useState(window.location.pathname || '/')

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname || '/')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (path) => {
    if (path === route) return
    window.history.pushState({}, '', path)
    setRoute(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const consent = localStorage.getItem('aditya-suvid-cookie-consent')
    if (!consent) {
      setShowCookieBanner(true)
    }
  }, [])

  useEffect(() => {
    let hideTimer

    const updateSection = () => {
      const sections = [...document.querySelectorAll('[data-section-key]')]

      let current = 'Home'
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top - 220)

        if (rect.top <= window.innerHeight * 0.55 && rect.bottom >= window.innerHeight * 0.2 && distance < closestDistance) {
          closestDistance = distance
          current = section.dataset.sectionLabel || sectionNames[section.dataset.sectionKey] || 'Home'
        }
      })

      setActiveSection(current)
      setShowSectionMarker(true)

      window.clearTimeout(hideTimer)
      hideTimer = window.setTimeout(() => setShowSectionMarker(false), 2000)
    }

    updateSection()
    window.addEventListener('scroll', updateSection, { passive: true })
    window.addEventListener('resize', updateSection)

    return () => {
      window.clearTimeout(hideTimer)
      window.removeEventListener('scroll', updateSection)
      window.removeEventListener('resize', updateSection)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('aditya-suvid-cookie-consent', 'accepted')
    setShowCookieBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('aditya-suvid-cookie-consent', 'dismissed')
    setShowCookieBanner(false)
  }

  return (
    <div className="app-shell" data-theme={theme}>
      <Header theme={theme} onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} navigate={navigate} />

      <div className={`section-marker ${showSectionMarker ? 'visible' : ''}`} aria-live="polite">
        <span className="section-marker-dot" aria-hidden="true" />
        <span>{activeSection}</span>
      </div>

      {/* Simple routing: root (/) shows home sections, other paths render pages */}
      {route === '/' || route === '/home' ? (
        <>
          <HeroSection theme={theme} />
          <NewsSection />
          <TimelineSection />
          <CareersSection />
          <BrandsSection />
        </>
      ) : route === '/careers' ? (
        <CareersPage />
      ) : route === '/story' ? (
        <StoryPage />
      ) : route === '/about' ? (
        <AboutPage />
      ) : (
        // fallback to home
        <>
          <HeroSection theme={theme} />
          <NewsSection />
          <TimelineSection />
          <CareersSection />
          <BrandsSection />
        </>
      )}

      <Footer />

      {showCookieBanner && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie notice">
          <div className="cookie-copy">
            <span className="cookie-emoji" aria-hidden="true">🍪</span>
            <div>
              <strong>We use cookies.</strong>
              <p>Mostly to keep the site from acting like a dramatic villain. Accept for a smoother ride.</p>
            </div>
          </div>

          <div className="cookie-actions">
            <button type="button" className="cookie-btn primary" onClick={acceptCookies}>
              I accept cookies
            </button>
            <button type="button" className="cookie-btn secondary" onClick={rejectCookies}>
              No thanks, chaos wins
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
