import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { siteAssets } from '../data/content'
import './styles/TimelineSection.css'

const TimelineSection = () => {
  const scrollToBrands = () => {
    const brandsSection = document.getElementById('brands')
    if (brandsSection) brandsSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.section
      className="timeline-section"
      id="timeline"
      data-section-key="timeline"
      data-section-label="Timeline"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="timeline-image-wrap">
        <img src={siteAssets.timeline.image} alt="Abstract composition representing the group" className="timeline-image" />
        <div className="timeline-overlay" aria-hidden="true" />
      </div>

      <motion.div
        className="timeline-content container"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h2>Built together</h2>
        <p>
          From Monkey Troopers&apos; playful utility to FO Dubai&apos;s considered scent,
          our group brings distinct ideas together to create brands with a shared
          appetite for what comes next.
        </p>
        <button type="button" className="timeline-button" aria-label="Explore our journey" onClick={scrollToBrands}>
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </motion.section>
  )
}

export default TimelineSection
