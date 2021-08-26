import { FunctionComponent, useEffect, useState } from 'react'
import Paginate from './paginate'
import RepoList from './repo-list'
import SearchBar from './search-bar'
import useDebounce from './use-debounce'
import SortResults from './sort-results'
import { SearchActionTypes } from '../types'
import SearchLanguages from './search-languages'
import SearchInfoText from '../components/search-info-text'
import { useSearchContext } from '../context/search-context'


const Search: FunctionComponent = () => {
  const { search, searchDispatch } = useSearchContext()
  const [loading, setLoading] = useState<boolean>(false)

  const debouncedLanguage = useDebounce(search.language, 500)
  const debouncedSearchTerm = useDebounce(search.searchText, 500)

  const fetchRepos = async (q: string = '', sort = 'best match', order = 'desc', page = 1, language = '') => {
    setLoading(true);
    return fetch(`https://api.github.com/search/repositories?q=${q}+language:${encodeURIComponent(language.toLowerCase())}&sort=${sort}&order=${order}&page=${page}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
    .then(res => res.json())
    .then(data => {
      searchDispatch({
        type: SearchActionTypes.UpdateRepos,
        payload: {
          repos: data.items ,
          total: data.total_count
        }
      })
      setLoading(false)
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    })
  }

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        fetchRepos(debouncedSearchTerm, search.searchCategory, search.order, search.page, debouncedLanguage)
      } else {
        searchDispatch({
          type: SearchActionTypes.UpdateRepos,
          payload: {
            repos: [],
            total: 0
          }
        })
      }
    },
    [debouncedSearchTerm, search.sort, search.order, debouncedLanguage, search.page]
  );

  const setQueryTerm = (value) => {
    searchDispatch({
      type: SearchActionTypes.UpdateSearchText,
      payload: {
        searchText: value
      }
    })
  }

  const setLanguageValue = (value) => {
    searchDispatch({
      type: SearchActionTypes.UpdateLanguage,
      payload: {
        language: value
      }
    })
  }

  return (
    <div>

      <SearchBar 
        searchText={search.searchText}
        setQueryText={setQueryTerm}
      />

      <div className='grid md:grid-cols-2 gap-4 mt-4'>

        <SearchLanguages 
          language={search.language}
          setLanguageValue={setLanguageValue}
        />

        <div className='md:flex md:justify-between items-center w-full'>

          <SortResults />

          <div className='flex justify-center mt-4 md:mt-0'>
            <Paginate />
          </div>
        
        </div>

      </div>

      {search.repos?.length > 0 && !loading &&
        <RepoList />
      }
      {search.repos?.length === 0 && search.searchText && !loading &&
        <SearchInfoText
          text='No Results Found'
        />
      }
      {search.repos?.length === 0 && !search.searchText && !loading &&
        <SearchInfoText
          text='Search For Some Repos'
        />
      }
      {search.repos === undefined &&
        <SearchInfoText
          text='The api is hot, give it a minute to cool down'
        />
      }
      {loading &&
        <SearchInfoText
          text='Loading ...'
        />
      }
    </div>
  )
}

export default Search
