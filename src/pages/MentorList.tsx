import * as React from 'react';
import ListBox from '@/components/List/ListBox';

const mentors = [
  {
    tier: '플레티넘',
    name: '박기정',
    gender: '남성',
    year: 2024,
    major1: '공과대학',
    major2: '컴퓨터소프트웨어',
    location1: '서울특별시',
    location2: '성동구',
    subject: '미적분2',
    method: '이론 위주',
    meeting: '비대면',
    point: 400,
  },
  {
    tier: '플레티넘',
    name: '김야호',
    gender: '여성',
    year: 2024,
    major1: '공과대학',
    major2: '정보시스템',
    location1: '서울특별시',
    location2: '동대문구',
    subject: '공업수학1',
    method: '이론 위주',
    meeting: '대면',
    point: 300,
  },
  {
    tier: '골드',
    name: '개나리',
    gender: '여성',
    year: 2024,
    major1: '공과대학',
    major2: '미래자동차',
    location1: '서울특별시',
    location2: '성동구',
    subject: '미적분1',
    method: '이론 위주',
    meeting: '비대면',
    point: 200,
  },
  {
    tier: '골드',
    name: '김영웅',
    gender: '남성',
    year: 2024,
    major1: '자연대학',
    major2: '물리학',
    location1: '서울특별시',
    location2: '관악구',
    subject: '일반물리',
    method: '이론 위주',
    meeting: '대면',
    point: 100,
  },
  {
    tier: '실버',
    name: '원태인',
    gender: '여성',
    year: 2024,
    major1: '공과대학',
    major2: '화학공학',
    location1: '서울특별시',
    location2: '서초구',
    subject: '공업수학1',
    method: '이론 위주',
    meeting: '비대면',
    point: 100,
  },
  {
    tier: '실버',
    name: '이승엽',
    gender: '여성',
    year: 2024,
    major1: '공과대학',
    major2: '컴퓨터소프트웨어',
    location1: '서울특별시',
    location2: '강남구',
    subject: '공업수학1',
    method: '이론 위주',
    meeting: '비대면',
    point: 100,
  },
  {
    tier: '실버',
    name: '이재현',
    gender: '여성',
    year: 2024,
    major1: '공과대학',
    major2: '컴퓨터소프트웨어',
    location1: '서울특별시',
    location2: '동대문구',
    subject: '공업수학1',
    method: '이론 위주',
    meeting: '비대면',
    point: 50,
  },
  {
    tier: '실버',
    name: '오승환',
    gender: '남성',
    year: 2024,
    major1: '공과대학',
    major2: '컴퓨터소프트웨어',
    location1: '서울특별시',
    location2: '동대문구',
    subject: '공업수학1',
    method: '이론 위주',
    meeting: '비대면',
    point: 20,
  },

  // ... 다른 멘토 객체 추가
];

export default function MentorList() {
  return (
    <div className="w-full h-auto flex items-center">
      <div className="w-page h-auto max-w-[1100px] mx-auto ">
        <div className="w-full max-w-[896px] mx-auto">
          <div className="mt-24 py-8">
            <h1 className="text-36 font-sans font-semibold text-[#000000] leading-[50px] tracking-[-0.007em]">
              멘토 목록
            </h1>
          </div>

          <div className="w-full">
            <div className="ml-20 flex text-14 text-[#44475D] mb-4">
              <span>기본정보</span>
              <span className="ml-12">입학연도</span>
              <span className="ml-10">전공</span>
              <span className="ml-28">선호지역</span>
              <span className="ml-14">강의과목</span>
              <span className="ml-12">강의방식</span>
              <span className="ml-12">강의형태</span>
            </div>

            <div className="flex flex-col gap-5">
              {mentors.map((mentor, index) => (
                <ListBox
                  key={index}
                  tier={mentor.tier}
                  name={mentor.name}
                  gender={mentor.gender}
                  year={mentor.year}
                  major1={mentor.major1}
                  major2={mentor.major2}
                  location1={mentor.location1}
                  location2={mentor.location2}
                  subject={mentor.subject}
                  method={mentor.method}
                  meeting={mentor.meeting}
                  point={mentor.point}
                />
              ))}
            </div>
            <div className="mt-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
