import BasicLabel from './BasicLabel'
import Tag from '../ui/Tag'
import MentorLabel from './MentorLabel'
import ProfileImg from '../Profile/ProfileImg'

const Profile = () => {
  return (
    <div>
      <div className="w-480 mx-auto flex items-center bg-[#FBFDFF] shadow-md ">
        <div className="w-full flex flex-col items-center">
              <ProfileImg size={16} point={300} />
              <p className="text-16 text-center mt-3">
                닉네임
              </p>
        </div>
        <div>
          <BasicLabel title="이메일" content="email@hanyang.ac.kr" className="border-b" />
          <BasicLabel title="성별" content="여성" className="border-b" />
          <BasicLabel title="입학연도" content="2021" className="border-b" />
          <BasicLabel title="전공" content="공과대학 유기나노공학과" className="border-b" />
          <BasicLabel title="선호 지역" content="서울특별시 동대문구"  />
        </div>
      </div>

      <div className="w-480 mt-14 mx-auto flex flex-col rounded-md border-2">
        <div className="w-full h-14 flex items-center border-b-1">
          <p className="ml-5 mr-20 text-12 text-darkgray">
            멘토 명예
          </p>
          <div className="w-300 flex justify-between">
            <Tag label="시간준수" count={3}/>
            <Tag label="전문성" count={3}/>
            <Tag label="강의력" count={3}/>
          </div>
        </div>
        <div className="w-full h-14 flex items-center">
          <p className="ml-5 mr-20 text-12 text-darkgray">
            멘티 명예
          </p>
          <div className="flex w-300 justify-between">
            <Tag label="시간준수" count={3}/>
            <Tag label="전문성" count={3}/>
            <Tag label="강의력" count={3}/>
          </div>
        </div>
      </div>

      <div className="w-480 rounded-md border-2 mt-14 mx-auto">
        <MentorLabel title="강의 과목" content="공업수학1" className="border-b" />
        <MentorLabel title="강의 중점" content="이론 위주" className="border-b" />
        <MentorLabel title="강의 형태" content="공업수학1" className="border-b" />
        <MentorLabel title="강의 내용" content="공업수학1" className="border-b" />
        <MentorLabel title="선호 요일 - 시간대" content="월요일 - 6시" className="border-b" />
        <MentorLabel title="총 수업 횟수" content="5회" />
      </div>

    </div>
  )
}

export default Profile