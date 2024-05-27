import ButtonOutline from "@/components/buttonOutline";

export default function Login() {
  return (
    <>
      <div className="w-[1100px] h-auto flex flex-col font-['Noto_Sans_KR']">
        <div className="mt-[75px] mb-[32px] flex justify-center align-middle">
          <span className="font-semibold text-[50px]">로그인</span>
        </div>
        <div className="px-[262px] flex flex-col">
          <div className="my-[64px]">
            <span className="font-semibold text-[30px]">
              안녕하세요, <span>Unitto</span>입니다.
            </span>
            <br />
            <span className="font-normal text-[20px]">
              한양대 계정으로만 로그인 가능합니다.
            </span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <ButtonOutline
              label="한양대 계정으로 로그인"
              className="w-full h-[86px] rounded-[5px] font-normal text-[25px]"
            ></ButtonOutline>
            <ButtonOutline
              label="회원가입"
              className="w-full h-[86px] rounded-[5px] font-normal text-[25px]"
            ></ButtonOutline>
          </div>
        </div>
      </div>
    </>
  );
}
