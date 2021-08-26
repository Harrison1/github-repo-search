import Head from 'next/head'
import Repo from '../../../containers/repo'

const Home = () =>
  <div>
    <Head>
      <title>Repo Page</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Repo />
  </div>

export default Home
