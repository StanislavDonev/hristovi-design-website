import React from 'react'
import './Contacts.css'

const contactCards = [
  {
    title: 'Телефони',
    lines: ['+359 888 123 456', '+359 888 654 321'],
    cta: 'tel:+359888123456',
    ctaLabel: 'Обади се',
  },
  {
    title: 'Имейл',
    lines: ['office@hristovidesign.bg', 'projects@hristovidesign.bg'],
    cta: 'mailto:office@hristovidesign.bg',
    ctaLabel: 'Изпрати имейл',
  },
  {
    title: 'Адрес',
    lines: ['бул. Цариградско шосе 115Г', 'София, България'],
    cta: 'https://maps.google.com/?q=Ring+Tower+Sofia',
    ctaLabel: 'Отвори карта',
  },
]

const workingHours = [
  { day: 'Понеделник - Петък', hours: '09:00 - 19:00' },
  { day: 'Събота', hours: '10:00 - 15:00' },
  { day: 'Неделя', hours: 'Почивен ден' },
]

const Contacts: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="contacts-page">
      <section className="contacts-hero">
        <div className="container">
          <p className="contacts-kicker">HRISTOVI DESIGN</p>
          <h1 className="contacts-title">КОНТАКТИ</h1>
          <p className="contacts-subtitle">
            Свържете се с нас за консултация, оглед и индивидуална оферта за интериорен дизайн и мебели по поръчка.
          </p>
        </div>
      </section>

      <section className="contacts-main">
        <div className="container contacts-main-grid">
          <article className="contacts-intro-card">
            <h2>Нека Обсъдим Вашия Проект</h2>
            <p>
              Работим с клиенти в София и цялата страна по проекти за кухни, спални, дневни,
              офиси и цялостни интериори. Можете да се свържете с нас по телефон, имейл или
              чрез формата по-долу.
            </p>
            <p>
              За по-точна и бърза оферта изпратете приблизителни размери, снимки на помещението
              и вашите предпочитания за стил, материали и бюджет.
            </p>
          </article>

          <aside className="contacts-hours-card">
            <h3>Работно Време</h3>
            <ul>
              {workingHours.map((item) => (
                <li key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.hours}</strong>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="contacts-details">
        <div className="container contacts-cards-grid">
          {contactCards.map((card) => (
            <article key={card.title} className="contact-detail-card">
              <h3>{card.title}</h3>
              <div className="contact-lines">
                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <a
                href={card.cta}
                className="contact-card-btn"
                target={card.cta.startsWith('http') ? '_blank' : undefined}
                rel={card.cta.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {card.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contacts-form-map">
        <div className="container contacts-form-map-grid">
          <article className="contacts-form-card">
            <h2>Изпратете Запитване</h2>
            <form className="contacts-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                Име и фамилия
                <input type="text" name="name" placeholder="Вашето име" required />
              </label>
              <label>
                Телефон
                <input type="tel" name="phone" placeholder="+359..." required />
              </label>
              <label>
                Имейл
                <input type="email" name="email" placeholder="name@example.com" required />
              </label>
              <label>
                Тип проект
                <select name="projectType" defaultValue="">
                  <option value="" disabled>Изберете тип</option>
                  <option value="kitchen">Кухня</option>
                  <option value="bedroom">Спалня</option>
                  <option value="living-room">Дневна</option>
                  <option value="office">Офис</option>
                  <option value="full-interior">Цялостен интериор</option>
                </select>
              </label>
              <label>
                Съобщение
                <textarea name="message" rows={5} placeholder="Опишете накратко вашите изисквания" required />
              </label>
              <button type="submit" className="contacts-submit-btn">Изпрати запитване</button>
            </form>
          </article>

          <aside className="contacts-map-card">
            <h2>Локация</h2>
            <p>Посещения с предварителна уговорка.</p>
            <div className="contacts-map-wrap">
              <iframe
                title="Hristovi Design Location"
                src="https://www.google.com/maps?q=Ring+Tower+Sofia&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Contacts