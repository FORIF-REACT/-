import { useEffect } from "react";

interface Props {
  label: string;
  count?: number;
}

const tag = ({label, count}:Props) => {
  return (
    <div className='box-border w-24 h-9 p-0.5 rounded-md flex justify-center items-center border-2 border-primary'>
        <p className="text-12 text-primary">
        {label}
        {count ? (<span>     {count}</span>) : <></>}
        </p>
    </div>
  )
    
  
}

export default tag