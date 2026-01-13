import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectsBedroom.css'

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
    title: 'Модерна спалня "Луна"',
    description: 'Елегантна минималистична спалня с меки тонове и уютна атмосфера. Изцяло проектирана по мярка с висококачествени материали.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
    year: '2025',
    location: 'София, България'
  },
  {
    id: 2,
    title: 'Класическа спалня "Романтика"',
    description: 'Изискана спалня в класически стил с масивно дърво и нежни текстили. Перфектна комбинация от традиция и комфорт.',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
    year: '2025',
    location: 'Варна, България'
  },
  {
    id: 3,
    title: 'Луксозна спалня "Престиж"',
    description: 'Ексклузивна спалня с премиум материали и дизайнерски решения. Всеки детайл е внимателно подбран за максимален комфорт и релакс.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Пловдив, България'
  },
  {
    id: 4,
    title: 'Семейна спалня "Хармония"',
    description: 'Просторна и функционална спалня, идеална за семейства. Оптимално разпределение на пространството и много място за съхранение.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Бургас, България'
  },
  {
    id: 5,
    title: 'Индустриална спалня "Лофт"',
    description: 'Модерна спалня в индустриален стил с открити тухли и метални акценти. Уникален и смел дизайн за ценители на урбанистиката.',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',
    year: '2024',
    location: 'София, България'
  },
  {
    id: 6,
    title: 'Скандинавска спалня "Нордик"',
    description: 'Светла и просторна спалня в скандинавски стил. Естествени материали и чисти линии създават усещане за спокойствие и уют.',
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&h=600&fit=crop',
    year: '2023',
    location: 'Русе, България'
  }
]

const ProjectsBedroom: React.FC = () => {
  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-hero-title">ПРОЕКТИ: СПАЛНИ</h1>
          <p className="projects-hero-subtitle">Реализирани проекти на спални от Hristovi Design</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="projects-intro">
            <h2>Нашите Завършени Проекти</h2>
            <p>
              Всеки проект е уникален и създаден специално за нуждите на нашите клиенти.
              От класически до модерни решения, ние превръщаме мечтите ви в реалност.
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
                  <Link to={`/projects/bedrooms/bedroom-${project.id}`} className="project-details-btn">Виж детайли</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="projects-cta">
            <h2>Готови ли сте за вашия проект?</h2>
            <p>Свържете се с нас за безплатна консултация и оферта</p>
            <button className="contact-btn">Свържете се с нас</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsBedroom
