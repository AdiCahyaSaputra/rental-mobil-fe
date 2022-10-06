// Lib
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { rentList } from 'lib/utils/api'

// Components
import Container from 'components/reusable/global/Container'
import PagesWrapper from 'components/reusable/global/PagesWrapper'
import EmptyDataState from 'components/reusable/global/EmptyDataState'
import RentCard from 'components/reusable/rent/RentCard'
import BackButton from 'components/reusable/global/BackButton'

// Interface
import RentDataInterface from 'lib/interface/RentDataInterface'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token, role } = ctx.req.cookies

  const response = await rentList(token!)

  // Unauthenticated wkwk
  if (response.status === 401) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      token: token ?? null,
      role: role ?? null,
      data: response.data ?? []
    }
  }

}

type Props = {
  token: string | null,
  role: string | null,
  data: RentDataInterface[] | []
}

const Rent: NextPage<Props> = ({ token, data }) => {

  return (
    <>
      <Head>
        <title>Rent</title>
      </Head>

      <PagesWrapper token={token}>
        <div className='py-14'>

          <Container>
            <div className='grid grid-cols-12 gap-0 md:gap-2'>

              <BackButton title="Rental" link="/beranda" />

              <div className='bg-white col-span-12 md:col-span-10 p-4'>

                <h1 className='text-xl font-bold text-black'>Data Rental List</h1>
                <p className='text-sm text-black/80 my-1'>
                  Kumpulan list data mobil yang ingin di sewa oleh user
                </p>

                {data.length ? (
                  <div className='mt-10 grid grid-cols-12 gap-4'>
                    {data.map((car, index: number) => (
                      <RentCard token={token!} key={index} car={car} />
                    ))}
                  </div>
                ) : (
                  <div className='mt-6'>
                    <EmptyDataState desc="Belum ada user yang ingin menyewa mobil anda" />
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

export default Rent
