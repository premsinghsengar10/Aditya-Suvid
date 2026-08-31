import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import './styles/PageStyles.css'

const CareersPage = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

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

      <section className="career-application-section" aria-labelledby="career-application-title">
        <div className="container career-application-layout">
          <div className="career-application-copy">
            <span className="section-label">Join the team</span>
            <h2 id="career-application-title">Tell us where<br />you fit in.</h2>
            <p>
              We welcome makers, operators, and big-picture thinkers. Share a little
              about yourself and our team will get back to you.
            </p>
          </div>

          <form className="career-application-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="career-name">Full name</label>
              <input id="career-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
            </div>

            <div className="form-field">
              <label htmlFor="career-email">Email address</label>
              <input id="career-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>

            <div className="form-field">
              <label htmlFor="career-phone">Phone number</label>
              <input id="career-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
            </div>

            <div className="form-field">
              <label htmlFor="career-interest">Area of interest</label>
              <select id="career-interest" name="interest" defaultValue="" required>
                <option value="" disabled>Select an area</option>
                <option value="brand">Brand and creative</option>
                <option value="retail">Retail and operations</option>
                <option value="marketing">Marketing and growth</option>
                <option value="corporate">Corporate functions</option>
              </select>
            </div>

            <div className="form-field form-field-wide">
              <label htmlFor="career-message">Message</label>
              <textarea id="career-message" name="message" rows="5" placeholder="Tell us about your experience and what you would like to build." required />
            </div>

            <div className="form-field form-field-wide">
              <label htmlFor="career-resume">Resume or portfolio link</label>
              <input id="career-resume" name="resume" type="url" placeholder="https://" />
            </div>

            <div className="career-form-footer">
              <p className="form-note" aria-live="polite">
                {submitted ? 'Thank you. Your application has been received.' : 'We review every application with care.'}
              </p>
              <button type="submit" className="page-submit-button">
                Submit application
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default CareersPage
