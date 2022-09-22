// Icons
import SearchIcon from '../../asset/svg/search.svg'

const Search: React.FC = () => {
  return (
    <div className="flex justify-center items-center">

      <input
        type="text"
        className="py-1.5 px-3 w-10/12 md:w-8/12 outline-none shadow-md bg-white"
        placeholder="Cari merek mobil"
      />
      <button className="p-1.5 bg-white shadow-md">
        <SearchIcon className='w-6 p-1 aspect-square' />
      </button>

    </div>
  )
}

export default Search
