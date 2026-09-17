import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import bannerImage from '../assets/banner/banner-image-1.webp'
import bannerVideo from '../assets/banner/banner-video-3.mp4'

import './styles/HeroSection.css'

const HeroSection = () => {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const isPausedByUser = useRef(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    const video = videoRef.current
    if (!hero || !video) return undefined

    video.muted = true
    const startPlayback = () => {
      if (isPausedByUser.current) return
      video.play().then(() => setIsPaused(false)).catch(() => setIsPaused(true))
    }

    if (video.readyState >= 2) startPlayback()
    else video.addEventListener('loadeddata', startPlayback, { once: true })

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!isPausedByUser.current && video.paused) startPlayback()
        return
      }

      if (!video.paused) {
        video.pause()
        setIsPaused(true)
      }
    }, { threshold: 0.1 })

    observer.observe(hero)
    return () => {
      observer.disconnect()
      video.removeEventListener('loadeddata', startPlayback)
    }
  }, [activeSlide])

  const moveSlide = (direction) => {
    isPausedByUser.current = false
    setVideoError(false)
    setActiveSlide((slide) => (slide + direction + 2) % 2)
  }

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play().catch(() => {})
      isPausedByUser.current = false
      setIsPaused(false)
    } else {
      video.pause()
      isPausedByUser.current = true
      setIsPaused(true)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted((muted) => !muted)
  }

  return (
    <section ref={heroRef} className="hero-section" id="hero" data-section-key="hero" data-section-label="Home">
      <div className="hero-image-wrap">
        {activeSlide === 0 && !videoError ? (
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={bannerImage}
            src={bannerVideo}
            onError={() => {
              setVideoError(true)
              setIsPaused(true)
            }}
            aria-label="Suvid Retail banner video"
          >
            Your browser does not support the banner video.
          </video>
        ) : (
          <img className="hero-banner-image" src={bannerImage} alt="Suvid Retail banner image" />
        )}

        <button
          type="button"
          className="hero-carousel-arrow hero-carousel-arrow-prev"
          onClick={() => moveSlide(-1)}
          aria-label="Show previous banner"
        >
          <ChevronLeft size={25} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="hero-carousel-arrow hero-carousel-arrow-next"
          onClick={() => moveSlide(1)}
          aria-label="Show next banner"
        >
          <ChevronRight size={25} aria-hidden="true" />
        </button>

        {activeSlide === 0 && !videoError && (
          <div className="hero-video-controls" aria-label="Video controls">
            <button type="button" onClick={togglePlayback} aria-label={isPaused ? 'Play video' : 'Pause video'} data-tooltip={isPaused ? 'Play video' : 'Pause video'}>
              {isPaused ? <Play size={15} fill="currentColor" aria-hidden="true" /> : <Pause size={15} fill="currentColor" aria-hidden="true" />}
            </button>
            <button type="button" onClick={toggleMute} aria-label={isMuted ? 'Unmute video' : 'Mute video'} data-tooltip={isMuted ? 'Unmute video' : 'Mute video'}>
              {isMuted ? <VolumeX size={17} aria-hidden="true" /> : <Volume2 size={17} aria-hidden="true" />}
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default HeroSection
