import { useState } from 'react'
import { Globe, Mail, Search, SunMedium, MoonStar, Menu, X } from 'lucide-react'
import { navItems } from '../data/content'
import './styles/Header.css'

const Header = ({ theme, onToggleTheme, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const onNavClick = (e, item) => {
    e.preventDefault()
    const path = item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`
    if (navigate) navigate(path)
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="topbar container">
        <div className="brand-block">
          <a href="/" className="brand-mark" onClick={(e)=>{e.preventDefault(); navigate && navigate('/')}}>Aditya Suvid Retail</a>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <div key={item} className={`nav-item-wrap`}>
              <a
                href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                className={`nav-item ${item === 'Home' ? 'active' : ''}`}
                onClick={(e) => onNavClick(e, item)}
              >
                {item}
              </a>

              {/* simple mega menu shown on hover for Companies/Story/Careers */}
              {(item === 'Companies' || item === 'Story' || item === 'About') && (
                <div className="nav-mega" aria-hidden="true">
                  <div className="nav-mega-inner">
                    <div className="nav-mega-header">
                      <h3>Overview</h3>
                      <div className="nav-mega-hr" />
                      <p className="nav-mega-sub">Areas of Work</p>
                    </div>

                    <div className="nav-mega-grid">
                      <ul>
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Education</a></li>
                      </ul>
                      <ul>
                        <li><a href="#">Empowerment</a></li>
                        <li><a href="#">Environment</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="utility-actions" aria-label="Utilities">
          <button type="button" className="icon-button" aria-label="Global">
            <Globe size={15} />
          </button>
          <button type="button" className="icon-button" aria-label="Email">
            <Mail size={15} />
          </button>
          <button type="button" className="icon-button" aria-label="Search">
            <Search size={15} />
          </button>
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
              <button key={item} type="button" className={`mobile-nav-item ${item === 'Home' ? 'active' : ''}`}>
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
