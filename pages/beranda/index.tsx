// Lib
import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { destroyAccessToken } from "lib/utils/auth"
import { fakeData } from "lib/utils/data"

// Components
import Navbar from "components/reusable/Navbar"
import Search from "components/reusable/Search"
import Container from "components/reusable/Container"
import ProductCard from "components/reusable/ProductCard"
import FooterSection from "components/section/FooterSection"

// Interface
import NavItemInterface from "lib/interface/NavItemInterface"

// Icons
import DashboardIcon from '../../asset/svg/dashboard.svg'
import SettingIcon from '../../asset/svg/setting.svg'
import OutIcon from '../../asset/svg/out.svg'
import UserIcon from '../../asset/svg/user.svg'
import RegisterIcon from '../../asset/svg/register.svg'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token } = ctx.req.cookies
  const isLogin = token ? true : false

  return {
    props: {
      isLogin
    }
  }
}

const GuestNavItems: NavItemInterface[] = [
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
  isLogin: boolean
}

const BerandaHome: NextPage<Props> = ({ isLogin }) => {

  const router = useRouter()

  const logoutHandler = (link: string) => {
    destroyAccessToken(router)
  }

  const navItems: NavItemInterface[] = [
    {
      link: '/dashboard',
      name: 'Dashboard',
      icon: <DashboardIcon className="w-4 aspect-square" />
    },
    {
      link: '/user/setting',
      name: 'Pengaturan Akun',
      icon: <SettingIcon className="w-4 aspect-square" />
    },
    {
      link: '/user/logout',
      name: 'Logout',
      textColor: 'text-red-600/80 hover:text-red-600',
      icon: <OutIcon className="w-4 aspect-square stroke-2 fill-red-500" />,
      customHandler: logoutHandler
    }
  ]

  return (
    <>
      <Head>
        <title>Beranda</title>
      </Head>

      <Navbar navItems={isLogin ? navItems : GuestNavItems} />
      <section className="pb-20 select-none min-h-screen bg-slate-200">

        <div className="py-4 bg-white/60 backdrop-blur-md shadow-md shadow-white/60 sticky top-12 inset-x-0">
          <Search />
        </div>

        <Container>
          <div className="mt-14">

            <div className="grid grid-cols-12 gap-4">

              {fakeData.map((data, index: number) => (
                <ProductCard
                  name={data.name}
                  modelYear={data.modelYear}
                  color={data.color}
                  owner={data.owner}
                  key={index}
                />
              ))}

            </div>

          </div>
        </Container>

      </section>

      <FooterSection />
    </>
  )
}

export default BerandaHome
