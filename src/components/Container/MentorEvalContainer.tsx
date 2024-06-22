import { ScrollArea } from "@/components/ui/scroll-area"; // ShadCN의 Scroll Area 컴포넌트를 임포트합니다.
import Tag from '@/components/ui/Tag';
import ProfileImg from "../Profile/ProfileImg";
import React, { useState } from 'react';
import { Toggle } from "@/components/ui/toggle";

interface MentiProfile {
  point: number;
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

const MentorEvalContainer: React.FC<MentiProfile> = ({
  point,
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
  numberOfClasses
}) => {
  const [isProfessionalismSelected, setIsProfessionalismSelected] = useState(false);
  const [isLectureAbilitySelected, setIsLectureAbilitySelected] = useState(false);
  const [isPreparednessSelected, setIsPreparednessSelected] = useState(false);
  const [isPunctualitySelected, setIsPunctualitySelected] = useState(false);
  const [isGradeGuaranteeSelected, setIsGradeGuaranteeSelected] = useState(false);

  const handleSubmit = () => {
    setIsProfessionalismSelected(false);
    setIsLectureAbilitySelected(false);
    setIsPreparednessSelected(false);
    setIsPunctualitySelected(false);
    setIsGradeGuaranteeSelected(false);
  };

  const getToggleStyle = (isSelected: boolean) => ({
    padding: 0,
    backgroundColor: isSelected ? '#7C6DD1' : 'transparent',
    color: isSelected ? '#FFFFFF' : '#000000',
    borderRadius: '7px',
  });

  const handleToggleChange = (setter: React.Dispatch<React.SetStateAction<boolean>>, isSelected: boolean) => {
    const selectedCount = [isProfessionalismSelected, isLectureAbilitySelected, isPreparednessSelected, isPunctualitySelected, isGradeGuaranteeSelected].filter(Boolean).length;
    if (selectedCount < 3 || isSelected) {
      setter(!isSelected);
    }
  };

  return (
    <div className="min-w-[440px] min-h-[560px] bg-[#FBFDFF] mr-[31px] relative rounded-[7px] shadow-md">
      
      {/* 프로필 사진(닉네임) + 상세 정보 컨테이너 */}
      <div className="w-[440px] h-[140px] bg-[#FBFDFF] flex items-start shadow-md">
        {/* 프로필 사진(닉네임) 컨테이너 */}
        <div className="w-[72px] h-[96px] bg-[#FBFDFF] flex flex-col items-center ml-[36px] mt-[22px]">
          {/* 프로필 사진 */}
          <ProfileImg size={10} point={point} />  
          {/* 닉네임 */}
          <span className="mt-[8px] text-[16px] font-normal text-[#000000]">{username}</span>
        </div>

        {/* 상세 정보 컨테이너 */}
        <div className="ml-[36px] w-[296px] h-[140px] bg-[#FBFDFF] flex flex-col justify-around shadow-md">
          {/* 상세 정보 */}
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">성별</span>
            <span className="flex-grow text-[12px] font-medium">{gender}</span>
          </div>
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">입학연도</span>
            <span className="flex-grow text-[12px] font-medium">{admissionYear}</span>
          </div>
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">전공</span>
            <span className="flex-grow text-[12px] font-medium">{major}</span>
          </div>
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">선호지역</span>
            <span className="flex-grow text-[12px] font-medium">{preferRegion}</span>
          </div>
          <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
            <span className="w-[80px] ml-[20px] text-[12px] font-medium">수강과목</span>
            <span className="flex-grow text-[12px] font-medium">{lectureName}</span>
          </div>
        </div>
      </div>

      {/* 강의 상세 정보 */}
      <div className="mt-[20px] ml-[20px] w-[400px] h-[226px] flex flex-col">
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 중점</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{lectureType}</span>
        </div>
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 형태</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{meetType}</span>
        </div>
        <div className="w-[400px] h-[56px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">강의 내용</span>
          <ScrollArea className="flex-grow w-[185px] h-[40px] rounded-[7px] shadow-sm">
            <div className="py-[5px] text-[10px] font-medium text-[#000000]">
              {lectureContent}
            </div>
          </ScrollArea>
        </div>
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">선호요일 - 시간대</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{preferDay} - {preferTime}</span>
        </div>
        <div className="w-[400px] h-[34px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
          <span className="w-[140px] ml-[20px] text-[10px] font-medium text-[#000000]">총 수업 횟수</span>
          <span className="flex-grow text-[10px] font-medium text-[#000000]">{numberOfClasses}</span>
        </div>
      </div>

      <div className="mt-[20px] flex justify-center items-center space-x-4">
        <div className="w-auto">
          <Toggle 
            pressed={isProfessionalismSelected} 
            onPressedChange={() => handleToggleChange(setIsProfessionalismSelected, isProfessionalismSelected)}
            style={getToggleStyle(isProfessionalismSelected)}
          >
            <Tag label="전문성" className={isProfessionalismSelected ? 'text-white' : 'text-primary'} />
          </Toggle>
        </div>
        <div className="w-auto">
          <Toggle 
            pressed={isLectureAbilitySelected} 
            onPressedChange={() => handleToggleChange(setIsLectureAbilitySelected, isLectureAbilitySelected)}
            style={getToggleStyle(isLectureAbilitySelected)}
          >
            <Tag label="강의력" className={isLectureAbilitySelected ? 'text-white' : 'text-primary'} />
          </Toggle>
        </div>
        <div className="w-auto">
          <Toggle 
            pressed={isPreparednessSelected} 
            onPressedChange={() => handleToggleChange(setIsPreparednessSelected, isPreparednessSelected)}
            style={getToggleStyle(isPreparednessSelected)}
          >
            <Tag label="준비성" className={isPreparednessSelected ? 'text-white' : 'text-primary'} />
          </Toggle>
        </div>
      </div>

      <div className="mt-[12px] flex justify-center items-center space-x-4">
        <div className="w-auto">
          <Toggle 
            pressed={isPunctualitySelected} 
            onPressedChange={() => handleToggleChange(setIsPunctualitySelected, isPunctualitySelected)}
            style={getToggleStyle(isPunctualitySelected)}
          >
            <Tag label="시간준수" className={isPunctualitySelected ? 'text-white' : 'text-primary'} />
          </Toggle>
        </div>
        <div className="w-auto">
          <Toggle 
            pressed={isGradeGuaranteeSelected} 
            onPressedChange={() => handleToggleChange(setIsGradeGuaranteeSelected, isGradeGuaranteeSelected)}
            style={getToggleStyle(isGradeGuaranteeSelected)}
          >
            <Tag label="성적보장" className={isGradeGuaranteeSelected ? 'text-white' : 'text-primary'} />
          </Toggle>
        </div>
      </div>

      <div className="mt-[12px] flex justify-center items-center">
        <button
          className="box-border flex justify-center items-center w-20 h-8 bg-white border-2 border-[#94A3B8] rounded-[32px]"
          onClick={handleSubmit}
        >
          <span className="text-[#7C6DD1] text-[12px]">제출</span>
        </button>
      </div>
    </div>
  );
}

export default MentorEvalContainer;
