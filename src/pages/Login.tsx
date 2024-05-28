import ButtonOutline from "@/components/buttonOutline";

export default function Login() {
  return (
    <>
      <div className="w-[1100px] h-auto px-[350px] flex flex-col font-['Noto_Sans_KR']">
        <div className="mt-[75px] flex justify-center align-middle">
          <span className="font-semibold text-[40px] leading-[50px]">로그인</span>
        </div>
        <div className="my-[54px] px-[8px]">
          <span className="font-semibold text-[20px] line">
            안녕하세요,{" "}
            <span className="font-['Orelega_One'] font-normal text-[40px]">
              Unitto
            </span>
            입니다.
          </span>
          <br />
          <span className="font-normal text-[15px]">
            한양대 계정으로만 로그인 가능합니다.
          </span>
        </div>
        <div className="flex flex-col gap-[15px]">
          <ButtonOutline
            label="한양대 계정으로 로그인"
            className="w-full h-[50px] border-[3px] rounded-[5px] font-normal text-[20px]"
          ></ButtonOutline>
          <ButtonOutline
            label="회원가입"
            className="w-full h-[50px] border-[3px] rounded-[5px] font-normal text-[20px]"
          ></ButtonOutline>
        </div>
      </div>
    </>
  );
}
