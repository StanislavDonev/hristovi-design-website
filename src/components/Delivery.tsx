import React from 'react'
import { Link } from 'react-router-dom'
import './Delivery.css'

const steps = [
  {
    number: '01',
    title: 'Запитване и консултация',
    description:
      'Свържете се с нас по телефон, имейл или чрез формата за контакт. Уговаряме удобен час за безплатна консултация на място или онлайн, при която обсъждаме вашите нужди, пространство и предпочитания.',
  },
  {
    number: '02',
    title: 'Замерване и проектиране',
    description:
      'Нашите специалисти извършват прецизно замерване на обекта. Изготвяме индивидуален проект с чертежи и 3D визуализации, съобразен с вашите изисквания и архитектурата на помещението.',
  },
  {
    number: '03',
    title: 'Одобрение и производство',
    description:
      'След вашето одобрение на проекта и материалите стартира производството. Работим изключително с висококачествени материали от сертифицирани доставчици. Средният срок за изработка е 30–45 работни дни.',
  },
  {
    number: '04',
    title: 'Доставка и монтаж',
    description:
      'Организираме транспорта и монтажа от наш екип. Мебелите се доставят в удобно за вас време, монтират се прецизно и помещението се предава чисто и готово за ползване.',
  },
]

const faqs = [
  {
    q: 'В кои райони извършвате доставка и монтаж?',
    a: 'Извършваме доставка и монтаж в цялата страна. За обекти извън Варна и обл. Варна транспортните разходи се уточняват индивидуално при оферирането.',
  },
  {
    q: 'Включена ли е доставката в цената на мебелите?',
    a: 'За обекти в гр. Варна доставката и монтажът са включени в договорената цена. За доставки в страната таксата се изчислява спрямо разстоянието и обема.',
  },
  {
    q: 'Колко отнема монтажът?',
    a: 'Времето за монтаж зависи от обема на проекта. Обзавеждането на спалня или дневна отнема обикновено 1 работен ден, а по-обемните проекти – 2–3 дни.',
  },
  {
    q: 'Трябва ли да подготвя помещението предварително?',
    a: 'Помещението трябва да е завършено строително и да осигурява свободен достъп. Необходими са: завършени стени, под и осветление, работещи контакти при необходими ел. връзки.',
  },
  {
    q: 'Какво се случва при повреда по време на транспорт?',
    a: 'Всички изделия се транспортират с подходяща опаковка и са застраховани. При установена повреда изцяло за наша сметка отстраняваме или подменяме повредения елемент.',
  },
]

const Delivery: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="delivery-page">
      {/* Hero */}
      <section className="delivery-hero">
        <div className="container">
          <p className="delivery-kicker">HRISTOVI DESIGN</p>
          <h1 className="delivery-title">ДОСТАВКА И МОНТАЖ</h1>
          <p className="delivery-subtitle">
            От производство до вашия дом — организираме целия процес,
            за да получите завършен интериор без излишно безпокойство.
          </p>
        </div>
      </section>

      {/* Coverage cards */}
      <section className="delivery-coverage">
        <div className="container">
          <div className="delivery-coverage-grid">
            <div className="delivery-coverage-card">
              <div className="delivery-coverage-icon">🏙️</div>
              <h3>Варна и областта</h3>
              <p>Безплатна доставка и монтаж в рамките на гр. Варна и всички общини в областта.</p>
            </div>
            <div className="delivery-coverage-card">
              <div className="delivery-coverage-icon">🚚</div>
              <h3>Цяла България</h3>
              <p>Извършваме доставки в цялата страна. Транспортните разходи се уточняват индивидуално.</p>
            </div>
            <div className="delivery-coverage-card">
              <div className="delivery-coverage-icon">📦</div>
              <h3>Сигурна опаковка</h3>
              <p>Всяко изделие е внимателно опаковано и застраховано по време на транспорт.</p>
            </div>
            <div className="delivery-coverage-card">
              <div className="delivery-coverage-icon">🔧</div>
              <h3>Професионален монтаж</h3>
              <p>Монтажът се извършва от собствен квалифициран екип с опит в прецизното изпълнение.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="delivery-process">
        <div className="container">
          <div className="delivery-section-header">
            <p className="delivery-section-kicker">КАК РАБОТИМ</p>
            <h2 className="delivery-section-title">Процесът стъпка по стъпка</h2>
          </div>
          <div className="delivery-steps">
            {steps.map((step) => (
              <div key={step.number} className="delivery-step-card">
                <span className="delivery-step-number">{step.number}</span>
                <div className="delivery-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline info */}
      <section className="delivery-timeline">
        <div className="container">
          <div className="delivery-timeline-grid">
            <div className="delivery-timeline-card">
              <h2>Ориентировъчни срокове</h2>
              <p>
                Сроковете за изработка зависят от сложността и обема на проекта.
                По-долу са ориентировъчните периоди за най-честите поръчки.
              </p>
              <ul className="delivery-timeline-list">
                <li>
                  <span className="delivery-tl-label">Спалня / гардероб</span>
                  <span className="delivery-tl-value">25–35 раб. дни</span>
                </li>
                <li>
                  <span className="delivery-tl-label">Кухня по поръчка</span>
                  <span className="delivery-tl-value">35–50 раб. дни</span>
                </li>
                <li>
                  <span className="delivery-tl-label">Дневна / корпусни мебели</span>
                  <span className="delivery-tl-value">30–45 раб. дни</span>
                </li>
                <li>
                  <span className="delivery-tl-label">Офис обзавеждане</span>
                  <span className="delivery-tl-value">20–30 раб. дни</span>
                </li>
                <li>
                  <span className="delivery-tl-label">Цялостен интериорен проект</span>
                  <span className="delivery-tl-value">60–90 раб. дни</span>
                </li>
              </ul>
              <p className="delivery-timeline-note">
                * Сроковете текат от датата на окончателно одобрение на проекта и получаване на аванс.
              </p>
            </div>

            <div className="delivery-timeline-aside">
              <div className="delivery-info-card">
                <h3>Работно време</h3>
                <p>Пон – Пет: 09:00 – 18:00</p>
                <p>Събота: 10:00 – 14:00</p>
                <p>Неделя: почивен ден</p>
              </div>
              <div className="delivery-info-card">
                <h3>Контакти за доставки</h3>
                <p>📞 +359 888 123 456</p>
                <p>✉️ office@hristovidesign.bg</p>
              </div>
              <div className="delivery-info-card delivery-info-card--accent">
                <h3>Безплатен оглед</h3>
                <p>
                  Предлагаме безплатен оглед на обекта и консултация за всички проекти в Варна и областта.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="delivery-faq">
        <div className="container">
          <div className="delivery-section-header">
            <p className="delivery-section-kicker">ВЪПРОСИ И ОТГОВОРИ</p>
            <h2 className="delivery-section-title">Често задавани въпроси</h2>
          </div>
          <div className="delivery-faq-list">
            {faqs.map((item) => (
              <div key={item.q} className="delivery-faq-card">
                <h3 className="delivery-faq-q">{item.q}</h3>
                <p className="delivery-faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="delivery-cta">
        <div className="container">
          <div className="delivery-cta-panel">
            <h2>Готови да започнем?</h2>
            <p>
              Свържете се с нас и нашият екип ще организира безплатна консултация,
              замерване и подготовка на индивидуална оферта.
            </p>
            <div className="delivery-cta-actions">
              <Link to="/contacts" className="delivery-btn delivery-btn-primary">Свържете се с нас</Link>
              <a href="tel:+359888123456" className="delivery-btn delivery-btn-secondary">+359 888 123 456</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Delivery
