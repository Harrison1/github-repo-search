import { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RepoStateProps } from '../types'
import Eye from '../components/icons/eye'
import Code from '../components/icons/code'
import Star from '../components/icons/star'
import GitMerge from '../components/icons/git-merge'
import LanguageImage from '../components/language-image'
import ArrowLeft from '../components/icons/arrow-left'

const initialRepoState = {
  name: 'Galaxy',
  stars: 0,
  watchers: 0,
  language: '',
  url: '',
  forks: 0
}

const Repo: FunctionComponent = () => {
  const router = useRouter()
  const { login, name } = router.query
  const [repo, setRepo] = useState<RepoStateProps>(initialRepoState)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchRepo = async (login: string, name: string) => {
    setLoading(true);
    return fetch(`https://api.github.com/repos/${login}/${name}`, {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setRepo({ 
        name: data.name,
        stars: data.stargazers_count,
        watchers: data.watchers_count,
        language: data.language,
        url: data.html_url,
        forks: data.forks
      })
      setLoading(false)
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    })
  }

  useEffect(() => {
    if (!login || !name) { return; }
    fetchRepo(login, name)
  }, [login, name])

  return (
    <div>
      <div className='mb-8'>
        <Link href='/'>
          <a className='inline-block border border-indigo-500 rounded-xl p-2 text-xl hover:bg-blue-100'>
            <ArrowLeft />
          </a>
        </Link>
      </div>

      <div className='flex items-center'>
        <LanguageImage language={repo.language} displayText={ false } />
        <h1 className='text-4xl font-bold ml-4'>{repo.name}</h1>
      </div>
      <p className='flex items-center my-4'><span className='inline-block mr-4'><Star strokeWidth='1' /></span> <strong>Stars</strong>: {repo.stars}</p>
      <p className='flex items-center my-4'><span className='inline-block mr-4'><Eye strokeWidth='1' /></span> <strong>Watchers</strong>: {repo.watchers}</p>
      <p className='flex items-center my-4'><span className='inline-block mr-4'><Code strokeWidth='1' /></span> <strong>Language</strong>: {repo.language}</p>
      <p className='flex items-center my-4'><span className='inline-block mr-4'><GitMerge strokeWidth='1' /></span> <strong>Forks</strong>: {repo.forks}</p>
      <a href={repo.url} className='inline-block border p-4 border-indigo-500 rounded-xl mt-4 hover:bg-indigo-300'>Click Here to View the Repo on GitHub</a>
    </div>  
  )
}

export default Repo
