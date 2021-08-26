import { FunctionComponent, useEffect, useState } from 'react'
import Paginate from './paginate'
import RepoList from './repo-list'
import useDebounce from './use-debounce'
import Select from '../components/select'
import InputText from '../components/input-text'
import HiddenLabel from '../components/hidden-label'
import SearchInfoText from '../components/search-info-text'
import { useSearchContext } from '../context/search-context'
import { SearchActionTypes, Sort, SortCategories, SortOrder } from '../types'

const languages = ['Assembly', 'C', 'CSS', 'C++', 'C#', 'GO', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'PHP', 'Python', 'Rust', 'Swift', 'TypeScript']

const Search: FunctionComponent = () => {
  const { search, searchDispatch } = useSearchContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState<boolean>(false)

  const [sort, setSort] = useState<Sort>(Sort.best)
  const [language, setLanguage] = useState<string>('')
  const [order, setOrder] = useState<SortOrder>(SortOrder.desc)
  const [sortCategory, setSortCategory] = useState<SortCategories>(SortCategories.best)

  const debouncedLanguage = useDebounce(language, 500);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

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
        fetchRepos(debouncedSearchTerm, sortCategory, order, search.page, debouncedLanguage)
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
    [debouncedSearchTerm, sort, order, debouncedLanguage, search.page]
  );

  const handleSelectSort = (value) => {
    switch (value) {
      case Sort.best:
        setSort(Sort.best)
        setSortCategory(SortCategories.best)
        setOrder(SortOrder.desc)
        return;
      case Sort.mostStars:
        setSort(Sort.mostStars)
        setSortCategory(SortCategories.stars)
        setOrder(SortOrder.desc)
        return;
      case Sort.fewestStars:
        setSort(Sort.fewestStars)
        setSortCategory(SortCategories.stars)
        setOrder(SortOrder.asc)
        return;
      default:
        setSort(Sort.best)
        setSortCategory(SortCategories.best)
        setOrder(SortOrder.desc)
    }
  }

  const setQueryTerm = (value) => {
    setSearchTerm(value)
  }

  const setLanguageValue = (value) => {
    setLanguage(value)
  }

  return (
    <div>
      <HiddenLabel 
        text='Search'
        idFor='repo-search'
      />

      <InputText
        id='repo-search'
        placeholder='Search'
        value={searchTerm}
        onChange={setQueryTerm}
        autoFocus
      />

      <div className='grid md:grid-cols-2 gap-4 mt-4'>

        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <HiddenLabel 
              text='Language'
              idFor='repo-language'
            />
            <InputText
              id='repo-language'
              placeholder='Language'
              value={language}
              onChange={setLanguageValue}
              small
            />
          </div>
          <div>
            <HiddenLabel 
              text='Choose a popular language'
              idFor='select-language'
            />
            <Select
              name='select-language' 
              id='select-language' 
              onChange={setLanguageValue}
            >
              <option value='' className='text-gray-500'>Select a Language</option>
              {languages.map((item, index) => (
                <option key={index} value={item}>{ item }</option>
              ))}
            </Select>
          </div>

        </div>

        <div className='md:flex md:justify-between items-center w-full'>

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

          <div className='flex justify-center mt-4 md:mt-0'>
            <Paginate />
          </div>
        
        </div>

      </div>

      {search.repos?.length > 0 && !loading &&
        <RepoList />
      }
      {search.repos?.length === 0 && searchTerm && !loading &&
        <SearchInfoText
          text='No Results Found'
        />
      }
      {search.repos?.length === 0 && !searchTerm && !loading &&
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
