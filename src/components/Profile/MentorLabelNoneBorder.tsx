interface props {
  title: string;
  content:string;
}

const MentorLabel = ({title, content}: props) => {
  return (
    <div className='flex w-[480px] h-10 justify-items-start items-center '>
      <div className='w-32 ml-5 text-12 text-[44475D] font-sans'>
        {title}
      </div>
      <div className='w-[332px] text-12 leading-20 font-sans'>
        {content}
      </div>
    </div>
  )
}

export default MentorLabel