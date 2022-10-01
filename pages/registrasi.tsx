// Lib
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import Head from "next/head"

// Components
import Logo from "components/reusable/global/Logo"
import RegisterSection from "components/section/auth/RegisterSection"
import ErrNotify from "components/reusable/global/ErrNofify"

type StateResponse = {
  message: any,
  status: number
}

const Registrasi: NextPage = () => {

  const router = useRouter()
  const [response, setResponse] = useState<StateResponse>({
    message: '',
    status: 0
  })

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <ErrNotify response={response} />

      <main className='py-20 flex-col space-y-2 min-h-screen flex justify-center items-center bg-black'>

        <div onClick={() => router.push('/')} className='cursor-pointer p-4'>
          <Logo />
        </div>

        <div className='border-t-4 shadow-sm shadow-black border-white w-9/12 md:w-4/12 p-6 text-white'>
          <h1 className='text-xl font-bold'>Langkah Awal Untuk Mulai</h1>
          <p className='text-sm font-light text-white/80'>Bergabunglah Dengan Komunitas Kami</p>

          <RegisterSection setResponse={setResponse} />

        </div>
        <a onClick={() => router.push('/login')} className='text-center cursor-pointer text-sm text-blue-500 group'>Sudah memiliki akun? <br /><span className='group-hover:underline'>login disini</span></a>

      </main>

    </>
  )
}

export default Registrasi

