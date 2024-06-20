import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';


const ProfileImg = ({size, point}:{ size:number, point:number}) => {
  const [color, setcolor] = useState<string>("bronze");

  const colorDecide = (point:number) => {

      {(point >= 300 ) ? setcolor("platinum") 
      : (point >= 200) ? setcolor("gold") 
      : (point >= 100) ? setcolor("silver") 
      : setcolor("bronze")};

   }
   
   useEffect(() => {
    colorDecide(point)
   }, [point])
   

  return (
    <div className={`w-[calc((${size} + 4) * 4px)] h-[calc((${size} + 4) * 4px)] border-4 border-${color} rounded-full`}>
      <Avatar className={`w-${size} h-${size}`} >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default ProfileImg