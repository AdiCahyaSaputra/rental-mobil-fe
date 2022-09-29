// Lib
import { useRouter } from 'next/router'
import { useState } from 'react'
import { destroyCar } from 'lib/utils/api'
import { nameToUrlFriendly, toTitleCase } from 'lib/utils/stringHelper'

// Components
import DialogConfirm from 'components/reusable/DialogConfirm'
import ErrNotify from 'components/reusable/ErrNofify'

// Interface
import CarItemInterface from 'lib/interface/CarItemInterface'

// Icons
import EditIcon from '../../asset/svg/edit.svg'
import TrashIcon from '../../asset/svg/trash.svg'
import ServerStackIcon from '../../asset/svg/server.svg'

type Props = {
  data: CarItemInterface,
  token: string | null
}

const DashboardItemCard: React.FC<Props> = ({ data, token }) => {

  const router = useRouter()
  const [dialogActive, setDialogActive] = useState(false)
  const [response, setResponse] = useState({
    status: 0,
    message: ''
  })

  const clickHandler = (brandCar: string, id: number, url: string) => {

    const urlFriendly = nameToUrlFriendly(brandCar)
    return router.push({
      pathname: url + urlFriendly,
      query: { id }
    })

  }

  const destroyHandler = async () => {
    const response = await destroyCar(data.id!, token!)
    setResponse(response)
    setTimeout(() => router.reload(), 1000)
  }

  return (
    <>
      {dialogActive && (
        <DialogConfirm cancelHandler={() => setDialogActive(false)} destroyHandler={destroyHandler} />
      )}

      <ErrNotify response={response} />

      <article className="relative col-span-12 md:col-span-6 p-4 shadow-md shadow-black/10">

        <div className="flex items-center space-x-2">
          <ServerStackIcon className={`w-4 aspect-square ${data.status === 'available' ? 'fill-green-600' : 'fill-yellow-600'}`} />
          <p className={`text-sm ${data.status === 'available' ? 'text-green-600' : 'text-yellow-600'} font-medium`}>
            {toTitleCase(data.status)}
          </p>
        </div>

        <h1 className="text-lg font-bold text-black my-1.5">{data.brand_car}</h1>

        <a onClick={() => clickHandler(data.brand_car, data.id!, '/car/')} className='text-sm text-blue-600 hover:underline'>Lihat Detail</a>

        <div className='flex space-y-1.5 flex-col absolute top-4 right-4'>
          <EditIcon onClick={() => clickHandler(data.brand_car, data.id!, '/dashboard/edit/')} className='w-6 rounded-sm cursor-pointer hover:bg-green-600 hover:shadow-md hover:shadow-green-600/30 aspect-square p-1 bg-green-700 fill-white' />
          <TrashIcon onClick={() => setDialogActive(!dialogActive)} className='w-6 rounded-sm cursor-pointer hover:bg-red-600 hover:shadow-md hover:shadow-red-600/30 aspect-square p-1 bg-red-700 fill-white' />
        </div>

      </article>
    </>
  )
}

export default DashboardItemCard
