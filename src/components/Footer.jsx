import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { footerColumns } from '../data/content'
import './styles/Footer.css'

const footerLinkTargets = {
  'About Us': '/about',
  Careers: '/careers',
  'Monkey Troopers': 'https://monkeytroopers.com/',
  'FO Dubai': 'https://fodubai.in/',
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.footer
      className="site-footer"
      id="footer"
      data-section-key="footer"
      data-section-label="Footer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container footer-top">
        <div className="footer-left-stack">
          <div className="footer-brand-block">
            <div className="footer-brand">Aditya Suvid Retail</div>
            <p>
              Subscribe to receive corporate updates, brand news, and
              material content directly to your inbox.
            </p>
          </div>

          <div className="footer-side">
            <div className="socials" aria-hidden="true">
              <span style={{opacity:0.9}}>🔗</span>
              <span style={{opacity:0.9}}>✉️</span>
              <span style={{opacity:0.9}}>🔍</span>
            </div>

            <div className="subscribe-form" aria-label="Subscribe to updates">
              <input type="email" placeholder="Enter your email ID to subscribe" aria-label="Email Address" />
              <button type="button" aria-label="Submit email">→</button>
            </div>

          </div>
        </div>

        <div className="footer-columns">
          {footerColumns.map((column) => (
            <div key={column.title} className="footer-column">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={footerLinkTargets[link] || '#footer'}
                      target={footerLinkTargets[link]?.startsWith('http') ? '_blank' : undefined}
                      rel={footerLinkTargets[link]?.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© 2024 Aditya Suvid Retail. All Rights Reserved.</span>
        <button type="button" className="back-to-top" onClick={scrollToTop}>
          <span>BACK TO TOP</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </motion.footer>
  )
}

export default Footer
