// Lib
import { useRouter } from 'next/router'

type Item = {
  label: string,
  link: string
}

type Props = {
  title: string,
  items: Item[]
}

const isAbsolutePath = (link: string): boolean => link.includes('https://')

const FooterItem: React.FC<Props> = ({ title, items }) => {

  const router = useRouter()

  return (
    <div className="md:col-span-4 col-span-12">
      <h1 className="text-xl font-extrabold">{title}</h1>

      <div className="flex flex-col mt-4 space-y-1">

        {items.map((item, index) => {

          if (isAbsolutePath(item.link)) {
            return (
              <a key={index} href={item.link} className="hover:underline text-sm text-blue-400">{item.label}</a>
            )
          }

          return (
            <a key={index} onClick={() => router.push(item.link)} className="hover:underline text-sm text-blue-400">{item.label}</a>
          )

        })}

      </div>
    </div>
  )
}

export default FooterItem
