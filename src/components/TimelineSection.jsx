import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { teamMembers } from '../data/content'
import './styles/TimelineSection.css'

const TimelineSection = () => {
  const [selectedMember, setSelectedMember] = useState(null)
  const displayMembers = [...teamMembers, ...teamMembers.slice(0, 3)]
  const rows = [displayMembers.slice(0, 9), displayMembers.slice(9, 18)]

  return (
    <motion.section className="timeline-section" id="timeline" data-section-key="timeline" data-section-label="Timeline" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
      <div className="timeline-header container">
        <div className="timeline-intro">
          <h2>Built together</h2>
          <p>Meet the people who bring our brands, culture, and vision to life. Together, they shape our identity through creativity, collaboration, and a shared passion for what we do. With their energy and expertise, we continue to grow, evolve, and build our next chapter.</p>
        </div>
      </div>

      <div className="team-grid" aria-label="Our team">
        {rows.map((row, rowIndex) => (
          <div className="team-row-viewport" key={`team-row-${rowIndex}`}>
            <motion.div
              className="team-row-track"
              animate={{ x: rowIndex === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
            >
              {[...row, ...row].map((member, memberIndex) => (
                <motion.button type="button" className="team-member" key={`${member.id}-${memberIndex}`} onClick={() => setSelectedMember(member)} whileHover={{ y: -5 }} aria-label={`View ${member.name}, ${member.designation}`}>
                  <img src={member.image} alt="" loading="lazy" />
                  <span className="team-member-overlay">
                    <strong>{member.name}</strong>
                    <small>{member.designation}</small>
                  </span>
                </motion.button>
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
