import { useRef }from "react";
import ProfileComponent from "@/components/Profile/ProfileComponent";
import ProfileImg from "@/components/Profile/ProfileImg";
import './MainPage.css'
import TypeIt from "typeit-react";
import { PiNotePencilBold, PiStudentDuotone, PiChalkboardTeacher } from "react-icons/pi";
import { GiCrenelCrown } from "react-icons/gi";

import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/Dialog"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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


const Main = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    draggable: false,
    speed: 500,
    slidesToShow: 3
  }

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".rotate", {
        x: 200,
        rotate: 360,
        duration:2,
        opacity:0,
        delay: 1,
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
      <div className='mx-auto mt-300 mb-240 trigger' ref={container}>

      {/* 메인1 */}
        <section className='w-960 mx-auto mb-180 flex justify-between items-center'>
          <div>
            <p className='text-20 text-placeholder'>한양대 학생들의 학점을 책임지는</p>
            <TypeIt element="h1" className='text-70 font-logo mb-6 bg-gradient-to-r to-[#382A83] from-primary bg-clip-text text-transparent'>
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
        <section className='w-full bg-gray-100 py-20 mt-300 trigger1' >
          <div className='w-[500px] h-auto mx-auto mb-20 flex justify-between up1' >
            <PiStudentDuotone size={200} />
            <PiChalkboardTeacher size={200}/>
          </div>
          <p className='w-full h-auto text-center text-36 up2'>회원가입 시 <strong className="bg-gradient-to-r to-[#382A83] from-primary bg-clip-text text-transparent" >멘티</strong>, 수업 개설 시 <strong className="bg-gradient-to-r to-[#382A83] from-primary bg-clip-text text-transparent">멘토와 멘티</strong> 모두 가능!</p>
        </section>

        <section>
          <img src="../../../public/image.jpeg" className="" />
        </section>

      {/* 멘토 랭킹 */}
        <section className='w-800 mx-auto my-300 trigger2'  >
          <h1 className='h2 text-end text-[#291F5C] up3'>멘토 랭킹</h1>
          <p className='pt-2 text-20 text-end mb-20 up3'>포인트를 많이 획득할수록 순위가 높아집니다!</p>
          <div className='w-full flex justify-between items-end up4'>
            <div className="flex flex-col items-center">
              <GiCrenelCrown  size={85} className="text-silver"/>
              <div className='w-52 py-5 border-2 border-silver rounded-2xl shadow-md shadow-silver'>
                <ProfileModal imagesize={20} username="2등기정" point={400} />
                <p className='mt-6 text-24 text-center'>2000P</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <GiCrenelCrown  size={110} className="text-gold"/>
              <div className='w-60 py-5 border-2 border-gold rounded-2xl shadow-md shadow-gold '>
                <ProfileModal imagesize={24} username="1등기정" point={200} />
                <p className='mt-12 text-24 text-center'>2000P</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <GiCrenelCrown  size={85} className="text-bronze"/>
              <div className='w-52 py-5 border-2 border-bronze rounded-2xl shadow-md shadow-bronze '>
                <ProfileModal imagesize={20} username="3등기정" point={100} />
                <p className='mt-6 text-24 text-center'>2000P</p>
              </div>
            </div>
          </div>
        </section>

      {/* 과외 신청하기 */}
        <section className='w-800 mx-auto my-300 trigger3 ' >
          <h1 className='h2 text-[#291F5C] up5'>과외 신청하기</h1>
          <p className='pt-2 text-20 mb-20 up5'>훌륭한 멘토님들을 살펴보고 과외 신청을 해보세요!</p>
            <div className="slider-container up6">
              <Slider {...settings}>
                <div >
                  <div className='w-48 mx-auto py-7 bg-[#F2F0FF]/30 shadow-md'>
                    <ProfileModal imagesize={20} username="일기정" point={30} />
                    <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">여성</p>
                    <p className="text-20 text-center text-primary">공업수학1</p>
                  </div>
                </div>
                <div >
                  <div className='w-48 mx-auto py-7 bg-[#F2F0FF]/30 shadow-md'>
                    <ProfileModal imagesize={20} username="이기정" point={30} />
                    <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">남성</p>
                    <p className="text-20 text-center text-primary">일반물리</p>
                  </div>
                </div>
                <div >
                  <div className='w-48 mx-auto py-7 bg-[#F2F0FF]/30 shadow-md'>
                    <ProfileModal imagesize={20} username="삼기정" point={30} />
                    <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">여성</p>
                    <p className="text-20 text-center text-primary">동역학</p>
                  </div>
                </div>
                <div >
                  <div className='w-48 mx-auto py-7 bg-[#F2F0FF]/30 shadow-md'>
                    <ProfileModal imagesize={20} username="사기정" point={30} />
                    <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">남성</p>
                    <p className="text-20 text-center text-primary">말과글</p>
                  </div>
                </div>
                <div >
                  <div className='w-48 mx-auto py-7 bg-[#F2F0FF]/30 shadow-md'>
                    <ProfileModal imagesize={20} username="오기정" point={30} />
                    <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">여성</p>
                    <p className="text-20 text-center text-primary">물리화학</p>
                  </div>
                </div>
                <div >
                  <div className='w-48 mx-auto py-7 bg-[#F2F0FF]/30 shadow-md'>
                    <ProfileModal imagesize={20} username="육기정" point={30} />
                    <p className="w-10 mx-auto mt-2 mb-4 py-0.5 text-center text-16 bg-white border-1 rounded-sm">남성</p>
                    <p className="text-20 text-center text-primary">공업수학2</p>
                  </div>
                </div>
                
              </Slider>

          </div>
          
        </section>
      
      </div>
      

    </>
  )
}

export default Main