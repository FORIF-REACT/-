import SideMenu from '@/components/Profile/SideMenu'
import ProfileComponent from '@/components/Profile/ProfileComponent'
import Footer from '@/components/ui/Footer'

const MyProfile = () => {
  return (
    <>
        <div className='w-672 mx-auto mt-100 mb-200 flex justify-between'>
          <div className='w-36 flex flex-col items-center'>
            <h1 className='w-40 text-36 text-center h1 mb-3'>내 프로필</h1>
            <SideMenu menu1="기본 정보 수정" path1="basicmodify" menu2="멘토 정보 수정" path2="mentormodify" />
          </div>
            <ProfileComponent />
        </div>

    </>
  )
}

export default MyProfile