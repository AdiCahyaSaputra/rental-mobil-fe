// Lib
import { fakeData, nameToUrlFriendly } from "lib/utils/data"
import { useRouter } from "next/router"

// Components
import Container from "components/reusable/Container"
import ProductCard from "components/reusable/ProductCard"
import Search from "components/reusable/Search"

const ContentSection: React.FC = () => {

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
          {fakeData.map((data, index) => (
            <ProductCard
              key={index}
              name={data.name}
              modelYear={data.modelYear}
              color={data.color}
              owner={data.owner}
              click={() => clickHandler(data.name)}
            />
          ))}
        </div>
      </Container>

    </section>
  )
}

export default ContentSection
