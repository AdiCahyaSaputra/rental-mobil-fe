// Lib
import { useRouter } from 'next/router'

// Components
import Logo from 'components/reusable/global/Logo'

const HeroSection: React.FC = () => {
  const router = useRouter()

  return (
    <section className='flex-col flex justify-center items-center min-h-screen bg-black text-white'>

      <Logo />

      <div className="flex flex-col items-center w-10/12">

        <h1 className="text-center tracking-widest font-bold text-xl">Liburan Tanpa Pusing <br />Mikirin Kendaraan</h1>
        <div className="flex items-center space-x-2">
          <button onClick={() => router.push('/beranda')} className="hover:shadow-lg hover:shadow-green-600/60 hover:border-green-600 hover:bg-green-600 hover:text-white w-max text-sm mt-4 py-2 px-4 bg-white text-black font-bold border-2 border-white">Sewa Mobil</button>
          <button onClick={() => router.push('/login')} className="hover:shadow-lg hover:shadow-green-600/60 hover:border-green-600 w-max text-sm mt-4 py-2 px-4 bg-transparent border-2 border-white text-white font-bold">Pinjamkan Mobil</button>
        </div>

      </div>

    </section>
  )
}

export default HeroSection
