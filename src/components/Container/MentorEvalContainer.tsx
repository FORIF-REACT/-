import { ScrollArea } from "@/components/ui/scroll-area"; // ShadCN의 Scroll Area 컴포넌트를 임포트합니다.
import Tag from '@/components/ui/Tag';
import ProfileImg from "../Profile/ProfileImg";

export default function MentorEvalContainer() {
  return (
    <div className="min-w-[440px] min-h-[560px] bg-[#FBFDFF] mr-[31px] relative rounded-[7px] shadow-md">
      
      {/* 프로필 사진(닉네임) + 상세 정보 컨테이너 */}
      <div className="w-[440px] h-[140px] bg-[#FBFDFF] flex items-start shadow-md">
        {/* 프로필 사진(닉네임) 컨테이너 */}
        <div className="w-[72px] h-[96px] bg-[#FBFDFF] flex flex-col items-center ml-[36px] mt-[22px]">
          {/* 프로필 사진 */}
          <ProfileImg size={10} point={100} />  {/*point 변수로 받기(파라미터 형태) */}
          {/* 닉네임 */}
          <span className="mt-[8px] text-[16px] font-normal text-[#000000]">닉네임</span>
        </div>

        {/* 상세 정보 컨테이너 */}
        <div className="ml-[36px] w-[296px] h-[140px] bg-[#FBFDFF] flex flex-col justify-around shadow-md">
          {/* 상세 정보 */}
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">성별</span>
            <span className="flex-grow text-[12px] font-medium">여자</span>
          </div>
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">입학연도</span>
            <span className="flex-grow text-[12px] font-medium">2021</span>
          </div>
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">전공</span>
            <span className="flex-grow text-[12px] font-medium">공과대학 산업공학과</span>
          </div>
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">선호지역</span>
            <span className="flex-grow text-[12px] font-medium">서울특별시 양천구</span>
          </div>
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">수강과목</span>
            <span className="flex-grow text-[12px] font-medium">공업수학1</span>
          </div>
        </div>
      </div>

      {/* 강의 상세 정보 */}
      <div className="mt-[20px] ml-[20px] w-[400px] h-[226px] flex flex-col">
        {/* 상세 정보 컨테이너 6개 */}
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 과목</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">공업수학1</span>
        </div>
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 중점</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">이론 위주</span>
        </div>
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 형태</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">비대면</span>
        </div>
        <div className="w-[400px] h-[56px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 내용</span>
          <ScrollArea className="flex-grow w-[185px] h-[40px] rounded-[7px] shadow-sm">
            <div className="py-[5px] text-[10px] font-medium text-[#000000]">
              Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
            </div>
          </ScrollArea>
        </div>
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">선호요일 - 시간대</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">월요일 - 6시</span>
        </div>
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">총 수업 횟수</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">5회</span>
        </div>
      </div>

      <div className="mt-[20px] flex justify-center items-center space-x-4">  {/*onClick 메소드 구현 - count 넣어서 클릭 시 count+1되도록 설정*/}
        <button className="bg-transparent border-none cursor-pointer">
          <Tag label="전문성" />
        </button>
        <button className="bg-transparent border-none cursor-pointer">
          <Tag label="강의력" />
        </button>
        <button className="bg-transparent border-none cursor-pointer">
          <Tag label="준비성" />
        </button>
      </div>

      <div className="mt-[12px] flex justify-center items-center space-x-4">
        <button className="bg-transparent border-none cursor-pointer">
          <Tag label="시간준수" />
        </button>
        <button className="bg-transparent border-none cursor-pointer">
          <Tag label="성적보장" />
        </button>
      </div>

      <div className="mt-[12px] flex justify-center items-center">  {/*onClick 메소드 구현*/}
        <button className="box-border flex justify-center items-center w-20 h-8 bg-white border-2 border-[#94A3B8] rounded-[32px]">
            <span className="text-[#7C6DD1] text-[12px]">제출</span>
        </button>
      </div>

    </div>
  );
}
