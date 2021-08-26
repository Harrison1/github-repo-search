import { FunctionComponent } from 'react'
import Link from 'next/link';
import RepoCard from '../components/repo-card'
import { useSearchContext } from '../context/search-context'

const RepoList: FunctionComponent = () => {
  const { search } = useSearchContext()

  return (
    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
      {search.repos?.map(item => (
        <li key={item.id} className='mb-4 shadow p-4 rounded-3xl bg-white hover:bg-blue-100'>
          <Link href={`/repo/${item.owner.login}/${item.name}`}>
            <a>
              <RepoCard 
                name={item.name}
                language={item.language}
                stars={item.stargazers_count}
                watchers={item.watchers_count}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default RepoList
