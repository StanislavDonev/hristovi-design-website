import React from 'react'
import VideoHero from './VideoHero'
import ScrollingProjects from './ScrollingProjects'
import Hero from './Hero'
import Categories from './Categories'
import Newsletter from './Newsletter'

const Home: React.FC = () => {
  return (
    <>
      <VideoHero />
      <ScrollingProjects />
      <Hero />
      <Categories />
      <Newsletter />
    </>
  )
}

export default Home
