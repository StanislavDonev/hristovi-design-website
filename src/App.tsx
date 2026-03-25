import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import ProjectsKitchen from './components/ProjectsKitchen'
import ProjectsBedroom from './components/ProjectsBedroom'
import ProjectDetail from './components/ProjectDetail'
import Terms from './components/Terms'
import PrivacyPolicy from './components/PrivacyPolicy'
import Contacts from './components/Contacts'
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
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
