import * as React from 'react';

interface InfoRowProps {
  label: string;
  value: string;
  isContent?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, isContent }) => {
  return (
    <div className={`flex items-center w-full ${isContent ? 'py-4' : 'h-12 py-2'} border-b border-gray-200`}>
      <div className="text-gray-500 font-normal text-16 w-40 flex-shrink-0">{label}</div>
      <div className={`font-normal text-16 text-black ${isContent ? 'leading-6' : ''} w-full`}>{value}</div>
    </div>
  );
};

export default InfoRow;
