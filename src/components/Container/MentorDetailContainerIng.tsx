import { ScrollArea } from "@/components/ui/scroll-area"; // ShadCN의 Scroll Area 컴포넌트를 임포트합니다.
import ProfileImg from "../Profile/ProfileImg";

interface Profile {
  username: string;
  gender: string;
  admissionYear: number;
  major: string;
  preferRegion: string;
  lectureName: string;
  lectureContent: string;
}

const MentorDetailContainerIng: React.FC<Profile> = ({
  username,
  gender,
  admissionYear,
  major,
  preferRegion,
  lectureName,
  lectureContent,
}) => {
  return (
    <div className="min-w-[352px] min-h-[478px] bg-[#FBFDFF] mr-[31px] relative rounded-[7px] shadow-md">
      
      {/* 프로필 사진(닉네임) + 상세 정보 컨테이너 */}
      <div className="w-[352px] h-[140px] bg-[#FBFDFF] flex items-start">
        {/* 프로필 사진(닉네임) 컨테이너 */}
        <div className="w-[72px] h-[96px] bg-[#FBFDFF] flex flex-col items-center ml-[20px] mt-[22px]">
          {/* 프로필 사진 */}
          <ProfileImg size={10} point={100} />
          {/* 닉네임 */}
          <span className="mt-[8px] text-[16px] font-normal text-[#000000]">{username}</span>
        </div>

        {/* 상세 정보 컨테이너 */}
        <div className="ml-[20px] w-[240px] h-[140px] bg-[#FBFDFF] flex flex-col justify-around shadow-md">
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
          <div className="w-[240px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[19px] text-[12px] font-medium">수강과목</span>
            <span className="flex-grow text-[12px] font-medium">{lectureName}</span>
          </div>
        </div>
      </div>

      {/* 작성한 내용 div */}
      <div className="mt-[20px] ml-[16px] w-[320px] h-[248px]">
        <span className="block text-[16px] font-normal text-[#000000]">신청 내용</span>
        <ScrollArea className="flex-grow mt-[12px] w-[320px] h-[220px] rounded-[7px] shadow-sm">
          <div className="py-[5px] text-[10px] font-medium text-[#000000]">{lectureContent}</div>
        </ScrollArea>

        <div className="mt-[20px] flex justify-center items-center space-x-4">
          <button className="box-border flex justify-center items-center gap-2 w-20 h-8 bg-white border-2 border-[#7C6DD1] rounded-full">
            <span className="text-[#7C6DD1] text-[12px]">종료하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MentorDetailContainerIng;
