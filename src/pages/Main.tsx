import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/navbar'
import { PiNotePencilBold, PiStudentDuotone, PiChalkboardTeacher } from "react-icons/pi";


import React from 'react'

const Main = () => {
  return (
    <>
      <Navbar />
      <div className='w-page mx-auto my-240'>
        <div className=' w-[960px] h-auto mx-auto mb-360 flex justify-between items-center '>
          <div>
            <p className='text-20 text-placeholder'>한양대 학생들의 학점을 책임지는</p>
            <h1 className='text-60 font-logo font-bold my-6'>University manitto</h1>
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
      </div>
      <Footer />
    </>
  )
}

export default Main