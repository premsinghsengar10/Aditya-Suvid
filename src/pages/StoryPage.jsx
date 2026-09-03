import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { storyContent, storyFullCopy } from '../data/content'
import storyRetail from '../assets/generated/story-retail.png'
import storyStreetwear from '../assets/generated/story-streetwear.png'
import storyCreative from '../assets/generated/story-creative.png'
import storyFragrance from '../assets/generated/story-fragrance.png'
import './styles/PageStyles.css'

const chapterImages = [storyRetail, storyStreetwear, storyCreative, storyFragrance]

const chapterSections = [
  [
    { title: 'The Past', paragraphs: [0, 1, 2, 3, 4] },
    { title: 'What We Learned', lessons: true },
    { title: 'The Present', paragraphs: [8, 9] },
  ],
  [
    { title: 'Inception', paragraphs: [0, 1, 2, 3, 4] },
    { title: 'Growing Into Its Own', paragraphs: [5, 6] },
    { title: "What's Next", paragraphs: [7] },
  ],
  [
    { title: 'What It Is', paragraphs: [0, 1] },
    { title: 'What We Do', paragraphs: [2, 3, 4, 5, 6, 7], list: true },
    { title: 'Why It Matters', paragraphs: [8] },
  ],
  [
    { title: 'How It Began', paragraphs: [0, 1] },
    { title: 'Growing the Business', paragraphs: [2, 3, 4] },
  ],
]

const renderStoryParagraph = (text) => {
  const parts = text.split(/(Our Vision:|Our Mission:|Our Passion:|Hemlata Pushkar|Piyush Pushkar)/g)
  return parts.map((part, index) => {
    const shouldHighlight = /^(Our Vision:|Our Mission:|Our Passion:|Hemlata Pushkar|Piyush Pushkar)$/.test(part)
    return shouldHighlight ? <strong key={`${part}-${index}`}>{part}</strong> : part
  })
}

const StoryPage = ({ chapterSlug, navigate }) => {
  const [activeChapter, setActiveChapter] = useState(null)
  const chapterIndex = chapterSlug ? Number.parseInt(chapterSlug, 10) - 1 : -1
  const chapter = storyContent.chapters[chapterIndex]

  if (chapterSlug && chapter) {
    return (
      <main className="page-shell story-page story-chapter-page">
        <section className="article-detail-hero">
          <div className="container">
            <button className="article-back" type="button" onClick={() => navigate('/story')}>
              <ArrowLeft size={16} /> Back to our story
            </button>
            <span className="section-label">Chapter {chapter.number}</span>
            <h1>{storyFullCopy.chapters[chapterIndex].title}</h1>
            <p className="article-lede">{storyFullCopy.chapters[chapterIndex].subtitle}</p>
          </div>
        </section>
        <section className="story-chapter-detail">
          <div className="container story-chapter-detail-layout">
            <img src={chapterImages[chapterIndex]} alt={chapter.title} />
            <div className="article-body">
              {chapterSections[chapterIndex].map((section) => (
                <section className="story-chapter-copy-section" key={section.title}>
                  <h2>{section.title}</h2>
                  {section.lessons ? (
                    <ul className="story-chapter-lessons">
                      {chapter.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}
                    </ul>
                  ) : (
                    section.paragraphs.map((paragraphIndex) => {
                      const paragraph = storyFullCopy.chapters[chapterIndex].paragraphs[paragraphIndex]
                      return <p key={paragraph}>{renderStoryParagraph(paragraph)}</p>
                    })
                  )}
                </section>
              ))}
              <section className="story-chapter-copy-section story-chapter-direction">
                <p><strong>Our Vision:</strong> {chapter.vision}</p>
                <p><strong>Our Mission:</strong> {chapter.mission}</p>
                {storyFullCopy.chapters[chapterIndex].paragraphs.slice(-1)[0]?.startsWith('Our Passion:') && (
                  <p>{renderStoryParagraph(storyFullCopy.chapters[chapterIndex].paragraphs.slice(-1)[0])}</p>
                )}
              </section>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page-shell story-page">
      <section className="page-intro story-intro">
        <div className="container">
          <span className="section-label">Our story</span>
          <h1>{storyContent.introTitle}</h1>
          <p>{storyContent.introDescription}</p>
        </div>
      </section>

      <section className="story-opening-section" aria-labelledby="story-opening-title">
        <div className="container story-opening-grid">
          <div>
            <span className="section-label">Prologue</span>
            <h2 id="story-opening-title">{storyContent.openingTitle}</h2>
          </div>
          <div className="story-opening-copy">
            <blockquote className="story-quote">{storyContent.quote}</blockquote>
            {storyFullCopy.prologue.map((paragraph) => <p key={paragraph}>{renderStoryParagraph(paragraph)}</p>)}
          </div>
        </div>
      </section>

      <section className="story-journey-section story-section-divider" aria-labelledby="story-journey-title">
        <div className="container">
          <div className="story-section-heading">
            <div>
              <span className="section-label">The journey</span>
              <h2 id="story-journey-title">Four chapters.<br />One growing group.</h2>
            </div>
            <p>Explore each chapter of the Suvid Retail Group, from retail operations to the brands and capabilities shaping what comes next.</p>
          </div>
          <div className="story-journey-grid">
            {storyContent.chapters.map((item, index) => {
              const chapterDetails = storyFullCopy.chapters[index]
              const isActive = activeChapter === item.number

              return (
              <motion.div
                className={`story-journey-card story-chapter-link${isActive ? ' is-active' : ''}`}
                key={item.number}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                onClick={() => setActiveChapter(isActive ? null : item.number)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setActiveChapter(isActive ? null : item.number)
                  }
                }}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="story-journey-image"><img src={chapterImages[index]} alt={item.title} /></div>
                <div className="story-journey-body">
                  <span className="story-value-label">{item.number}</span>
                  <h3>{chapterDetails.title}</h3>
                  <p className="story-chapter-subtitle">{chapterDetails.subtitle}</p>
                  {isActive && (
                    <>
                      <p className="story-chapter-preview">{chapterDetails.paragraphs[0]}</p>
                      <button
                        className="story-chapter-cta"
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          navigate(`/story/${item.number}`)
                        }}
                      >
                        Read more <ArrowUpRight size={16} />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="story-closing-section">
        <div className="container story-closing-grid story-closing-content">
          <span className="section-label">Closing</span>
          <h2>{storyContent.closingTitle}</h2>
          {storyFullCopy.closing.map((paragraph, index) => (
            <p className={index === storyFullCopy.closing.length - 1 ? 'story-closing-final' : ''} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

    </main>
  )
}

export default StoryPage
