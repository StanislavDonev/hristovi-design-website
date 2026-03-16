import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

type Category = {
  title: string
  description: string
  route?: string
  available: boolean
}

const categories: Category[] = [
  {
    title: 'Кухни',
    description: 'Разгледайте реализирани кухни с индивидуални решения и функционален дизайн.',
    route: '/projects/kitchens',
    available: true,
  },
  {
    title: 'Спални',
    description: 'Вижте проекти за уютни и елегантни спални, съобразени с вашия стил.',
    route: '/projects/bedrooms',
    available: true,
  },
  {
    title: 'Детски',
    description: 'Креативни интериорни решения за детски стаи с фокус върху удобство и безопасност.',
    available: false,
  },
  {
    title: 'Офиси',
    description: 'Ергономични и модерни офис пространства, създадени за продуктивна работа.',
    available: false,
  },
  {
    title: 'Луксозни проекти',
    description: 'Премиум проекти с висок клас материали, авторски детайли и изискано изпълнение.',
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
