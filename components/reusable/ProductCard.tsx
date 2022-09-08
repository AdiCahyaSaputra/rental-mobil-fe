// Icon
import UserIcon from '../../asset/svg/user.svg'
import PlusIcon from '../../asset/svg/plus.svg'

type Props = {
  name: string,
  modelYear: string,
  color: string,
  owner: string
}

const ProductCard: React.FC<Props> = ({ name, modelYear, color, owner }) => {

  return (
    <div className="cursor-pointer rounded-b-lg col-span-6 md:col-span-3 shadow-md">

      <div className="aspect-video bg-gray-500"></div>

      <div className="p-2">

        <h1 className="tracking-wide text-lg font-extrabold line-clamp-1">
          {name}
        </h1>

        <ul className="text-sm text-black/70">
          <li>Model Tahun {modelYear}</li>
          <li>Warna {color}</li>
        </ul>

        <div className="flex items-center justify-between py-2 mt-6">
          <div className="w-8/12 flex items-center space-x-2">
            <UserIcon className='w-6 aspect-square bg-black/10 rounded-full p-1' />
            <p className="line-clamp-1 font-bold">
              {owner}
            </p>
          </div>
          <PlusIcon className='w-6 aspect-square' />
        </div>

      </div>

    </div>
  )
}

export default ProductCard
