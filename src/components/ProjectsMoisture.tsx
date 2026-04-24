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
    title: 'Баня "Спа Изживяване"',
    description: 'Луксозна баня с влагоустойчиви шкафове, вградено осветление и материали, устойчиви на постоянна влага и пара.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
    year: '2025',
    location: 'София, България'
  },
  {
    id: 2,
    title: 'Перално помещение "Ред"',
    description: 'Функционално перално с вградени влагоустойчиви шкафове, работен плот и умно организирано пространство за пране.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop',
    year: '2025',
    location: 'Варна, България'
  },
  {
    id: 3,
    title: 'Плажна вила "Лазур"',
    description: 'Морска вила с обзавеждане специално разработено за морски климат — антикорозионна фурнитура и влагоустойчиви повърхности.',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Созопол, България'
  },
  {
    id: 4,
    title: 'Хотелска баня "Лукс"',
    description: 'Серия от хотелски бани с унифициран луксозен дизайн и материали с доказана издръжливост в интензивна търговска употреба.',
    image: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Бургас, България'
  },
  {
    id: 5,
    title: 'Мокра зона "Практичност"',
    description: 'Практична мокра зона с максимална функционалност — специализирани покрития за влажна среда и лесна поддръжка.',
    image: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Пловдив, България'
  },
  {
    id: 6,
    title: 'Баня "Минимализъм"',
    description: 'Минималистична баня с плаващи влагоустойчиви шкафове, мрамороподобни плочки и безупречна интеграция на всеки детайл.',
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&h=600&fit=crop',
    year: '2023',
    location: 'Русе, България'
  }
]

const ProjectsMoisture: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-hero-title">ПРОЕКТИ: ВЛАГОУСТОЙЧИВИ МЕБЕЛИ</h1>
          <p className="projects-hero-subtitle">Реализирани проекти с влагоустойчиви мебели от Hristovi Design</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="projects-intro">
            <h2>Нашите Завършени Проекти</h2>
            <p>
              Специализирани решения за бани, перални, мокри зони и морски имоти.
              Красота и издръжливост дори в условия на постоянна влажност.
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
                  <Link to={`/projects/moisture/moisture-${project.id}`} className="project-details-btn">Виж детайли</Link>
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

export default ProjectsMoisture
