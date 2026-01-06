import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && agreed) {
      alert('Благодарим за абонамента!')
      setEmail('')
      setAgreed(false)
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">АБОНАМЕНТ ЗА НОВИНИ</h2>
            <p className="newsletter-subtitle">
              Получавайте информация за нови продукти и специални оферти
            </p>
          </div>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Вашият имейл адрес"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-button">
                АБОНИРАНЕ
              </button>
            </div>
            
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                required
              />
              <span>
                Приемам <a href="#">ОБЩИ УСЛОВИЯ</a> и <a href="#">ЗАЩИТА НА ЛИЧНИ ДАННИ</a>
              </span>
            </label>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
