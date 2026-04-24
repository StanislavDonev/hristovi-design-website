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
  {
    title: 'Висок Клас Механизми',
    text: 'Използваме световно известни мебелни механизми и системи (Blum, Hettich, Grass и др.), които гарантират гладко функциониране и дълготрайност на вашите мебели.',
  },
  {
    title: 'Бърза Изработка',
    text: 'Оптимизираме процеса на производство и доставка, за да доставим вашия проект в най-кратък разумен период без компромис в качеството.',
  },
  {
    title: 'Следпродажбена Поддръжка',
    text: 'Предоставяме гаранция и техническа поддръжка за всички наши проекти, като сме винаги готови да помогнем при нужда.',
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
              спални, детски, дневни, офиси и цялостни интериорни концепции за клиенти в цялата страна.
            </p>
            <p>
              За нас добрият дизайн не е само визия. Той е баланс между естетика, функционалност и
              качествена изработка, който работи еднакво добре днес и след години.
            </p>
            <p>
              Базирани сме във Варна и работим с клиенти от цялата страна. Всеки проект се ражда от
              диалог — слушаме внимателно, задаваме правилните въпроси и предлагаме решения, съобразени
              с вашия начин на живот, предпочитания и бюджет.
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

      <section className="about-philosophy">
        <div className="container">
          <blockquote className="philosophy-quote">
            <p>„Мебелите не са просто предмети — те са рамката на живота ви.
            Ние проектираме тази рамка с внимание, умение и уважение към
            всеки детайл."</p>
            <cite>— Hristovi Design</cite>
          </blockquote>
        </div>
      </section>

      <section className="about-process">
        <div className="container">
          <h2 className="about-section-title">Нашият Процес</h2>
          <p className="about-section-subtitle">От първата среща до финалния монтаж — ние сме с вас на всяка стъпка.</p>
          <div className="process-steps">
            <div className="process-step">
              <span className="process-step-number">01</span>
              <h3>Консултация</h3>
              <p>Запознаваме се с вашите нужди, вкус и пространство. Обсъждаме идеи, стилове и бюджет без никакъв ангажимент.</p>
            </div>
            <div className="process-step">
              <span className="process-step-number">02</span>
              <h3>Дизайн & Оферта</h3>
              <p>Изработваме 3D визуализация и детайлна оферта. Прецизираме всеки детайл заедно с вас до пълно удовлетворение.</p>
            </div>
            <div className="process-step">
              <span className="process-step-number">03</span>
              <h3>Производство</h3>
              <p>След одобрение стартираме производството с CNC прецизност и висококачествени материали от европейски доставчици.</p>
            </div>
            <div className="process-step">
              <span className="process-step-number">04</span>
              <h3>Монтаж & Предаване</h3>
              <p>Нашият екип извършва монтажа на място и предава завършения проект с гаранция и пълна техническа поддръжка.</p>
            </div>
          </div>
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
