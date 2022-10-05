// Lib
import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { getCars } from "lib/utils/api"
import { nameToUrlFriendly } from "lib/utils/stringHelper"

// Components
import Search from "components/reusable/global/Search"
import Container from "components/reusable/global/Container"
import ProductCard from "components/reusable/beranda/ProductCard"
import PagesWrapper from "components/reusable/global/PagesWrapper"

// Interface
import CarItemInterface from "lib/interface/CarItemInterface"

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { token, role } = ctx.req.cookies

  const response = await getCars()

  return {
    props: {
      token: token ?? null,
      data: response.data.data,
      role: role ?? null
    }
  }

}

type Props = {
  token: string | null,
  role: string | null,
  data: CarItemInterface[],
}

const BerandaHome: NextPage<Props> = ({ token, role, data }) => {

  const router = useRouter()

  const clickHandler = (brandCar: string, id: number) => {

    const urlFriendly = nameToUrlFriendly(brandCar)
    return router.push({
      pathname: '/car/' + urlFriendly,
      query: { id }
    })

  }

  return (
    <>
      <Head>
        <title>Beranda</title>
      </Head>

      <PagesWrapper token={token} role={role!}>

        <div className="py-4 bg-white/60 backdrop-blur-md shadow-md shadow-white/60 sticky top-12 inset-x-0">
          <Search />
        </div>

        <Container>
          <div className="mt-14">

            <div className="grid grid-cols-12 gap-4">

              {data.map((car) => (
                <ProductCard
                  data={car}
                  key={car.id}
                  click={() => clickHandler(car.brand_car, car.id!)}
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
