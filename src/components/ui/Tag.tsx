import { useEffect } from "react";

interface Props {
  label: string;
  count?: number;
}

const tag = ({label, count}:Props) => {
  return (
    <div className='box-border w-24 h-9 p-0.5 rounded-md bg-gradient-to-r from-primary via-blue-500 to-primary'>
      <div className="w-full h-full bg-white rounded-md  flex justify-center items-center">
        <p className="text-12 bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
        {label}
        {count ? (<span>     {count}</span>) : <></>}
        </p>
      </div>
      
    </div>
  )
    
  
}

export default tag