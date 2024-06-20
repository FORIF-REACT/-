import React, { useRef }from "react";
import { PiNotePencilBold, PiStudentDuotone, PiChalkboardTeacher } from "react-icons/pi";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/Dialog"

import ProfileComponent from "@/components/Profile/ProfileComponent";
import ProfileImg from "@/components/ProfileImg";


// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TypeIt from "typeit-react";

gsap.registerPlugin(useGSAP, ScrollTrigger)


interface ProfileProps {
  username: string;
  point: number;
  imagesize: number;
}

const ProfileModal = ({ username, point,imagesize }:ProfileProps) => {

  return (
    <Dialog>
      <div className="w-full flex flex-col items-center gap-5">
        <DialogTrigger >
          <ProfileImg size={imagesize} point={point}  />
        </DialogTrigger>
        <DialogTrigger>
          <p className='text-20 text-center'>{username}</p>
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


const Main = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "center",
    centerMode: true,
    centerPadding: "60px"
  }

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".rotate", {
        x: 200,
        rotate: 360,
        duration:2,
        opacity:0,
        delay: 2,
        scrollTrigger: ".trigger",
      }),
      gsap.from(".up1", {
        y: 200,
        duration:1,
        opacity:0,
        delay:0.5,
        scrollTrigger: ".trigger1",
      }),
      gsap.from(".up2", {
        y: 200,
        duration:1,
        opacity:0,
        delay:0.5,
        scrollTrigger: ".up1"
      }),
      gsap.from(".up3", {
        y: 200,
        duration:1,
        opacity:0,
        delay:0.5,
        scrollTrigger: ".trigger2"
      }),
      gsap.from(".up4", {
        y: 200,
        duration:1,
        opacity:0,
        delay:0.5,
        scrollTrigger: ".up3"
      }),
      gsap.from(".up5", {
        y: 200,
        duration:1,
        opacity:0,
        delay:0.5,
        scrollTrigger: ".trigger3"
      }),
      gsap.from(".up6", {
        y: 200,
        duration:1,
        opacity:0,
        delay:0.5,
        scrollTrigger: ".up5"
      })
    })
    

  return (
    <>
      <div className='w-page mx-auto my-240 trigger' ref={container}>

      {/* 메인1 */}
        <section className=' w-960 mx-auto mb-180 flex justify-between items-center  ' >
          <div>
            <p className='text-20 text-placeholder'>한양대 학생들의 학점을 책임지는</p>
            <TypeIt element="h1" className='text-70 font-extrabold font-logo mb-6 bg-gradient-to-r to-[#382A83] from-primary bg-clip-text text-transparent'>
              University manitto
            </TypeIt>
            <p className='text-20 leading-28'>원하는 과목의 멘토님께 과외 신청을 해보고,</p>
            <p className='text-20 leading-28'>멘토가 되어 수업을 개설해 보세요.</p>
          </div>
          <div className="rotate">
            <PiNotePencilBold size={160} className="text-[#382A83]"/>
          </div>
        </section>

      {/* 메인2 */} 
        <section className='w-full mx-auto my-450 trigger1' >
          <div className='w-[500px] h-auto mx-auto mb-20 flex justify-between up1' >
            <PiStudentDuotone size={200} />
            <PiChalkboardTeacher size={200}/>
          </div>
          <p className='w-full h-auto text-center text-36 up2'>회원가입 시 <strong className="bg-gradient-to-r from-[#382A83] to-primary bg-clip-text text-transparent" >멘티</strong>, 수업 개설 시 <strong className="bg-gradient-to-r from-[#382A83] to-primary bg-clip-text text-transparent">멘토와 멘티</strong> 모두 가능!</p>
        </section>

      {/* 멘토 랭킹 */}
        <section className='w-800 mx-auto my-450 trigger2'  >
          <h1 className='h2 text-end text-[#291F5C] up3'>멘토 랭킹</h1>
          <p className='pt-2 text-20 text-end mb-20 up3'>포인트를 많이 획득할수록 순위가 높아집니다!</p>
          <div className='w-full flex justify-between items-end up4'>
            <div className='w-52'>
              <p className='text-56 text-center text-silver font-semibold'>2</p>
              <div className='w-full py-6 border-2 border-silver rounded-md'>
                <ProfileModal imagesize={20} username="2등" point={400} />
                <p className='mt-14 text-24 text-center'>2000P</p>
              </div>
            </div>
            <div className='w-60'>
              <p className='text-60 text-center text-gold font-semibold'>1</p>
              <div className='w-full py-6 border-2 border-gold rounded-md'>
                <ProfileModal imagesize={24} username="1등" point={200} />
                <p className='mt-20 text-24 text-center'>2000P</p>
              </div>
            </div>
            <div className='w-52'>
              <p className='text-56 text-center text-bronze font-semibold'>3</p>
              <div className='w-full py-6 border-2 border-bronze rounded-md'>
                <ProfileModal imagesize={20} username="3등" point={100} />
                <p className='mt-14 text-24 text-center'>2000P</p>
              </div>
            </div>
          </div>
        </section>

      {/* 과외 신청하기 */}
        <section className='w-800 mx-auto my-450 trigger3' >
          <h1 className='h2 text-[#291F5C] up5'>과외 신청하기</h1>
          <p className='pt-2 text-20 mb-20 up5'>훌륭한 멘토님들을 살펴보고 과외 신청을 해보세요!</p>
          
          <div className="slider-container up6 flex justify-between">
              <div className='w-52 py-7 bg-[#F2F0FF]/30 shadow-md'>
                <ProfileModal imagesize={20} username="1번" point={30} />
                <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">여성</p>
                <p className="text-20 text-center text-primary">공업수학1</p>
              </div>
              <div className='w-52 py-7 bg-[#F2F0FF]/30 shadow-md'>
                <ProfileModal imagesize={20} username="2번" point={30} />
                <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">여성</p>
                <p className="text-20 text-center text-primary">공업수학1</p>
              </div>
              <div className='w-52 py-7 bg-[#F2F0FF]/30 shadow-md'>
                <ProfileModal imagesize={20} username="3번" point={30} />
                <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">여성</p>
                <p className="text-20 text-center text-primary">공업수학1</p>
              </div>
          </div>
        </section>
      
      </div>
      

    </>
  )
}

export default Main