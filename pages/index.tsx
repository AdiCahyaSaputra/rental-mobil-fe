// lib
import type { NextPage } from 'next'
import NavItemInterface from 'lib/interface/NavItemInterface'
import Head from 'next/head'

// components
import Navbar from 'components/reusable/Navbar'
import HeroSection from 'components/section/HeroSection'
import ContentSection from 'components/section/ContentSection'
import FooterSection from 'components/section/FooterSection'

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
    link: '/registrasi',
    name: 'Registrasi',
    icon: <RegisterIcon className='w-4 aspect-square' />
  },
]

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Rental Mobil</title>
      </Head>
      <main className='select-none no-scrollbar bg-slate-100'>

        <Navbar navItems={navItems} />
        <HeroSection />
        <ContentSection />
        <FooterSection />

      </main>
    </>
  )
}

export default Home
