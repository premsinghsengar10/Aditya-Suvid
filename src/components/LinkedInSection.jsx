import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { linkedinCompanies } from '../data/content'
import './styles/LinkedInSection.css'

const LinkedInSection = () => {
  return (
    <motion.section
      className="linkedin-section"
      aria-labelledby="linkedin-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container linkedin-container">
        <div className="linkedin-heading">
          <div>
            <span className="section-label">Let&apos;s connect</span>
            <h2 id="linkedin-title">Follow our journey<br />on LinkedIn.</h2>
          </div>
          <p>Discover updates, milestones, and stories from Suvid Retail and the companies within our group.</p>
        </div>

        <div className="linkedin-cards">
          {linkedinCompanies.map((company, index) => (
            <motion.a
              className="linkedin-card"
              href={company.linkedin}
              key={company.name}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
            >
              <div className="linkedin-card-topline">
                <span className="linkedin-icon" aria-label="LinkedIn">in</span>
                <span className="linkedin-card-number">0{index + 1}</span>
              </div>
              <div className="linkedin-card-brand">
                <img src={company.logo} alt="" loading="lazy" />
                <span>{company.name}</span>
              </div>
              <div className="linkedin-card-footer">
                <span>{company.description}</span>
                <span className="linkedin-card-cta">Visit LinkedIn <ArrowUpRight size={16} /></span>
              </div>
            </motion.a>
          ))}
        </div>

        <a className="linkedin-view-all" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <span>View us on LinkedIn</span>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </motion.section>
  )
}

export default LinkedInSection
