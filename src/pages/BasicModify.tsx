import SideMenu from '@/components/Profile/SideMenu'
import FormContent from '@/components/Signup/formContent'
import Input from '@/components/Signup/input'
import RadioGroup from '@/components/Signup/radioGroup'
import Select from '@/components/Signup/select'
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/navbar'
import Button from '@/components/ui/button'

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

  return (
    <>
      <Navbar />
      <div className='w-672 mx-auto mt-100 mb-200 flex justify-between'>
          <div className='w-36 flex flex-col items-center'>
            <h1 className='text-36 h1 mb-3'>내 프로필</h1>
            <SideMenu menu1="기본 정보 수정" menu2="멘토 정보 수정" />
          </div>

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
            <div className="mt-11 flex justify-center">
              <Button variant="default" size="default">
                완료
              </Button>
            </div>
          </div>
            </div>

          </div>
            
      <Footer />
    </>
  )
}

export default BasicModify