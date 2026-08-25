import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'
import ImageCard from './ImageCard'
import { newsItems } from '../data/content'
import './styles/NewsSection.css'

const NewsSection = () => {
  const [mainStory, ...sideStories] = newsItems

  return (
    <section className="news-section panel-section" id="news" data-section-key="news" data-section-label="News">
      <div className="container news-header">
        <SectionLabel>FROM THE GROUP</SectionLabel>
        <a href="#" className="view-all">VIEW ALL NEWS</a>
      </div>

      <div className="container news-grid">
        <motion.article
          className="news-feature"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="image-wrap">
            <img src={mainStory.image} alt={mainStory.title} loading="lazy" />
            <div className="image-overlay" aria-hidden="true" />
          </div>
          <div className="feature-content">
            <span className="card-tag">{mainStory.category}</span>
            <h3>{mainStory.title}</h3>
            <div className="card-meta">
              <span>Read more</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </motion.article>

        <div className="news-stack">
          {sideStories.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ImageCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection
