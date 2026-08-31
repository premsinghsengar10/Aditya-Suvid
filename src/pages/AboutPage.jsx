import './styles/PageStyles.css'

const journeyItems = [
  {
    number: '01',
    title: 'A shared idea',
    text: 'Aditya Suvid Retail began with a simple belief: a group of companies can grow with purpose, imagination, and care at its centre.',
  },
  {
    number: '02',
    title: 'First expressions',
    text: 'Monkey Troopers and FO Dubai brought that belief to life through distinctive products, memorable experiences, and a close connection to people.',
  },
  {
    number: '03',
    title: 'Growing the group',
    text: 'As new capabilities and partnerships joined the group, our portfolio expanded across lifestyle, retail, creative, and brand commerce.',
  },
  {
    number: '04',
    title: 'The next chapter',
    text: 'Today, our companies work together as one evolving ecosystem, building enduring brands and meaningful experiences for what comes next.',
  },
]

const AboutPage = () => {
  return (
    <main className="page-shell about-page">
      <section className="page-intro about-intro">
        <div className="container">
          <span className="section-label">About us</span>
          <h1>One group.<br />Many possibilities.</h1>
          <p>
            Our group of companies brings together distinct ideas, people, and
            capabilities to create brands with a lasting point of view.
          </p>
        </div>
      </section>

      <section className="journey-section" id="journey" aria-labelledby="journey-title">
        <div className="container">
          <div className="journey-heading">
            <span className="section-label">Our journey</span>
            <h2 id="journey-title">The journey of<br />our group of companies.</h2>
          </div>

          <div className="journey-list">
            {journeyItems.map((item) => (
              <article className="journey-item" key={item.number}>
                <span className="journey-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
