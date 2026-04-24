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
    title: 'Модерен офис "Корпорат"',
    description: 'Представителен корпоративен офис с отворен план, ергономични работни места и зони за срещи и релакс.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
    year: '2025',
    location: 'София, България'
  },
  {
    id: 2,
    title: 'Домашен офис "Баланс"',
    description: 'Функционален домашен офис с вграден шкаф-бюро, умно разпределение и дизайн, вписващ се хармонично в интериора.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    year: '2025',
    location: 'Варна, България'
  },
  {
    id: 3,
    title: 'Директорски кабинет "Престиж"',
    description: 'Луксозен директорски кабинет с масивно дърво, кожена тапицерия и авторитетен вид, достоен за ръководна позиция.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Пловдив, България'
  },
  {
    id: 4,
    title: 'Творчески офис "Студио"',
    description: 'Открит и вдъхновяващ творчески офис с гъвкави зони, индустриален стил и детайли, стимулиращи иновацията.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Бургас, България'
  },
  {
    id: 5,
    title: 'Ко-уъркинг "Хъб"',
    description: 'Многофункционален ко-уъркинг пространство с разнообразни зони — тихи кабини, открити бюра и зали за срещи.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=600&fit=crop',
    year: '2024',
    location: 'София, България'
  },
  {
    id: 6,
    title: 'Адвокатска кантора "Авторитет"',
    description: 'Класически и авторитетен интериор с библиотечни стени, масивни мебели и детайли, излъчващи доверие и стабилност.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    year: '2023',
    location: 'Русе, България'
  }
]

const ProjectsOffice: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-hero-title">ПРОЕКТИ: ОФИСИ</h1>
          <p className="projects-hero-subtitle">Реализирани проекти на офис пространства от Hristovi Design</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="projects-intro">
            <h2>Нашите Завършени Проекти</h2>
            <p>
              Правилното работно пространство повишава продуктивността и отразява
              идентичността на бизнеса ви. Проектираме офиси с характер.
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
                  <Link to={`/projects/office/office-${project.id}`} className="project-details-btn">Виж детайли</Link>
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

export default ProjectsOffice
