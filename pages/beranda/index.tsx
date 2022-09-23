// Lib
import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { fakeData, nameToUrlFriendly } from "lib/utils/data"
import { middlewarePartDua } from "lib/utils/auth"

// Components
import Search from "components/reusable/Search"
import Container from "components/reusable/Container"
import ProductCard from "components/reusable/ProductCard"
import PagesWrapper from "components/reusable/PagesWrapper"
import { useRouter } from "next/router"

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token } = ctx.req.cookies

  middlewarePartDua(token)

  return {
    props: {
      token: token ?? null
    }
  }

}


type Props = {
  token: string | null
}

const BerandaHome: NextPage<Props> = ({ token }) => {

  const router = useRouter()

  const clickHandler = (name: string) => {

    const urlFriendly = nameToUrlFriendly(name)
    return router.push('/car/' + urlFriendly)

  }

  return (
    <>
      <Head>
        <title>Beranda</title>
      </Head>

      <PagesWrapper token={token}>

        <div className="py-4 bg-white/60 backdrop-blur-md shadow-md shadow-white/60 sticky top-12 inset-x-0">
          <Search />
        </div>

        <Container>
          <div className="mt-14">

            <div className="grid grid-cols-12 gap-4">

              {fakeData.map((data, index: number) => (
                <ProductCard
                  name={data.name}
                  modelYear={data.modelYear}
                  color={data.color}
                  owner={data.owner}
                  key={index}
                  click={() => clickHandler(data.name)}
                />
              ))}

            </div>

          </div>
        </Container>

      </PagesWrapper>

    </>
  )
}

export default BerandaHome
