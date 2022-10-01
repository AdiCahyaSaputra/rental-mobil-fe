// Icons
import GithubIcon from '../../../asset/svg/github.svg'

type Props = {
  user: string,
  link: string
}

const GithubInfo: React.FC<Props> = ({ user, link }) => {

  return (
    <div className="flex items-center space-x-2 mt-4">
      <GithubIcon className='w-4 aspect-square' />
      <a href={link} className="hover:underline text-sm text-blue-400">@{user}</a>
    </div>
  )
}

export default GithubInfo
