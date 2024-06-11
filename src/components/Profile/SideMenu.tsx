import { useNavigate } from "react-router-dom";

interface Props{
  menu1: string;
  menu2: string;
  path1: string;
  path2: string;
}
const SideMenu = ({menu1, path1 , menu2, path2}:Props) => {
  const navigate = useNavigate();

  return (
      <div className="w-[89px] flex flex-col">
        <p onClick={() => navigate(`/${path1}`)} className='w-full h-7 text-12 font-sans p-2 rounded-md hover:bg-slate-400/20 cursor-pointer'>
          {menu1}
        </p>
        <p onClick={() => navigate(`/${path2}`)} className='w-full h-7 text-12 font-sans p-2 mt-3 rounded-md hover:bg-slate-400/20 cursor-pointer'>
          {menu2}
        </p>
      </div>
  )
}
export default SideMenu