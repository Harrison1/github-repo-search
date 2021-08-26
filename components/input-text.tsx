import { FunctionComponent } from 'react'
import { InputTextProps } from '../types'

const InputText: FunctionComponent<InputTextProps> = ({ id, placeholder, value, onChange, autoFocus = false, small = false }) => 
  <input 
    id={ id }
    className={`block border rounded-full w-full p-4 ${small ? 'text-xl' : 'text-4xl'} text-center focus:outline-none focus:ring focus:border-blue-300`}
    type='text'
    placeholder={ placeholder }
    value={value}
    onChange={(e) => onChange(e.target.value)}
    autoFocus={ autoFocus }
  />

export default InputText
