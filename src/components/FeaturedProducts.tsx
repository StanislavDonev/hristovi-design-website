import React from 'react'
import './FeaturedProducts.css'

interface Product {
  id: number
  name: string
  price: number
  oldPrice?: number
  image: string
  badge?: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Модерен диван "Комфорт"',
    price: 1299,
    oldPrice: 1599,
    image: '🛋️',
    badge: 'ПРОМОЦИЯ'
  },
  {
    id: 2,
    name: 'Спален комплект "Елеганс"',
    price: 2499,
    image: '🛏️',
    badge: 'НОВ'
  },
  {
    id: 3,
    name: 'Кухненски шкаф "Модерна"',
    price: 899,
    oldPrice: 1099,
    image: '🏠'
  },
  {
    id: 4,
    name: 'Офис бюро "Професионал"',
    price: 749,
    image: '💼'
  },
  {
    id: 5,
    name: 'Трапезарна маса "Семейство"',
    price: 999,
    oldPrice: 1299,
    image: '🍽️',
    badge: 'ПРОМОЦИЯ'
  },
  {
    id: 6,
    name: 'Градински комплект "Релакс"',
    price: 1599,
    image: '🌳'
  }
]

const FeaturedProducts: React.FC = () => {
  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">ИЗБРАНИ ПРОДУКТИ</h2>
          <p className="section-subtitle">Открийте нашите най-популярни мебели</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
              <div className="product-image">
                <span className="product-icon">{product.image}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  {product.oldPrice && (
                    <span className="old-price">{product.oldPrice.toFixed(2)}лв.</span>
                  )}
                  <span className="current-price">{product.price.toFixed(2)}лв.</span>
                </div>
                <div className="product-actions">
                  <button className="add-to-cart">ДОБАВИ В КОШНИЦА</button>
                  <button className="wishlist-btn">❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section-footer">
          <button className="view-all-button">КЪМ ВСИЧКИ ПРОДУКТИ</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
