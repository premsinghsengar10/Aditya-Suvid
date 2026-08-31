import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { careerCards } from '../data/content'
import './styles/CareersSection.css'

const CareersSection = () => {
  return (
    <motion.section
      className="careers-section panel-section"
      id="careers"
      data-section-key="careers"
      data-section-label="Careers"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container careers-header">
        <div className="careers-heading-wrap">
          <h2>Shape the Future<br />With Us</h2>
        </div>
        <p>
          We are always looking for visionaries, makers, and disruptors
          to join our diverse ecosystem.
        </p>
      </div>

      <div className="careers-divider container" aria-hidden="true" />

      <div className="container careers-grid">
        {careerCards.map((card, index) => (
          <motion.article
            key={card.id}
            className="career-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="career-icon" aria-hidden="true">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="career-link">
              <ArrowUpRight size={16} />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

export default CareersSection
