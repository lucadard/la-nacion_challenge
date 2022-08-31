import { SearchIcon } from '../assets/Icons'
import Button from './Button'

type Props = {
  active: boolean
  toggleActive?: () => void
}

const Search = ({ active = false, toggleActive }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="flex h-full w-full border border-black border-opacity-30 rounded-sm items-center justify-between">
        <input
          className={`h-full w-full pl-2 transition-all duration-300 outline-none`}
          style={active ? { width: '25rem' } : { width: '15rem' }}
          type="text"
          placeholder="Buscar"
          onFocus={toggleActive}
          onBlur={toggleActive}
        />
        <div
          className={`transition-all px-2 ${
            active ? 'opacity-0 duration-100' : 'duration-300 delay-300'
          }`}
        >
          <SearchIcon />
        </div>
      </div>
      <div
        className={`transition-all ${
          active ? 'duration-300 delay-300' : 'opacity-0 duration-100'
        }`}
      >
        <Button type="blue">
          <span className="text-white p-4">buscar</span>
        </Button>
      </div>
    </div>
  )
}

export default Search
