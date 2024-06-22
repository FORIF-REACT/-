import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApplyInfo from '@/components/ApplyForm/ApplyInfo';
import ApplyInput from '@/components/ApplyForm/ApplyInput';
import Button from '@/components/ui/button';
import { Alert, AlertOption } from '@/components/ApplyForm/ApplyModal';

export default function Apply() {
  const location = useLocation();
  const navigate = useNavigate();
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

  const [message, setMessage] = React.useState("");
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  const handleSubmit = () => {
    console.log("Submitted text:", message);
    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
      navigate('/mentorlist'); // 멘토 리스트 페이지로 이동
    }, 2000);
  };

  const showAlert = () => {
    const alertOption: AlertOption = {
      title: '신청 확인',
      message: '신청하시겠습니까?',
      onConfirm: handleSubmit
    };
    Alert.show(alertOption);
  };

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
              className="flex items-center justify-center border-4 rounded-full w-[148px] h-[148px] border-[#B7F1F9]"
            >
              <div className="bg-[#D9D9D9] rounded-full w-32 h-32"></div>
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

          <h1 className="text-24 font-semibold mt-14 mb-4">
            과외 신청 쪽지 보내기
          </h1>
        
          <div className='mb-12 flex flex-col items-center'>
            <ApplyInput
              rows={8}
              placeholder="문의하고 싶은 내용을 자세하게 적어주세요!"
              className="flex-1"
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              variant="default"
              size="default"
              onClick={showAlert}
              className="mt-4 w-24"
            >
              쪽지 보내기
            </Button>
          </div>

          {showConfirmation && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-primary/100 text-white p-4 rounded shadow-lg z-50">
              신청되었습니다!
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
