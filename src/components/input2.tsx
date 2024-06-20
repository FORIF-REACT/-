import { focusState } from '@/Atoms'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const input2 = ({label, placeholder}: {label: string, placeholder: string}) => {
const [focus, setfocus] = useState<boolean>(false)
const [borderColor, setborderColor] = useState<string>("slate-400")

const focusDecide = () => {
  setfocus(true)
}
const blurDecide = () => {
  setfocus(false)
}

useEffect(() => {
  {(focus) ? setborderColor("primary") : setborderColor("slate-400")}

  return () => {
    setborderColor("slate-400")
  }
}, [focus])

  return (
    <form className={`my-4 px-6 py-1.5 rounded-lg border-${borderColor} border-2 flex items-center gap-2`}>
      <label htmlFor={label} className='w-28 text-start font-medium text-12 text-[#44475D] leading-20'>{label}</label>
      <input 
        type='text' 
        id={label} 
        placeholder={placeholder} 
        className='w-228 h-6 px-2 text-12 border-1 border-gray-300 rounded-md outline-none focus:border-primary focus:border-2' 
        onFocus={() => focusDecide()}
        onBlur={() => blurDecide()}
        />
    </form>
  )
}

export default input2