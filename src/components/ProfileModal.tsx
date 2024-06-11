import ProfileComponent from "@/components/Profile/ProfileComponent"


const ProfileModal = () => {
  return (
    <div className="w-screen h-screen fixed flex justify-center items-center bg-black/40">

      <div className="px-8 pt-6 pb-8 relative bg-white rounded-md ">
        <div className="mb-3">
          <span className="absolute top-2 right-3">X</span>
        </div>
        <ProfileComponent />
      </div> 

    </div>

  )
}

export default ProfileModal