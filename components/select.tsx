import { FunctionComponent } from 'react'

const Select: FunctionComponent<{ name: string, id: string, onChange: Function }> = ({ children, name, id, onChange }) => 
  <select 
    name={name}
    id={id}
    className='block border w-full p-4 rounded-full text-xl focus:outline-none focus:ring focus:border-blue-300'
    onChange={(e) => onChange(e.target.value)}
  >
    { children }
  </select>

export default Select
