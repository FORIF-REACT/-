interface props{
  menu1: string;
  menu2: string;
}
const SideMenu = ({menu1, menu2}:props) => {
  return (
      <div className="w-[89px] flex flex-col">
        <button
        className='w-full h-7 text-12 font-sans p-2 rounded-md hover:bg-slate-400/20'
        >
          {menu1}
        </button>
        <button 
        className='w-full h-7 text-12 font-sans p-2 mt-3 rounded-md hover:bg-slate-400/20'
        >
          {menu2}
        </button>
      </div>
  )
}
export default SideMenu