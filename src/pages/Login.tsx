import Button from "@/components/ui/button";

export default function Login() {
  return (
    <>
      <div className="w-page h-auto px-page flex flex-col font-sans">
        <div className="mt-24 flex justify-center align-middle">
          <h1 className="h1">로그인</h1>
        </div>
        <div className="mt-11">
          <p className="font-semibold text-20 leading-40">
            안녕하세요,{" "}
            <span className="font-logo font-normal text-40 leading-60">
              Unitto
            </span>
            입니다.
          </p>
          <p className="font-normal text-16 leading-24">
            한양대 계정으로만 로그인 가능합니다.
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          <Button variant="default" size="lg">
            한양대 계정으로 로그인
          </Button>
          <Button variant="default" size="lg">
            회원가입
          </Button>
        </div>
      </div>
    </>
  );
}
