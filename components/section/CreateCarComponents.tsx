import SubmitButton from "components/reusable/SubmitButton"
import { Field, Formik } from "formik"
import { validateCreateCarForm } from "lib/utils/validation"

const initFormValue = {
  brand_car: '',
  car_model_year: 0,
  color: '',
  no_plate: '',
  capacity: 0
}

const inputElements = [
  { type: 'text', placeholder: 'Nama Brand', name: 'brand_car' },
  { type: 'number', placeholder: 'Model Tahun', name: 'car_model_year' },
  { type: 'text', placeholder: 'Warna', name: 'color' },
  { type: 'text', placeholder: 'Plat Nomor', name: 'no_plate' },
  { type: 'number', placeholder: 'Kapasitas', name: 'capacity' },
]

const submitHandler = () => {
  console.log('hello')
}

const CreateCarComponents: React.FC = () => {
  return (
    <Formik onSubmit={submitHandler} initialValues={initFormValue} validate={validateCreateCarForm}>

      {({ values, errors, isSubmitting, handleSubmit, touched }: any) => (
        <>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}>

            {inputElements.map((input, index: number) => (
              <>
                <div key={index}>
                  <Field
                    type={input.type}
                    name={input.name}
                    autoComplete="off"
                    value={input.type === 'number' ? '' : values[input.name]}
                    placeholder={input.placeholder}
                    className="border-b-2 border-black/20 w-full outline-none bg-white focus:border-b-2 focus:border-black p-1.5"
                    required
                  />
                </div>
                {touched && (
                  <p className="text-sm mt-1 text-red-600 font-light">{errors[input.name]}</p>
                )}
              </>
            ))}

            <SubmitButton name="Sewakan Mobil" isSubmitting={isSubmitting} errors={errors} />

          </form>
        </>
      )}

    </Formik>
  )
}

export default CreateCarComponents
