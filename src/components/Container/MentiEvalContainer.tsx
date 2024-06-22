import Tag from '@/components/ui/Tag';

export default function MentiEvalContainer() {
  return (
    <div className="min-w-[440px] min-h-[266px] bg-[#FBFDFF] mr-[31px] relative rounded-[7px] shadow-md">
      
      {/* 프로필 사진(닉네임) + 상세 정보 컨테이너 */}
      <div className="w-[440px] h-[140px] bg-[#FBFDFF] flex items-start shadow-md">
        {/* 프로필 사진(닉네임) 컨테이너 */}
        <div className="w-[72px] h-[96px] bg-[#FBFDFF] flex flex-col items-center ml-[36px] mt-[22px]">
          {/* 프로필 사진 */}
          <div className="w-[72px] h-[72px] bg-gray-300 rounded-full"></div>
          {/* 닉네임 */}
          <span className="mt-[8px] text-[16px] font-normal text-[#000000]">닉네임</span>
        </div>
    
        {/* 상세 정보 컨테이너 */}
        <div className="ml-[36px] w-[296px] h-[140px] bg-[#FBFDFF] flex flex-col justify-around shadow-sm">
            {/* 상세 정보 */}
            <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
                <span className="w-[80px] ml-[20px] text-[12px] font-medium">성별</span>
                <span className="flex-grow text-[12px] font-medium">여자</span>
            </div>
            <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
                <span className="w-[80px] ml-[20px] text-[12px] font-medium">입학연도</span>
                <span className="flex-grow text-[12px] font-medium">2021</span>
            </div>
            <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
                <span className="w-[80px] ml-[20px] text-[12px] font-medium">전공</span>
                <span className="flex-grow text-[12px] font-medium">공과대학 산업공학과</span>
            </div>
            <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
                <span className="w-[80px] ml-[20px] text-[12px] font-medium">선호지역</span>
                <span className="flex-grow text-[12px] font-medium">서울특별시 양천구</span>
            </div>
            <div className="w-[296px] h-[28px] bg-[#FBFDFF] flex items-center rounded-[7px] shadow-sm">
                <span className="w-[80px] ml-[20px] text-[12px] font-medium">수강과목</span>
                <span className="flex-grow text-[12px] font-medium">공업수학1</span>
            </div>
        </div>

      </div>

      <div className="mt-[20px] flex justify-center items-center space-x-10"> {/*onClick 메소드 구현 - count 넣어서 클릭 시 count+1되도록 설정*/}
        <button className="bg-transparent border-none cursor-pointer">
          <Tag label="시간준수" />
        </button>
        <button className="bg-transparent border-none cursor-pointer">
          <Tag label="적극성" />
        </button>
        <button className="bg-transparent border-none cursor-pointer">
          <Tag label="성실성" />
        </button>
      </div>
      
      <div className="mt-[20px] flex justify-center items-center"> {/*onClick 메소드 구현*/}
        <button className="box-border flex justify-center items-center w-20 h-8 bg-white border-2 border-[#94A3B8] rounded-[32px]">
            <span className="text-[#7C6DD1] text-[12px]">제출</span>
        </button>
      </div>


    </div>


  );
}
