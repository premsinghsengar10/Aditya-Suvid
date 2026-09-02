import './styles/Preloader.css'

const Preloader = () => {
  return (
    <div className="preloader" role="status" aria-label="Loading Suvid Retail Private Limited">
      <div className="preloader-inner">
        <span className="preloader-kicker">Suvid Retail Private Limited</span>
        <strong className="preloader-mark">SRPL</strong>
        <span className="preloader-line" aria-hidden="true"><span /></span>
      </div>
    </div>
  )
}

export default Preloader
