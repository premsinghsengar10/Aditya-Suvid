import companyLogo from '../assets/suvid-retail-logo.jpeg'
import './styles/Preloader.css'

const Preloader = () => {
  return (
    <div className="loader" role="status" aria-label="Loading">
      <div className="loader-brand">
        <img src={companyLogo} alt="Suvid Retail logo" />
        <span>Suvid Retail</span>
      </div>
      <div className="loader-dots" aria-hidden="true">
        <span className="loader-dot" />
        <span className="loader-dot" />
        <span className="loader-dot" />
        <span className="loader-dot" />
        <span className="loader-dot" />
      </div>
      <span className="sr-only">Loading</span>
    </div>
  )
}

export default Preloader
