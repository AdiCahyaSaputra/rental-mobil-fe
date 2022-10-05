import RentDataInterface from "lib/interface/RentDataInterface"

type Props = {
  car: RentDataInterface
}

const RentCard: React.FC<Props> = ({ car }) => {
  return (
    <article className="border-t border-gray-100 cursor-pointer col-span-12 md:col-span-6 bg-white shadow-md">
      <div className="flex items-center">

        <div className="p-4 w-6/12">
          <h1 className="text-lg font-bold">{car.brand_car}</h1>
        </div>

        <div className="p-4 w-6/12 bg-black">
          <h1 className="font-bold text-white">{car.name}</h1>
        </div>

      </div>
      <div className="justify-between shadow-md shadow-green-600/40 flex bg-green-600 text-white items-center p-2">
        <p className="text-xs">Tanggal Rental {car.rent_date}</p>
        <p className="text-xs">Tanggal Kembali {car.return_date}</p>
      </div>
    </article>
  )
}

export default RentCard
