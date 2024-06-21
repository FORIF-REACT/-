interface Props {
  title: string;
  content:string;
  className?: string;
}

const BasicLabel = ({title, content, className}: Props) => {
  return (
    <div className={`w-[360px] h-9 border-l flex items-center ${className}`}>
      <div className='w-[74px] ml-5 text-12 text-darkgray'>
        {title}
      </div>
      <div className='w-[266px] text-12 leading-20'>
        {content}
      </div>
    </div>
  )
}

export default BasicLabel