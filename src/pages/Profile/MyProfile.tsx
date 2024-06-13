import SideMenu from '@/components/ui/SideMenu'
import ProfileComponent from '@/components/Profile/ProfileComponent'
import Footer from '@/components/ui/Footer'

const MyProfile = () => {
  return (
    <>
        <div className='w-672 mx-auto mt-100 mb-200 flex justify-between'>
          <div className='w-36 flex flex-col items-center'>
            <h1 className='text-36 h1 mb-3'>내 프로필</h1>
            <SideMenu menu1="기본 정보 수정" path1="basicmodify" menu2="멘토 정보 수정" path2="mentormodify" />
          </div>
            <ProfileComponent />
        </div>
      <Footer />
    </>
  )
}

export default MyProfile