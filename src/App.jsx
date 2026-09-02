import { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import TimelineSection from './components/TimelineSection'
import CareersSection from './components/CareersSection'
import BrandsSection from './components/BrandsSection'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import './App.css'

import CareersPage from './pages/CareersPage'
import StoryPage from './pages/StoryPage'
import AboutPage from './pages/AboutPage'
import CompaniesPage from './pages/CompaniesPage'
import ArticlesPage from './pages/ArticlesPage'

const sectionNames = {
  hero: 'Home',
  news: 'News',
  timeline: 'Timeline',
  careers: 'Careers',
  brands: 'Entities',
  footer: 'Footer',
}

const sectionList = Object.entries(sectionNames).map(([key, label]) => ({ key, label }))

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('aditya-suvid-theme') || 'dark')
  const [isPreloading, setIsPreloading] = useState(true)
  const [showCookieBanner, setShowCookieBanner] = useState(() => (
    !localStorage.getItem('aditya-suvid-cookie-consent')
  ))
  const [activeSection, setActiveSection] = useState('Home')
  const [hoveredSection, setHoveredSection] = useState(null)
  const [showSectionMarker, setShowSectionMarker] = useState(false)
  const [route, setRoute] = useState(window.location.pathname || '/')

  useEffect(() => {
    localStorage.setItem('aditya-suvid-theme', theme)
  }, [theme])

  useEffect(() => {
    const timerId = window.setTimeout(() => setIsPreloading(false), 1600)
    return () => window.clearTimeout(timerId)
  }, [])

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
    let timerId

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

      window.clearTimeout(timerId)
      timerId = window.setTimeout(() => setShowSectionMarker(false), 3000)
    }

    updateSection()
    window.addEventListener('scroll', updateSection, { passive: true })
    window.addEventListener('resize', updateSection)

    return () => {
      window.clearTimeout(timerId)
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
    <div className={`app-shell ${route === '/' || route === '/home' ? 'home-route' : ''}`} data-theme={theme}>
      {isPreloading && <Preloader />}

      <Header
        theme={theme}
        onToggleTheme={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))}
        navigate={navigate}
        currentPath={route}
      />

      {(route === '/' || route === '/home') && (
        <div className={`section-marker ${showSectionMarker || hoveredSection ? 'visible' : ''}`} aria-live="polite">
          {sectionList.map(({ key, label }) => {
            const isActive = activeSection === label
            const isHovered = hoveredSection === label

            return (
              <button
                key={key}
                type="button"
                className={`section-marker-item ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredSection(label)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => {
                  const target = document.getElementById(key === 'hero' ? 'hero' : key)
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                aria-label={`Jump to ${label}`}
              >
                <span className="section-marker-rail" aria-hidden="true" />
                <span className="section-marker-label">{label}</span>
              </button>
            )
          })}
        </div>
      )}

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
      ) : route === '/companies' ? (
        <CompaniesPage />
      ) : route === '/about' ? (
        <AboutPage />
      ) : route === '/articles' ? (
        <ArticlesPage navigate={navigate} />
      ) : route.startsWith('/articles/') ? (
        <ArticlesPage slug={route.replace('/articles/', '')} navigate={navigate} />
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
