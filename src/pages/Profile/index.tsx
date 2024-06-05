import SideMenu from "@/components/Profile/SideMenu"
import Tag from "@/components/ui/Tag"
import BasicLabel from "@/components/Profile/BasicLabel"
import BasicLabelNoneBorder from "@/components/Profile/BasicLabelNoneBorder"
import MentorLabel from "@/components/Profile/MentorLabel"
import MentoreLabelNoneBorder from "@/components/Profile/MentorLabelNoneBorder"
import Navbar from "@/components/ui/navbar"


const profile = () => {
  return (
    <>
    <Navbar />
      <div className="flex items-center w-[480px] h-[180px] bg-[FBFDFF] shadow-md mt-[100px] mx-auto">
        <div className="w-full h-full ">
          <div className="w-full h-full">
              <div className="">
                <div className="box-border w-14 h-14 bg-slate-400 rounded-[28px] m-auto ring"></div>
              </div>
              <p className="w-full text-16 text-center font-sans mt-3 mx-auto">
                닉네임
              </p>
          </div>
        </div>
        <div className="w-[360px] h-[180px] flex flex-col">
          <BasicLabel title="이메일" content="email@hanyang.ac.kr" />
          <BasicLabel title="성별" content="여성" />
          <BasicLabel title="입학연도" content="2021" />
          <BasicLabel title="전공" content="공과대학 유기나노공학과" />
          <BasicLabelNoneBorder title="선호 지역" content="서울특별시 동대문구"  />
        </div>
      </div>

      <div className="w-[480px] h-28 mt-14 mx-auto flex flex-col rounded-md border-2">
        <div className="w-full h-14 flex items-center border-b-1">
          <p className="w-16 h-3 ml-5 mr-16 text-sans text-12">
            멘토 명예
          </p>
          <div className="flex w-[304px] space-x-2">
            <Tag label="시간준수" count={3}/>
            <Tag label="전문성" count={3}/>
            <Tag label="강의력" count={3}/>
          </div>
        </div>
        <div className="w-full h-14 flex items-center">
          <p className="w-16 h-3 ml-5 mr-16 text-sans text-12">
            멘티 명예
          </p>
          <div className="flex w-[304px] space-x-2">
            <Tag label="시간준수" count={3}/>
            <Tag label="전문성" count={3}/>
            <Tag label="강의력" count={3}/>
          </div>
        </div>
      </div>

      <div className="w-[480px] h-60 rounded-md border mt-14 mx-auto">
        <MentorLabel title="강의 과목" content="공업수학1" />
        <MentorLabel title="강의 중점" content="이론 위주" />
        <MentorLabel title="강의 형태" content="공업수학1" />
        <MentorLabel title="강의 내용" content="공업수학1" />
        <MentorLabel title="선호 요일 - 시간대" content="월요일 - 6시" />
        <MentoreLabelNoneBorder title="총 수업 횟수" content="5회" />
      </div>

    </>
  )
}

export default profile