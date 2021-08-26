import { FunctionComponent } from 'react'
import { SVGProps } from '../../types'

const ArrowLeft: FunctionComponent<SVGProps> = ({ size = '24', fill = 'none', stroke = 'currentColor', strokeWidth = '2' }) =>
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
    <line x1='19' y1='12' x2='5' y2='12' />
    <polyline points='12 19 5 12 12 5' />
  </svg>

export default ArrowLeft
