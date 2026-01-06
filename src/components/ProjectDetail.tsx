import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'
import scandinavianKitchen from '../assets/images/scandinavian-kitchen-ideas-article.jpg'

interface ProjectDetailData {
  id: number
  title: string
  description: string
  mainImage: string
  year: string
  location: string
  designer: string
  category: string
  aboutProject: string
  howWeDidIt: string
  additionalImages: string[]
  designerBio: string
}

const projectsData: { [key: string]: ProjectDetailData } = {
  '1': {
    id: 1,
    title: 'Модерна кухня "Минимализъм"',
    description: 'Елегантна минималистична кухня с черни и златни акценти',
    mainImage: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=1600&h=900&fit=crop',
    year: '2025',
    location: 'София, България',
    designer: 'Иванка Христова',
    category: 'Кухни',
    aboutProject: 'Когато прекрачите прага на тази кухня, ще бъдете посрещнати от елегантност и стил. Минималистичният дизайн създава усещане за простор и спокойствие. Изчистените линии и меките неутрални тонове се съчетават перфектно с акцентите в златно, създавайки луксозна, но уютна атмосфера. Големите прозорци пропускат обилно количество естествена светлина, която залива пространството и подчертава красотата на висококачествените материали и внимателно подбраните детайли. Всеки елемент е подбран с мисъл за функционалност и естетика.',
    howWeDidIt: 'Модерните висящи лампи и вграденото осветление добавят нотка на изтънченост и визуален интерес, осветявайки пространството с мека и приятна светлина. Кухнята е съвременен шедьовър на естетиката. Изчистените линии и модерните шкафове в неутрални тонове създават изискан вид, а просторният остров с вградена мивка и работни плотове осигурява максимално удобство за готвене и хранене. Високотехнологичните уреди са интегрирани безупречно в дизайна, като се съчетават функционалност с естетика. Плотовете от висококачествен камък добавят елегантност и издръжливост.',
    additionalImages: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop'
    ],
    designerBio: 'Христо Христов е творец и интериорен дизайнер с разпознаваем стил, спечелил признанието на експертите както в България, така и в Европа. Той е идеен двигател и главно действащо лице в разнообразните проектни начинания на Hristovi Design студиото.'
  },
  '2': {
    id: 2,
    title: 'Класическа кухня "Елеганс"',
    description: 'Изискана кухня в класически стил с масивно дърво',
    mainImage: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&h=900&fit=crop',
    year: '2025',
    location: 'Варна, България',
    designer: 'Иванка Христова',
    category: 'Кухни',
    aboutProject: 'Класическата кухня "Елеганс" е въплъщение на вечния стил и изтънченост. Масивното дърво и мраморните плотове създават атмосфера на луксозна традиция, докато модерните удобства осигуряват максимална функционалност. Всеки детайл е внимателно подбран, за да се постигне хармония между класическото и съвременното. Просторното разпределение позволява лесно движение и комфортна работа.',
    howWeDidIt: 'Използвахме масивно дърво от висок клас с ръчно изработени детайли и класически профили. Мраморните плотове добавят изисканост и издръжливост. Вградените уреди са интегрирани така, че да не нарушават класическия вид, но да предоставят всички съвременни удобства. Осветлението е проектирано да подчертае красотата на материалите и да създаде топла, приветлива атмосфера.',
    additionalImages: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1600&h=900&fit=crop'
    ],
    designerBio: 'Христо Христов е творец и интериорен дизайнер с разпознаваем стил, спечелил признанието на експертите както в България, така и в Европа. Той е идеен двигател и главно действащо лице в разнообразните проектни начинания на Hristovi Design студиото.'
  },
  '3': {
    id: 3,
    title: 'Луксозна кухня "Престиж"',
    description: 'Ексклузивна кухня с премиум техника и дизайнерски решения',
    mainImage: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1600&h=900&fit=crop',
    year: '2024',
    location: 'Пловдив, България',
    designer: 'Иванка Христова',
    category: 'Кухни',
    aboutProject: 'Луксозната кухня "Престиж" е създадена за най-взискателните клиенти. Всеки детайл е внимателно проектиран за максимален комфорт и функционалност. Премиум техниката от водещи световни производители се съчетава с изключителен дизайн и най-качествени материали. Просторното разпределение и интелигентните решения за съхранение правят готвенето истинско удоволствие.',
    howWeDidIt: 'Използвахме най-съвременните технологии и материали. Интегрирани уреди от висок клас, интелигентна система за управление на осветлението и климата, скрито съхранение с електрически отваряне. Плотовете от рядък гранит и специално изработените шкафове създават неповторим луксозен вид. Всяка функция е оптимизирана за максимално удобство.',
    additionalImages: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1600&h=900&fit=crop'
    ],
    designerBio: 'Христо Христов е творец и интериорен дизайнер с разпознаваем стил, спечелил признанието на експертите както в България, така и в Европа. Той е идеен двигател и главно действащо лице в разнообразните проектни начинания на Hristovi Design студиото.'
  },
  '4': {
    id: 4,
    title: 'Семейна кухня "Уют"',
    description: 'Просторна и функционална кухня, идеална за семейства',
    mainImage: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1600&h=900&fit=crop',
    year: '2024',
    location: 'Бургас, България',
    designer: 'Иванка Христова',
    category: 'Кухни',
    aboutProject: 'Семейната кухня "Уют" е проектирана с мисъл за ежедневието на съвременното семейство. Просторното разпределение позволява на няколко души да готвят едновременно, докато голямата трапезна зона създава перфектното място за семейни обеди. Практичните решения за съхранение и лесно достъпните повърхности правят кухнята удобна за всеки член на семейството.',
    howWeDidIt: 'Създадохме многофункционално пространство с централен остров, който служи едновременно за готвене, хранене и социализация. Дълбоките чекмеджета и високите шкафове осигуряват изобилие от място за съхранение. Издръжливите материали са подбрани да издържат на интензивна употреба, като същевременно изглеждат красиво. Осветлението е проектирано да създаде топла, семейна атмосфера.',
    additionalImages: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1600&h=900&fit=crop'
    ],
    designerBio: 'Христо Христов е творец и интериорен дизайнер с разпознаваем стил, спечелил признанието на експертите както в България, така и в Европа. Той е идеен двигател и главно действащо лице в разнообразните проектни начинания на Hristovi Design студиото.'
  },
  '5': {
    id: 5,
    title: 'Индустриална кухня "Лофт"',
    description: 'Модерна кухня в индустриален стил с открити тухли и метални акценти',
    mainImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop',
    year: '2024',
    location: 'София, България',
    designer: 'Иванка Христова',
    category: 'Кухни',
    aboutProject: 'Индустриалната кухня "Лофт" е смел експеримент със стил и функционалност. Открити тухлени стени, метални конструкции и грубо обработени повърхности създават автентична лофт атмосфера. Съчетанието на индустриални елементи с модерни удобства резултира в уникално и практично пространство за готвене и забавление.',
    howWeDidIt: 'Запазихме и подчертахме автентичните индустриални елементи - открити тухли, видими инсталации, метални греди. Добавихме съвременни шкафове от метал и рециклирано дърво, създавайки контраст между старо и нов. Вися осветление с индустриален дизайн добавя характер. Бетонните плотове и стоманените повърхности допълват общата концепция.',
    additionalImages: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1600&h=900&fit=crop'
    ],
    designerBio: 'Иванка Христова е творец и интериорен дизайнер с разпознаваем стил. Тя е идеен двигател и главно действащо лице в разнообразните проектни начинания на Hristovi Design.'
  },
  '6': {
    id: 6,
    title: 'Скандинавска кухня "Нордик"',
    description: 'Светла и просторна кухня в скандинавски стил',
    mainImage: scandinavianKitchen,
    year: '2023',
    location: 'Русе, България',
    designer: 'Иванка Христова',
    category: 'Кухни',
    aboutProject: 'Скандинавската кухня "Нордик" е въплъщение на северната простота и функционалност. Светлите тонове, естествените материали и чистите линии създават усещане за спокойствие и хармония. Максималната употреба на естествена светлина и минималистичният подход към декорацията правят пространството просторно и приветливо.',
    howWeDidIt: 'Използвахме светла цветова палитра - бяло, сиво и естествено дърво. Шкафовете са с прости, чисти линии без излишна декорация. Отворените рафтове добавят въздушност и позволяват експониране на красиви съдове. Дървените детайли от естествен дъб добавят топлина. Осветлението е проектирано да максимизира естествената светлина и да създаде уютна атмосфера през тъмните зимни месеци.',
    additionalImages: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1600&h=900&fit=crop',
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1600&h=900&fit=crop'
    ],
    designerBio: 'Иванка Христова е творец и интериорен дизайнер с разпознаваем стил. Тя е идеен двигател и главно действащо лице в разнообразните проектни начинания на Hristovi Design.'
  }
}

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? projectsData[id] : null

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h1>Проектът не е намерен</h1>
          <Link to="/projects/kitchens" className="back-link">← Обратно към проектите</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail">
      {/* Hero Section with Image */}
      <div className="project-detail-hero" style={{ backgroundImage: `url(${project.mainImage})` }}>
        <div className="project-detail-hero-overlay">
          <div className="container">
            <h1 className="project-detail-title">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-detail-content">
        <div className="container">
          <div className="project-detail-layout">
            {/* Sidebar */}
            <aside className="project-detail-sidebar">
              <div className="sidebar-section">
                <h6 className="sidebar-label">ПРОЕКТ:</h6>
                <h3 className="sidebar-project-name">{project.title}</h3>
              </div>

              <div className="sidebar-section">
                <h6 className="sidebar-label">ДИЗАЙНЕР:</h6>
                <p className="sidebar-text">{project.designer}</p>
              </div>

              <div className="sidebar-section">
                <h6 className="sidebar-label">CATEGORY</h6>
                <p className="sidebar-text">{project.category}</p>
              </div>

              <div className="sidebar-section">
                <h6 className="sidebar-label">ГОДИНА:</h6>
                <p className="sidebar-text">{project.year}</p>
              </div>

              <div className="sidebar-section">
                <h6 className="sidebar-label">ЛОКАЦИЯ:</h6>
                <p className="sidebar-text">{project.location}</p>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="project-detail-main">
              <section className="content-section">
                <h6 className="section-label">ABOUT THIS PROJECT</h6>
                <h2 className="section-title">ЗА ПРОЕКТА</h2>
                <p className="section-text">{project.aboutProject}</p>
              </section>

              {/* Image Gallery */}
              <div className="project-gallery">
                {project.additionalImages.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`${project.title} - ${index + 1}`} />
                  </div>
                ))}
              </div>

              <section className="content-section">
                <h2 className="section-title">КАК ПОСТИГНАХМЕ КРАЙНИЯ РЕЗУЛТАТ?</h2>
                <p className="section-text">{project.howWeDidIt}</p>
              </section>

              {/* Designer Bio */}
              <section className="designer-section">
                <h5 className="designer-title">ЗА {project.designer.toUpperCase()}</h5>
                <p className="designer-bio">{project.designerBio}</p>
                <div className="designer-social">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </section>

              {/* Back Link */}
              <div className="back-link-container">
                <Link to="/projects/kitchens" className="back-to-projects">← Обратно към всички кухненски проекти</Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
