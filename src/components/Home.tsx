import React from 'react'
import VideoHero from './VideoHero'
import ScrollingProjects from './ScrollingProjects'
import Hero from './Hero'
import HomeProjects from './HomeProjects'

const Home: React.FC = () => {
  return (
    <>
      <VideoHero />
      <ScrollingProjects />
      <Hero />
      <HomeProjects />
    </>
  )
}

export default Home
