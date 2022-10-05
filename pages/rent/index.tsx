// Lib
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { rentList } from "lib/utils/api";

// Components
import Container from "components/reusable/global/Container";
import PagesWrapper from "components/reusable/global/PagesWrapper";
import EmptyDataState from "components/reusable/global/EmptyDataState";

// Icons
import SmallLarrIcon from '../../asset/svg/smalllarr.svg'
import RentDataInterface from "lib/interface/RentDataInterface";
import RentCard from "components/reusable/rent/RentCard";

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
      data: response.data
    }
  }

}

type Props = {
  token: string | null,
  role: string | null,
  data: RentDataInterface[]
}

const Rent: NextPage<Props> = ({ token, data }) => {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Rent</title>
      </Head>

      <PagesWrapper token={token}>
        <div className='py-14'>

          <Container>
            <div className='grid grid-cols-12 gap-0 md:gap-2'>

              <div className='flex items-center p-2 bg-white md:border-0 border-2 border-black space-x-2 md:block md:space-x-0 md:justify-self-end md:p-0 md:bg-transparent col-span-12 md:col-span-1'>
                <SmallLarrIcon onClick={() => router.push('/beranda')} className='cursor-pointer hover:bg-green-600 hover:shadow-md hover:shadow-green-600/30 md:w-8 w-6 aspect-square p-1 bg-black fill-white' />
                <p className='md:hidden text-lg font-bold tracking-wide uppercase'>Rental</p>
              </div>

              <div className='bg-white col-span-12 md:col-span-10 p-4'>

                <h1 className='text-xl font-bold text-black'>Data Rental List</h1>
                <p className='text-sm text-black/80 my-1'>
                  Kumpulan list data mobil yang ingin di sewa oleh user
                </p>

                {data.length ? (
                  <div className='mt-10 grid grid-cols-12 gap-4'>
                    {data.map((car, index: number) => (
                      <RentCard key={index} car={car} />
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
