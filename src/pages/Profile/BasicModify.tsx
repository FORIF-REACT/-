import FormContent from '@/components/Signup/formContent'
import Input from '@/components/Signup/input'
import Input2 from '@/components/input2'
import RadioGroup from '@/components/Signup/radioGroup'
import Select from '@/components/Signup/select'
import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import { useNavigate } from 'react-router-dom'


const BasicModify = () => {
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

  const navigate = useNavigate();

  return (
    <>
      <div className='flex justify-center mt-100 mb-200 '>
        <div className='w-480 border-1 rounded-md '>
          <div className='w-400 mt-12 mb-10 mx-auto '>
            <h2 className='h2 text-start mb-12'>기본 정보 수정</h2>
            <div className="flex flex-col gap-5">
              <FormContent label="이메일">
                <div className="flex items-center font-normal text-12">
                  <p>testemail@hanyang.ac.kr</p>
                </div>
              </FormContent>
              <FormContent label="닉네임">
                <Input placeholder="김한양"></Input>
              </FormContent>
              <FormContent label="성별">
                <RadioGroup<string> items={genderOptions}></RadioGroup>
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
            <div className="mt-11 flex justify-center gap-4">
              <Dialog>
                <DialogTrigger>
                  <div className='h-[40px] px-9 text-12 rounded-md bg-primary text-white hover:bg-primary/80 flex items-center '>
                    <p>확인</p>
                  </div>
                </DialogTrigger>
                <DialogContent className='w-72'>
                  <DialogHeader>
                    <DialogTitle>
                      <div className='w-10 h-10 mx-auto mb-3 flex justify-center items-center rounded-full border-1 border-primary '>
                        <p className='text-24 text-primary font-semibold'>!</p></div>
                      <p className=''>제출 하시겠습니까?</p>
                    </DialogTitle>
                  </DialogHeader>
                  <DialogClose className='w-32 mx-auto flex justify-between' >
                    <Button variant="slateFilled" size="sm" onClick={() => navigate("/myprofile")}>확인</Button>
                    <Button variant="slate" size="sm">취소</Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <Button variant="default" size="default" onClick={() => navigate("/myprofile")}>
                취소
              </Button>
            </div>
            <div>
              <Input2 label="닉네임" placeholder="이송희"/>

            </div>
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  )
}

export default BasicModify