import React, { useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import './ScrollingProjects.css'

type ScrollingProject = {
  title: string
  category: string
  location: string
  year: string
  image: string
  link: string
}

const projects: ScrollingProject[] = [
  {
    title: 'Кухня "Минимализъм"',
    category: 'Кухни',
    location: 'София',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&h=900&fit=crop',
    link: '/projects/kitchens/kitchen-1',
  },
  {
    title: 'Спалня "Луна"',
    category: 'Спални',
    location: 'Варна',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&h=900&fit=crop',
    link: '/projects/bedrooms/bedroom-1',
  },
  {
    title: 'Кухня "Елеганс"',
    category: 'Кухни',
    location: 'Пловдив',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&h=900&fit=crop',
    link: '/projects/kitchens/kitchen-2',
  },
  {
    title: 'Спалня "Престиж"',
    category: 'Спални',
    location: 'Бургас',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&h=900&fit=crop',
    link: '/projects/bedrooms/bedroom-3',
  },
  {
    title: 'Кухня "Лофт"',
    category: 'Кухни',
    location: 'Русе',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=900&fit=crop',
    link: '/projects/kitchens/kitchen-5',
  },
  {
    title: 'Спалня "Нордик"',
    category: 'Спални',
    location: 'Велико Търново',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&h=900&fit=crop',
    link: '/projects/bedrooms/bedroom-6',
  },
]

const ScrollingProjects: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const cardCount = projects.length

  const duplicatedProjects = useMemo(() => [...projects, ...projects], [])

  useEffect(() => {
    const slider = sliderRef.current

    if (!slider) {
      return
    }

    const interval = window.setInterval(() => {
      const cards = slider.querySelectorAll<HTMLElement>('.scrolling-project-card')

      if (!cards.length) {
        return
      }

      const cardWidth = cards[0].offsetWidth + 20
      const maxScroll = slider.scrollWidth - slider.clientWidth
      const nextScroll = slider.scrollLeft + cardWidth

      if (nextScroll >= maxScroll - cardWidth) {
        slider.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        slider.scrollTo({ left: nextScroll, behavior: 'smooth' })
      }
    }, 3600)

    return () => {
      window.clearInterval(interval)
    }
  }, [cardCount])

  const scrollByCards = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) {
      return
    }

    const firstCard = sliderRef.current.querySelector<HTMLElement>('.scrolling-project-card')

    if (!firstCard) {
      return
    }

    const amount = firstCard.offsetWidth + 20
    const delta = direction === 'next' ? amount : -amount

    sliderRef.current.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="scrolling-projects">
      <div className="container">
        <div className="scrolling-projects-head">
          <p className="scrolling-projects-kicker">ИЗБРАНИ ПРОЕКТИ</p>
          <h2 className="scrolling-projects-title">Реализации, които се движат с вашия ритъм</h2>
        </div>
      </div>

      <div className="scrolling-slider-wrap">
        <button
          type="button"
          className="scrolling-nav scrolling-prev"
          aria-label="Предишен проект"
          onClick={() => scrollByCards('prev')}
        >
          &#10094;
        </button>

        <div className="scrolling-slider" ref={sliderRef}>
          {duplicatedProjects.map((project, index) => (
            <Link
              key={`${project.title}-${index}-main`}
              to={project.link}
              className="scrolling-project-card"
              aria-label={`Виж проект ${project.title}`}
            >
              <img src={project.image} alt={project.title} className="scrolling-project-image" />
              <div className="scrolling-project-overlay" />
              <div className="scrolling-project-content">
                <span className="scrolling-project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.location} • {project.year}</p>
              </div>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="scrolling-nav scrolling-next"
          aria-label="Следващ проект"
          onClick={() => scrollByCards('next')}
        >
          &#10095;
        </button>
      </div>

      <div className="container">
        <div className="scrolling-projects-footer">
          <Link to="/projects" className="scrolling-projects-btn">Виж всички проекти</Link>
        </div>
      </div>
    </section>
  )
}

export default ScrollingProjects
