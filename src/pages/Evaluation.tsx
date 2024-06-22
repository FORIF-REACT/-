import * as React from 'react';
import MentorEvalContainer from '@/components/Container/MentorEvalContainer';
import MentiEvalContainer from '@/components/Container/MentiEvalContainer';

export default function Evaluation() {
  return (
    <div className="w-full h-auto flex items-center">
      <div className="w-page h-auto max-w-[1100px] mx-auto ">
        <div className="w-full max-w-[896px] mx-auto">
          <div className="mt-24 py-8">
            <h1 className="text-36 font-sans font-semibold text-[#000000] leading-[50px] tracking-[-0.007em]">
              평가하기
            </h1>
          {/* '멘토' 컨테이너 */}
          <div className="relative mt-[60px] w-[940px] h-[600px]">
            <span className="  text-[#000000] font-normal text-[20px]">
              멘토
            </span>
            
            {/* 멘토 정보 */}
            <div className="flex overflow-x-auto w-[940px] h-[600px] gap-[60px]">
              {/* 새로운 컨테이너들 */}
              <div className="min-w-[440px] h-[560px] bg-gray-200"><MentorEvalContainer/></div>
              <div className="min-w-[440px] h-[560px] bg-gray-200"><MentorEvalContainer/></div>
              <div className="min-w-[440px] h-[560px] bg-gray-200"><MentorEvalContainer/></div>
              <div className="min-w-[440px] h-[560px] bg-gray-200"><MentorEvalContainer/></div>
              <div className="min-w-[440px] h-[560px] bg-gray-200"><MentorEvalContainer/></div>
              <div className="min-w-[440px] h-[560px] bg-gray-200"><MentorEvalContainer/></div>
              <div className="min-w-[440px] h-[560px] bg-gray-200"><MentorEvalContainer/></div>
              {/* 필요에 따라 컨테이너 추가 */}
            </div>
          </div>
  
          {/* 새로운 컨테이너 */}
          <div className="relative mt-[120px] w-[940px] h-[306px]">
            <span className=" text-[#000000] font-normal text-[20px]">
              멘티
            </span>
            <div className="flex overflow-x-auto w-[940px] h-[284px] gap-[60px]">
                <div className="min-w-[440px] h-[266px] bg-gray-200"><MentiEvalContainer/></div>
                <div className="min-w-[440px] h-[266px] bg-gray-200"><MentiEvalContainer/></div>
                <div className="min-w-[440px] h-[266px] bg-gray-200"><MentiEvalContainer/></div>
                <div className="min-w-[440px] h-[266px] bg-gray-200"><MentiEvalContainer/></div>
                <div className="min-w-[440px] h-[266px] bg-gray-200"><MentiEvalContainer/></div>
                <div className="min-w-[440px] h-[266px] bg-gray-200"><MentiEvalContainer/></div>
                </div>
          </div>

          
          </div>
        </div>
      </div>
    </div>
  );
}
