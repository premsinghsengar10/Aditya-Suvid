import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink, Upload } from 'lucide-react'
import { careerDepartments } from '../data/content'
import './styles/PageStyles.css'

const CareerDetailPage = ({ slug, navigate }) => {
  const opening = careerDepartments.flatMap((department) => department.openings).find((item) => item.id === slug)
  const [resumeUrl, setResumeUrl] = useState('')

  useEffect(() => () => {
    if (resumeUrl) URL.revokeObjectURL(resumeUrl)
  }, [resumeUrl])

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (resumeUrl) URL.revokeObjectURL(resumeUrl)
    setResumeUrl(URL.createObjectURL(file))
  }

  if (!opening) {
    return (
      <main className="page-shell career-detail-page">
        <section className="page-intro">
          <div className="container">
            <span className="section-label">Careers</span>
            <h1>Role not found.</h1>
            <button type="button" className="text-back-link" onClick={() => navigate('/careers')}>
              <ArrowLeft size={15} /> Back to careers
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page-shell career-detail-page">
      <section className="page-intro career-detail-intro">
        <div className="container">
          <button type="button" className="text-back-link" onClick={() => navigate('/careers')}>
            <ArrowLeft size={15} /> Back to careers
          </button>
          <span className="section-label">Open role</span>
          <h1>{opening.title}</h1>
          <div className="career-detail-meta">
            <span>{opening.openings} {opening.openings === 1 ? 'opening' : 'openings'}</span>
            <span>YOE: {opening.experience}</span>
            <span>{opening.qualification}</span>
            <span>Department: {opening.department}</span>
          </div>
        </div>
      </section>

      <section className="career-detail-content">
        <div className="container career-detail-layout">
          <article className="career-description">
            <span className="section-label">Role overview</span>
            <p className="career-overview">{opening.overview}</p>
            <h2>Key responsibilities</h2>
            <ul>
              {opening.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
            </ul>
          </article>

          <form className="career-application-form career-detail-form" action="https://formsubmit.co/hr@suvidretail.in" method="POST" encType="multipart/form-data">
            <input type="hidden" name="_subject" value={'Career application: ' + opening.title} />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" className="form-trap" />
            <input type="hidden" name="role" value={opening.title} />
            <input type="hidden" name="department" value={opening.department} />
            <div className="form-field">
              <label htmlFor="detail-name">Full name</label>
              <input id="detail-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label htmlFor="detail-phone">Phone number</label>
              <input id="detail-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required />
            </div>
            <div className="form-field form-field-wide">
              <label htmlFor="detail-email">Email address</label>
              <input id="detail-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </div>
            <div className="form-field form-field-wide">
              <label htmlFor="detail-message">Message</label>
              <textarea id="detail-message" name="message" rows="5" placeholder="Tell us about your experience." required />
            </div>
            <div className="form-field form-field-wide">
              <label htmlFor="detail-resume">Resume</label>
              <label className="file-upload" htmlFor="detail-resume">
                <Upload size={17} aria-hidden="true" />
                <span>Choose PDF or DOCX</span>
                <input id="detail-resume" name="attachment" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleResumeChange} required />
              </label>
              {resumeUrl && (
                <a className="resume-preview-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} /> Open selected resume
                </a>
              )}
            </div>
            <div className="career-form-footer">
              <button type="submit" className="page-submit-button">
                Apply for this role
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default CareerDetailPage
