import { FunctionComponent } from 'react';
import Header from './header'

const Layout: FunctionComponent = ({ children }) => 
  <div>
    <Header />
    <main className='min-h-screen p-4 bg-gray-100'>
      <div className='max-w-screen-2xl mx-auto'>
        { children }
      </div>
    </main>
  </div>

export default Layout
