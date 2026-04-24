import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectsKitchen.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  year: string
  location: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Минималистична дневна "Модерн"',
    description: 'Просторна дневна с изчистени линии, неутрална палитра и функционален дизайн. Всеки детайл е подчинен на принципа "по-малко е повече".',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    year: '2025',
    location: 'София, България'
  },
  {
    id: 2,
    title: 'Класическа дневна "Елеганс"',
    description: 'Изискана дневна в класически стил с масивни тапицирани мебели, акцентни стени и декоративно осветление.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    year: '2025',
    location: 'Варна, България'
  },
  {
    id: 3,
    title: 'Индустриална дневна "Лофт"',
    description: 'Смела дневна с открити тухли, метални акценти и рециклирани материали в автентичен лофт стил.',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Пловдив, България'
  },
  {
    id: 4,
    title: 'Скандинавска дневна "Нордик"',
    description: 'Светла и въздушна дневна с естествено дърво, лен и чисти форми. Хигата е постигната с минимум средства.',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Бургас, България'
  },
  {
    id: 5,
    title: 'Луксозна дневна "Престиж"',
    description: 'Ексклузивна дневна с мраморни акценти, кадифени тапицерии и авторско осветление от водещи дизайнери.',
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=800&h=600&fit=crop',
    year: '2024',
    location: 'София, България'
  },
  {
    id: 6,
    title: 'Семейна дневна "Уют"',
    description: 'Функционална и уютна дневна за цялото семейство с практично разпределение, лесна поддръжка и много място за съхранение.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&h=600&fit=crop',
    year: '2023',
    location: 'Русе, България'
  }
]

const ProjectsLiving: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-hero-title">ПРОЕКТИ: ДНЕВНИ</h1>
          <p className="projects-hero-subtitle">Реализирани проекти на дневни пространства от Hristovi Design</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="projects-intro">
            <h2>Нашите Завършени Проекти</h2>
            <p>
              Дневната е сърцето на дома — място за събирания, релакс и споделени моменти.
              Всеки проект е уникален и разработен специално за начина ви на живот.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} className="project-icon" />
                  <div className="project-overlay">
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-location">📍 {project.location}</p>
                  <p className="project-description">{project.description}</p>
                  <Link to={`/projects/living/living-${project.id}`} className="project-details-btn">Виж детайли</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <h2>Готови ли сте за вашия проект?</h2>
            <p>Свържете се с нас за безплатна консултация и оферта</p>
            <Link to="/contacts" className="contact-btn">Свържете се с нас</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsLiving
