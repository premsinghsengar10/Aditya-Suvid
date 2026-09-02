import { useState } from 'react'
import { Mail, SunMedium, MoonStar, Menu, X } from 'lucide-react'
import { navItems, siteAssets } from '../data/content'
import './styles/Header.css'

const Header = ({ theme, onToggleTheme, navigate, currentPath = window.location.pathname }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const getItemPath = (item) => item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`

  const onNavClick = (e, item) => {
    e.preventDefault()
    const path = getItemPath(item)
    if (navigate) navigate(path)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="topbar container">
        <div className="brand-block">
          <a href="/" className="brand-mark" onClick={(e)=>{e.preventDefault(); navigate && navigate('/')}}>
            <img src={siteAssets.logo.image} alt="Aditya Suvid Retail logo" />
            <span>Suvid Retail</span>
          </a>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={getItemPath(item)}
              className={`nav-item ${getItemPath(item) === currentPath || (item === 'Home' && currentPath === '/home') ? 'active' : ''}`}
              onClick={(e) => onNavClick(e, item)}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="utility-actions" aria-label="Utilities">
          <a href="mailto:hr@suvidretail.in" className="icon-button" aria-label="Email human resources">
            <Mail size={15} />
          </a>
          <button
            type="button"
            className="icon-button"
            aria-label="Toggle theme"
            aria-pressed={theme === 'light'}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <SunMedium size={15} /> : <MoonStar size={15} />}
          </button>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label="Open menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu panel-surface">
          <nav aria-label="Mobile menu">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                className={`mobile-nav-item ${getItemPath(item) === currentPath || (item === 'Home' && currentPath === '/home') ? 'active' : ''}`}
                onClick={(e) => onNavClick(e, item)}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <button
              type="button"
              className="mobile-theme-toggle"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme === 'light'}
            >
              <span>{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
              {theme === 'dark' ? <SunMedium size={16} /> : <MoonStar size={16} />}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
