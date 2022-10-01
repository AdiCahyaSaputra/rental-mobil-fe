// Lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getUserCars } from 'lib/utils/api'

// Components
import PagesWrapper from 'components/reusable/global/PagesWrapper'
import Container from 'components/reusable/global/Container'
import DashboardItemCard from 'components/reusable/dashboard/DashboardItemCard'
import EmptyDataState from 'components/reusable/global/EmptyDataState'

// Interface
import CarItemInterface from 'lib/interface/CarItemInterface'

// Icons
import SmallLarrIcon from '../../asset/svg/smalllarr.svg'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token } = ctx.req.cookies

  const response = await getUserCars(token!)

  return {
    props: {
      token: token ?? null,
      data: response.data
    }
  }

}

type Props = {
  token: string | null,
  data: CarItemInterface[]
}

const DashboardHome: NextPage<Props> = ({ token, data }) => {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PagesWrapper token={token}>
        <div className='py-14'>

          <Container>
            <div className='grid grid-cols-12 gap-0 md:gap-2'>

              <div className='flex items-center p-2 bg-white md:border-0 border-2 border-black space-x-2 md:block md:space-x-0 md:justify-self-end md:p-0 md:bg-transparent col-span-12 md:col-span-1'>
                <SmallLarrIcon onClick={() => router.push('/beranda')} className='cursor-pointer hover:bg-green-600 hover:shadow-md hover:shadow-green-600/30 md:w-8 w-6 aspect-square p-1 bg-black fill-white' />
                <p className='md:hidden text-lg font-bold tracking-wide uppercase'>Dashboard</p>
              </div>

              <div className='bg-white col-span-12 md:col-span-10 p-4'>

                <h1 className='text-xl font-bold text-black'>Data Mobil Sewa</h1>
                <p className='text-sm text-black/80 my-1'>Semua data mobil yang ingin disewakan. Anda bisa mengelola data nya di sini</p>
                <a onClick={() => router.push('/dashboard/create')} className='text-sm font-medium text-blue-600 hover:underline'>Tambah Data</a>

                {data.length ? (
                  <div className='mt-10 grid grid-cols-12 gap-4'>
                    {data.map((car) => (
                      <DashboardItemCard token={token} key={car.id} data={car} />
                    ))}
                  </div>
                ) : (
                  <div className='mt-10'>
                    <EmptyDataState desc='Anda belum mendaftarkan Mobil yang ingin anda pinjamkan' />
                  </div>
                )}
              </div>

            </div>
          </Container>

        </div>
      </PagesWrapper>
    </>
  )
}

export default DashboardHome
