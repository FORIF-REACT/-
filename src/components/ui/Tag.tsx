import React from 'react'
interface props {
  label: string;
  count?: number;
}

const tag = ({label, count}:props) => {
  return (
    <div className='box-border w-24 h-9 py-3 text-12 text-center font-sans text-primary rounded-md border-primary border-2'>
      {label}
      {count ? (count) : <></>}
    </div>
  )
}

export default tag