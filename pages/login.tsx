// Lib
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

// Components
import Logo from 'components/reusable/global/Logo'
import LoginSection from 'components/section/auth/LoginSection'
import ErrNotify from 'components/reusable/global/ErrNofify'

type StateResponse = {
  message: any,
  status: number
}

const Login: NextPage = () => {

  const router = useRouter()
  const [response, setResponse] = useState<StateResponse>({
    message: '',
    status: 0
  })

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <main className='pb-20 flex-col space-y-2 min-h-screen flex justify-center items-center bg-black'>

        <div onClick={() => router.push('/')} className='p-4'>
          <Logo />
        </div>

        <ErrNotify response={response} />

        <div className='border-t-4 shadow-sm shadow-black border-white w-9/12 md:w-4/12 p-6 text-white'>
          <h1 className='text-xl font-bold'>Mulai Disini</h1>
          <p className='text-sm font-light text-white/80'>Login untuk menggunakan semua fitur</p>

          <LoginSection setResponse={setResponse} />

        </div>

        <a onClick={() => router.push('/registrasi')} className='text-center text-sm text-blue-500 group'>Belum memiliki akun? <br /><span className='group-hover:underline'>daftar dirimu disini</span></a>

      </main>
    </>
  )
}

export default Login
