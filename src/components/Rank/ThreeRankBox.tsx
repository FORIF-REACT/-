import React from 'react';

export interface BoxProps {
  rank: number;
  color: string;
  width: number;
  height: number;
  boxHeight: number;
  point: number;
  name: string;
  tier: '플레티넘' | '골드' | '실버' | '브론즈';
}

const ThreeRankBox: React.FC<BoxProps> = ({
  rank,
  color,
  width,
  height,
  boxHeight,
  point,
  name,
  tier,
}) => {
  const tierColor: Record<string, string> = {
    플레티넘: 'border-[#B7F1F9]',
    골드: 'border-[#F4E075]',
    실버: 'border-[#D0D0D0]',
    브론즈: 'border-[#E6BA8F]',
  };

  const isFirst = rank === 1;
  const circleSize = isFirst ? 'w-[110px] h-[110px]' : 'w-[90px] h-[90px]';
  const innerCircleSize = isFirst
    ? 'w-[90px] h-[90px]'
    : 'w-[73.64px] h-[73.64px]';
  const nameSize = 'text-[20px]';

  return (
    <div
      className="relative flex flex-col items-center"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <h1
        className="text-[56px] font-semibold leading-[56px] tracking-[-0.007em]"
        style={{ color, margin: isFirst ? '20px' : '0px' }}
      >
        {rank}
      </h1>
      <div className="flex-grow"></div>
      <div
        className="relative flex flex-col items-center box-border border rounded-[10px] filter drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
        style={{
          width: `${width}px`,
          height: `${boxHeight}px`,
          borderColor: color,
          bottom: '0px',
        }}
      >
        <div
          className={`absolute top-0 flex items-center justify-center box-border border-2 rounded-full ${circleSize} ${tierColor[tier]}`}
          style={{ top: isFirst ? '30px' : '20px' }}
        >
          <div
            className={`bg-[#D9D9D9] box-border rounded-full ${innerCircleSize}`}
          ></div>
        </div>
        <h1 className={`absolute ${nameSize} mt-4`} style={{ bottom: '80px' }}>
          {name}
        </h1>
        <h1
          className="absolute font-normal text-[20px]"
          style={{ bottom: '20px' }}
        >
          {point}P
        </h1>
      </div>
    </div>
  );
};

export default ThreeRankBox;
