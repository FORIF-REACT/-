import FormContent from "@/components/formContent";
import ButtonOutline from "@/components/buttonOutline";
import Select from "@/components/select";
import Textarea from "@/components/textarea";

export default function Register() {
  const subjectItems = [
    { id: 0, name: "공업수학1", value: 23 },
    { id: 1, name: "동역학", value: 12 },
    { id: 2, name: "재료역학", value: 15 },
    { id: 3, name: "전기공학", value: 32 },
  ];

  const learningFocusItems = [
    { id: 0, name: "이론 중심", value: "theory" },
    { id: 1, name: "기출 중심", value: "previous" },
  ];

  const learningTypeItems = [
    { id: 0, name: "대면 수업", value: "offline" },
    { id: 1, name: "온라인 수업", value: "online" },
  ];

  const dayOfTheWeekItems = [
    { id: 0, name: "월요일", value: "MONDAY" },
    { id: 1, name: "화요일", value: "TUESDAY" },
    { id: 2, name: "수요일", value: "WEDNESDAY" },
    { id: 3, name: "목요일", value: "THURSDAY" },
    { id: 4, name: "금요일", value: "FRIDAY" },
    { id: 5, name: "토요일", value: "SATURDAY" },
    { id: 6, name: "일요일", value: "SUNDAY" },
  ];

  const timeItems = [
    //picker로 대체 필요
    { id: 0, name: "18:00", value: "18:00" },
  ];

  const totalLectureCountItems = [
    //picker로 대체 필요
    { id: 0, name: "1회", value: 1 },
    { id: 1, name: "2회", value: 2 },
    { id: 3, name: "3회", value: 3 },
  ];

  return (
    <>
      <div className="w-[1100px] h-auto px-[350px] flex flex-col font-['Noto_Sans_KR']">
        <div className="mt-[75px] flex justify-center align-middle">
          <span className="font-semibold text-[40px] leading-[50px]">
            수업 개설하기
          </span>
        </div>
        <div className="mt-[70px] mb-[40px] px-[8px]">
          <div>
            <span className="font-semibold text-[20px] leading-[20px]">
              멘토 정보 입력
            </span>
          </div>
          <div>
            <span className="font-normal text-[13px] leading-[20px]">
              멘토 정보를 입력하지 않으면 멘토 목록에 등록되지 않습니다.
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-[23px]">
            <FormContent label="강의 과목">
              <Select<number>
                items={subjectItems}
                onSelectItem={() => {}}
              ></Select>
            </FormContent>
            <FormContent label="강의 방식">
              <Select<string>
                items={learningFocusItems}
                onSelectItem={() => {}}
              ></Select>
            </FormContent>
            <FormContent label="강의 형태">
              <Select<string>
                items={learningTypeItems}
                onSelectItem={() => {}}
              ></Select>
            </FormContent>
            <FormContent label="강의 내용">
              <Textarea
                rows={4}
                className="items-start"
                placeholder={
                  "강의 내용을 자유롭게 작성해주세요.\n예) 공업수학1 이론을 바탕으로한 기출 문제 풀이\n별도의 문제 풀이와 질의 응답"
                }
              ></Textarea>
            </FormContent>
            <FormContent label="선호 요일 및 시간대">
              <div className="w-full flex flex-row gap-[8px]">
                <Select<string>
                  items={dayOfTheWeekItems}
                  onSelectItem={() => {}}
                ></Select>
                <Select<string>
                  items={timeItems}
                  onSelectItem={() => {}}
                ></Select>
              </div>
            </FormContent>
            <FormContent label="총 수업 횟수">
              <Select<number>
                items={totalLectureCountItems}
                onSelectItem={() => {}}
              ></Select>
            </FormContent>
          </div>
        </div>
        <div className="mt-[43px] flex justify-center">
          <ButtonOutline
            label="완료"
            className="w-[100px] h-[40px] rounded-[10px] font-normal text-[13px]"
          ></ButtonOutline>
        </div>
      </div>
    </>
  );
}
