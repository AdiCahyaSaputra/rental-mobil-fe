// lib
import type { NextPage } from 'next'
import NavItem from 'lib/interface/NavItem'

// components
import Navbar from 'components/reusable/Navbar'
import HeroSection from 'components/section/HeroSection'
import ServiceSection from 'components/section/ServiceSection'

const Home: NextPage = () => {

  const navItems: NavItem[] = [
    { link: '/login', name: 'Login' },
    { link: '/register', name: 'Registrasi' },
  ]

  return (
    <main className='select-none no-scrollbar'>

      <Navbar navItems={navItems} />
      <HeroSection />
      <ServiceSection />

    </main>
  )
}

export default Home
