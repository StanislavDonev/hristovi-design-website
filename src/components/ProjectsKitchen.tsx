import React from 'react'
import { Link } from 'react-router-dom'
import './ProjectsKitchen.css'
import scandinavianKitchen from '../assets/images/scandinavian-kitchen-ideas-article.jpg'

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
    title: 'Модерна кухня "Минимализъм"',
    description: 'Елегантна минималистична кухня с черни и златни акценти. Изцяло проектирана по мярка с висококачествени материали.',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop',
    year: '2025',
    location: 'София, България'
  },
  {
    id: 2,
    title: 'Класическа кухня "Елеганс"',
    description: 'Изискана кухня в класически стил с масивно дърво и мраморни плотове. Перфектна комбинация от традиция и модерност.',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop',
    year: '2025',
    location: 'Варна, България'
  },
  {
    id: 3,
    title: 'Луксозна кухня "Престиж"',
    description: 'Ексклузивна кухня с премиум техника и дизайнерски решения. Всеки детайл е внимателно подбран за максимален комфорт.',
    image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Пловдив, България'
  },
  {
    id: 4,
    title: 'Семейна кухня "Уют"',
    description: 'Просторна и функционална кухня, идеална за семейства. Оптимално разпределение на пространството и много място за съхранение.',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Бургас, България'
  },
  {
    id: 5,
    title: 'Индустриална кухня "Лофт"',
    description: 'Модерна кухня в индустриален стил с открити тухли и метални акценти. Уникален и смел дизайн.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    year: '2024',
    location: 'София, България'
  },
  {
    id: 6,
    title: 'Скандинавска кухня "Нордик"',
    description: 'Светла и просторна кухня в скандинавски стил. Естествени материали и чисти линии създават усещане за спокойствие.',
    image: scandinavianKitchen,
    year: '2023',
    location: 'Русе, България'
  }
]

const ProjectsKitchen: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-hero-title">ПРОЕКТИ: КУХНИ</h1>
          <p className="projects-hero-subtitle">Реализирани проекти на кухни от Hristovi Design</p>
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
                  <Link to={`/projects/kitchens/kitchen-${project.id}`} className="project-details-btn">Виж детайли</Link>
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

export default ProjectsKitchen
