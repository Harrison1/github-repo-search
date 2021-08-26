import Head from 'next/head'
import Search from '../containers/search'
import { SearchWrapper } from '../context/search-context'

const Home = () =>
  <div>
    <Head>
      <title>Github Repo Search</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <SearchWrapper>
      <Search />
    </SearchWrapper>
  </div>

export default Home
