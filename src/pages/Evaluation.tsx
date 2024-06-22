import * as React from 'react';
import MentorEvalContainer from '@/components/Container/MentorEvalContainer';
import MentiEvalContainer from '@/components/Container/MentiEvalContainer';

const mentorProfiles = [
  {
    point: 100,
    username: "사용자1",
    gender: "여성",
    admissionYear: 2021,
    major: "공과대학 산업공학과",
    preferRegion: "서울특별시 양천구",
    lectureName: "공업수학1",
    lectureType: "이론 위주",
    meetType: "비대면",
    lectureContent: "공업수학1 이론을 바탕으로 한 기출 문제 풀이",
    preferDay: "월요일",
    preferTime: "6시",
    numberOfClasses: 5,
  },
  {
    point: 220,
    username: "사용자2",
    gender: "남성",
    admissionYear: 2020,
    major: "경영학과",
    preferRegion: "서울특별시 강남구",
    lectureName: "경영학 원론",
    lectureType: "실습 위주",
    meetType: "대면",
    lectureContent: "경영학 원론 이론과 사례 분석",
    preferDay: "화요일",
    preferTime: "10시",
    numberOfClasses: 10,
  },
  // 더 많은 예시 데이터 추가 가능
];

const mentiProfiles = [
  {
    point: 100,
    username: "멘티1",
    gender: "여성",
    admissionYear: 2021,
    major: "공과대학 산업공학과",
    preferRegion: "서울특별시 양천구",
    lectureName: "공업수학1"
  },
  {
    point: 200,
    username: "멘티2",
    gender: "남성",
    admissionYear: 2020,
    major: "경영학과",
    preferRegion: "서울특별시 강남구",
    lectureName: "경영학 원론"
  },
  {
    point: 500,
    username: "멘티3",
    gender: "여성",
    admissionYear: 2019,
    major: "의과대학 간호학과",
    preferRegion: "서울특별시 종로구",
    lectureName: "기초 간호학"
  },
  {
    point: 270,
    username: "멘티4",
    gender: "남성",
    admissionYear: 2018,
    major: "문과대학 철학과",
    preferRegion: "서울특별시 마포구",
    lectureName: "서양 철학사"
  },
  {
    point: 370,
    username: "멘티5",
    gender: "여성",
    admissionYear: 2022,
    major: "자연과학대학 생명과학과",
    preferRegion: "서울특별시 강북구",
    lectureName: "유전학"
  }
];

export default function Evaluation() {
  return (
    <div className="w-full h-auto flex items-center">
      <div className="w-page h-auto max-w-[1100px] mx-auto">
        <div className="w-full max-w-[896px] mx-auto">
          <div className="mt-24 py-8">
            <h1 className="text-36 font-sans font-semibold text-[#000000] leading-[50px] tracking-[-0.007em]">
              평가하기
            </h1>
            {/* '멘토' 컨테이너 */}
            <div className="relative mt-[60px] w-[940px] h-[600px]">
              <span className="text-[#000000] font-normal text-[20px]">
                멘토
              </span>

              {/* 멘토 정보 */}
              <div className="flex overflow-x-auto w-[940px] h-[600px] gap-[60px]">
                {mentorProfiles.map((profile, index) => (
                  <div key={index} className="min-w-[440px] h-[560px] bg-gray-200">
                    <MentorEvalContainer {...profile} />
                  </div>
                ))}
              </div>
            </div>

            {/* 새로운 컨테이너 */}
            <div className="relative mt-[120px] w-[940px] h-[306px]">
              <span className="text-[#000000] font-normal text-[20px]">
                멘티
              </span>
              <div className="flex overflow-x-auto w-[940px] h-[284px] gap-[60px]">
                {mentiProfiles.map((profile, index) => (
                  <div key={index} className="min-w-[440px] h-[266px] bg-gray-200">
                    <MentiEvalContainer {...profile} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
