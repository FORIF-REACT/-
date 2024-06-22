import MentorDetailContainer from "@/components/Container/MentorDetailContainer";
import MentorDetailContainerIng from "@/components/Container/MentorDetailContainerIng";
import MentorDetailContainerEnd from "@/components/Container/MentorDetailContainerEnd";
import SideMenu from "@/components/Profile/SideMenu";

const profiles = [
  {
    username: "사용자1",
    point: 90,
    gender: "여성",
    admissionYear: 2021,
    major: "공과대학 산업공학과",
    preferRegion: "서울특별시 양천구",
    lectureName: "공업수학1",
    applyContent: "공업수학1 이론을 바탕으로 한 기출 문제 풀이"
  },
  {
    username: "사용자2",
    point: 200,
    gender: "남성",
    admissionYear: 2020,
    major: "공과대학 산업공학과",
    preferRegion: "서울특별시 강남구",
    lectureName: "미적분학1",
    applyContent: "미적분학1 이론을 바탕으로 한 기출 문제 풀이"
  },
  // 필요에 따라 더 많은 객체 추가 가능
];

export default function MyClassMentor() {
  return (
    <>
      <div className="w-full mt-[40px] h-auto flex flex-row font-['Noto_Sans_KR']">
        
        {/* 왼쪽 메뉴 */}
        <div className="relative mt-[100px] ml-[164px] min-w-[128px] h-[124px] flex flex-col items-center justify-center">
          <span className="font-semibold text-[36px]">내 수업</span>
          <SideMenu menu1="멘티 강의" path1="/MyClassMenti" menu2="멘토 강의" path2="/MyClassMentor" />
        </div> 
        
        {/* 오른쪽 컨테이너 */}
        <div className="relative mt-[100px] ml-[84px] w-[764px] flex flex-col">
            <span className="absolute font-semibold text-[24px] text-[#000000]">멘토 강의</span>
            
            <div className="mt-[84px] w-full flex flex-col">
              <span className="font-normal text-[20px] text-[#000000]">받은 신청</span> 

              {/* 전달받은 정보 */}
              <div className="mt-[20px] w-full h-[518px] gap-[60px] overflow-x-auto flex">
                {profiles.map((profile, index) => (
                  <MentorDetailContainer key={index} {...profile} />
                ))}
              </div>

              <div className="mt-[60px] w-full flex flex-col">
                <span className="font-normal text-[20px] text-[#000000]">진행중</span> 

                {/* 전달받은 정보 */}
                <div className="mt-[20px] w-full h-[518px] gap-[60px] overflow-x-auto flex">
                  {profiles.map((profile, index) => (
                    <MentorDetailContainerIng key={index} {...profile} />
                  ))}
                </div>

                <div className="mt-[60px] w-full flex flex-col">
                  <span className="font-normal text-[20px] text-[#000000]">종료</span> 

                  {/* 전달받은 정보 */}
                  <div className="mt-[20px] w-full h-[518px] gap-[60px] overflow-x-auto flex">
                  {profiles.map((profile, index) => (
                    <MentorDetailContainerEnd key={index} {...profile} />
                  ))}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
