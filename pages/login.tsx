// Lib
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

// Components
import Input from 'components/reusable/Input'
import Logo from 'components/reusable/Logo'

const inputElements = [
  { type: 'email', placeholder: 'Email', name: 'email' },
  { type: 'password', placeholder: 'Password', name: 'password' }
]

const Login: NextPage = () => {

  const router = useRouter()
  const [data, setData] = useState<any>({
    email: '',
    password: ''
  })

  const changeHandler = (e: any) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className='pb-20 flex-col space-y-2 min-h-screen flex justify-center items-center bg-black'>

        <div onClick={() => router.push('/')} className='p-4'>
          <Logo />
        </div>

        <div className='border-t-4 shadow-sm shadow-black border-white w-9/12 md:w-4/12 p-6 text-white'>
          <h1 className='text-xl font-bold'>Mulai Disini</h1>
          <p className='text-sm font-light text-white/80'>Login untuk menggunakan semua fitur</p>

          <form className='mt-6'>

            <div className='space-y-4'>
              {inputElements.map(({ type, placeholder, name }, index: number) => (
                <Input key={index} value={data[name]} name={name} changeHandler={changeHandler} type={type} placeholder={placeholder} />
              ))}

              <div className='flex items-center space-x-2'>
                <input type="checkbox" id='check' />
                <label htmlFor='check' className='text-sm'>Remember Me</label>
              </div>
            </div>

            <div className='mt-12'>
              <button type='submit' className='font-bold py-2 px-4 bg-green-600 hover:shadow-md hover:shadow-green-600/80 w-full'>
                Login
              </button>
            </div>

          </form>
        </div>

        <a onClick={() => router.push('/registrasi')} className='text-center text-sm text-blue-500 group'>Belum memiliki akun? <br /><span className='group-hover:underline'>daftar dirimu disini</span></a>

      </main>
    </>
  )
}

export default Login
