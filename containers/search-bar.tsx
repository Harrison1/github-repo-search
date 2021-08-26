import { FunctionComponent } from 'react'
import InputText from '../components/input-text'
import HiddenLabel from '../components/hidden-label'

const SearchBar: FunctionComponent<{ searchText: string, setQueryText: Function }> = ( { searchText, setQueryText} ) =>
  <div>
    <HiddenLabel 
      text='Search'
      idFor='repo-search'
    />

    <InputText
      id='repo-search'
      placeholder='Search'
      value={searchText}
      onChange={setQueryText}
      autoFocus
    />
  </div>

export default SearchBar
