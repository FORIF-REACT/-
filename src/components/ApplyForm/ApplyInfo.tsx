import * as React from 'react';

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
    <div className="flex flex-col items-center p-[55px] [40px] w-[520px] h-[620px] bg-[#FBFDFF] shadow-md rounded-[7px]">
      <div className="flex flex-col items-center p-0 w-[440px] h-[510px]">
        <div className="w-[440px] h-[48px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              성별
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              {gender}
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[48px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              입학연도
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              {year}
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[48px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              전공
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              {major1} {major2 && `  ${major2}`}
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[48px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              선호 지역
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              {location1} {location2 && `  ${location2}`}
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[48px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              강의 과목
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              {subject}
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[48px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              강의 중점
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              {method}
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[48px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              강의 형태
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              {meeting}
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[78px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[12px] text-gray-500 font-normal text-16">
              강의 내용
            </div>
            <div className="absolute left-[160px] top-[12px] font-medium text-16 text-black leading-[25px]">
              {subject} 이론을 바탕으로한 기출 문제 풀이, 별도의 문제 풀이와
              질의 응답
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[48px] border-b border-gray-200">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              선호요일 - 시간대
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              월요일 - 6시
            </div>
          </div>
        </div>

        <div className="w-[440px] h-[48px]">
          <div className="relative flex items-center h-full">
            <div className="absolute left-0 top-[16px] text-gray-500 font-normal text-16">
              총 수업 횟수
            </div>
            <div className="absolute left-[160px] top-[16px] font-normal text-16 text-black">
              5회
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyInfo;
