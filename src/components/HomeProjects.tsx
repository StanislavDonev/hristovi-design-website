import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeProjects.css'

type ProjectCategory =
  | 'ВСИЧКИ'
  | 'КУХНИ'
  | 'СПАЛНИ'

const TABS: ProjectCategory[] = [
  'ВСИЧКИ',
  'КУХНИ',
  'СПАЛНИ',
]

interface Project {
  id: number
  title: string
  category: Exclude<ProjectCategory, 'ВСИЧКИ'>
  image: string
  route: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'МИНИМАЛИСТИЧНА КУХНЯ',
    category: 'КУХНИ',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop',
    route: '/projects/kitchens/kitchen-1',
  },
  {
    id: 2,
    title: 'КЛАСИЧЕСКА КУХНЯ',
    category: 'КУХНИ',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop',
    route: '/projects/kitchens/kitchen-2',
  },
  {
    id: 3,
    title: 'ЛУКСОЗНА КУХНЯ',
    category: 'КУХНИ',
    image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop',
    route: '/projects/kitchens/kitchen-3',
  },
  {
    id: 4,
    title: 'СЕМЕЙНА КУХНЯ',
    category: 'КУХНИ',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop',
    route: '/projects/kitchens/kitchen-4',
  },
  {
    id: 5,
    title: 'ИНДУСТРИАЛНА КУХНЯ',
    category: 'КУХНИ',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    route: '/projects/kitchens/kitchen-5',
  },
  {
    id: 6,
    title: 'СКАНДИНАВСКА КУХНЯ',
    category: 'КУХНИ',
    image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop',
    route: '/projects/kitchens/kitchen-6',
  },
  {
    id: 7,
    title: 'МОДЕРНА СПАЛНЯ',
    category: 'СПАЛНИ',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
    route: '/projects/bedrooms/bedroom-1',
  },
  {
    id: 8,
    title: 'КЛАСИЧЕСКА СПАЛНЯ',
    category: 'СПАЛНИ',
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
    route: '/projects/bedrooms/bedroom-2',
  },
  {
    id: 9,
    title: 'ЛУКСОЗНА СПАЛНЯ',
    category: 'СПАЛНИ',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    route: '/projects/bedrooms/bedroom-3',
  },
  {
    id: 10,
    title: 'СЕМЕЙНА СПАЛНЯ',
    category: 'СПАЛНИ',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
    route: '/projects/bedrooms/bedroom-4',
  },
  {
    id: 11,
    title: 'ИНДУСТРИАЛНА СПАЛНЯ',
    category: 'СПАЛНИ',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop',
    route: '/projects/bedrooms/bedroom-5',
  },
  {
    id: 12,
    title: 'СКАНДИНАВСКА СПАЛНЯ',
    category: 'СПАЛНИ',
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&h=600&fit=crop',
    route: '/projects/bedrooms/bedroom-6',
  },
]

const HomeProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('ВСИЧКИ')

  const filteredProjects =
    activeTab === 'ВСИЧКИ'
      ? projects
      : projects.filter((project) => project.category === activeTab)

  return (
    <section className="home-projects">
      <div className="home-projects-container">
        <h2 className="home-projects-title">ПРОЕКТИ</h2>

        <div className="home-projects-tabs">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`home-projects-tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="home-projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="home-projects-card">
              <Link
                to={project.route}
                className="home-projects-card-link"
                aria-label={`Отвори ${project.title}`}
              >
                <div className="home-projects-card-img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="home-projects-card-img"
                    loading="lazy"
                  />
                </div>
                <div className="home-projects-card-info">
                  <h3 className="home-projects-card-title">{project.title}</h3>
                  <span className="home-projects-card-category">{project.category}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProjects
