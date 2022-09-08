// Components
import Container from "components/reusable/Container"

// Icons
import SearchIcon from '../../asset/svg/search.svg'

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
              <SearchIcon />
            </button>

          </div>
        </Container>

      </div>

    </section>
  )
}

export default ContentSection
