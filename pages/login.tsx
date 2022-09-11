// Lib
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Components
import Input from 'components/reusable/Input'
import Logo from 'components/reusable/Logo'

const Login: NextPage = () => {
  
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className='flex-col space-y-2 h-screen flex justify-center items-center bg-black'>

        <div onClick={() => router.push('/')} className='p-4'>
          <Logo />
        </div>

        <div className='border-t-4 shadow-sm shadow-black border-white w-9/12 md:w-4/12 p-6 text-white'>
          <h1 className='text-xl font-bold'>Mulai Disini</h1>
          <p className='text-sm font-light text-white/80'>Login untuk menggunakan semua fitur</p>

          <form className='mt-6 space-y-4'>

            <Input type='text' placeholder='Email' />
            <Input type='password' placeholder='Password' />

            <div className='flex items-center space-x-2'>
              <input type="checkbox" id='check' />
              <label htmlFor='check' className='text-sm'>Remember Me</label>
            </div>

            <button type='submit' className='font-bold py-2 px-4 bg-green-600 hover:shadow-md hover:shadow-green-600/80 w-full'>
              Login
            </button>

          </form>
        </div>

      </main>
    </>
  )
}

export default Login
