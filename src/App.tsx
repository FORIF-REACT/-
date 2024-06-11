import "./App.css";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import RegisterDone from "@/pages/RegisterDone";
import LectureRegister from "@/pages/LectureRegister";
import Navbar from "./components/ui/navbar";
import BasicModify from "./pages/Profile/BasicModify";
import MentorModify from "./pages/Profile/MentorModify";
import Main from "./pages/MainPage";
import MyProfile from "./pages/Profile/MyProfile";
import ProfileModal from "./components/ProfileModal";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import CheckModal from "./components/CheckModal";
import { Routes, Route, Outlet } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  )
}

function App() {
  return (
    // <div className="h-screen w-screen flex flex-col gap-4 justify-start items-center">
    //   {/* <Navbar /> */}
    //   <div className="max-w-[1100px] w-full mx-auto">
    //     {/* <Login></Login> */}
    //     {/* <Register /> */}
    //     {/* <RegisterDone></RegisterDone> */}
    //     {/* <LectureRegister></LectureRegister> */}
    //   </div>
    // </div>
    <div>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="main" element={<Main />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="basicmodify" element={<BasicModify />} />
          <Route path="mentormodify" element={<MentorModify />} />
          <Route path="admin" element={<Admin />} />       
        </Route>
      </Routes>
    </div>

  );
}

export default App;
