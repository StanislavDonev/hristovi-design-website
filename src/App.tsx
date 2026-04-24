import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import ProjectsKitchen from './components/ProjectsKitchen'
import ProjectsBedroom from './components/ProjectsBedroom'
import ProjectsLiving from './components/ProjectsLiving'
import ProjectsKids from './components/ProjectsKids'
import ProjectsOffice from './components/ProjectsOffice'
import ProjectsMoisture from './components/ProjectsMoisture'
import ProjectsLuxury from './components/ProjectsLuxury'
import ProjectsInterior from './components/ProjectsInterior'
import ProjectDetail from './components/ProjectDetail'
import Terms from './components/Terms'
import PrivacyPolicy from './components/PrivacyPolicy'
import Delivery from './components/Delivery'
import Contacts from './components/Contacts'
import Services from './components/Services'
import Footer from './components/Footer'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/kitchens" element={<ProjectsKitchen />} />
          <Route path="/projects/kitchens/:id" element={<ProjectDetail />} />
          <Route path="/projects/bedrooms" element={<ProjectsBedroom />} />
          <Route path="/projects/bedrooms/:id" element={<ProjectDetail />} />
          <Route path="/projects/living" element={<ProjectsLiving />} />
          <Route path="/projects/living/:id" element={<ProjectDetail />} />
          <Route path="/projects/kids" element={<ProjectsKids />} />
          <Route path="/projects/kids/:id" element={<ProjectDetail />} />
          <Route path="/projects/office" element={<ProjectsOffice />} />
          <Route path="/projects/office/:id" element={<ProjectDetail />} />
          <Route path="/projects/moisture" element={<ProjectsMoisture />} />
          <Route path="/projects/moisture/:id" element={<ProjectDetail />} />
          <Route path="/projects/luxury" element={<ProjectsLuxury />} />
          <Route path="/projects/luxury/:id" element={<ProjectDetail />} />
          <Route path="/projects/interior" element={<ProjectsInterior />} />
          <Route path="/projects/interior/:id" element={<ProjectDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
