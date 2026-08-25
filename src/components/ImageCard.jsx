import './styles/ImageCard.css'

const ImageCard = ({ item, featured = false, onClick }) => {
  return (
    <article className={`image-card ${featured ? 'featured' : ''}`} onClick={onClick}>
      <div className="image-wrap">
        <img src={item.image} alt={item.title} loading="lazy" />
        <div className="image-overlay" aria-hidden="true" />
      </div>
      <div className="card-content">
        <span className="card-tag">{item.category}</span>
        <h3>{item.title}</h3>
        {!featured && <p>{item.description}</p>}
        <div className="card-meta">
          <span>Read article</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    </article>
  )
}

export default ImageCard
