import { FunctionComponent } from 'react';
import { Langs } from '../types';

const LanguageImage: FunctionComponent<{language: string, displayText?: boolean}> = ({ language, displayText = true }) => {

  const imageSrc = (lang: string) => {
    switch (lang) {
      case Langs.assembly:
        return '/languages/assembly.png'
      case Langs.c:
        return '/languages/c.png'
      case Langs.cpp:
        return '/languages/cpp.png'
      case Langs.csharp:
        return '/languages/c-sharp.png'
      case Langs.go:
        return '/languages/go.png'
      case Langs.html:
        return '/languages/html.png'
      case Langs.java:
        return '/languages/html.png'
      case Langs.js:
        return '/languages/js.png'
      case Langs.php:
        return '/languages/php.png'
      case Langs.python:
        return '/languages/python.png'
      case Langs.rust:
        return '/languages/rust.png'
      case Langs.swift:
        return '/languages/swift.png'
      case Langs.ts:
        return '/languages/ts.png'
      default:
        return '/languages/code.png'
    }
  }

  return (
    <div className='text-center'>
      <div className='bg-white border-4 border-blue-400 rounded-xl overflow-hidden w-16 h-16 mx-auto'>
        <img src={imageSrc(language)} alt={`${language} logo`} />
      </div>
      {displayText && <p>{language}</p> }
    </div>
  )
}

export default LanguageImage
