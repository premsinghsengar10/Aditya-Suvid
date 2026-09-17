import { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsSection from './components/NewsSection'
import TimelineSection from './components/TimelineSection'
import CareersSection from './components/CareersSection'
import BrandsSection from './components/BrandsSection'
import LinkedInSection from './components/LinkedInSection'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import './App.css'

import CareersPage from './pages/CareersPage'
import CareerDetailPage from './pages/CareerDetailPage'
import StoryPage from './pages/StoryPage'
import AboutPage from './pages/AboutPage'
import CompaniesPage from './pages/CompaniesPage'
import ArticlesPage from './pages/ArticlesPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('aditya-suvid-theme') || 'light')
  const [isPreloading, setIsPreloading] = useState(true)
  const [showCookieBanner, setShowCookieBanner] = useState(() => (
    !localStorage.getItem('aditya-suvid-cookie-consent')
  ))
  const [route, setRoute] = useState(window.location.pathname || '/')

  useEffect(() => {
    localStorage.setItem('aditya-suvid-theme', theme)
  }, [theme])

  useEffect(() => {
    const timerId = window.setTimeout(() => setIsPreloading(false), 1600) // 16 seconds
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

      {/* Simple routing: root (/) shows home sections, other paths render pages */}
      {route === '/' || route === '/home' ? (
        <>
          <HeroSection theme={theme} />
          <NewsSection />
          <TimelineSection />
          <CareersSection />
          <BrandsSection />
          <LinkedInSection />
        </>
      ) : route === '/careers' ? (
        <CareersPage navigate={navigate} />
      ) : route.startsWith('/careers/') ? (
        <CareerDetailPage slug={route.replace('/careers/', '')} navigate={navigate} />
      ) : route === '/story' ? (
        <StoryPage navigate={navigate} />
      ) : route.startsWith('/story/') ? (
        <StoryPage chapterSlug={route.replace('/story/', '')} navigate={navigate} />
      ) : route === '/companies' ? (
        <CompaniesPage />
      ) : route === '/about' ? (
        <AboutPage />
      ) : route === '/articles' ? (
        <ArticlesPage navigate={navigate} />
      ) : route.startsWith('/articles/') ? (
        <ArticlesPage slug={route.replace('/articles/', '')} navigate={navigate} />
      ) : route === '/contact' ? (
        <ContactPage />
      ) : (
        // fallback to home
        <>
          <HeroSection theme={theme} />
          <NewsSection />
          <TimelineSection />
          <CareersSection />
          <BrandsSection />
          <LinkedInSection />
        </>
      )}

      <Footer currentPath={route} />

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
