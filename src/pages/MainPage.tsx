import { PiNotePencilBold, PiStudentDuotone, PiChalkboardTeacher } from "react-icons/pi";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/Dialog"
import ProfileComponent from "@/components/Profile/ProfileComponent";
import ProfileImg from "@/components/ProfileImg";


import React, { Component } from "react";
// import Slider from "react-slick";


const Main = () => {
  
  return (
    <>
      <div className='w-page mx-auto my-240'>

        <section className=' w-960 h-auto mx-auto mb-360 flex justify-between items-center '>
          <div>
            <p className='text-20 text-placeholder'>한양대 학생들의 학점을 책임지는</p>
            <h1 className='text-60 font-bold font-logo my-6'>University manitto</h1>
            <p className='text-20 leading-28'>원하는 과목의 멘토님께 과외 신청을 해보고,</p>
            <p className='text-20 leading-28'>멘토가 되어 수업을 개설해 보세요.</p>
          </div>
          <PiNotePencilBold size={160}/>
        </section>

        <section className='w-full mx-auto mb-360'>
          <div className='w-[500px] h-auto mx-auto mb-10 flex justify-between'>
            <PiStudentDuotone size={200} />
            <PiChalkboardTeacher size={200} />
          </div>
          <p className='w-full h-auto text-center text-36'>회원가입 시 <strong>멘티</strong>, 수업 개설 시 <strong>멘토와 멘티</strong> 모두 가능!</p>
        </section>

        <section className='w-800 mx-auto mb-360' >
          <h1 className='h2 text-end'>멘토 랭킹</h1>
          <p className='pt-2 text-20 text-end mb-20'>포인트를 많이 획득할수록 순위가 높아집니다!</p>
          <div className='w-full flex justify-between items-end'>
            <div className='w-52'>
              <p className='text-56 text-center text-silver font-semibold'>2</p>
              <div className='w-full py-5 border-2 border-silver rounded-md'>
                <Dialog>
                  <div className="w-full flex flex-col items-center gap-5">
                    <DialogTrigger >
                      <ProfileImg size={20} point={200} />
                    </DialogTrigger>
                    <DialogTrigger>
                      <p className='text-20 text-center'>닉네임</p>
                    </DialogTrigger>
                  </div>
                  <DialogContent className='w-[550px]'>
                    <div className="mt-4 mb-4">
                      <ProfileComponent />
                    </div>
                  </DialogContent>
                </Dialog>
                <p className='mt-16 text-20 text-center'>2000P</p>
              </div>
            </div>
            <div className='w-60'>
              <p className='text-60 text-center text-gold font-semibold'>1</p>
              <div className='w-full py-5 border-2 border-gold rounded-md'>
                <Dialog>
                  <div className="w-full flex flex-col items-center gap-5">
                    <DialogTrigger >
                    <ProfileImg size={24} point={20} />
                    </DialogTrigger>
                    <DialogTrigger>
                      <p className='text-20 text-center'>닉네임</p>
                    </DialogTrigger>
                  </div>
                  <DialogContent className='w-[550px]'>
                    <div className="mt-4 mb-4">
                      <ProfileComponent />
                    </div>
                  </DialogContent>
                </Dialog>
                <p className='mt-24 text-20 text-center'>2000P</p>
              </div>
            </div>
            <div className='w-52'>
              <p className='text-56 text-center text-bronze font-semibold'>3</p>
              <div className='w-full py-5 border-2 border-bronze rounded-md'>
                <Dialog>
                  <div className="w-full flex flex-col items-center gap-5">
                    <DialogTrigger >
                      <ProfileImg size={20} point={20} />
                    </DialogTrigger>
                    <DialogTrigger>
                      <p className='text-20 text-center'>닉네임</p>
                    </DialogTrigger>
                  </div>
                  <DialogContent className='w-[550px]'>
                    <div className="mt-4 mb-4">
                      <ProfileComponent />
                    </div>
                  </DialogContent>
                </Dialog>
                <p className='mt-16 text-20 text-center'>2000P</p>
              </div>
            </div>
          </div>
        </section>

        <section className='w-800 mx-auto mb-360' >
          <h1 className='h2'>과외 신청하기</h1>
          <p className='pt-2 text-20 mb-20'>훌륭한 멘토님들을 살펴보고 과외 신청을 해보세요!</p>
          
        </section>
      
      </div>
      

    </>
  )
}

export default Main