import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import bannerVideo from '../assets/video/Banner-Video.mp4'
import './styles/HeroSection.css'

const HeroSection = () => {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const wasPausedByViewport = useRef(false)
  const isPausedByUser = useRef(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    const video = videoRef.current
    if (!hero || !video) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (wasPausedByViewport.current && !isPausedByUser.current) {
          video.play().catch(() => {})
          setIsPaused(false)
          wasPausedByViewport.current = false
        }
        return
      }

      if (!video.paused) {
        video.pause()
        setIsPaused(true)
        wasPausedByViewport.current = true
      }
    }, { threshold: 0.1 })

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const togglePlayback = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {})
      isPausedByUser.current = false
      wasPausedByViewport.current = false
      setIsPaused(false)
    } else {
      videoRef.current.pause()
      isPausedByUser.current = true
      setIsPaused(true)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return

    videoRef.current.muted = !isMuted
    setIsMuted((muted) => !muted)
  }

  return (
    <section ref={heroRef} className="hero-section" id="hero" data-section-key="hero" data-section-label="Home">
      <div className="hero-image-wrap">
        <video ref={videoRef} className="hero-video" autoPlay loop playsInline aria-label="Harmoniq Creatives brand video">
          <source src={bannerVideo} type="video/mp4" />
        </video>
        <div className="hero-video-controls" aria-label="Video controls">
          <button type="button" onClick={togglePlayback} aria-label={isPaused ? 'Play video' : 'Pause video'} data-tooltip={isPaused ? 'Play video' : 'Pause video'}>
            {isPaused ? <Play size={15} fill="currentColor" aria-hidden="true" /> : <Pause size={15} fill="currentColor" aria-hidden="true" />}
          </button>
          <button type="button" onClick={toggleMute} aria-label={isMuted ? 'Unmute video' : 'Mute video'} data-tooltip={isMuted ? 'Unmute video' : 'Mute video'}>
            {isMuted ? <VolumeX size={17} aria-hidden="true" /> : <Volume2 size={17} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
