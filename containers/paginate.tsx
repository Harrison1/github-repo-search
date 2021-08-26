import { FunctionComponent } from 'react'
import ChevronLeft from '../components/icons/chevron-left'
import ChevronRight from '../components/icons/chevron-right'
import { useSearchContext } from '../context/search-context'
import { SearchActionTypes } from '../types'

const Paginate: FunctionComponent = () => {
  const { search, searchDispatch } = useSearchContext()

  const setPageNumber = (current: number, increment: boolean = false, total: number) => {
    let newPage = 0;    
    if (increment && (current < Math.ceil(total/30))) {
      newPage = current+1
    } else if(!increment && current > 1) {
      newPage = current-1
    }

    console.log(newPage)

    searchDispatch({
      type: SearchActionTypes.UpdatePage,
      payload: {
        page: newPage
      }
    })
  }

  return (
    <div className='grid grid-cols-3 gap-2 items-center justify-center w-36'>
      <button
        className='border shadow rounded-2xl p-2 w-12 h-12 flex items-center justify-center bg-white hover:border-black'
        onClick={() => setPageNumber(search.page, false, search.total)}
        disabled={search.page === 1}
      >
        <ChevronLeft />
      </button>
      <p className='text-center text-xl'>{ search.page }</p>
      <button
        className='border shadow rounded-2xl p-2 w-12 h-12 flex items-center justify-center bg-white hover:border-black'
        onClick={() => setPageNumber(search.page, true, search.total)}
        disabled={Math.ceil(search.total/30) === search.page}
      >
        <ChevronRight />
      </button>
    </div>
  )
}

export default Paginate
