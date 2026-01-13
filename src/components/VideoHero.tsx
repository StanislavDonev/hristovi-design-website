import React, { useRef, useEffect } from 'react'
import './VideoHero.css'
import heroVideo from '../assets/14.0-30.0.mp4'

const VideoHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <section className="video-hero">
      <div className="video-container">
        <video
          ref={videoRef}
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
        >
          {/* Sample furniture video - using a placeholder */}
          <source
            src={heroVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        <div className="video-overlay"></div>
        
        <div className="video-content">
          <div className="container">
            <h1 className="video-title">HRISTOVI DESIGN</h1>
            <p className="video-subtitle">Мебели, които създават история</p>
            <button className="video-cta">ОТКРИЙ КОЛЕКЦИЯТА</button>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  )
}

export default VideoHero
