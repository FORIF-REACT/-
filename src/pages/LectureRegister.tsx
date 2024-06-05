import FormContent from "@/components/Signup/formContent";
import Button from "@/components/ui/button";
import Select from "@/components/Signup/select";
import Textarea from "@/components/textarea";

export default function Register() {
  const subjectItems = [
    { id: 0, name: "공업수학1", value: 23 },
    { id: 1, name: "동역학", value: 12 },
    { id: 2, name: "재료역학", value: 15 },
    { id: 3, name: "전기공학", value: 32 },
  ];

  const learningFocusItems = [
    { id: 0, name: "이론 위주", value: "theory" },
    { id: 1, name: "기출 위주", value: "previous" },
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
    { id: 0, name: "18시", value: "18:00" },
  ];

  const totalLectureCountItems = [
    //picker로 대체 필요
    { id: 0, name: "1회", value: 1 },
    { id: 1, name: "2회", value: 2 },
    { id: 3, name: "3회", value: 3 },
  ];

  return (
    <>
      <div className="w-page h-auto px-page flex flex-col font-sans">
        <div className="mt-24 flex justify-center align-middle">
          <h1 className="h1">수업 개설하기</h1>
        </div>
        <div className="mt-11 mb-5">
          <h2 className="h2">멘토 정보 입력</h2>
          <p className="mt-2 font-normal text-12 leading-20">
            멘토 정보를 입력하지 않으면 멘토 목록에 등록되지 않습니다.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <FormContent label="강의 과목">
              <Select<number>
                items={subjectItems}
                onSelectItem={() => {}}
              ></Select>
            </FormContent>
            <FormContent label="강의 중점">
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
                rows={2}
                className="items-start"
                placeholder={
                  "강의 내용을 자유롭게 작성해주세요.\n예) 공업수학1 이론을 바탕으로한 기출 문제 풀이\n별도의 문제 풀이와 질의 응답"
                }
              ></Textarea>
            </FormContent>
            <FormContent label="선호 요일 - 시간대">
              <div className="w-full flex flex-row gap-4">
                <div className="max-w-20">
                  <Select<string>
                    items={dayOfTheWeekItems}
                    onSelectItem={() => {}}
                  ></Select>
                </div>
                <div className="flex-1 flex flex-row gap-2">
                  <Select<string>
                    items={timeItems}
                    onSelectItem={() => {}}
                  ></Select>
                  <label> ~ </label>
                  <Select<string>
                    items={timeItems}
                    onSelectItem={() => {}}
                  ></Select>
                </div>
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
        <div className="mt-11 flex justify-center">
          <Button variant="default" size="default">
            완료
          </Button>
        </div>
      </div>
    </>
  );
}
