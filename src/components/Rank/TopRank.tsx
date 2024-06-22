import ProfileComponent from "@/components/Profile/ProfileComponent";
import ProfileImg from "@/components/Profile/ProfileImg";



import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/Dialog"


interface ProfileProps {
  username: string;
  point: number;
  imagesize: number;
}


const TopRank = ({ username, point,imagesize }:ProfileProps) => {
  return (
    <Dialog>
      <div className="w-full flex flex-col items-center gap-5">
        <DialogTrigger >
          <ProfileImg size={imagesize} point={point}  />
        </DialogTrigger>
        <DialogTrigger>
          <p className='text-20 text-center text-darkgray'>{username}</p>
        </DialogTrigger>
      </div>
      <DialogContent className='w-[550px]'>
        <div className="mt-4 mb-4">
          <ProfileComponent />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TopRank;