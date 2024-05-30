import Button from "@/components/ui/button";

export default function Login() {
  const name = "닉네임";

  return (
    <>
      <div className="w-[1100px] h-auto px-[350px] flex flex-col font-['Noto_Sans_KR']">
        <div className="mt-[110px] mb-[48px] px-[8px]">
          <span className="font-semibold text-[20px] leading-[40px]">
            <span className="text-[40px]">{name}</span>님,
            <br />
            가입이 완료되었습니다.
          </span>
          <br />
          <span className="mt-[16px] font-normal text-[15px] leading-[25px]">
            멘토 정보를 입력해 수업을 개설하고,
            <br />
            다양한 멘토님들을 살펴보고 과외 신청을 해보세요!
          </span>
        </div>
        <div className="flex flex-col gap-[15px]">
          <Button variant="default" size="lg">
            수업 개설하기
          </Button>
          <Button variant="default" size="lg">
            과외 신청하기
          </Button>
        </div>
      </div>
    </>
  );
}
