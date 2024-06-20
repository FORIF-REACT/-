import * as React from 'react';
import { useLocation } from 'react-router-dom';
import ApplyInfo from '@/components/ApplyForm/ApplyInfo';

export default function Apply() {
  const location = useLocation();
  const {
    name,
    year,
    gender,
    major1,
    major2,
    location1,
    location2,
    subject,
    method,
    meeting,
  } = location.state || {};

  return (
    <div className="w-full h-auto flex items-center">
      <div className="w-page h-auto max-w-[1100px] mx-auto">
        <div className="w-full max-w-[520px] mx-auto">
          <div className="mt-24 py-8">
            <h1 className="text-36 font-sans font-semibold text-[#000000] leading-[50px] tracking-[-0.007em]">
              과외 신청 하기
            </h1>
          </div>

          <div className="flex items-center flex-col gap-4">
            <div
              className={`flex items-center justify-center box-border border-4 rounded-full w-[148px] h-[148px] border-[#B7F1F9]`}
            >
              <div className="bg-[#D9D9D9] box-border rounded-full w-[128px] h-[128px]"></div>
            </div>
            <h1 className="text-24">{name}</h1>
          </div>

          <h1 className="text-24 font-semibold mt-12 mb-4">멘토 정보</h1>

          <ApplyInfo
            gender={gender}
            year={year}
            major1={major1}
            major2={major2}
            location1={location1}
            location2={location2}
            subject={subject}
            method={method}
            meeting={meeting}
          />

          <h1 className="text-24 font-semibold mt-12 mb-4">
            과외 신청 쪽지 보내기
          </h1>
        </div>
      </div>
    </div>
  );
}
