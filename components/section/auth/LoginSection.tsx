// Lib
import { Field, Formik } from 'formik'
import { validateLoginForm } from 'lib/utils/validation'
import useAuth from 'lib/hooks/useAuth'

// components
import SubmitButton from 'components/reusable/global/SubmitButton'

// Interface 
import LoginDataInterface from 'lib/interface/LoginDataInterface'

type Props = {
  setResponse: Function
}

const inputElements = [
  { type: 'email', placeholder: 'Email', name: 'email' },
  { type: 'password', placeholder: 'Password', name: 'password' }
]

const initFormValue = {
  email: '',
  password: '',
  remember: false
}

const LoginSection: React.FC<Props> = ({ setResponse }) => {

  const { login } = useAuth()

  const submitHandler = async (values: LoginDataInterface, { setIsSubmitting }: any) => {
    const res = await login(values)
    setResponse(res)

    setIsSubmitting(true)
  }

  return (
    <>
      <Formik validate={validateLoginForm} initialValues={initFormValue} onSubmit={submitHandler}>

        {({ values, errors, isSubmitting, handleSubmit, touched }: any) => (
          <>

            <form className='mt-6' onSubmit={e => {
              e.preventDefault()
              handleSubmit(e)
            }}>

              <div className='space-y-4'>

                {inputElements.map(({ type, placeholder, name }, index: number) => (
                  <div key={index}>
                    <Field
                      placeholder={placeholder}
                      autoComplete="off"
                      type={type}
                      name={name}
                      value={values[name]}
                      className="border-b-2 border-white/20 w-full outline-none bg-black text-white focus:border-b-2 focus:border-white p-1.5"
                      required
                    />
                    {touched && (
                      <p className="text-sm mt-1 text-red-600 font-light">{errors[name]}</p>
                    )}
                  </div>
                ))}

                <div className='flex items-center space-x-2'>
                  <Field name="remember" id="check" type="checkbox" />
                  <label htmlFor='check' className='text-sm'>Remember Me</label>
                </div>

              </div>

              <SubmitButton name="Login" isSubmitting={isSubmitting} errors={errors} />

            </form>
          </>
        )}

      </Formik>
    </>
  )
}

export default LoginSection
