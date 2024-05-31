import Button from "@/components/ui/button";

export default function Login() {
  const name = "닉네임";

  return (
    <>
      <div className="w-page h-auto px-page flex flex-col font-sans">
        <div className="mt-24 mb-12 px-2">
          <div className="font-semibold text-20 leading-40">
            <p><span className="text-40">{name}</span>님,</p>
            <p>가입이 완료되었습니다.</p>
          </div>

          <span className="mt-4 font-normal text-16 leading-24">
            <p>멘토 정보를 입력해 수업을 개설하고,</p>
            <p>다양한 멘토님들을 살펴보고 과외 신청을 해보세요!</p>
          </span>
        </div>
        <div className="flex flex-col gap-4">
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
