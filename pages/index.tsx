// lib
import type { NextPage } from 'next'
import NavItemInterface from 'lib/interface/NavItemInterface'

// components
import Navbar from 'components/reusable/Navbar'
import HeroSection from 'components/section/HeroSection'
import ContentSection from 'components/section/ContentSection'

// Icons
import UserIcon from '../asset/svg/user.svg'
import RegisterIcon from '../asset/svg/register.svg'

const navItems: NavItemInterface[] = [
  {
    link: '/login',
    name: 'Login',
    icon: <UserIcon className='w-4 aspect-square' />
  },
  {
    link: '/register',
    name: 'Registrasi',
    icon: <RegisterIcon className='w-4 aspect-square' />
  },
]

const Home: NextPage = () => {

  return (
    <main className='select-none no-scrollbar'>

      <Navbar navItems={navItems} />
      <HeroSection />
      <ContentSection />

      <div className='min-h-screen bg-black'></div>

    </main>
  )
}

export default Home
