import { FunctionComponent } from 'react'
import Select from '../components/select'
import { SearchActionTypes, Sort, SortCategories, SortOrder } from '../types'
import HiddenLabel from '../components/hidden-label'
import { useSearchContext } from '../context/search-context'

const SortResults: FunctionComponent = () => {
  const { searchDispatch } = useSearchContext()

  const handleSelectSort = (value) => {
    switch (value) {
      case Sort.best:
        searchDispatch({
          type: SearchActionTypes.UpdateSort,
          payload: {
            sort: Sort.best,
            order: SortOrder.desc,
            searchCategory: SortCategories.best
          }
        })
        return;
      case Sort.mostStars:
        searchDispatch({
          type: SearchActionTypes.UpdateSort,
          payload: {
            sort: Sort.mostStars,
            order: SortOrder.desc,
            searchCategory: SortCategories.stars
          }
        })
        return;
      case Sort.fewestStars:
        searchDispatch({
          type: SearchActionTypes.UpdateSort,
          payload: {
            sort: Sort.fewestStars,
            order: SortOrder.asc,
            searchCategory: SortCategories.stars
          }
        })
        return;
      default:
        searchDispatch({
          type: SearchActionTypes.UpdateSort,
          payload: {
            sort: Sort.best,
            order: SortOrder.desc,
            searchCategory: SortCategories.best
          }
        })
    }
  }

  return (
    <div className='w-full md:w-1/2'>
      <HiddenLabel 
        text='Sort'
        idFor='sort-by'
      />
      <Select
        name='sort-by' 
        id='sort-by' 
        onChange={handleSelectSort}
      >
        <option value={Sort.best}>{ Sort.best }</option>
        <option value={Sort.mostStars}>{ Sort.mostStars }</option>
        <option value={Sort.fewestStars}>{ Sort.fewestStars }</option>
      </Select>
    </div>
  )
}


export default SortResults
