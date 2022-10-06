// Lib
import { useRouter } from 'next/router'

// Icons
import SmallLarrIcon from '../../../asset/svg/smalllarr.svg'

type Props = {
  title: string,
  link?: string,
  customHandler?: Function
}

const BackButton: React.FC<Props> = ({ title, link, customHandler }) => {

  const router = useRouter()

  const clickHandler = () => {
    if (!customHandler) return router.push(link!)
    return customHandler(router)
  }

  return (
    <div className='flex items-center p-2 bg-white md:border-0 border-2 border-black space-x-2 md:block md:space-x-0 md:justify-self-end md:p-0 md:bg-transparent col-span-12 md:col-span-1'>
      <SmallLarrIcon onClick={clickHandler} className='cursor-pointer hover:bg-green-600 hover:shadow-md hover:shadow-green-600/30 md:w-8 w-6 aspect-square p-1 bg-black fill-white' />
      <p className='md:hidden text-lg font-bold tracking-wide uppercase'>{title}</p>
    </div>
  )
}

export default BackButton
