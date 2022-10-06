// Lib
import { approveRentCar } from 'lib/utils/api'
import { useRouter } from 'next/router'

type Props = {
  customer_name: string,
  customer_id: number,
  status_car_id: number,
  token: string,
  setResponse: Function
  close: Function
}

const ModalApproval: React.FC<Props> = ({ customer_name, customer_id, close, token, setResponse, status_car_id }) => {

  const router = useRouter()

  const approveHandler = async () => {
    const response = await approveRentCar(token, customer_id, status_car_id)
    setResponse(response)

    router.push('/dashboard')
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center fixed inset-0 bg-black/60">
        <div className="p-4 w-10/12 md:w-6/12 bg-white text-black">
          <h1 className="text-lg font-bold">Persetujuan</h1>
          <p className="text-sm text-black/70">Setujui peminjaman mobil ini dari <span className="text-black font-medium">{customer_name}</span> ?</p>
        </div>

        <div className="w-10/12 md:w-6/12 mt-2 justify-end text-sm font-bold flex items-center space-x-2 text-white">
          <button onClick={() => close(!true)} className="py-2 phover:shadow-md hover:shadow-red-600/40 px-4 bg-red-600">Tolak</button>
          <button onClick={approveHandler} className="py-2 hover:shadow-md hover:shadow-green-600/40 px-4 bg-green-600">Terima</button>
        </div>
      </div>
    </>
  )
}

export default ModalApproval
