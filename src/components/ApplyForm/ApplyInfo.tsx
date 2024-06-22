import * as React from 'react';
import InfoRow from '@/components/ApplyForm/InfoRow'; 

interface ApplyInfoProps {
  year: number;
  gender: string;
  major1: string;
  major2: string;
  location1: string;
  location2: string;
  subject: string;
  method: string;
  meeting: string;
}

const ApplyInfo: React.FC<ApplyInfoProps> = ({
  year,
  gender,
  major1,
  major2,
  location1,
  location2,
  subject,
  method,
  meeting,
}) => {
  return (
    <div className="flex flex-col items-center p-14 w-[520px] h-auto bg-[#FBFDFF] shadow-md rounded-[7px]">
      <div className="flex flex-col items-center w-[440px]">
        <InfoRow label="성별" value={gender} />
        <InfoRow label="입학연도" value={year.toString()} />
        <InfoRow label="전공" value={`${major1} ${major2 && `  ${major2}`}`} />
        <InfoRow label="선호 지역" value={`${location1} ${location2 && `  ${location2}`}`} />
        <InfoRow label="강의 과목" value={subject} />
        <InfoRow label="강의 중점" value={method} />
        <InfoRow label="강의 형태" value={meeting} />
        <InfoRow 
          label="강의 내용" 
          value={`${subject} 이론을 바탕으로한 기출 문제 풀이, 별도의 문제 풀이와 질의 응답`} 
          isContent
        />
        <InfoRow label="선호요일 - 시간대" value="월요일 - 6시" />
        <InfoRow label="총 수업 횟수" value="5회" />
      </div>
    </div>
  );
};

export default ApplyInfo;
