import Tag from '@/components/ui/Tag';
import ProfileImg from '../Profile/ProfileImg';
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
}

const MentiEvalContainer: React.FC<MentiProfile> = ({
  point,
  username,
  gender,
  admissionYear,
  major,
  preferRegion,
  lectureName,
}) => {
  const [isPunctualSelected, setIsPunctualSelected] = useState(false);
  const [isActivenessSelected, setIsActivenessSelected] = useState(false);
  const [isDeligenceSelected, setIsDeligenceSelected] = useState(false);

  const handleSubmit = () => {
    setIsPunctualSelected(false);
    setIsActivenessSelected(false);
    setIsDeligenceSelected(false);
  };

  const getToggleStyle = (isSelected: boolean) => ({
    padding: 0,
    backgroundColor: isSelected ? '#7C6DD1' : 'transparent',
    color: isSelected ? '#FFFFFF' : '#000000',
    borderRadius: '7px',
  });

  const handleToggleChange = (setter: React.Dispatch<React.SetStateAction<boolean>>, isSelected: boolean) => {
    const selectedCount = [isPunctualSelected, isActivenessSelected, isDeligenceSelected].filter(Boolean).length;
    if (selectedCount < 2 || isSelected) {
      setter(!isSelected);
    }
  };

  return (
    <div className="min-w-[440px] min-h-[266px] bg-[#FBFDFF] mr-[31px] relative rounded-[7px] shadow-md">
      
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
        <div className="ml-[36px] w-[296px] h-[140px] bg-[#FBFDFF] flex flex-col justify-around shadow-sm">
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

      <div className="mt-[20px] flex justify-center items-center space-x-10">
        <div className="w-auto">
          <Toggle 
            pressed={isPunctualSelected} 
            onPressedChange={() => handleToggleChange(setIsPunctualSelected, isPunctualSelected)}
            style={getToggleStyle(isPunctualSelected)}
          >
            <Tag label="시간준수" className={isPunctualSelected ? 'text-white' : 'text-primary'} />
          </Toggle>
        </div>
        <div className="w-auto">
          <Toggle 
            pressed={isActivenessSelected} 
            onPressedChange={() => handleToggleChange(setIsActivenessSelected, isActivenessSelected)}
            style={getToggleStyle(isActivenessSelected)}
          >
            <Tag label="적극성" className={isActivenessSelected ? 'text-white' : 'text-primary'} />
          </Toggle>
        </div>
        <div className="w-auto">
          <Toggle 
            pressed={isDeligenceSelected} 
            onPressedChange={() => handleToggleChange(setIsDeligenceSelected, isDeligenceSelected)}
            style={getToggleStyle(isDeligenceSelected)}
          >
            <Tag label="성실성" className={isDeligenceSelected ? 'text-white' : 'text-primary'} />
          </Toggle>
        </div>
      </div>
      
      <div className="mt-[20px] flex justify-center items-center">
        <button
          className="box-border flex justify-center items-center w-20 h-8 bg-white border-2 border-[#94A3B8] rounded-[32px]"
          onClick={handleSubmit}
        >
          <span className="text-[#7C6DD1] text-[12px]">제출</span>
        </button>
      </div>
    </div>
  );
};

export default MentiEvalContainer;
