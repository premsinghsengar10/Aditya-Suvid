import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { articleItems } from '../data/content'
import ImageCard from '../components/ImageCard'
import './styles/ArticlesPage.css'

const ArticleBody = ({ article }) => (
  <div className="article-body">
    <p>{article.description}</p>
    <p>This story is part of the Suvid Retail Group's ongoing work to build brands with a clear point of view, thoughtful experiences, and a culture that keeps people at the centre.</p>
    <p>Across retail, streetwear, digital growth, and fragrance, the group brings different capabilities together while allowing every brand to keep its own voice. The work is practical, collaborative, and always focused on what comes next.</p>
  </div>
)

const ArticlesPage = ({ slug, navigate }) => {
  const article = slug ? articleItems.find((item) => item.slug === slug) : null

  if (slug && article) {
    return (
      <main className="page-shell articles-page article-detail-page">
        <section className="article-detail-hero">
          <div className="container">
            <button className="article-back" type="button" onClick={() => navigate('/articles')}>
              <ArrowLeft size={16} /> Back to articles
            </button>
            <span className="section-label">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="article-lede">{article.description}</p>
          </div>
        </section>
        <section className="article-detail-content">
          <div className="container article-detail-layout">
            <img className="article-detail-image" src={article.image} alt={article.title} />
            <ArticleBody article={article} />
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page-shell articles-page">
      <section className="page-intro articles-intro">
        <div className="container">
          <span className="section-label">From the group</span>
          <h1>Articles<br />with a point of view.</h1>
          <p>Ideas, stories, and working perspectives from the brands and people shaping Suvid Retail.</p>
        </div>
      </section>
      <section className="articles-list-section">
        <div className="container articles-list-header">
          <h2>Latest stories</h2>
          <ArrowUpRight size={24} aria-hidden="true" />
        </div>
        <div className="container articles-grid">
          {articleItems.map((item) => <ImageCard key={item.slug} item={{ ...item, link: `/articles/${item.slug}` }} />)}
        </div>
      </section>
    </main>
  )
}

export default ArticlesPage
