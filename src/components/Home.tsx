import React from 'react'
import VideoHero from './VideoHero'
import Hero from './Hero'
import Categories from './Categories'
import FeaturedProducts from './FeaturedProducts'
import Newsletter from './Newsletter'

const Home: React.FC = () => {
  return (
    <>
      <VideoHero />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </>
  )
}

export default Home
