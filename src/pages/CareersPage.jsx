import { ArrowRight } from 'lucide-react'
import { careerDepartments } from '../data/content'
import './styles/PageStyles.css'

const CareersPage = ({ navigate }) => {
  const openings = careerDepartments.flatMap((department) => department.openings)

  return (
    <main className="page-shell careers-page">
      <section className="page-intro careers-intro">
        <div className="container">
          <span className="section-label">Careers</span>
          <h1>Shape the future<br />with us.</h1>
          <p>
            Bring your perspective, curiosity, and ambition to a group of companies
            creating thoughtful experiences for the next generation.
          </p>
        </div>
      </section>

      <section className="career-openings-section" aria-labelledby="career-openings-title">
        <div className="container">
          <div className="career-openings-heading">
            <div>
              <span className="section-label">Current openings</span>
              <h2 id="career-openings-title">Find your<br />place here.</h2>
            </div>
            <p>Different disciplines, one shared appetite for doing meaningful work well. Explore a role to read the full brief and apply.</p>
          </div>

          <div className="opening-list opening-list-all">
            {openings.map((opening) => (
              <article className="opening-card" key={opening.id}>
                <div>
                  <h4>{opening.title}</h4>
                  <div className="opening-meta">
                    <span>{opening.openings} {opening.openings === 1 ? 'opening' : 'openings'}</span>
                    <span>YOE: {opening.experience}</span>
                    <span>{opening.qualification}</span>
                    <span>Department: {opening.department}</span>
                  </div>
                </div>
                <a
                  className="opening-apply-link"
                  href={'/careers/' + opening.id}
                  onClick={(event) => {
                    if (!navigate) return
                    event.preventDefault()
                    navigate('/careers/' + opening.id)
                  }}
                >
                  View role <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CareersPage
