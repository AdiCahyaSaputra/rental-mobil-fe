const HeroSection: React.FC = () => {
  return (
    <section className='flex-col flex justify-center items-center min-h-[80vh] bg-black text-white'>
      <div className="my-4 flex items-center">
        <div className="space-y-1.5 flex flex-col items-end">
          <div className="w-6 h-px bg-white"></div>
          <div className="w-3 h-px bg-white"></div>
          <div className="w-4 h-px bg-white"></div>
        </div>

        <div className="w-4 aspect-square bg-white rounded-r-lg rounded-b-sm rounded-l-none"></div>
      </div>
      <div className="flex flex-col items-center w-10/12">
        <h1 className="text-center tracking-widest font-bold text-xl">Liburan Tanpa Pusing <br />Mikirin Kendaraan</h1>
        <div className="flex items-center space-x-2">
          <button className="w-max text-sm mt-4 py-2 px-4 bg-white text-black font-bold border-2 border-white">Sewa Mobil</button>
          <button className="w-max text-sm mt-4 py-2 px-4 bg-transparent border-2 border-white text-white font-bold">Pinjamkan Mobil</button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
