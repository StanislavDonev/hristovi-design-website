import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  {
    title: 'Индивидуален Подход',
    text: 'Всеки проект започва с детайлен разговор и анализ на пространството, за да създадем решение, което отразява вашия стил.',
  },
  {
    title: 'Премиум Материали',
    text: 'Работим с доказани доставчици и висок клас материали, които гарантират дълготрайност, комфорт и естетика.',
  },
  {
    title: 'Прецизно Изпълнение',
    text: 'Комбинираме дизайн, функционалност и майсторска изработка, за да превърнем всяка идея в реален, завършен интериор.',
  },
]

const About: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <p className="about-kicker">HRISTOVI DESIGN</p>
          <h1 className="about-title">ЗА НАС</h1>
          <p className="about-subtitle">
            Създаваме интериори по мярка, които съчетават характер, уют и висока функционалност.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-grid">
          <article className="about-card">
            <h2>Нашата История</h2>
            <p>
              Hristovi Design е студио за интериорен дизайн и мебели по поръчка, създадено с идеята
              да превръща домовете в пространства с ясно усещане за стил и комфорт. Проектираме кухни,
              спални, дневни и цялостни интериорни концепции за клиенти в цялата страна.
            </p>
            <p>
              За нас добрият дизайн не е само визия. Той е баланс между естетика, функционалност и
              качествена изработка, който работи еднакво добре днес и след години.
            </p>
          </article>

          <aside className="about-stats">
            <div className="stat-box">
              <span className="stat-number">120+</span>
              <span className="stat-label">Реализирани проекта</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">10+</span>
              <span className="stat-label">Години опит</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">98%</span>
              <span className="stat-label">Доволни клиенти</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2>Как Работим</h2>
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Готови ли сте да започнем вашия проект?</h2>
          <p>Разгледайте реализираните ни решения и нека създадем интериор, който пасва на вашия начин на живот.</p>
          <div className="about-cta-actions">
            <Link to="/projects" className="about-btn about-btn-primary">Разгледай проекти</Link>
            <a href="mailto:office@hristovidesign.bg" className="about-btn about-btn-secondary">Свържи се с нас</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
