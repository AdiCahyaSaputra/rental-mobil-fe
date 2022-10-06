import { rentCar } from 'lib/utils/api'
import moment from 'moment'
import { useState } from 'react'

type Props = {
  isOpen: boolean,
  close: Function,
  setResponse: Function,
  token: string,
  car_id: number
}

const RentModal: React.FC<Props> = ({ isOpen, close, setResponse, token, car_id }) => {

  const [err, setErr] = useState({ rentDate: false, returnDate: false })

  const [rentDate, setRentDate] = useState(moment().format('YYYY-MM-DD'))
  const [returnDate, setReturnDate] = useState(moment().add(1, 'days').format('YYYY-MM-DD'))

  const [rentData, setRentData] = useState({
    rent_date: '',
    return_date: ''
  })

  const changeRentDateHandler = (e: any) => {

    const now = moment()
    const change = moment(e.target.value)

    if (change.diff(now, 'days') < 0) {
      setErr({
        ...err,
        rentDate: true
      })

    } else {
      setRentDate(change.format('YYYY-MM-DD'))
      setErr({
        ...err,
        rentDate: false
      })

      setRentData({
        ...rentData,
        rent_date: change.format('DD-MM-YYYY')
      })
    }

  }

  const changeReturnDateHandler = (e: any) => {

    const now = moment()
    const change = moment(e.target.value)

    if (change.diff(now, 'days') < 0) {
      setErr({
        ...err,
        returnDate: true
      })

    } else {
      setReturnDate(change.format('YYYY-MM-DD'))
      setErr({
        ...err,
        returnDate: false
      })
      
      setRentData({
        ...rentData,
        return_date: change.format('DD-MM-YYYY')
      })
    }

  }

  const submitHandler = async () => {
    const response = await rentCar(token, car_id, rentData)
    setResponse(response)
  }

  return (
    <div className={`${!isOpen && 'hidden'}`}>

      <div className="top-[20%] left-[50%] -translate-x-[50%] fixed z-20 md:w-6/12 w-10/12">

        <div className="p-6 bg-white">
          <h1 className="text-xl font-bold">Sewa Mobil</h1>

          <div className="mt-1.5 grid grid-cols-2 gap-2">

            <div className="col-span-2 md:col-span-1 py-2">
              <h3 className="py-1.5 font-bold text-sm text-black/60">Tanggal Peminjaman</h3>
              <input
                type="date"
                name="rent-date"
                className="w-full p-1.5"
                onChange={changeRentDateHandler}
                value={rentDate} />
              {err.rentDate && (
                <p className="text-red-600 text-sm mt-1.5">Lho anda time travel ?</p>
              )}
            </div>

            <div className="col-span-2 md:col-span-1 py-2">
              <h3 className="py-1.5 font-bold text-sm text-black/60">Tanggal Pengembalian</h3>
              <input
                type="date"
                name="return-date"
                onChange={changeReturnDateHandler}
                className="w-full p-1.5"
                value={returnDate} />
              {err.returnDate && (
                <p className="text-red-600 text-sm mt-1.5">Fix anda time travel KAN !1!1</p>
              )}
            </div>

          </div>

        </div>

        <div className="mt-4 font-bold flex justify-end items-center space-x-2">
          <button onClick={() => close(!isOpen)} className="font-light py-2 px-4 bg-red-600 text-white hover:shadow-md hover:shadow-red-600/40">Cancel</button>
          <button onClick={submitHandler} className="py-2 px-8 bg-green-600 text-white hover:shadow-md hover:shadow-green-600/30">Sewa</button>
        </div>

      </div>

      <div className="fixed z-10 bg-black/70 inset-0"></div>
    </div>
  )
}

export default RentModal
