import { motion } from 'framer-motion'
import './styles/PageStyles.css'

const journeyItems = [
  {
    number: '01',
    title: 'A 2012 beginning',
    text: 'Hemlata Pushkar started Suvid Sales Corporation in Ahmedabad after a career in hospital management, taking a first step into retail with a clear ambition to build something of her own.',
  },
  {
    number: '02',
    title: 'Retail became a system',
    text: 'The journey grew from a Baggit exclusive franchise into Titan stores, Tommy Hilfiger luggage, Bagline, Cocoberry, and Travel Vogue locations across Gujarat.',
  },
  {
    number: '03',
    title: 'A group takes shape',
    text: 'Piyush Pushkar joined with more than 30 years of international brand management experience, helping turn the retail operation into Aditya Suvid Retail Private Limited.',
  },
  {
    number: '04',
    title: 'New expressions',
    text: 'Monkey Troopers took the group into streetwear, while Harmoniq Creative and Harmoniq Trading added digital growth and fragrance capabilities across India and the Middle East.',
  },
]

const AboutPage = () => {
  return (
    <main className="page-shell about-page">
      <section className="page-intro about-intro">
        <div className="container">
          <span className="section-label">About us</span>
          <h1>One group.<br />Many possibilities.</h1>
          <p>
            Our group of companies brings together distinct ideas, people, and
            capabilities to create brands with a lasting point of view.
          </p>
        </div>
      </section>

      <section className="journey-section" id="journey" aria-labelledby="journey-title">
        <div className="container">
          <div className="journey-heading">
            <span className="section-label">Our journey</span>
            <h2 id="journey-title">The journey of<br />our group of companies.</h2>
          </div>

          <div className="journey-list">
            {journeyItems.map((item, index) => (
              <motion.article
                className="journey-item"
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
              >
                <span className="journey-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
