import { FunctionComponent } from 'react'
import { SVGProps } from '../../types'

const GitMerge: FunctionComponent<SVGProps> = ({ size = '24', fill = 'none', stroke = 'currentColor', strokeWidth = '2' }) =>
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
    <circle cx='18' cy='18' r='3' />
    <circle cx='6' cy='6' r='3' />
    <path d='M6 21V9a9 9 0 0 0 9 9' />
  </svg>

export default GitMerge
