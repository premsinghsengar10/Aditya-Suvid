import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { groupCompanies, groupOperatingModel, siteAssets } from '../data/content'
import './styles/PageStyles.css'

const companyImages = {
  'aditya-suvid-retail': siteAssets.brands.adityaSuvidRetail,
  'monkey-troopers-company': siteAssets.brands.monkeyTroopers,
  'harmoniq-creative': siteAssets.hero.image,
  'harmoniq-trading': siteAssets.brands.foDubai,
}

const companyLinks = {
  'monkey-troopers-company': 'https://monkeytroopers.com/',
  'harmoniq-trading': 'https://fodubai.in/',
}

const CompaniesPage = () => {
  return (
    <main className="page-shell companies-page">
      <section className="page-intro companies-intro">
        <div className="container">
          <span className="section-label">Companies</span>
          <h1>Four companies.<br />One culture.</h1>
          <p>
            From retail operations and streetwear to digital growth and fragrance,
            our group grows distinct companies with a shared appetite for what comes next.
          </p>
        </div>
      </section>

      <section className="companies-list-section" aria-labelledby="companies-title">
        <div className="container">
          <div className="companies-list-heading">
            <span className="section-label">Our group</span>
            <h2 id="companies-title">The group behind<br />what comes next.</h2>
          </div>

          <div className="companies-list">
            {groupCompanies.map((company, index) => {
              const link = companyLinks[company.id]

              return (
              <motion.article
                className="company-card"
                key={company.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.65, delay: index * 0.06, ease: 'easeOut' }}
              >
                <div className="company-card-image">
                  <img src={companyImages[company.id]} alt={company.name} />
                </div>
                <div className="company-card-copy">
                  <div className="company-card-topline">
                    <span className="company-card-number">{company.number}</span>
                    <span className="section-label">{company.category}</span>
                  </div>
                  <h3>{company.name}</h3>
                  <p className="company-card-strapline">{company.strapline}</p>
                  <p className="company-description">{company.description}</p>
                  <div className="company-card-highlights">
                    {company.highlights.map((highlight) => (
                      <span className="company-card-highlight" key={highlight}>{highlight}</span>
                    ))}
                  </div>
                  {link && (
                    <a className="brand-link" href={link} target="_blank" rel="noreferrer">
                      <span>Visit brand</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="group-operating-section" aria-labelledby="group-operating-title">
        <div className="container group-operating-layout">
          <div>
            <span className="section-label">How the group works</span>
            <h2 id="group-operating-title">Distinct companies.<br />Connected capabilities.</h2>
          </div>
          <p>{groupOperatingModel.intro}</p>
        </div>

        <div className="container group-pillars">
          {groupOperatingModel.pillars.map((pillar, index) => (
            <motion.article
              className="group-pillar"
              key={pillar.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
            >
              <span className="company-card-number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="companies-direction-section" aria-labelledby="companies-direction-title">
        <div className="container">
          <div className="story-section-heading">
            <span className="section-label">Where we are going</span>
            <h2 id="companies-direction-title">A local foundation.<br />A wider horizon.</h2>
          </div>

          <div className="companies-direction-grid">
            {groupOperatingModel.direction.map((item, index) => (
              <motion.article
                className="company-direction"
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: 'easeOut' }}
              >
                <span className="story-value-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CompaniesPage
