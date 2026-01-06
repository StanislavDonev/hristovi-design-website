import React, { useState, useEffect } from 'react'
import './Hero.css'

const slides = [
  {
    title: 'ВСИЧКО ЗА ВАШИЯ ДОМ ОТ HRISTOVI DESIGN',
    subtitle: 'Качествени мебели за вашия комфорт',
    buttonText: 'РАЗГЛЕДАЙ',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1920&h=800&fit=crop'
  },
  {
    title: 'МОДЕРЕН ДИЗАЙН И ФУНКЦИОНАЛНОСТ',
    subtitle: 'Създаваме пространства, които вдъхновяват',
    buttonText: 'ОТКРИЙ ПОВЕЧЕ',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=800&fit=crop'
  },
  {
    title: 'СПЕЦИАЛНИ ОФЕРТИ',
    subtitle: 'Намаления до -40% на избрани продукти',
    buttonText: 'КЪМ ПРОМОЦИИТЕ',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=800&fit=crop'
  }
]

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container">
              <div className="hero-content">
                <h2 className="hero-title">{slide.title}</h2>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <button className="hero-button">{slide.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
