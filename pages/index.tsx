// lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { getCars } from 'lib/utils/api'

// components
import Navbar from 'components/reusable/global/Navbar'
import HeroSection from 'components/section/home/HeroSection'
import ContentSection from 'components/section/home/ContentSection'
import FooterSection from 'components/section/global/FooterSection'

// Interface
import CarItemInterface from 'lib/interface/CarItemInterface'
import NavItemInterface from 'lib/interface/NavItemInterface'

// Icons
import UserIcon from '../asset/svg/user.svg'
import RegisterIcon from '../asset/svg/register.svg'

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await getCars()

  return {
    props: {
      data: response.data.data ?? []
    }
  }

}

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

type Props = {
  data: CarItemInterface[] | []
}

const Home: NextPage<Props> = ({ data }) => {

  return (
    <>
      <Head>
        <title>Rental Mobil</title>
      </Head>
      <main className='select-none no-scrollbar bg-slate-100'>

        <Navbar navItems={navItems} />
        <HeroSection />
        <ContentSection data={data} />
        <FooterSection />

      </main>
    </>
  )
}

export default Home
