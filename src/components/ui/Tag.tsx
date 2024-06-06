interface Props {
  label: string;
  count?: number;
}

const tag = ({label, count}:Props) => {
  return (
    <div className='box-border w-24 h-9 rounded-md border-primary border-2 flex justify-center items-center'>
      <p className="text-12 text-primary">
      {label}<span>   </span>
      {count ? (count) : <></>}
      </p>
    </div>
  )
}

export default tag