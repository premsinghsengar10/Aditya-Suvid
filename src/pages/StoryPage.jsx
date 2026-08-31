import { motion } from 'framer-motion'
import { storyContent } from '../data/content'
import storyRetail from '../assets/generated/story-retail.png'
import storyStreetwear from '../assets/generated/story-streetwear.png'
import storyCreative from '../assets/generated/story-creative.png'
import storyFragrance from '../assets/generated/story-fragrance.png'
import './styles/PageStyles.css'

const visualCards = [
  {
    id: 'retail',
    image: storyRetail,
    label: 'Retail roots',
    title: 'From Ahmedabad to a multi-format retail model.',
    description: 'Built from shop-floor learning, strong partnerships, and a consistent customer-first mindset.',
  },
  {
    id: 'streetwear',
    image: storyStreetwear,
    label: 'Monkey Troopers',
    title: 'Street culture with a defined point of view.',
    description: 'Urban utility, playful identity, and a community-first growth strategy.',
  },
  {
    id: 'creative',
    image: storyCreative,
    label: 'Harmoniq Creative',
    title: 'Digital strategy that turns attention into action.',
    description: 'Web, media, SEO, and performance systems designed to grow brands with clarity.',
  },
  {
    id: 'fragrance',
    image: storyFragrance,
    label: 'Harmoniq Trading',
    title: 'Dubai-rooted fragrance with a global horizon.',
    description: 'Craft, trust, and relationships shaping a new market story.',
  },
]

const StoryPage = () => {
  return (
    <main className="page-shell story-page">
      <section className="page-intro story-intro">
        <div className="container">
          <span className="section-label">Our story</span>
          <h1>{storyContent.introTitle}</h1>
          <p>{storyContent.introDescription}</p>
        </div>
      </section>

      <section className="story-visual-showcase" aria-labelledby="story-visual-title">
        <div className="container story-showcase-layout">
          <motion.div
            className="story-feature-image"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <img src={storyRetail} alt="Aditya Suvid retail story" />
            <div className="story-feature-overlay">
              <span className="section-label">The beginning</span>
              <h2 id="story-visual-title">Built from hands-on growth.</h2>
            </div>
          </motion.div>

          <div className="story-visual-grid">
            {visualCards.map((card, index) => (
              <motion.article
                key={card.id}
                className="story-visual-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
              >
                <div className="story-card-image-wrap">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="story-card-copy">
                  <span className="story-value-label">{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-opening-section" aria-labelledby="story-opening-title">
        <div className="container story-opening-grid">
          <div>
            <span className="section-label">The beginning</span>
            <h2 id="story-opening-title">{storyContent.openingTitle}</h2>
          </div>
          <div className="story-opening-copy">
            <blockquote className="story-quote">{storyContent.quote}</blockquote>
            <p>{storyContent.opening[0]}</p>
            <p>{storyContent.opening[1]}</p>
          </div>
        </div>
      </section>

      <section className="story-journey-section" aria-labelledby="story-journey-title">
        <div className="container">
          <div className="story-section-heading">
            <span className="section-label">The journey</span>
            <h2 id="story-journey-title">One group. Four distinct stories.</h2>
          </div>

          <div className="story-journey-grid">
            {visualCards.map((card, index) => (
              <motion.article
                key={`${card.id}-journey`}
                className="story-journey-card"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              >
                <div className="story-journey-image">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="story-journey-body">
                  <span className="story-value-label">0{index + 1}</span>
                  <h3>{card.label}</h3>
                  <p>{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-people-section" aria-labelledby="story-people-title">
        <div className="container">
          <div className="story-section-heading">
            <span className="section-label">The people</span>
            <h2 id="story-people-title">The people behind the next chapter.</h2>
          </div>

          <div className="story-people-grid">
            {storyContent.people.map((person, index) => (
              <motion.article
                className="story-person"
                key={person.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
              >
                <span className="story-value-label">{person.role}</span>
                <h3>{person.name}</h3>
                <p>{person.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="story-closing-section">
        <div className="container story-closing-grid">
          <span className="section-label">Still becoming</span>
          <div>
            <h2>{storyContent.closingTitle}</h2>
            <p>{storyContent.closing[0]}</p>
            <p>{storyContent.closing[2]}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default StoryPage
