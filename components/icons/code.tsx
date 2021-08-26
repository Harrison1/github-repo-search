import { FunctionComponent } from 'react'
import { SVGProps } from '../../types'

const Code: FunctionComponent<SVGProps> = ({ size = '24', fill = 'none', stroke = 'currentColor', strokeWidth = '2' }) =>
  <svg 
    xmlns='http://www.w3.org/2000/svg' 
    width={ size } 
    height={ size } 
    viewBox='0 0 24 24' 
    fill={ fill } 
    stroke={ stroke } 
    strokeWidth={ strokeWidth } 
    strokeLinecap='round' 
    strokeLinejoin='round'
  >
    <polyline points='16 18 22 12 16 6' />
    <polyline points='8 6 2 12 8 18' />
  </svg>

export default Code
