// Interface
import ProductItemInterface from 'lib/interface/ProductItemInterface'

// Icons
import PaintIcon from '../../asset/svg/paint.svg'
import CalendarIcon from '../../asset/svg/calendar.svg'
import SmallRarrIcon from '../../asset/svg/smallrarr.svg'

const ProductCard: React.FC<ProductItemInterface> = ({ name, color, modelYear, owner }) => {

  return (
    <article className="group overflow-hidden rounded-md bg-white cursor-pointer col-span-6 md:col-span-3 shadow-md">

      <div className="p-4">
        <h1 className="line-clamp-1 text-lg tracking-wide font-extrabold">
          {name}
        </h1>

        <div className='space-y-1.5 mt-4'>

          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-3 aspect-square" />
            <p className="text-xs font-medium">Model Tahun {modelYear}</p>
          </div>
          <div className="flex items-center space-x-2">
            <PaintIcon className="w-3 aspect-square" />
            <p className="text-xs font-medium">Warna - {color}</p>
          </div>

        </div>

      </div>

      <div className="p-3 mt-6 bg-gradient-to-r from-black via-black to-black">

        <div className='flex items-center justify-between'>
          <h3 className="tracking-wide line-clamp-1 text-white text-sm font-bold">{owner}</h3>
          <SmallRarrIcon className="w-6 rounded-sm group-hover:bg-green-600/70 group-hover:shadow-md group-hover:shadow-green-600/30 group-hover:translate-x-1 bg-white/30 p-1 aspect-square fill-white" />
        </div>

      </div>

    </article>
  )
}

export default ProductCard
