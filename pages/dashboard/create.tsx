// Lib
import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

// Components
import Container from "components/reusable/Container"
import PagesWrapper from "components/reusable/PagesWrapper"
import CreateCarComponents from "components/section/CreateCarComponents"

// Icons
import SmallLarrIcon from '../../asset/svg/smalllarr.svg'
import Logo from "components/reusable/Logo"

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token } = ctx.req.cookies

  return {
    props: {
      token: token ?? null,
    }
  }

}

type Props = {
  token: string | null,
}

const Create: NextPage<Props> = ({ token }) => {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>Create</title>
      </Head>

      <PagesWrapper token={token}>

        <div className="py-14">
          <Container>
            <div className='grid grid-cols-12 gap-0 md:gap-2'>

              <div className='flex items-center p-2 bg-white md:border-0 border-2 border-black space-x-2 md:block md:space-x-0 md:justify-self-end md:p-0 md:bg-transparent col-span-12 md:col-span-1'>
                <SmallLarrIcon onClick={() => router.push('/dashboard')} className='cursor-pointer hover:bg-green-600 hover:shadow-md hover:shadow-green-600/30 md:w-8 w-6 aspect-square p-1 bg-black fill-white' />
                <p className='md:hidden text-lg font-bold tracking-wide uppercase'>Form Data</p>
              </div>

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

                  <CreateCarComponents />

                </div>

              </div>

            </div>

          </Container>
        </div>

      </PagesWrapper>
    </>
  )
}

export default Create
