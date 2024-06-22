import MentorDetailContainer from "@/components/Container/MentorDetailContainer";
import SideMenu from "@/components/Profile/SideMenu";

export default function MyClassMentor() {
    return (
      <>
        <div className="w-full h-auto flex flex-row font-['Noto_Sans_KR']">
  
          
          {/* 왼쪽 메뉴 */}
          <div className="relative mt-[100px] ml-[72px] min-w-[128px] h-[124px] flex flex-col items-center justify-center">
            <span className="font-semibold text-[36px]">내 수업</span>
            <SideMenu menu1="멘티 강의" path1="/MyClassMenti" menu2="멘토 강의" path2="/MyClassMentor"/>
          </div> 
          
  
          {/* 오른쪽 컨테이너 */}
          <div className="relative mt-[100px] ml-[84px] w-[764px] h-page">
              <span className="absolute font-semibold text-[24px] text-[#000000]">멘토 강의</span>
              
              <div className="mt-[84px] w-full h-full">
                <span className="font-normal text-[20px] text-[#000000]">받은 신청</span> 
  
                  {/*전달받은 정보*/}
                  <div className=" mt-[20px] w-[764px] h-[518px] gap-[60px] overflow-x-auto flex">
                    <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                    <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                    <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                    <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                    <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                  </div>
  
                  <div className="mt-[60px] w-full h-full">
                    <span className="font-normal text-[20px] text-[#000000]">진행중</span> 
  
                    {/*전달받은 정보*/}
                    <div className=" mt-[20px] w-[764px] h-[518px] gap-[60px] overflow-x-auto flex">
                      <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                      <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                      <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                      <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                      <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                    </div>
  
                    <div className="mt-[60px] w-full h-full">
                      <span className="font-normal text-[20px] text-[#000000]">종료</span> 
  
                      {/*전달받은 정보*/}
                      <div className=" mt-[20px] w-[764px] h-[518px] gap-[60px] overflow-x-auto flex">
                        <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                        <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                        <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                        <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                        <div className="min-w-[352px] h-[478px]"><MentorDetailContainer/></div>
                      </div>
  
                    </div>
  
                  </div>
  
  
              </div>
          </div>
  
        </div>
      </>
    );
  }