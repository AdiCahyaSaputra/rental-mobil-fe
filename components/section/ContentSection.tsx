// Lib
import { nameToUrlFriendly } from "lib/utils/stringHelper"
import { useRouter } from "next/router"

// Components
import Container from "components/reusable/Container"
import ProductCard from "components/reusable/ProductCard"
import Search from "components/reusable/Search"

// Interface
import CarItemInterface from "lib/interface/CarItemInterface"

type Props = {
  data: CarItemInterface[]
}

const ContentSection: React.FC<Props> = ({ data }) => {

  const router = useRouter()

  const clickHandler = (name: string) => {

    const urlFriendly = nameToUrlFriendly(name)
    return router.push('/car/' + urlFriendly)

  }

  return (
    <section className="min-h-screen">

      <div className="sticky top-12 py-4">

        <div className="-z-10 absolute top-0 inset-x-0 h-1/2 bg-black"></div>

        <Container>
          <Search />
        </Container>

      </div>

      <Container>
        <div className="grid grid-cols-12 gap-4 pb-20">
          {data.map((car) => (
            <ProductCard
              key={car.id}
              data={car}
              click={() => clickHandler(car.brand_car)}
            />
          ))}
        </div>
      </Container>

    </section>
  )
}

export default ContentSection
