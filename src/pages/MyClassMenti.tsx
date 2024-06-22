import MentiDetailContainer from "@/components/Container/MentiDetailContainer";
import SideMenu from "@/components/Profile/SideMenu";

const profiles = [
  {
    profileImage: "path/to/image1.jpg",
    username: "사용자1",
    gender: "여성",
    admissionYear: 2021,
    major: "공과대학 산업공학과",
    preferRegion: "서울특별시 양천구",
    lectureName: "공업수학1",
    lectureType: "이론 위주",
    meetType: "비대면",
    lectureContent: "공업수학1 이론을 바탕으로 한 기출 문제 풀이",
    preferDay: "월요일",
    preferTime: "6시",
    numberOfClasses: 5
  },
  {
    profileImage: "path/to/image2.jpg",
    username: "사용자2",
    gender: "남성",
    admissionYear: 2020,
    major: "경영학과",
    preferRegion: "서울특별시 강남구",
    lectureName: "경영학 원론",
    lectureType: "실습 위주",
    meetType: "대면",
    lectureContent: "경영학 원론 이론과 사례 분석",
    preferDay: "화요일",
    preferTime: "10시",
    numberOfClasses: 10
  },
  // 필요에 따라 더 많은 객체 추가 가능
];


export default function MyClassMenti() {
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
          <span className="absolute font-semibold text-[24px] text-[#000000]">멘티 강의</span>
          
          <div className="mt-[84px] w-full flex flex-col">
            <span className="font-normal text-[20px] text-[#000000]">수락 대기 중</span> 

            {/* 전달받은 정보 */}
            <div className="mt-[20px] w-full h-[536px] gap-[60px] overflow-x-auto flex">
              {profiles.map((profile, index) => (
                        <MentiDetailContainer key={index} {...profile} />
                      ))}
            </div>

            <div className="mt-[60px] w-full flex flex-col">
              <span className="font-normal text-[20px] text-[#000000]">진행중</span> 

              {/* 전달받은 정보 */}
              <div className="mt-[20px] w-full h-[536px] gap-[60px] overflow-x-auto flex">
                {profiles.map((profile, index) => (
                        <MentiDetailContainer key={index} {...profile} />
                      ))}
              </div>

              <div className="mt-[60px] w-full flex flex-col">
                <span className="font-normal text-[20px] text-[#000000]">종료</span> 

                {/* 전달받은 정보 */}
                <div className="mt-[20px] w-full h-[536px] gap-[60px] overflow-x-auto flex">
                  {profiles.map((profile, index) => (
                        <MentiDetailContainer key={index} {...profile} />
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
