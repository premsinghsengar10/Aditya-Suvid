import './styles/AnimatedButton.css'

const AnimatedButton = ({ children, className = '', onClick, type = 'button' }) => {
  return (
    <button type={type} className={`animated-button ${className}`} onClick={onClick}>
      <span>{children}</span>
      <span className="button-arrow" aria-hidden="true">→</span>
    </button>
  )
}

export default AnimatedButton
