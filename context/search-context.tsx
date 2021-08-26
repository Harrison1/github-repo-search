import { createContext, Dispatch, FunctionComponent, useContext, useReducer } from 'react'
import { Search, SearchActions, SearchActionTypes, SortCategories, SortOrder } from '../types'

const initialState: Search = {
  searchText: '',
  language: '',
  searchCategory: SortCategories.best,
  order: SortOrder.desc,
  page: 1,
  total: 0,
  repos: []
}

const SearchContext = createContext<{
  search: Search
  searchDispatch: Dispatch<SearchActions>
}>({
  search: initialState,
  searchDispatch: () => null
});

const reducer = (state = initialState, action: SearchActions): Search => {
  switch(action.type) {
    case SearchActionTypes.UpdateSearchText:
      return {
        ...state,
        searchText: action.payload.searchText,
        page: 1
      }
    case SearchActionTypes.UpdateRepos:
      return {
        ...state,
        repos: action.payload.repos,
        total: action.payload.total
      }
    case SearchActionTypes.UpdatePage:
      return {
        ...state,
        page: action.payload.page
      }
    default:
      return initialState
  }
}

export const SearchWrapper: FunctionComponent = ({ children }) => {
  const [search, searchDispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={{search, searchDispatch}}>
      { children }
    </SearchContext.Provider>
  );
};

export function useSearchContext() {
  return useContext(SearchContext)
}
