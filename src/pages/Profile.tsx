import SideMenu from "@/components/SideMenu"
export default function profile () {

  const menu ={
    menu1:"기본 정보 수정", 
    menu2:"멘토 정보 수정"
  }

  return (
    <SideMenu menu = {menu} />
  )
}