import { FunctionComponent } from "react";

const HiddenLabel: FunctionComponent<{text: string, idFor: string}> = ({text, idFor}) => 
  <label 
    htmlFor={idFor} 
    className='invisible w-px h-px absolute border-none -m-px overflow-hidden p-0'
  >
    {text}
  </label>

export default HiddenLabel

