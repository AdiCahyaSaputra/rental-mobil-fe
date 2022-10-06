// Lib
import { useRouter } from 'next/router'

// Interface
import PaginationInfoInterface from 'lib/interface/PaginationInfoInterface'

// Icons
import SmallLarr from '../../../asset/svg/smalllarr.svg'
import SmallRarr from '../../../asset/svg/smallrarr.svg'

type Props = {
  info: PaginationInfoInterface
}

const PaginationNav: React.FC<Props> = ({ info }) => {

  const router = useRouter()

  const navClickHandler = (link: string | null, nextOrPrev: number) => {
    if (link) {
      router.push(`/beranda?page=${nextOrPrev}`)
    }
  }

  const pageClickHandler = (page: string) => {
    router.push(`/beranda?page=${page}`)
  }

  return (
    <>
      <div className='space-x-2 flex mt-12 p-4 justify-center items-center'>

        <SmallLarr onClick={() => navClickHandler(info.prev_url, info.current_page - 1)} className={`${!info.prev_url ? 'bg-black/40' : 'bg-white'} transition-none w-8 hover:fill-white hover:bg-green-600 hover:shadow-md hover:shadow-green-600/40 aspect-square p-2 cursor-pointer`} />

        <div className='w-8/12 overflow-x-auto flex space-x-2 items-center'>
          {info.links.map((link, index: number) => (
            <div onClick={() => pageClickHandler(link.label)} key={index} className={`cursor-pointer shrink-0 w-8 aspect-square ${link.active ? 'bg-green-600 text-white' : 'bg-white'} px-2 flex justify-center items-center text-sm`}>{link.label}</div>
          ))}
        </div>

        <SmallRarr onClick={() => navClickHandler(info.next_url, info.current_page + 1)} className={`${!info.next_url ? 'bg-black/40' : 'bg-white'} transition-none w-8 hover:fill-white hover:bg-green-600 hover:shadow-md hover:shadow-green-600/40 aspect-square p-2 cursor-pointer`} />

      </div>
    </>
  )
}

export default PaginationNav
