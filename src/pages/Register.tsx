import FormContent from "@/components/formContent";
import Button from "@/components/ui/button";
import Input from "@/components/input";
import RadioGroup from "@/components/radioGroup";
import Select from "@/components/select";

export default function Register() {
  const genderOptions = [
    { id: 0, name: "여성", value: "FEMALE" },
    { id: 1, name: "남성", value: "MALE" },
  ];
  const admissionYearItems = [
    //picker로 대체 필요
    { id: 0, name: "2024", value: 2024 },
    { id: 1, name: "2023", value: 2023 },
    { id: 2, name: "2022", value: 2022 },
    { id: 3, name: "2021", value: 2021 },
    { id: 4, name: "2020", value: 2020 },
    { id: 5, name: "2019", value: 2019 },
  ];

  const majorItems = [
    { id: 0, name: "서울 공과대학 유기나노공학과", value: 23 },
    { id: 1, name: "서울 공과대학 기계공학부", value: 12 },
    { id: 2, name: "서울 공과대학 산업공학과", value: 15 },
    { id: 3, name: "서울 공과대학 컴퓨터소프트웨어학부", value: 32 },
  ];

  const regionItems = [
    { id: 0, name: "서울특별시 성동구", value: 23 },
    { id: 1, name: "서울특별시 양천구", value: 12 },
    { id: 2, name: "서울특별시 광진구", value: 15 },
    { id: 3, name: "서울특별시 강동구", value: 32 },
  ];
  return (
    <>
      <div className="w-[1100px] h-auto px-[350px] flex flex-col font-['Noto_Sans_KR']">
        <div className="mt-[75px] flex justify-center align-middle">
          <span className="font-semibold text-[40px] leading-[50px]">회원가입</span>
        </div>
        <div className="my-[43px] px-[8px]">
          <span className="font-semibold text-[20px] leading-[20px]">기본 정보 입력</span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-[23px]">
            <FormContent label="이메일">
              <span className="font-normal text-[15px]">
                testemail@hanyang.ac.kr
              </span>
            </FormContent>
            <FormContent label="닉네임">
              <Input placeholder="김한양"></Input>
            </FormContent>
            <FormContent label="성별">
              <RadioGroup<string>
                items={genderOptions}
              ></RadioGroup>
            </FormContent>
            <FormContent label="입학연도">
              <Select<number>
                items={admissionYearItems}
                onSelectItem={() => {}}
              ></Select>
            </FormContent>
            <FormContent label="전공">
              <Select<number>
                items={majorItems}
                onSelectItem={() => {}}
              ></Select>
            </FormContent>
            <FormContent label="선호지역">
              <Select<number>
                items={regionItems}
                onSelectItem={() => {}}
              ></Select>
            </FormContent>
          </div>
        </div>
        <div className="mt-[43px] flex justify-center">
          <Button variant="default" size="default">
            완료
          </Button>
        </div>
      </div>
    </>
  );
}
