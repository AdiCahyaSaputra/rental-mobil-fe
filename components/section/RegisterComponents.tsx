// Lib
import { useState } from "react"
import { Formik, Field } from 'formik'
import { validateForm } from "lib/utils/validator"

// Components
import RoleCard from "components/reusable/RoleCard"

// Icons
import EditIcon from '../../asset/svg/edit.svg'

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

const initFormValue = {
  name: '',
  mobile_phone: '',
  address: '',
  email: '',
  password: '',
  password_confirmation: '',
  role_id: 1
}

const submitHandler = (values: any, { setSubmitting }: any) => {
  setSubmitting(true)
  console.log(values)
}

const RegisterComponents: React.FC = () => {

  const [openModalRole, setOpenModalRole] = useState(false)
  const [role, setRole] = useState({
    id: 1,
    name: 'CUSTOMER'
  })

  return (
    <>
      <Formik validate={validateForm} initialValues={initFormValue} onSubmit={submitHandler}>

        {({ values, errors, isSubmitting, handleSubmit }: any) => (
          <>
            <pre className="overflow-auto">{JSON.stringify(values, null, 2)}</pre>
            <pre className="overflow-auto">{JSON.stringify(errors, null, 2)}</pre>

            <form className='mt-6' onSubmit={e => {
              e.preventDefault()
              handleSubmit(e)
            }}>

              <div className='space-y-4'>

                {inputElements.map(({ type, name, placeholder }, index: number) => (
                  <Field
                    key={index}
                    placeholder={placeholder}
                    autocomplete="off"
                    type={type}
                    name={name}
                    value={values[name]}
                    className="border-b-2 border-white/20 w-full outline-none bg-black text-white focus:border-b-2 focus:border-white p-1.5"
                  />
                ))}

                <p className="hidden">{values.role_id = role.id}</p>

                <div onClick={() => setOpenModalRole(!openModalRole)} className="hover:bg-white/30 flex justify-between items-center py-1.5 px-3 bg-white/20 cursor-pointer">
                  <h1 className="text-sm font-bold text-green-600 drop-shadow-md">Role - {role.name}</h1>
                  <EditIcon className='w-4 aspect-square' />
                </div>

              </div>

              <div className='mt-12'>

                {isSubmitting ? (
                  <button disabled className='font-bold py-2 px-4 bg-green-800 hover:shadow-md hover:shadow-green-700/80 w-full'>
                    ...
                  </button>
                ) : (
                  <button type='submit' className='font-bold py-2 px-4 bg-green-600 hover:shadow-md hover:shadow-green-600/80 w-full'>
                    Register
                  </button>
                )}

              </div>

            </form>

          </>
        )}

      </Formik>

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

export default RegisterComponents
