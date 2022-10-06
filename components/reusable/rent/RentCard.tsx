// Lib
import { useState } from 'react'

// Components
import ModalApproval from 'components/reusable/rent/ModalApproval'

// Interface
import RentDataInterface from 'lib/interface/RentDataInterface'
import ErrNotify from '../global/ErrNofify'

type Props = {
  car: RentDataInterface,
  token: string
}

const RentCard: React.FC<Props> = ({ car, token }) => {

  const [openModal, setOpenModal] = useState(false)
  const [response, setResponse] = useState({
    status: 0,
    message: ''
  })

  return (
    <>
      {openModal && (
        <ModalApproval setResponse={setResponse} token={token} customer_id={car.id!} customer_name={car.name!} status_car_id={car.status_id!} close={setOpenModal} />
      )}

      <ErrNotify response={response}/>

      <article onClick={() => setOpenModal(!openModal)} className="border-t border-gray-100 cursor-pointer col-span-12 md:col-span-6 bg-white shadow-md">
        <div className="flex items-center">

          <div className="p-4 w-6/12">
            <h1 className="text-lg font-bold">{car.brand_car}</h1>
          </div>

          <div className="p-4 w-6/12 bg-black">
            <p className="text-sm font-medium text-white/60">Peminjam</p>
            <h1 className="font-bold text-white">{car.name}</h1>
          </div>

        </div>
        <div className="justify-between shadow-md shadow-green-600/40 flex bg-green-600 text-white items-center p-2">
          <p className="text-xs">Tgl Rental {car.rent_date}</p>
          <p className="text-xs">Tgl Kembali {car.return_date}</p>
        </div>
      </article>

    </>
  )
}

export default RentCard
