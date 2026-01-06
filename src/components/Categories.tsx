import React from 'react'
import './Categories.css'

interface Category {
  id: number
  name: string
  icon: string
}

const categories: Category[] = [
  { id: 1, name: 'СПАЛНИ', icon: '🛏️' },
  { id: 2, name: 'ДНЕВНИ', icon: '🛋️' },
  { id: 3, name: 'КУХНИ', icon: '🍽️' },
  { id: 4, name: 'ОФИС МЕБЕЛИ', icon: '💼' },
  { id: 5, name: 'ГРАДИНСКИ', icon: '🌳' },
  { id: 6, name: 'АКСЕСОАРИ', icon: '✨' }
]

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <button className="category-button">ПАЗАРУВАЙТЕ</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
