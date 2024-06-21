import Footer from '@/components/ui/Footer'
import Button from '@/components/ui/button'
import Navbar from '@/components/ui/navbar'

const Error = () => {
  return (
    <>
      <div className='w-532 mx-auto mt-60 text-center'>
        <h1 className='text-40 font-semibold leading-60'>알 수 없는 오류가 발생했습니다.</h1>
        <h1 className='text-40 font-semibold leading-60'>다시 시도해 주세요.</h1>
        <Button variant="default" size="lg" className='mt-16 mb-60 w-100' >홈으로 이동하기</Button>
      </div>
    </>
  )
}

export default Error