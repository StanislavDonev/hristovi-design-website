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
    title: 'Апартамент "Хармония"',
    description: 'Пълен интериорен проект на тристаен апартамент — кухня, дневна, спалня, баня. Единна концепция от начало до край.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
    year: '2025',
    location: 'София, България'
  },
  {
    id: 2,
    title: 'Вила "Природа"',
    description: 'Комплексен интериорен проект на двуетажна вила с общо обзавеждане за всички помещения по единна дизайнерска концепция.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
    year: '2025',
    location: 'Варна, България'
  },
  {
    id: 3,
    title: 'Офис проект "Централа"',
    description: 'Пълен офис интериор за компания — рецепция, заседателни зали, отворен работен план и кухненска зона.',
    image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Пловдив, България'
  },
  {
    id: 4,
    title: 'Лофт апартамент "Авангард"',
    description: 'Цялостно преустройство и обзавеждане на лофт апартамент с авангарден характер — от концепция до последния детайл.',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Бургас, България'
  },
  {
    id: 5,
    title: 'Морска вила "Бриз"',
    description: 'Комплексен интериор на морска вила — влагоустойчиви материали, морска тематика и максимален комфорт за ваканционен имот.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=600&fit=crop',
    year: '2024',
    location: 'Созопол, България'
  },
  {
    id: 6,
    title: 'Семеен дом "Мечта"',
    description: 'Тотален интериорен проект на семейна къща — функционален, красив и адаптиран за всеки член на семейството.',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&h=600&fit=crop',
    year: '2023',
    location: 'Русе, България'
  }
]

const ProjectsInterior: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-hero-title">ПРОЕКТИ: ЦЯЛОСТНИ ИНТЕРИОРНИ РЕШЕНИЯ</h1>
          <p className="projects-hero-subtitle">Реализирани комплексни интериорни проекти от Hristovi Design</p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="projects-intro">
            <h2>Нашите Завършени Проекти</h2>
            <p>
              От идеята до ключа — реализираме пълни интериорни проекти за домове,
              вили и офиси с единна концепция и прецизно изпълнение на всеки детайл.
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
                  <Link to={`/projects/interior/interior-${project.id}`} className="project-details-btn">Виж детайли</Link>
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

export default ProjectsInterior
