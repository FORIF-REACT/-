import FormContent from "@/components/Signup/formContent";
import Button from "@/components/ui/button";
import Input from "@/components/Signup/input";
import RadioGroup from "@/components/Signup/radioGroup";
import Select from "@/components/Signup/select";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import type { RegisterForm } from "@/types/Register";

export default function Register() {
  const email = "testemail@hanyang.ac.kr"; // TODO: Reference from User data

  const genderOptions = [
    { id: 0, name: "여성", value: "FEMALE" },
    { id: 1, name: "남성", value: "MALE" },
  ];

  const admissionYearItems = [
    //picker로 대체 필요
    { id: 0, value: 2024 },
    { id: 1, value: 2023 },
    { id: 2, value: 2022 },
    { id: 3, value: 2021 },
    { id: 4, value: 2020 },
    { id: 5, value: 2019 },
  ];

  const majorItems = [
    { id: 0, value: "서울 공과대학 유기나노공학과" },
    { id: 1, value: "서울 공과대학 기계공학부" },
    { id: 2, value: "서울 공과대학 산업공학과" },
    { id: 3, value: "서울 공과대학 컴퓨터소프트웨어학부" },
  ];

  const regionItems = [
    { id: 0, value: "서울특별시 성동구" },
    { id: 1, value: "서울특별시 양천구" },
    { id: 2, value: "서울특별시 광진구" },
    { id: 3, value: "서울특별시 강동구" },
  ];

  const { ...methods } = useForm<RegisterForm>({
    defaultValues: {
      nickname: "",
      gender: genderOptions[0].value,
      admissionYear: admissionYearItems[0].value,
      major: majorItems[0].value,
      preferRegion: regionItems[0].value,
    },
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<RegisterForm> = (data) => console.log(data); // TODO: request with form data

  return (
    <FormProvider {...methods}>
      <form id="registerFormData" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="h-screen w-screen mx-auto mt-[60px] max-w-[400px] flex flex-col gap-4 justify-start items-stretch">
          <div className="mt-24 flex justify-center align-middle">
            <h1 className="h1">회원가입</h1>
          </div>
          <div className="mt-11 mb-11">
            <h2 className="h2">기본 정보 입력</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-5">
              <FormContent label="이메일">
                <div className="flex items-center font-normal text-12">
                  <p>{email}</p>
                </div>
              </FormContent>
              <FormContent label="닉네임">
                <Input name="nickname" placeholder="김한양" required />
              </FormContent>
              <FormContent label="성별">
                <RadioGroup<string>
                  name="gender"
                  items={genderOptions}
                  required
                />
              </FormContent>
              <FormContent label="입학연도">
                <Select<number>
                  name="admissionYear"
                  items={admissionYearItems}
                />
              </FormContent>
              <FormContent label="전공">
                <Select<string> name="major" items={majorItems} />
              </FormContent>
              <FormContent label="선호지역">
                <Select<string> name="preferRegion" items={regionItems} />
              </FormContent>
            </div>
            <div className="mt-11 flex justify-center">
              <Button form="registerFormData" variant="default" size="default">
                완료
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
