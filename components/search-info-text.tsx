import { FunctionComponent } from 'react'

const SearchInfoText: FunctionComponent<{ text: string }> = ({ text }) => 
  <p className='text-center text-xl mt-4'>
    { text }
  </p>

export default SearchInfoText
