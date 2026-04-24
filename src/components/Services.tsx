import React from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

type ServiceItem = {
  id: string
  title: string
  intro: string
  text: string
  image: string
  link: string
  linkLabel: string
}

const serviceItems: ServiceItem[] = [
  {
    id: 'kitchens',
    title: 'Мебели За Кухни',
    intro: 'Кухнята е сърцето на дома.',
    text: 'Проектираме и изработваме кухни по поръчка, съобразени с вашето пространство, начин на живот и вкус. Независимо дали предпочитате минималистичен, класически или модерен стил — ние превръщаме идеята в реалност с прецизна изработка, висококачествени материали и механизми от водещи европейски производители. Всяка кухня е уникална и разработена специално за вас.',
    image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=900&h=650&fit=crop',
    link: '/projects/kitchens',
    linkLabel: 'Виж реализирани кухни',
  },
  {
    id: 'bedrooms',
    title: 'Мебели За Спални',
    intro: 'Спалнята е вашето лично убежище.',
    text: 'Създаваме уютни и елегантни спални с индивидуален характер. От тапицирани легла и вградени гардероби до нощни шкафчета и декоративни елементи — всеки детайл е проектиран с мисъл за вашия комфорт и стил. Използваме материали с доказана дълготрайност и завършени с прецизно изпълнение до последния детайл.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=900&h=650&fit=crop',
    link: '/projects/bedrooms',
    linkLabel: 'Виж реализирани спални',
  },
  {
    id: 'living',
    title: 'Дневни И Обзавеждане',
    intro: 'Пространство за живот, събирания и спомени.',
    text: 'Проектираме дневни пространства с функционално разпределение и хармоничен дизайн. Телевизионни стени, библиотеки, холни комплекти, трапезарии — изработени по мярка, за да пасват перфектно на вашия интериор. Комбинираме материали, текстури и форми, за да създадем пространство с неповторим характер.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&h=650&fit=crop',
    link: '/projects',
    linkLabel: 'Виж проекти',
  },
  {
    id: 'offices',
    title: 'Офис Мебели',
    intro: 'Работното пространство отразява идентичността на бизнеса ви.',
    text: 'Ще проектираме и изработим офис обзавеждане, което съчетава ергономичност, функционалност и представителен вид. Работни бюра, конферентни маси, рецепции, архивни шкафове — изпълнени с характер, отразяващ стила и стойностите на вашата компания. Защото правилното пространство повишава производителността и задоволството от работата.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&h=650&fit=crop',
    link: '/projects',
    linkLabel: 'Виж проекти',
  },
  {
    id: 'moisture',
    title: 'Влагоустойчиви Мебели',
    intro: 'Красота и издръжливост дори в условия на повишена влажност.',
    text: 'Специализираме в изработката на мебели за бани, перални, СПА зони и места с повишена влажност. Използваме влагоустойчиви плоскости, специални покрития и корозионноустойчива фурнитура, за да гарантираме дълготрайност без компромис с естетиката. Подходящи за жилищни и търговски обекти.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&h=650&fit=crop',
    link: '/projects',
    linkLabel: 'Виж проекти',
  },
  {
    id: 'luxury',
    title: 'Луксозни Проекти',
    intro: 'За онези, които не правят компромис с качеството.',
    text: 'Реализираме премиум проекти с ексклузивни материали, авторски решения и изключително прецизно изпълнение. Работим с естествен фурнир, мрамор, масивно дърво, кожа и метални акценти, за да създадем интериор с неповторима идентичност. Всеки луксозен проект е лично ангажиране от нашата страна — от концепция до финален монтаж.',
    image: 'https://images.unsplash.com/photo-1617104551722-3b2d51366400?w=900&h=650&fit=crop',
    link: '/projects',
    linkLabel: 'Виж проекти',
  },
]

const Services: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="services-page">

      <section className="services-hero">
        <div className="container">
          <p className="services-kicker">HRISTOVI DESIGN</p>
          <h1 className="services-title">НАШИТЕ УСЛУГИ</h1>
        </div>
      </section>

      <section className="services-intro">
        <div className="container">
          <p>
            Hristovi Design предлага пълен цикъл услуги по мебелиране и интериорно
            обзавеждане — от първоначалната идея и проектирането, през производството,
            до доставката и монтажа. Нашите компетенции обхващат кухни, спални, дневни,
            офиси, влагоустойчиви мебели и луксозни проекти за взискателни клиенти.
          </p>
          <p>
            Разширеният ни екип от дизайнери, производствени специалисти и монтажисти
            управлява всеки проект от А до Я — без излишна загуба на вашето време. От
            вас се изисква единствено да ни се доверите и да ни оставите да направим магията.
          </p>
        </div>
      </section>

      {serviceItems.map((service, index) => (
        <section
          key={service.id}
          className={`service-section ${index % 2 === 1 ? 'service-section--reverse' : ''}`}
        >
          <div className="service-section-image">
            <img src={service.image} alt={service.title} loading="lazy" />
          </div>
          <div className="service-section-content">
            <h2>{service.title}</h2>
            <p className="service-section-intro">{service.intro}</p>
            <p className="service-section-text">{service.text}</p>
            <Link to={service.link} className="service-section-btn">
              {service.linkLabel}
            </Link>
          </div>
        </section>
      ))}

      <section className="services-cta">
        <div className="container">
          <h2>Готови ли сте да започнем вашия проект?</h2>
          <p>
            Свържете се с нас за оглед и персонална оферта. Ще изготвим решение,
            съобразено с вашето пространство и бюджет.
          </p>
          <div className="services-cta-actions">
            <Link to="/contacts" className="services-btn services-btn-primary">Заяви консултация</Link>
            <Link to="/projects" className="services-btn services-btn-secondary">Виж реализирани проекти</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services

