import { FunctionComponent } from 'react'
import { SVGProps } from '../../types'

const ChevronRight: FunctionComponent<SVGProps> = ({ size = '24', fill = 'none', stroke = 'currentColor', strokeWidth = '2' }) =>
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
    <polyline points='9 18 15 12 9 6' />
  </svg>

export default ChevronRight
