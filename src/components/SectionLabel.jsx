import './styles/SectionLabel.css'

const SectionLabel = ({ children, className = '' }) => {
  return <span className={`section-label ${className}`}>{children}</span>
}

export default SectionLabel
