import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { groupCompanies, siteAssets } from '../data/content'
import './styles/BrandsSection.css'

const entityImages = {
  'aditya-suvid-retail': siteAssets.brands.adityaSuvidRetail,
  'monkey-troopers-company': siteAssets.brands.monkeyTroopers,
  'harmoniq-creative': siteAssets.brands.harmoniqCreatives,
  'harmoniq-trading': siteAssets.brands.foDubai,
}

const entityLinks = {
  'aditya-suvid-retail': '/companies',
  'monkey-troopers-company': 'https://monkeytroopers.com/',
  'harmoniq-creative': 'https://www.harmoniqcreatives.com/',
  'harmoniq-trading': 'https://fodubai.in/',
}

const entities = groupCompanies.map((company) => ({
  ...company,
  image: entityImages[company.id],
  thumb: entityImages[company.id],
  url: entityLinks[company.id],
}))

const BrandsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [transitionDirection, setTransitionDirection] = useState(1)

  const changeEntity = (nextIndex) => {
    setTransitionDirection(nextIndex >= activeIndex ? 1 : -1)
    setActiveIndex(nextIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        setTransitionDirection(1)
        return (current + 1) % entities.length
      })
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
        <AnimatePresence mode="popLayout" initial={false} custom={transitionDirection}>
          <motion.div
            key={activeEntity.id}
            className="brands-visual"
            custom={transitionDirection}
            variants={{
              enter: (direction) => ({ opacity: 0, x: direction * 34, scale: 1.015 }),
              center: { opacity: 1, x: 0, scale: 1 },
              exit: (direction) => ({ opacity: 0, x: direction * -34, scale: 0.995 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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

        <AnimatePresence mode="popLayout" initial={false} custom={transitionDirection}>
          <motion.div
            key={activeEntity.id + '-text'}
            className="brand-feature"
            custom={transitionDirection}
            variants={{
              enter: (direction) => ({ opacity: 0, x: direction * 18 }),
              center: { opacity: 1, x: 0 },
              exit: (direction) => ({ opacity: 0, x: direction * -18 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
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
            <div className="brand-actions">
              <a
                className="brand-link"
                href={activeEntity.url}
                target={activeEntity.url.startsWith('http') ? '_blank' : undefined}
                rel={activeEntity.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span>VIEW BRAND</span>
                <ArrowUpRight size={16} />
              </a>
              <a className="brand-link brand-link-secondary" href="/careers">
                <span>JOIN US</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="brand-selector" aria-label="Brand selector">
          {entities.map((entity, index) => (
              <a
                key={entity.id}
                href={entity.url}
                className={`brand-option ${index === activeIndex ? 'active' : ''}`}
                target={entity.url.startsWith('http') ? '_blank' : undefined}
                rel={entity.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => changeEntity(index)}
              >
              <span className="brand-option-line" aria-hidden="true" />
              <span className="brand-thumb-wrap">
                <img src={entity.thumb} alt={entity.name} loading="lazy" />
              </span>
              <span className="brand-name">{entity.name}</span>
              </a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default BrandsSection
