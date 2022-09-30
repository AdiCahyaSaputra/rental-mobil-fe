// Lib
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getSingleCar } from 'lib/utils/api'
import { toTitleCase } from 'lib/utils/stringHelper'

// Components
import PagesWrapper from 'components/reusable/PagesWrapper'
import Container from 'components/reusable/Container'

// Interface
import CarItemInterface from 'lib/interface/CarItemInterface'

// Icons
import SmallLarrIcon from '../../asset/svg/smalllarr.svg'
import PinMapIcon from '../../asset/svg/pinmap.svg'
import TelIcon from '../../asset/svg/tel.svg'
import MailIcon from '../../asset/svg/mail.svg'

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token } = ctx.req.cookies
  const { id } = ctx.query

  const response = await getSingleCar(id!)

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

const CarDetail: NextPage<Props> = ({ token, data }) => {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Deskripsi Mobil</title>
      </Head>

      <PagesWrapper token={token}>
        <div className='py-14'>

          <Container>
            <div className='grid grid-cols-12 gap-0 md:gap-2'>

              <div className='flex items-center p-2 bg-white md:border-0 border-2 border-b-0 border-black space-x-2 md:block md:space-x-0 md:justify-self-end md:p-0 md:bg-transparent col-span-12 md:col-span-1'>
                <SmallLarrIcon onClick={() => router.back()} className='cursor-pointer hover:bg-green-600 hover:shadow-md hover:shadow-green-600/30 md:w-8 w-6 aspect-square p-1 bg-black fill-white' />
                <p className='md:hidden text-lg font-bold tracking-wide uppercase'>Detail Mobil</p>
              </div>

              <div className='bg-white col-span-12 md:col-span-8'>
                <div className='p-4 bg-white border-2 border-dashed border-black'>

                  <div className='flex justify-between items-center'>

                    <h1 className='text-xl line-clamp-1 font-extrabold'>{data.brand_car}</h1>
                    <div>
                      <h3 className='text-right text-xl font-bold'>{data.car_model_year}</h3>
                      <p className='text-xs text-black/60 font-medium'>Model Year</p>
                    </div>

                  </div>

                  <div className='mt-4 border-t-2 border-black/20 pt-2 border-dotted grid grid-cols-12 gap-0'>

                    <div className='col-span-4 flex-col flex justify-center p-2'>
                      <h3 className='font-bold'>{data.color}</h3>
                      <p className='text-xs text-black/60 font-medium'>Warna</p>
                    </div>

                    <div className='col-span-4 flex-col flex justify-center p-2'>
                      <h3 className='font-bold'>{data.capacity} Orang</h3>
                      <p className='text-xs text-black/60 font-medium'>Kapasitas</p>
                    </div>

                    <div className='col-span-4 flex-col flex justify-center p-2'>
                      <h3 className='font-bold line-clamp-1'>{data.no_plate}</h3>
                      <p className='text-xs text-black/60 font-medium'>Plat Nomor</p>
                    </div>

                  </div>

                </div>

                <div className='p-4'>
                  <h3 className='font-medium'>{toTitleCase(data.car_owner!)}</h3>
                  <div className='flex items-center space-x-1'>
                    <PinMapIcon className='w-3 fill-green-600 aspect-square' />
                    <p className='text-sm font-light'>{data.address}</p>
                  </div>
                </div>

              </div>

              <div className='col-span-12 flex flex-col justify-between md:col-span-3 bg-white p-4 space-y-6 md:space-y-0'>
                <div>
                  <h1 className='text-lg font-bold'>Hubungi Pemilik</h1>
                  <div className='text-sm mt-2'>

                    <div className='flex items-center space-x-2'>
                      <TelIcon className='w-3 aspect-square' />
                      <p>+{data.mobile_phone}</p>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <MailIcon className='w-3 aspect-square' />
                      <p>{data.email}</p>
                    </div>

                  </div>
                </div>
                <div>
                  <button className='font-bold py-2 px-4 text-center bg-green-600 hover:bg-green-700 text-white w-full'>Sewa Mobil</button>
                </div>
              </div>

            </div>
          </Container>

        </div>
      </PagesWrapper>

    </>
  )
}

export default CarDetail