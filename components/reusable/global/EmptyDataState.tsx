import Logo from "components/reusable/global/Logo"

type Props = {
  width?: string,
  height?: string,
  desc: string
}

const EmptyDataState: React.FC<Props> = ({ width, height, desc }) => {
  return (
    <>
      <div
        className={`${width ?? 'w-full'} 
          ${height ?? 'aspect-video'} flex justify-center
          items-center bg-black text-white
          relative
        `}
      >

        <div className="text-center flex flex-col items-center">
          <h3 className="w-8/12 font-medium text-lg">Data Tidak Ditemukan</h3>
          <p className="md:w-7/12 w-8/12 text-sm font-light mt-1.5">{desc}</p>
        </div>
        <div className="scale-75 absolute bottom-0 right-3">
          <Logo />
        </div>

      </div>
    </>
  )
}

export default EmptyDataState
