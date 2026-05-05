import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeProjects.css'

type ProjectCategory =
  | 'ВСИЧКИ'
  | 'КУХНИ'
  | 'ДНЕВНИ'
  | 'СПАЛНИ'
  | 'ДЕТСКИ'
  | 'ОФИСИ'
  | 'ВЛАГОУСТОЙЧИВИ МЕБЕЛИ'
  | 'ЛУКСОЗНИ ПРОЕКТИ'
  | 'ЦЯЛОСТНИ ИНТЕРИОРИ'

const TABS: ProjectCategory[] = [
  'ВСИЧКИ',
  'КУХНИ',
  'ДНЕВНИ',
  'СПАЛНИ',
  'ДЕТСКИ',
  'ОФИСИ',
  'ВЛАГОУСТОЙЧИВИ МЕБЕЛИ',
  'ЛУКСОЗНИ ПРОЕКТИ',
  'ЦЯЛОСТНИ ИНТЕРИОРИ',
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
    title: 'МИНИМАЛИСТИЧНА ДНЕВНА',
    category: 'ДНЕВНИ',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    route: '/projects/living/living-1',
  },
  {
    id: 5,
    title: 'КЛАСИЧЕСКА ДНЕВНА',
    category: 'ДНЕВНИ',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    route: '/projects/living/living-2',
  },
  {
    id: 6,
    title: 'ИНДУСТРИАЛНА ДНЕВНА',
    category: 'ДНЕВНИ',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop',
    route: '/projects/living/living-3',
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
    title: 'ДЕТСКА СТАЯ ЗА МОМЧЕ',
    category: 'ДЕТСКИ',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=600&fit=crop',
    route: '/projects/kids/kids-1',
  },
  {
    id: 11,
    title: 'ДЕТСКА СТАЯ ЗА МОМИЧЕ',
    category: 'ДЕТСКИ',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
    route: '/projects/kids/kids-2',
  },
  {
    id: 12,
    title: 'БЕБЕШКА СТАЯ',
    category: 'ДЕТСКИ',
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop',
    route: '/projects/kids/kids-3',
  },
  {
    id: 13,
    title: 'МОДЕРЕН ОФИС',
    category: 'ОФИСИ',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop',
    route: '/projects/office/office-1',
  },
  {
    id: 14,
    title: 'ДОМАШЕН ОФИС',
    category: 'ОФИСИ',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    route: '/projects/office/office-2',
  },
  {
    id: 15,
    title: 'ДИРЕКТОРСКИ КАБИНЕТ',
    category: 'ОФИСИ',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop',
    route: '/projects/office/office-3',
  },
  {
    id: 16,
    title: 'БАНЯ СПА ИЗЖИВЯВАНЕ',
    category: 'ВЛАГОУСТОЙЧИВИ МЕБЕЛИ',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
    route: '/projects/moisture/moisture-1',
  },
  {
    id: 17,
    title: 'ПЕРАЛНО ПОМЕЩЕНИЕ',
    category: 'ВЛАГОУСТОЙЧИВИ МЕБЕЛИ',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop',
    route: '/projects/moisture/moisture-2',
  },
  {
    id: 18,
    title: 'ПЛАЖНА ВИЛА',
    category: 'ВЛАГОУСТОЙЧИВИ МЕБЕЛИ',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=600&fit=crop',
    route: '/projects/moisture/moisture-3',
  },
  {
    id: 19,
    title: 'ПЕНТХАУС ОЛИМП',
    category: 'ЛУКСОЗНИ ПРОЕКТИ',
    image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=800&h=600&fit=crop',
    route: '/projects/luxury/luxury-1',
  },
  {
    id: 20,
    title: 'ВИЛА РЕЗИДЕНЦИЯ',
    category: 'ЛУКСОЗНИ ПРОЕКТИ',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&h=600&fit=crop',
    route: '/projects/luxury/luxury-2',
  },
  {
    id: 21,
    title: 'ЛУКСОЗНА КУХНЯ ГУРМЕ',
    category: 'ЛУКСОЗНИ ПРОЕКТИ',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    route: '/projects/luxury/luxury-3',
  },
  {
    id: 22,
    title: 'АПАРТАМЕНТ ХАРМОНИЯ',
    category: 'ЦЯЛОСТНИ ИНТЕРИОРИ',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&fit=crop',
    route: '/projects/interior/interior-1',
  },
  {
    id: 23,
    title: 'ВИЛА ПРИРОДА',
    category: 'ЦЯЛОСТНИ ИНТЕРИОРИ',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
    route: '/projects/interior/interior-2',
  },
  {
    id: 24,
    title: 'ОФИС ПРОЕКТ ЦЕНТРАЛА',
    category: 'ЦЯЛОСТНИ ИНТЕРИОРИ',
    image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800&h=600&fit=crop',
    route: '/projects/interior/interior-3',
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
