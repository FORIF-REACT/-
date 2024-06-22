import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import ProfileImg from '../Profile/ProfileImg';

export interface ListBoxProps {
  name: string;
  gender: string;
  year: number;
  major1: string;
  major2: string;
  location1: string;
  location2: string;
  subject: string;
  method: string;
  meeting: string;
  tier: string;
  point: number;
}

const ListBox: React.FC<ListBoxProps> = ({
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
  tier,
  point,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/apply', {
      state: {
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
        tier,
        point,
      },
    });
  };

  return (
    <div className={cn('flex justify-center text-12 font-sans')}>
      <div
        className={cn(
          'relative border-[#717D8D] bg-[#FBFDFF] box-border border rounded-[10px] filter drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] w-full max-w-[896px] h-[76px] flex items-center p-4'
        )}
      >
        <div className="flex items-center w-full gap-4">
          <div className="flex items-center w-32 gap-2">
            <ProfileImg size={10} point={point} />
            <div className="w-24 flex flex-col text-16">
              <h1>{name}</h1>
              <h1 className="text-[12px]">{gender}</h1>
            </div>
          </div>
          <div className="w-20 ml-6">{year}</div>
          <div className="flex flex-col w-32">
            <h1>{major1}</h1>
            <h1>{major2}</h1>
          </div>
          <div className="flex flex-col  w-24 ml-2">
            <h1>{location1}</h1>
            <h1>{location2}</h1>
          </div>
          <div className="w-24 ml-2">{subject}</div>
          <div className="w-24">{method}</div>
          <div className="w-20">{meeting}</div>
          <button
            className="box-sizing border-box flex justify-center items-center gap-10 w-16 h-8 bg-white border-3 border-primary hover:border-[#6153b1] rounded-full w-20 transition-all duration-200"
            onClick={handleButtonClick}
          >
            <span className="text-primary text-12 hover:text-[#6153b1] transition-all duration-200">신청하기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListBox;
