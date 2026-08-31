import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { groupCompanies, siteAssets } from '../data/content'
import './styles/BrandsSection.css'

const entityImages = {
  'aditya-suvid-retail': siteAssets.timeline.image,
  'monkey-troopers-company': siteAssets.brands.monkeyTroopers,
  'harmoniq-creative': siteAssets.hero.image,
  'harmoniq-trading': siteAssets.brands.foDubai,
}

const entityLinks = {
  'monkey-troopers-company': 'https://monkeytroopers.com/',
}

const entities = groupCompanies.map((company) => ({
  ...company,
  image: entityImages[company.id],
  thumb: entityImages[company.id],
  url: entityLinks[company.id],
}))

const BrandsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % entities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const activeEntity = entities[activeIndex]

  return (
    <motion.section
      className="brands-section"
      id="brands"
      data-section-key="brands"
      data-section-label="Entities"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
    >
      <div className="brands-image-wrap">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEntity.id}
            className="brands-visual"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <img src={activeEntity.image} alt={activeEntity.name} />
            <div className="brand-overlay" aria-hidden="true" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="brands-content container">
        <div className="brand-label-wrap">
          <span className="section-label center">OUR GROUP</span>
          <h2>THE ENTITIES</h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeEntity.id + '-text'}
            className="brand-feature"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="brand-text-block">
              <span className="entity-category">{activeEntity.category}</span>
              <h3>{activeEntity.name}</h3>
              <p className="brand-description">{activeEntity.description}</p>
              <div className="entity-highlights">
                {activeEntity.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </div>
            {activeEntity.url ? (
              <a
                className="brand-link"
                href={activeEntity.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>VIEW BRAND</span>
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="entity-status">Group company</span>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="brand-selector" aria-label="Brand selector">
          {entities.map((entity, index) => (
            <button
              key={entity.id}
              type="button"
              className={`brand-option ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="brand-option-line" aria-hidden="true" />
              <span className="brand-thumb-wrap">
                <img src={entity.thumb} alt={entity.name} loading="lazy" />
              </span>
              <span className="brand-name">{entity.name}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default BrandsSection
