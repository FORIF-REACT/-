interface props {
  title: string;
  content:string;
}

const BasicLabel = ({title, content}: props) => {
  return (
    <div className='flex w-[360px] h-9 border-l border-b border-border justify-items-start items-center'>
      <div className='w-[74px] ml-5 text-12 text-[44475D] font-sans'>
        {title}
      </div>
      <div className='w-[266px] text-12 leading-20'>
        {content}
      </div>
    </div>
  )
}

export default BasicLabel