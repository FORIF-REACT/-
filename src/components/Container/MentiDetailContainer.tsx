import { ScrollArea } from "@/components/ui/scroll-area"; // ShadCN의 Scroll Area 컴포넌트를 임포트합니다.
import ProfileImg from "../Profile/ProfileImg";

interface MentiProfile {
  username: string;
  gender: string;
  admissionYear: number;
  major: string;
  preferRegion: string;
  lectureName: string;
  lectureType: string;
  meetType: string;
  lectureContent: string;
  preferDay: string;
  preferTime: string;
  numberOfClasses: number;
}

const MentiDetailContainer: React.FC<MentiProfile> = ({
  username,
  gender,
  admissionYear,
  major,
  preferRegion,
  lectureName,
  lectureType,
  meetType,
  lectureContent,
  preferDay,
  preferTime,
  numberOfClasses,
}) => {
  return (
    <div className="min-w-[352px] min-h-[506px] bg-[#FBFDFF] mr-[31px] relative rounded-[7px] shadow-md">
      
      {/* 프로필 사진(닉네임) + 상세 정보 컨테이너 */}
      <div className="w-[352px] h-[112px] bg-[#FBFDFF] flex items-start">
        {/* 프로필 사진(닉네임) 컨테이너 */}
        <div className="w-[72px] h-[96px] bg-[#FBFDFF] flex flex-col items-center ml-[20px] mt-[8px]">
          {/* 프로필 사진 */}
          <ProfileImg size={10} point={100} /> {/* point 변수를 profileImage로 받기 */}
          {/* 닉네임 */}
          <span className="mt-[8px] text-[16px] font-normal text-[#000000]">{username}</span>
        </div>

        {/* 상세 정보 컨테이너 */}
        <div className="ml-[20px] w-[240px] h-[112px] bg-[#FBFDFF] flex flex-col justify-around shadow-md">
          {/* 상세 정보 */}
          <div className="w-[240px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[19px] text-[12px] font-medium">성별</span>
            <span className="flex-grow text-[12px] font-medium">{gender}</span>
          </div>
          <div className="w-[240px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[19px] text-[12px] font-medium">입학연도</span>
            <span className="flex-grow text-[12px] font-medium">{admissionYear}</span>
          </div>
          <div className="w-[240px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[19px] text-[12px] font-medium">전공</span>
            <span className="flex-grow text-[12px] font-medium">{major}</span>
          </div>
          <div className="w-[240px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[19px] text-[12px] font-medium">선호지역</span>
            <span className="flex-grow text-[12px] font-medium">{preferRegion}</span>
          </div>
        </div>
      </div>

      {/* 강의 상세 정보 */}
      <div className="mt-[20px] ml-[16px] w-[320px] h-[186px] flex flex-col">
        {/* 상세 정보 컨테이너 6개 */}
        <div className="w-[320px] h-[26px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 과목</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{lectureName}</span>
        </div>
        <div className="w-[320px] h-[26px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 중점</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{lectureType}</span>
        </div>
        <div className="w-[320px] h-[26px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 형태</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{meetType}</span>
        </div>
        <div className="w-[320px] h-[56px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 내용</span>
          <ScrollArea className="flex-grow w-[185px] h-[40px] rounded-[7px] shadow-sm">
            <div className="py-[5px] text-[10px] font-medium text-[#000000]">{lectureContent}</div>
          </ScrollArea>
        </div>
        <div className="w-[320px] h-[26px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">선호요일 - 시간대</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{preferDay} - {preferTime}</span>
        </div>
        <div className="w-[320px] h-[26px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">총 수업 횟수</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{numberOfClasses}회</span>
        </div>
      </div>

      {/* 작성한 내용 div */}
      <div className="mt-[20px] ml-[16px] w-[320px] h-[148px]">
        <span className="block text-[16px] font-normal text-[#000000]">작성한 내용</span>
        <ScrollArea className="flex-grow mt-[12px] w-[320px] h-[120px] rounded-[7px] shadow-sm">
          <div className="py-[5px] text-[10px] font-medium text-[#000000]">안녕하세요!</div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default MentiDetailContainer;
