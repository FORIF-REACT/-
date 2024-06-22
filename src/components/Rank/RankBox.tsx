import * as React from 'react';
import { cn } from '@/lib/utils';

export interface RankBoxProps {
  rank: number;
  point: number;
  name: string;
  tier: '플레티넘' | '골드' | '실버' | '브론즈';
}

const RankBox: React.FC<RankBoxProps> = ({ rank, point, name, tier }) => {
  const tierColor: Record<string, string> = {
    플레티넘: 'border-[#B7F1F9]',
    골드: 'border-[#F4E075]',
    실버: 'border-[#D0D0D0]',
    브론즈: 'border-[#E6BA8F]',
  };

  return (
    <div className={cn('items-center justify-center')}>
      <div
        className={cn(
          'border-[#cdd6e2] bg-[#FBFDFF] box-border border rounded-[10px] filter drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] w-[720px] h-[64px] flex items-center'
        )}
      >
        <h1 className="w-4 font-normal text-[20px] ml-[24px] flex justify-center">{rank}</h1>

        <div className="flex flex-row items-center box-brder w-[130px] h-[50px] ml-[12px]">
          <div
            className={`flex items-center justify-center box-border border-2 rounded-full w-[40px] h-[40px] ${tierColor[tier]}`}
          >
            <div className="bg-[#D9D9D9] box-border rounded-full w-[32px] h-[32px]"></div>
          </div>
          <h1 className="text-base ml-[16px]">{name}</h1>
        </div>
        <h1 className="ml-auto mr-[32px] font-normal text-[20px]">{point}P</h1>
      </div>
    </div>
  );
};

export default RankBox;
