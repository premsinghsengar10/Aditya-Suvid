import './styles/Preloader.css'

const Preloader = () => {
  return (
    <div className="preloader" role="status" aria-label="Loading Aditya Suvid Retail">
      <div className="preloader-inner">
        <span className="preloader-kicker">Aditya Suvid Retail</span>
        <strong className="preloader-mark">ASR</strong>
        <span className="preloader-line" aria-hidden="true"><span /></span>
      </div>
    </div>
  )
}

export default Preloader
