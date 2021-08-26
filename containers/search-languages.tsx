import { FunctionComponent } from 'react'
import Select from '../components/select'
import InputText from '../components/input-text'
import HiddenLabel from '../components/hidden-label'

const popularLanguages = ['Assembly', 'C', 'CSS', 'C++', 'C#', 'GO', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'PHP', 'Python', 'Rust', 'Swift', 'TypeScript']

const SearchLanguages: FunctionComponent<{ language: string, setLanguageValue: Function }> = ( { language, setLanguageValue } ) =>
  <div className='grid md:grid-cols-2 gap-4'>
    <div>
      <HiddenLabel 
        text='Language'
        idFor='repo-language'
      />
      <InputText
        id='repo-language'
        placeholder='Language'
        value={language}
        onChange={setLanguageValue}
        small
      />
    </div>
    <div>
      <HiddenLabel 
        text='Choose a popular language'
        idFor='select-language'
      />
      <Select
        name='select-language' 
        id='select-language' 
        onChange={setLanguageValue}
      >
        <option value='' className='text-gray-500'>Select a Language</option>
        {popularLanguages.map((item, index) => (
          <option key={index} value={item}>{ item }</option>
        ))}
      </Select>
    </div>
  </div>

export default SearchLanguages
