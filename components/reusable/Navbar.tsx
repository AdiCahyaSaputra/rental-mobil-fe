import Container from "components/reusable/Container"
import { useState } from 'react'

const Navbar: React.FC = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <nav className='bg-black p-1.5 text-white'>
        <Container>
          <div className='flex justify-between'>
            <div className='flex space-x-2 items-center'>
              <div className='w-1 py-2 bg-white'></div>
              <h1 className='font-bold'>Rental Mobil</h1>
              <div className='w-4 aspect-square bg-white rounded-r-lg rounded-l-none rounded-b-sm'></div>
            </div>

            <div className={`z-20 text-sm text-white/70 p-4 md:p-0 fixed inset-y-0 ${active ? 'right-0' : '-right-full'} w-6/12 md:w-max md:static bg-black md:bg-transparent flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0`}>
              <a className='hover:text-white'>Rental Mobil</a>
              <a className='hover:text-white'>Pengaturan Akun</a>
            </div>

            <button onClick={() => setActive(!active)} className='justify-center space-y-1.5 flex flex-col items-end md:hidden'>
              <div className='w-6 h-px bg-white'></div>
              <div className='w-3 h-px bg-white'></div>
              <div className='w-4 h-px bg-white'></div>
            </button>
          </div>
        </Container>
      </nav>
      <div onClick={() => setActive(!active)} className={`${active ? 'block' : 'hidden'} fixed inset-0 bg-black/70 z-10`}></div>
    </>
  )
}

export default Navbar
