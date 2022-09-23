// Lib
import { destroyAccessToken } from "lib/utils/auth"
import { useRouter } from "next/router"
import useAuth from "lib/hooks/useAuth"

// Components
import Navbar from "components/reusable/Navbar"
import FooterSection from 'components/section/FooterSection'

// Interface
import NavItemInterface from "lib/interface/NavItemInterface"

// Icons
import UserIcon from '../../asset/svg/user.svg'
import RegisterIcon from '../../asset/svg/register.svg'
import DashboardIcon from '../../asset/svg/dashboard.svg'
import SettingIcon from '../../asset/svg/setting.svg'
import OutIcon from '../../asset/svg/out.svg'

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
  children: React.ReactNode,
  token: string | null
}

const PagesWrapper: React.FC<Props> = ({ children, token }) => {

  const router = useRouter()
  const { logout } = useAuth()

  const logoutHandler = (link: string) => {

    if (token) logout(token)
    destroyAccessToken(router)

  }

  const AuthNavItems: NavItemInterface[] = [
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
      <main className="select-none">

        <Navbar navItems={token ? AuthNavItems : GuestNavItems} />
        <section className="pb-20 min-h-screen bg-slate-200">

          {children}

        </section>

      </main>
      <FooterSection />

    </>
  )
}

export default PagesWrapper
