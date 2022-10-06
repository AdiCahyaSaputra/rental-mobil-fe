// Lib
import { getSingleCar } from 'lib/utils/api'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

// Components
import Container from 'components/reusable/global/Container'
import ErrNotify from 'components/reusable/global/ErrNofify'
import Logo from 'components/reusable/global/Logo'
import PagesWrapper from 'components/reusable/global/PagesWrapper'
import EditCarSection from 'components/section/dashboard/EditCarSection'
import BackButton from 'components/reusable/global/BackButton'

// Interface
import CarItemInterface from 'lib/interface/CarItemInterface'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token, role } = ctx.req.cookies
  const { id } = ctx.query

  if (role === 'customer') return {
    redirect: {
      destination: '/dashboard',
      permanent: false
    }
  }

  const response = await getSingleCar(id)

  return {
    props: {
      token: token ?? null,
      data: response.data
    }
  }

}

type Props = {
  token: string | null,
  data: CarItemInterface
}

const DashboardEdit: NextPage<Props> = ({ token, data }) => {

  const router = useRouter()
  const [response, setResponse] = useState({
    status: 0,
    message: ''
  })

  return (
    <>
      <Head>
        <title>Dashboard Edit</title>
      </Head>
      <PagesWrapper token={token}>

        <ErrNotify response={response} />

        <div className="py-14">
          <Container>
            <div className='grid grid-cols-12 gap-0 md:gap-2'>

              <BackButton title="Form Data" link="/dashboard" />

              <div className="p-4 bg-white col-span-12 md:col-span-6">
                <h1 className="text-xl font-bold">Upload/Preview Gambar</h1>
                <p className='text-sm text-black/80 my-1'>Coming soon..</p>

                <div className="flex justify-center items-center aspect-video mt-2 bg-black">
                  <Logo />
                </div>
                <h3 className="text-sm font-medium mt-2">Informasi Gambar</h3>
                <div className="text-black/70">
                  <p className="text-sm my-2">Nama File -</p>
                  <p className="text-sm">Ukuran -</p>
                  <p className="text-sm">Resolusi -</p>
                </div>
              </div>

              <div className='bg-white col-span-12 md:col-span-5 p-4 '>

                <h1 className='text-xl font-bold text-black'>Sewa Mobil</h1>
                <p className='text-sm text-black/80 my-1'>Isi beberapa data atau deskripsi kelengkapan mobil yang ingin disewakan</p>

                <div className="mt-4">

                  <EditCarSection car_id={parseInt(router.query?.id)} data={data} setResponse={setResponse} token={token!} />

                </div>

              </div>

            </div>

          </Container>
        </div>

      </PagesWrapper>
    </>
  )
}

export default DashboardEdit
