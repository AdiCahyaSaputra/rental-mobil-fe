// Lib
import ProductItemInterface from "lib/interface/ProductItemInterface"

// Components
import Container from "components/reusable/Container"
import ProductCard from "components/reusable/ProductCard"

// Icons
import SearchIcon from '../../asset/svg/search.svg'

const fakeData: ProductItemInterface[] = [

  { name: 'Toyota', modelYear: '2022', color: 'Merah', owner: 'John Doe' },
  { name: 'Daihatsu', modelYear: '1996', color: 'Hijau', owner: 'Mark Hill' },
  { name: 'Jeep', modelYear: '2013', color: 'Biru', owner: 'Amanda Rose' },
  { name: 'Mustibisa', modelYear: '2006', color: 'Kuning', owner: 'Jamal Eron' },
  { name: 'Hyundai', modelYear: '1987', color: 'Hitam', owner: 'George Ben' },
  { name: 'Isuzu', modelYear: '1999', color: 'Pink', owner: 'Natalie Fang' },
  { name: 'Kawasaki', modelYear: '2017', color: 'Coklat', owner: 'Marry Noe' },
  { name: 'Nissan', modelYear: '2001', color: 'Abu-Abu', owner: 'Gary Peter' },

]

const ContentSection: React.FC = () => {

  return (
    <section className="min-h-screen">

      <div className="sticky top-12 py-4">

        <div className="-z-10 absolute top-0 inset-x-0 h-1/2 bg-black"></div>

        <Container>
          <div className="flex justify-center items-center">

            <input
              type="text"
              className="py-1.5 px-3 w-10/12 md:w-8/12 outline-none shadow-md bg-white"
              placeholder="Cari merek mobil"
              onFocus={(e) => e.target.focus({ preventScroll: true })}
            />
            <button className="p-1.5 bg-white shadow-md">
              <SearchIcon className='w-6 p-1 aspect-square'/>
            </button>

          </div>
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
            />
          ))}
        </div>
      </Container>

    </section>
  )
}

export default ContentSection
