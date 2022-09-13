// Lib
import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useCallback, useState } from "react"

// Components
import Input from "components/reusable/Input"
import Logo from "components/reusable/Logo"

// Icons
import EditIcon from '../asset/svg/edit.svg'
import RoleCard from "components/reusable/RoleCard"

const inputElements = [
  { type: 'text', placeholder: 'Nama', name: 'name' },
  { type: 'number', placeholder: 'Nomor HP', name: 'mobile_phone' },
  { type: 'text', placeholder: 'Alamat', name: 'address' },
  { type: 'email', placeholder: 'Email', name: 'email' },
  { type: 'password', placeholder: 'Password', name: 'password' },
  { type: 'password', placeholder: 'Konfirmasi Password', name: 'password_confirmation' }
]

const roles = [
  { id: 1, name: 'CUSTOMER', desc: 'Meminjam dan mengembalikan mobil' },
  { id: 2, name: 'OWNER', desc: 'Menyewakan dan mengelola mobil' }
]


const Registrasi: NextPage = () => {

  const router = useRouter()
  const [openModalRole, setOpenModalRole] = useState(false)

  const [data, setData] = useState<any>({
    name: '',
    mobile_phone: '',
    address: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const [role, setRole] = useState({
    id: 1,
    name: 'CUSTOMER'
  })

  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = useCallback(async (e: any) => {
    e.preventDefault()
    setLoading(!loading)

  }, [data])

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
        <title>Register</title>
      </Head>
      <main className='pb-20 flex-col space-y-2 min-h-screen flex justify-center items-center bg-black'>

        <div onClick={() => router.push('/')} className='cursor-pointer p-4'>
          <Logo />
        </div>

        <div className='border-t-4 shadow-sm shadow-black border-white w-9/12 md:w-4/12 p-6 text-white'>
          <h1 className='text-xl font-bold'>Langkah Awal Untuk Mulai</h1>
          <p className='text-sm font-light text-white/80'>Bergabunglah Dengan Komunitas Kami</p>

          <form className='mt-6' onSubmit={submitHandler}>

            <div className='space-y-4'>

              {inputElements.map(({ type, placeholder, name }, index: number) => (
                <Input key={index} value={data[name]} name={name} changeHandler={changeHandler} type={type} placeholder={placeholder} />
              ))}

              <div onClick={() => setOpenModalRole(!openModalRole)} className="hover:bg-white/30 flex justify-between items-center py-1.5 px-3 bg-white/20 cursor-pointer">
                <h1 className="text-sm font-bold text-green-600 drop-shadow-md">Role - {role.name}</h1>
                <EditIcon className='w-4 aspect-square' />
              </div>

            </div>

            <div className='mt-12'>

              {loading ? (
                <button disabled className='font-bold py-2 px-4 bg-green-600 hover:shadow-md hover:shadow-green-600/80 w-full'>
                  ...
                </button>
              ) : (
                <button type='submit' className='font-bold py-2 px-4 bg-green-600 hover:shadow-md hover:shadow-green-600/80 w-full'>
                  Register
                </button>
              )}

            </div>

          </form>
        </div>

        <a onClick={() => router.push('/login')} className='text-center cursor-pointer text-sm text-blue-500 group'>Sudah memiliki akun? <br /><span className='group-hover:underline'>login disini</span></a>

      </main>

      {openModalRole && (
        <>

          <div onClick={() => setOpenModalRole(!openModalRole)} className="fixed flex justify-center items-center inset-0 bg-black/40 z-10">
            <div className="bg-white w-8/12 md:w-5/12">

              {roles.map(({ name, desc, id }) => (
                <RoleCard clickHandler={() => setRole({ id, name })} key={id} role_name={name} role_desc={desc} role_selected={role.name} />
              ))}

            </div>
          </div>

        </>
      )}

    </>
  )
}

export default Registrasi

