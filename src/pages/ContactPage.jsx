import { ArrowRight, Mail, MapPin } from 'lucide-react'
import './styles/PageStyles.css'

const ContactPage = () => (
  <main className="page-shell contact-page">
    <section className="page-intro contact-intro">
      <div className="container">
        <span className="section-label">Contact us</span>
        <h1>Let&apos;s build<br />what&apos;s next.</h1>
        <p>
          Have a brand, product, or collaboration in mind? Tell us what you are
          building and the Suvid Retail team will be in touch.
        </p>
      </div>
    </section>

    <section className="contact-section" aria-labelledby="contact-form-title">
      <div className="container contact-layout">
        <div className="contact-copy">
          <span className="section-label">Brand collaborations</span>
          <h2 id="contact-form-title">Bring us a<br />good idea.</h2>
          <p>
            We partner with people and brands who are curious, ambitious, and
            serious about creating work with a point of view.
          </p>
          <div className="contact-details">
            <a href="mailto:hr@suvidretail.in"><Mail size={16} /> hr@suvidretail.in</a>
            <span><MapPin size={16} /> Ahmedabad, India</span>
          </div>
        </div>

        <form className="contact-form" action="https://formsubmit.co/hr@suvidretail.in" method="POST">
          <input type="hidden" name="_subject" value="New brand collaboration enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" className="form-trap" />
          <div className="form-field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-company">Brand or company</label>
            <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Your brand or company" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="contact-phone">Phone number</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" />
          </div>
          <div className="form-field form-field-wide">
            <label htmlFor="contact-website">Website or social link</label>
            <input id="contact-website" name="website" type="url" placeholder="https://" />
          </div>
          <div className="form-field form-field-wide">
            <label htmlFor="contact-message">Tell us about the collaboration</label>
            <textarea id="contact-message" name="message" rows="6" placeholder="What would you like to build together?" required />
          </div>
          <div className="contact-form-footer">
            <p className="form-note">Your enquiry will be sent securely to our team.</p>
            <button type="submit" className="page-submit-button">
              Send enquiry
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
)

export default ContactPage
