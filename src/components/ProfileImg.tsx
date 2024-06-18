import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';


const ProfileImg = ({border, size, point}:{border: number, size:number, point:number}) => {
  const [color, setcolor] = useState<string>("");

  const colorDecide = (point:number) => {
    {(point <= 100) ? setcolor("bronze") : (point <= 200) ? setcolor("silver") : (point <= 300) ? setcolor("gold") : setcolor("platinum")}
   }
   
   useEffect(() => {

    colorDecide(point)

   }, [point])
   

  return (
    <div className={`w-[calc((${size}+4) * 4px)] h-[calc((${size}+4) * 4px)] border-${border} border-${color} rounded-full`}>
      <Avatar className={`w-${size} h-${size}`} >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default ProfileImg