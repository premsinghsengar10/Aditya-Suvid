import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { brands } from '../data/content'
import './styles/BrandsSection.css'

const BrandsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % brands.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const activeBrand = brands[activeIndex]

  return (
    <section className="brands-section" id="brands" data-section-key="brands" data-section-label="Brands">
      <div className="brands-image-wrap">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBrand.id}
            className="brands-visual"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <img src={activeBrand.image} alt={activeBrand.name} />
            <div className="brand-overlay" aria-hidden="true" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="brands-content container">
        <div className="brand-label-wrap">
          <span className="section-label center">PORTFOLIO</span>
          <h2>THE ENTITIES</h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeBrand.id + '-text'}
            className="brand-feature"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="brand-text-block">
              <h3>{activeBrand.name}</h3>
              <p className="brand-description">{activeBrand.description}</p>
            </div>
            <button type="button" className="brand-link">
              <span>VIEW BRAND</span>
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </AnimatePresence>

        <div className="brand-selector" aria-label="Brand selector">
          {brands.map((brand, index) => (
            <button
              key={brand.id}
              type="button"
              className={`brand-option ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="brand-option-line" aria-hidden="true" />
              <span className="brand-thumb-wrap">
                <img src={brand.thumb} alt={brand.name} loading="lazy" />
              </span>
              <span className="brand-name">{brand.shortName}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
