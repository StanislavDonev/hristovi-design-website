import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

type Category = {
  title: string
  description: string
  image: string
  route?: string
  available: boolean
}

const categories: Category[] = [
  {
    title: 'Кухни',
    description: 'Разгледайте реализирани кухни с индивидуални решения и функционален дизайн.',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1200&h=800&fit=crop',
    route: '/projects/kitchens',
    available: true,
  },
  {
    title: 'Спални',
    description: 'Вижте проекти за уютни и елегантни спални, съобразени с вашия стил.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&h=800&fit=crop',
    route: '/projects/bedrooms',
    available: true,
  },
  {
    title: 'Детски',
    description: 'Креативни интериорни решения за детски стаи с фокус върху удобство и безопасност.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=800&fit=crop',
    available: false,
  },
  {
    title: 'Офиси',
    description: 'Ергономични и модерни офис пространства, създадени за продуктивна работа.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
    available: false,
  },
  {
    title: 'Луксозни проекти',
    description: 'Премиум проекти с висок клас материали, авторски детайли и изискано изпълнение.',
    image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=1200&h=800&fit=crop',
    available: false,
  },
]

const Projects: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="all-projects-page">
      <section className="all-projects-hero">
        <div className="container">
          <h1 className="all-projects-title">ПРОЕКТИ</h1>
          <p className="all-projects-subtitle">Изберете категория и разгледайте реализирани интериорни решения</p>
        </div>
      </section>

      <section className="all-projects-content">
        <div className="container">
          <div className="all-projects-grid">
            {categories.map((category) => (
              <article key={category.title} className="all-projects-card">
                <div className="all-projects-card-image-wrap">
                  <img src={category.image} alt={category.title} className="all-projects-card-image" />
                </div>
                <h2>{category.title}</h2>
                <p>{category.description}</p>

                {category.available && category.route ? (
                  <Link to={category.route} className="all-projects-btn">
                    Разгледай
                  </Link>
                ) : (
                  <span className="all-projects-soon">Очаквайте скоро</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
