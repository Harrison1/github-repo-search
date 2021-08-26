import { FunctionComponent } from 'react';
import Stats from './stats'
import Eye from './icons/eye'
import Star from './icons/star'
import { RepoCardProps } from '../types';
import LanguageImage from './language-image';

const RepoCard: FunctionComponent<RepoCardProps> = ({ name = '', language = '', stars = 0, watchers = 0 }) =>
  <article>
    <h3 className='text-2xl font-bold border-b h-20'>{name}</h3>
    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 mt-4'>
      <LanguageImage language={language} />
      <Stats stat={stars}>
        <Star size='44' fill='#FDE68A' strokeWidth='1' stroke='#A5B4FC' />
      </Stats>
      <Stats stat={watchers} border='border-pink-600'>
        <Eye size='44' />
      </Stats>
    </div>
  </article>

export default RepoCard
