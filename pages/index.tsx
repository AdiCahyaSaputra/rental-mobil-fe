import type { NextPage } from 'next'

// components
import Navbar from 'components/reusable/Navbar'
import HeroSection from 'components/section/HeroSection'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  )
}

export default Home
