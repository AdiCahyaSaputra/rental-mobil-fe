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
import BackButton from 'components/reusable/global/BackButton'

// Interface
import CarItemInterface from 'lib/interface/CarItemInterface'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token, role } = ctx.req.cookies

  const response = await getUserCars(token!)

  return {
    props: {
      token: token ?? null,
      role: role ?? null,
      data: response.data
    }
  }

}

type Props = {
  token: string | null,
  role: string | null,
  data: CarItemInterface[]
}

const DashboardHome: NextPage<Props> = ({ token, role, data }) => {

  const router = useRouter()

  const paragraphText = role === 'owner' ?
    'Semua data mobil yang ingin disewakan. Anda bisa mengelola data nya di sini' :
    'Semua data mobil yang anda sewa. Anda bisa melihat tanggal pengembalian / peminjaman disini'

  const emptyStateText = role === 'owner' ?
    'Anda belum mendaftarkan Mobil yang ingin anda pinjamkan' :
    'Anda belum meminjam mobil atau owner abelum menyetujui permintaan peminjaman anda'

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <PagesWrapper token={token}>
        <div className='py-14'>

          <Container>
            <div className='grid grid-cols-12 gap-0 md:gap-2'>

              <BackButton title='Dashboard' link='/beranda' />

              <div className='bg-white col-span-12 md:col-span-10 p-4'>

                <h1 className='text-xl font-bold text-black'>Data Mobil</h1>
                <p className='text-sm text-black/80 my-1'>{paragraphText}</p>
                <a onClick={() => router.push('/dashboard/create')} className={`${role === 'customer' && 'hidden'} text-sm font-medium text-blue-600 hover:underline`}>Tambah Data</a>

                {data.length ? (
                  <div className='mt-10 grid grid-cols-12 gap-4'>
                    {data.map((car) => (
                      <DashboardItemCard token={token} key={car.id} data={car} />
                    ))}
                  </div>
                ) : (
                  <div className='mt-6'>
                    <EmptyDataState desc={emptyStateText} />
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
