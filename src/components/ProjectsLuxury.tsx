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
    title: 'Пентхаус "Олимп"',
    description: 'Ексклузивен пентхаус с авторски мебели от масивно дърво и мрамор, ръчно изработени детайли и уникален характер.',
    image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=800&h=600&fit=crop',
    year: '2025',
    location: 'София, България'
  },
  {
    id: 2,
    title: 'Вила "Резиденция"',
    description: 'Луксозна вила с комплексно обзавеждане — от хола до трапезарията, всичко изработено по поръчка с висококачествени материали.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop',
    year: '2025',
    location: 'Варна, България'
  },
  {
    id: 3,
    title: 'Луксозна кухня "Гурме"',
    description: 'Гурме кухня с огромен централен остров от мрамор, интегрирани уреди от висок клас и персонализирани детайли.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Пловдив, България'
  },
  {
    id: 4,
    title: 'Луксозна баня "СПА"',
    description: 'Частна спа-баня с вградена вана, душ кабина под звездно небе, нагреваеми плочки и премиум влагоустойчиви шкафове.',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Бургас, България'
  },
  {
    id: 5,
    title: 'Апартамент "Дипломат"',
    description: 'Представителен апартамент с луксозно обзавеждане, произведено изцяло по поръчка за взискателен чуждестранен клиент.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop',
    year: '2024',
    location: 'София, България'
  },
  {
    id: 6,
    title: 'Трапезария "Банкет"',
    description: 'Грандиозна трапезарна зала с авторска маса за 12 души, ексклузивен бюфет от фурнировано дърво и декоративно осветление.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    year: '2023',
    location: 'Русе, България'
  }
]

const ProjectsLuxury: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-hero-title">ПРОЕКТИ: ЛУКСОЗНИ</h1>
          <p className="projects-hero-subtitle">Реализирани луксозни проекти от Hristovi Design</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="projects-intro">
            <h2>Нашите Завършени Проекти</h2>
            <p>
              За онези, които не правят компромис с качеството. Всеки луксозен проект
              е лично ангажиране — от концепция до финален монтаж.
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
                  <Link to={`/projects/luxury/luxury-${project.id}`} className="project-details-btn">Виж детайли</Link>
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

export default ProjectsLuxury
