import { ArrowUpRight } from 'lucide-react'
import { brands } from '../data/content'
import './styles/PageStyles.css'

const CompaniesPage = () => {
  return (
    <main className="page-shell companies-page">
      <section className="page-intro companies-intro">
        <div className="container">
          <span className="section-label">Companies</span>
          <h1>Distinct brands.<br />Shared ambition.</h1>
          <p>
            Meet the two brands shaping our portfolio: one made for movement and
            self-expression, the other made for atmosphere and memory.
          </p>
        </div>
      </section>

      <section className="companies-list-section" aria-labelledby="companies-title">
        <div className="container">
          <div className="companies-list-heading">
            <span className="section-label">Our portfolio</span>
            <h2 id="companies-title">Two ways to<br />leave a mark.</h2>
          </div>

          <div className="companies-list">
            {brands.map((brand) => (
              <article className="company-card" key={brand.id}>
                <div className="company-card-image">
                  <img src={brand.image} alt={brand.name} />
                </div>
                <div className="company-card-copy">
                  <span className="company-card-number">{brand.id === 'monkey-troopers' ? '01' : '02'}</span>
                  <h3>{brand.name}</h3>
                  <p className="company-description">
                    {brand.descriptionLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                  <a className="brand-link" href={brand.url} target="_blank" rel="noreferrer">
                    <span>Visit brand</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CompaniesPage
