import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteAssets } from '../data/content'
import './styles/TimelineSection.css'

const TimelineSection = () => {
  return (
    <section className="timeline-section" id="timeline" data-section-key="timeline" data-section-label="Timeline">
      <div className="timeline-image-wrap">
        <img src={siteAssets.timeline.image} alt="Heritage architecture" className="timeline-image" />
        <div className="timeline-overlay" aria-hidden="true" />
      </div>

      <motion.div
        className="timeline-content container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h2>Our Timelines</h2>
        <p>
          Founded over 150 years ago, the history of the Tata group embodies, in many ways, the history of
          entrepreneurship, philanthropy and compassionate capitalism in India, and increasingly, the world.
        </p>
        <button type="button" className="timeline-button" aria-label="Learn more about our timeline">
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </section>
  )
}

export default TimelineSection
