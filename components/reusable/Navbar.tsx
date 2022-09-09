// Lib
import { useRouter } from "next/router"
import { useState } from 'react'
import NavItemInterface from "lib/interface/NavItemInterface"

// Components
import Container from "components/reusable/Container"

type Props = {
  navItems: NavItemInterface[]
}

const Navbar: React.FC<Props> = ({ navItems }) => {

  const router = useRouter()
  const [active, setActive] = useState(false)

  return (
    <>
      <nav className='bg-black p-1.5 text-white fixed top-0 z-10 w-full'>
        <Container>
          <div className='flex justify-between'>

            <div className='flex space-x-2 items-center'>
              <div className='w-1 py-2 bg-white'></div>
              <h1 className='font-bold'>Rental Mobil</h1>
              <div className='w-4 aspect-square bg-white rounded-r-lg rounded-l-none rounded-b-sm'></div>
            </div>

            <div className={`z-20 text-sm text-white/70 p-4 md:p-0 fixed inset-y-0 ${active ? 'right-0' : '-right-full'} w-6/12 md:w-max md:static bg-black md:bg-transparent flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0`}>
              {navItems.map((navItem, index) => (

                <div key={index} className="flex items-center space-x-2">
                  {navItem.icon}
                  <a onClick={() => router.push(navItem.link)} className='font-bold hover:text-white'>{navItem.name}</a>
                </div>

              ))}
            </div>

            <button onClick={() => setActive(!active)} className='justify-center space-y-1.5 flex flex-col items-end md:hidden'>
              <div className='w-6 h-px bg-white'></div>
              <div className='w-3 h-px bg-white'></div>
              <div className='w-4 h-px bg-white'></div>
            </button>

          </div>
        </Container>
        <div onClick={() => setActive(!active)} className={`${active ? 'block' : 'hidden'} fixed inset-0 bg-black/40 z-10`}></div>
      </nav>
    </>
  )
}

export default Navbar
