import BigProfileImage from '@/components/Profile/BigProfileImage';
import SmallProfileImage from '@/components/Profile/SmallProfileImage';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/navbar';
import { PiNotePencilBold, PiStudentDuotone, PiChalkboardTeacher } from "react-icons/pi";

 
const Main = () => {
  return (
    <>
      <Navbar />
      <div className='w-page mx-auto my-240'>

        <div className=' w-960 h-auto mx-auto mb-360 flex justify-between items-center '>
          <div>
            <p className='text-20 text-placeholder'>한양대 학생들의 학점을 책임지는</p>
            <h1 className='text-60 font-bold font-logo my-6'>University manitto</h1>
            <p className='text-20 leading-28'>원하는 과목의 멘토님께 과외 신청을 해보고,</p>
            <p className='text-20 leading-28'>멘토가 되어 수업을 개설해 보세요.</p>
          </div>
          <PiNotePencilBold size={160}/>
        </div>

        <div className='w-full mx-auto mb-360'>
          <div className='w-[500px] h-auto mx-auto mb-10 flex justify-between'>
            <PiStudentDuotone size={200} />
            <PiChalkboardTeacher size={200} />
          </div>
          <p className='w-full h-auto text-center text-36'>회원가입 시 <strong>멘티</strong>, 수업 개설 시 <strong>멘토와 멘티</strong> 모두 가능!</p>
        </div>

        <div className='w-800 mx-auto mb-360' >
          <h2 className='h2 text-end'>멘토 랭킹</h2>
          <p className='pt-2 text-20 text-end mb-20'>포인트를 많이 획득할수록 순위가 높아집니다!</p>
          <div className='w-full flex justify-between items-end'>
            <div className='w-52'>
              <p className='text-56 text-center text-silver font-semibold'>2</p>
              <div className='w-full py-5 border-2 border-silver rounded-md'>
                <SmallProfileImage />
                <p className='text-20 text-center mt-5 mb-16'>닉네임</p>
                <p className='text-20 text-center'>2000P</p>
              </div>
            </div>
            <div className='w-60'>
              <p className='text-56 text-center text-gold font-semibold'>1</p>
              <div className='w-full py-5 border-2 border-gold rounded-md'>
                <BigProfileImage />
                <p className='text-20 text-center mt-5 mb-24'>닉네임</p>
                <p className='text-20 text-center'>2000P</p>
              </div>
            </div>
            <div className='w-52'>
              <p className='text-56 text-center text-bronze font-semibold'>3</p>
              <div className='w-full py-5 border-2 border-bronze rounded-md'>
                <SmallProfileImage />
                <p className='text-20 text-center mt-5 mb-16'>닉네임</p>
                <p className='text-20 text-center'>2000P</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-800 mx-auto mb-360' >
          <h2 className='h2'>과외 신청하기</h2>
          <p className='pt-2 text-20 mb-20'>훌륭한 멘토님들을 살펴보고 과외 신청을 해보세요!</p>
          <div>
            <div className='h-10 bg-slate-400 rotate-45'></div>
          </div>
          <div className='w-full flex justify-between items-end'>
              <div className='w-52 py-5 border-2 border-silver rounded-md'>
                <SmallProfileImage />
                <p className='text-20 text-center mt-5 mb-16'>닉네임</p>
                <p className='text-20 text-center'>2000P</p>
              </div>
              <div className='w-60 py-5 border-2 border-gold rounded-md'>
                <BigProfileImage />
                <p className='text-20 text-center mt-5 mb-24'>닉네임</p>
                <p className='text-20 text-center'>2000P</p>
              </div>
              <div className='w-52 py-5 border-2 border-bronze rounded-md'>
                <SmallProfileImage />
                <p className='text-20 text-center mt-5 mb-16'>닉네임</p>
                <p className='text-20 text-center'>2000P</p>
              </div>

          </div>
        </div>

      </div>

      <Footer />

    </>
  )
}

export default Main