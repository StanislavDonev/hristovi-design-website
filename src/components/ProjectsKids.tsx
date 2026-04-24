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
    title: 'Детска стая за момче "Авантюрист"',
    description: 'Динамична и игрива стая с модерен дизайн, функционален работен кът и място за всички приключения на малкия изследовател.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=600&fit=crop',
    year: '2025',
    location: 'София, България'
  },
  {
    id: 2,
    title: 'Детска стая за момиче "Мечта"',
    description: 'Нежна и въображаема стая в пастелни тонове с ъгъл за игра, удобно легло с балдахин и персонализирани детайли.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
    year: '2025',
    location: 'Варна, България'
  },
  {
    id: 3,
    title: 'Бебешка стая "Облаче"',
    description: 'Уютна и безопасна стая за новородено с нежни тонове, ергономична мебел и обмислено разпределение за лесни нощни грижи.',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Пловдив, България'
  },
  {
    id: 4,
    title: 'Тийнейджърска стая "Творец"',
    description: 'Многофункционална стая за тийнейджър с голям работен кът, зона за отдих и достатъчно място за хобита и изразяване на личността.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Бургас, България'
  },
  {
    id: 5,
    title: 'Двойна детска стая "Близнаци"',
    description: 'Умно проектирана споделена стая с двуетажно легло, две отделни работни кътчета и изобилие от вградени шкафове.',
    image: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=800&h=600&fit=crop',
    year: '2024',
    location: 'София, България'
  },
  {
    id: 6,
    title: 'Детска стая "Природа"',
    description: 'Тематична стая вдъхновена от природата — дървесни мотиви, земни тонове и материали, безопасни за деца.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=600&fit=crop',
    year: '2023',
    location: 'Русе, България'
  }
]

const ProjectsKids: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-hero-title">ПРОЕКТИ: ДЕТСКИ</h1>
          <p className="projects-hero-subtitle">Реализирани проекти на детски стаи от Hristovi Design</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="projects-intro">
            <h2>Нашите Завършени Проекти</h2>
            <p>
              Детската стая е магическото място, където растат мечтите. Проектираме я
              с грижа за безопасността, функционалността и фантазията на вашето дете.
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
                  <Link to={`/projects/kids/kids-${project.id}`} className="project-details-btn">Виж детайли</Link>
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

export default ProjectsKids
