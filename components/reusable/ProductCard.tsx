// Lib
import { toTitleCase } from 'lib/utils/stringHelper'

// Interface
import CarItemInterface from 'lib/interface/CarItemInterface'
import { MouseEventHandler } from 'react'

// Icons
import SmallRarrIcon from '../../asset/svg/smallrarr.svg'
import ServerStackIcon from '../../asset/svg/server.svg'

type Props = {
  data: CarItemInterface,
  click: MouseEventHandler
}

const ProductCard: React.FC<Props> = ({ data, click }) => {

  return (
    <article onClick={click} className="group overflow-hidden rounded-md bg-white cursor-pointer col-span-6 md:col-span-3 shadow-md">

      <div className="p-4">

        <div className='flex items-center space-x-2'>

          <ServerStackIcon className={`w-4 aspect-square ${data.status === 'available' ? 'fill-green-600' : 'fill-yellow-600'}`} />

          <p
            className={`
            text-sm
            ${data.status === 'available' ?
                'text-green-600' : 'text-yellow-600'}
          `}>{toTitleCase(data.status)}</p>

        </div>

        <h1 className="line-clamp-1 text-lg tracking-wide font-extrabold">
          {data.brand_car}
        </h1>


        <p className='text-sm text-black/80 font-medium mt-2'>Kapasitas</p>
        <p className='text-xs mt-1 text-black font-light'>{data.capacity} Orang</p>

      </div>

      <div className="p-3 mt-6 bg-gradient-to-r from-black via-black to-black">

        <div className='flex items-center justify-between'>
          <h3 className="tracking-wide line-clamp-1 text-white text-sm font-bold">{toTitleCase(data.name!)}</h3>
          <SmallRarrIcon className="w-6 rounded-sm group-hover:bg-green-600/70 group-hover:shadow-md group-hover:shadow-green-600/30 group-hover:translate-x-1 bg-white/30 p-1 aspect-square fill-white" />
        </div>

      </div>

    </article>
  )
}

export default ProductCard
