// Lib
import { Field, Formik } from 'formik'
import { validateCreateCarForm } from 'lib/utils/validation'
import { editCar } from 'lib/utils/api'

// Components
import SubmitButton from 'components/reusable/global/SubmitButton'

// Interface
import CarItemInterface from 'lib/interface/CarItemInterface'

const inputElements = [
  { type: 'text', placeholder: 'Nama Brand', name: 'brand_car' },
  { type: 'number', placeholder: 'Model Tahun', name: 'car_model_year' },
  { type: 'text', placeholder: 'Warna', name: 'color' },
  { type: 'text', placeholder: 'Plat Nomor', name: 'no_plate' },
  { type: 'number', placeholder: 'Kapasitas', name: 'capacity' },
]


type Props = {
  token: string,
  setResponse: Function,
  data: CarItemInterface,
  car_id: number
}

const EditCarSection: React.FC<Props> = ({ token, setResponse, data, car_id }) => {

  const initFormValue = {
    brand_car: data.brand_car,
    car_model_year: data.car_model_year,
    color: data.color,
    no_plate: data.no_plate,
    capacity: data.capacity,
    status: 'available'
  }

  const submitHandler = async (values: CarItemInterface) => {
    const response = await editCar(token, values, car_id)
    setResponse(response)
  }

  return (
    <Formik onSubmit={submitHandler} initialValues={initFormValue} validate={validateCreateCarForm}>

      {({ values, errors, isSubmitting, handleSubmit, touched }: any) => (
        <>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e)
          }}>

            <div className="space-y-2">
              {inputElements.map((input, index: number) => (
                <div key={index}>
                  <Field
                    type={input.type}
                    name={input.name}
                    autoComplete="off"
                    value={values[input.name]}
                    placeholder={input.placeholder}
                    className="border-b-2 border-black/20 w-full outline-none bg-white focus:border-b-2 focus:border-black p-1.5"
                    required
                  />
                  {touched && (
                    <p className="text-sm mt-1 text-red-600 font-light">{errors[input.name]}</p>
                  )}
                </div>
              ))}

            </div>

            <SubmitButton name="Edit Data Mobil" isSubmitting={isSubmitting} errors={errors} />

          </form>
        </>
      )}

    </Formik>
  )
}

export default EditCarSection
