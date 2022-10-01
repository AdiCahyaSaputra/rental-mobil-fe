import { MouseEventHandler } from "react"

type Props = {
  cancelHandler: MouseEventHandler,
  destroyHandler: MouseEventHandler
}

const DialogConfirm: React.FC<Props> = ({ cancelHandler, destroyHandler }) => {
  return (
    <>
      <div className='md:w-6/12 w-10/12 left-[50%] -translate-x-[50%] bg-black text-white p-6 fixed top-[50%] -translate-y-[50%] z-40'>
        <h1 className='text-lg font-bold'>Konfirmasi Penghapusan Data</h1>
        <p className='text-sm text-white/80'>Data tidak dapat dipulihkan setelah dihapus</p>

        <div className='mt-10 justify-end flex items-center space-x-2'>
          <button onClick={destroyHandler} className='hover:bg-red-700 text-sm py-1.5 px-3 bg-red-600 border-2 border-red-600'>Hapus</button>
          <button onClick={cancelHandler} className='text-sm py-1.5 px-3 border-2 border-white'>Batal</button>
        </div>

      </div>
      <div className='fixed inset-0 z-30 bg-black/40'></div>
    </>
  )
}

export default DialogConfirm
