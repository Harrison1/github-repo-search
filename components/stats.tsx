import { FunctionComponent } from 'react';

const Stat: FunctionComponent<{stat: number, border?: string}> = ({ stat, children, border }) => {
  return (
    <div className='text-center'>
      <div className={`bg-white border-4 ${border ? border : 'border-indigo-400'} rounded-xl overflow-hidden w-16 h-16 mx-auto grid items-center justify-center`}>
        { children }
      </div>
      <p>{stat}</p>
    </div>
  )
}

export default Stat
