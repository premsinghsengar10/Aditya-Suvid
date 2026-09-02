import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { teamMembers } from '../data/content'
import './styles/TimelineSection.css'

const TimelineSection = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const [rowWidths, setRowWidths] = useState([])
  const rowSetRefs = useRef([])
  const rowTrackRefs = useRef([])
  const displayMembers = [...teamMembers, ...teamMembers.slice(0, 4)]
  const rows = [displayMembers.slice(0, 9), displayMembers.slice(9, 18)]

  useEffect(() => {
    const measureRows = () => {
      setRowWidths(rowSetRefs.current.map((rowSet) => {
        if (!rowSet) return 0
        const styles = window.getComputedStyle(rowSet)
        const loopGap = parseFloat(styles.marginRight) || parseFloat(styles.columnGap) || 0
        return rowSet.getBoundingClientRect().width + loopGap
      }))
    }

    measureRows()
    const resizeObserver = new ResizeObserver(measureRows)
    rowSetRefs.current.forEach((rowSet) => rowSet && resizeObserver.observe(rowSet))
    window.addEventListener('resize', measureRows)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', measureRows)
    }
  }, [])

  useEffect(() => {
    if (rowWidths.length !== rows.length || rowWidths.some((width) => !width)) return undefined

    let animationFrame
    let startTime
    const speed = 42

    const animateRows = (timestamp) => {
      if (!startTime) startTime = timestamp
      const distanceTravelled = ((timestamp - startTime) / 1000) * speed

      rowTrackRefs.current.forEach((track, rowIndex) => {
        if (!track) return
        const distance = rowWidths[rowIndex]
        const offset = distanceTravelled % distance
        const x = rowIndex === 0 ? -offset : -distance + offset
        track.style.transform = `translate3d(${x}px, 0, 0)`
      })

      animationFrame = window.requestAnimationFrame(animateRows)
    }

    animationFrame = window.requestAnimationFrame(animateRows)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [rowWidths, rows.length])

  return (
    <motion.section className="timeline-section" id="timeline" data-section-key="timeline" data-section-label="Timeline" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
      <div className="timeline-header container">
        <div className="timeline-intro">
          <h2>Built With Purpose</h2>
          <p>Meet the people who bring our brands, culture, and vision to life. Together, they shape our identity through creativity, collaboration, and a shared passion for what we do. With their energy and expertise, we continue to grow, evolve, and build our next chapter.</p>
        </div>
      </div>

      <div className="team-grid" aria-label="Our team">
        {rows.map((row, rowIndex) => (
          <div className="team-row-viewport" key={`team-row-${rowIndex}`}>
            <motion.div
              className="team-row-track"
              ref={(element) => { rowTrackRefs.current[rowIndex] = element }}
            >
              {[0, 1].map((copy) => (
                <div
                  className="team-row-set"
                  key={`team-row-set-${rowIndex}-${copy}`}
                  ref={copy === 0 ? (element) => { rowSetRefs.current[rowIndex] = element } : undefined}
                >
                  {row.map((member) => (
                    <motion.button type="button" className="team-member" key={`${member.id}-${copy}`} onClick={() => setSelectedMember(member)} whileHover={{ y: -5 }} aria-label={`View ${member.name}, ${member.designation}`}>
                      <img src={member.image} alt="" loading="lazy" />
                      <span className="team-member-overlay">
                        <strong>{member.name}</strong>
                        <small>{member.designation}</small>
                      </span>
                    </motion.button>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div className="team-popup-overlay" onClick={() => setSelectedMember(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="team-popup-content" role="dialog" aria-modal="true" aria-label={`${selectedMember.name} details`} onClick={(event) => event.stopPropagation()} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}>
              <button type="button" className="popup-close-button" onClick={() => setSelectedMember(null)} aria-label="Close details"><X size={20} /></button>
              {selectedMember.videoUrl ? (
                <div className="popup-video-container"><iframe src={selectedMember.videoUrl} title={`${selectedMember.name} video`} allow="autoplay; encrypted-media" allowFullScreen /></div>
              ) : (
                <div className="popup-video-placeholder"><ArrowRight size={24} /><span>Work video coming soon</span></div>
              )}
              <div className="popup-info">
                <span className="section-label">{selectedMember.designation}</span>
                <h3>{selectedMember.name}</h3>
                <p>{selectedMember.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default TimelineSection
