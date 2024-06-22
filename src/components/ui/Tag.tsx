import { useEffect } from "react";

interface Props {
  label: string;
  count?: number;
  className?: string;
}

const tag = ({label, count, className}:Props) => {
  return (
    <div className='box-border w-24 h-9 p-0.5 rounded-md flex justify-center items-center border-2 border-primary'>
        <p className={`text-12 text-primary ${className}`}>
        {label}
        {count ? (<span>     {count}</span>) : <></>}
        </p>
    </div>
  )
}

export default tag