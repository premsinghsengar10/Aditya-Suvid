import './styles/PageStyles.css'

const StoryPage = () => {
  return (
    <main className="page-shell story-page">
      <section className="page-intro story-intro">
        <div className="container">
          <span className="section-label">Our story</span>
          <h1>Ideas become<br />their own world.</h1>
          <p>
            We build brands with a clear point of view, giving good ideas the people,
            craft, and momentum they need to become part of everyday life.
          </p>
        </div>
      </section>

      <section className="story-content-section">
        <div className="container story-content-grid">
          <span className="section-label">The point of view</span>
          <p>
            From useful objects that move with you to fragrances that stay with you,
            our story is about making the ordinary feel considered and the familiar
            feel new.
          </p>
        </div>
      </section>
    </main>
  )
}

export default StoryPage
