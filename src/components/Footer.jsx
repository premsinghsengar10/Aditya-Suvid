import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { footerColumns, siteAssets } from '../data/content'
import './styles/Footer.css'

const footerLinkTargets = {
  'About Us': '/about',
  Story: '/story',
  Careers: '/careers',
  Companies: '/companies',
  Contact: '/contact',
  'Monkey Troopers': 'https://monkeytroopers.com/',
  'Fragrance d’Oasis': 'https://fodubai.in/',
  'Harmoniq Creative': 'https://www.harmoniqcreatives.com/',
}

const Footer = ({ currentPath = window.location.pathname }) => {
  const isCareerRoute = currentPath === '/careers' || currentPath.startsWith('/careers/')
  const contactEmail = isCareerRoute ? 'hr@suvidretail.in' : 'hemlata@suvidretail.com'

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
            <div className="footer-brand">
              <img src={siteAssets.logo.image} alt="Suvid Retail logo" />
              <span>Suvid Retail</span>
            </div>
            <p>
              At Suvid Retail, we are a group of companies driven by a shared
              vision of thoughtful brands, strong relationships, and meaningful growth.
            </p>
          </div>

          <div className="footer-side">
            <address className="footer-address">
              <span>
                Second Floor, G1-202, MEADOWS, NR VAISHNAVDEVI CIRCLE,<br />
                Adani Shantigram, Adalaj, Gandhinagar,<br />
                Gandhinagar, Gujarat, 382421
              </span>
            </address>
            <a className="footer-email" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>

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
                      rel={footerLinkTargets[link]?.startsWith('http') ? 'noopener noreferrer' : undefined}
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
        <span>© 2026 Suvid Retail. All Rights Reserved.</span>
        <button type="button" className="back-to-top" onClick={scrollToTop}>
          <span>BACK TO TOP</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </motion.footer>
  )
}

export default Footer
