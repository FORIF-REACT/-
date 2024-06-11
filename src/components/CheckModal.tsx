import Button from './ui/button'

const CheckModal = () => {
  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-black/40 fixed' >

        <div className='w-72 mx-auto py-5 flex flex-col gap-3 border-3 rounded-lg bg-white'>
          <div className='w-10 h-10 mx-auto flex items-center justify-center rounded-full border-primary border-1'>
            <p className='text-24 text-primary'>!</p>
          </div>
          <p className='text-darkgray text-16 text-center'>제출 하시겠습니까?</p>
          <div className='w-32 mx-auto flex justify-between'>
            <Button variant="slateFilled" size="sm" >확인</Button>
            <Button variant="slate" size="sm" >취소</Button>
          </div>
        </div>

      </div>
    </>
  )
}

export default CheckModal