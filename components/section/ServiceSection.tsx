import Container from "components/reusable/Container"

const ServiceSection: React.FC = () => {

  return (
    <section className="min-h-screen">

      <Container>
        <div className="grid grid-cols-12 md:gap-2">

          <div className="p-2 col-span-12 md:col-span-6">
            <div className="rounded-lg aspect-video bg-gray-500"></div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <h1 className="md:text-left text-center mt-4 mb-2 text-xl text-black font-bold">
              Pilihan Mobil Yang <br /><span className="text-green-600 drop-shadow-md">Super</span> Lengkap
            </h1>
            <p className="text-center md:text-left w-10/12 mx-auto md:m-0 text-lg text-gray-600 font-light">
              Mulai dari <span className="font-normal text-black">Honda, Nissan, Toyota, Daihatsu</span>, dan banyak lagi
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="text-white hover:text-white/80 mt-6 py-2 px-4 shadow-md shadow-black/80 bg-black">
                <span className="font-bold">Cari Mobil</span>
              </button>
            </div>
          </div>

        </div>
      </Container>

    </section>
  )
}

export default ServiceSection
