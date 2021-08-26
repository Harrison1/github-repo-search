import { FunctionComponent } from 'react'
import { SVGProps } from '../../types'

const Eye: FunctionComponent<SVGProps> = ({ size = '24', fill = 'none', stroke = 'currentColor', strokeWidth = '2' }) =>
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
    <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
    <circle cx='12' cy='12' r='3' />
  </svg>

export default Eye
