import "./App.css";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import RegisterDone from "@/pages/RegisterDone";
import LectureRegister from "@/pages/LectureRegister";
import Navbar from "./components/ui/navbar";
import BasicModify from "./pages/Profile/BasicModify";
import MentorModify from "./pages/Profile/MentorModify";
import Main from "./pages/Main";
import MyProfile from "./pages/Profile/MyProfile";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import CheckModal from "./pages/CheckModal";


function App() {
  return (
    // <div className="h-screen w-screen flex flex-col gap-4 justify-start items-center">
    //   {/* <Navbar /> */}
    //   <div className="max-w-[1100px] w-full mx-auto">
    //     {/* <Login></Login> */}
    //     {/* <Register /> */}
    //     {/* <RegisterDone></RegisterDone> */}
    //     {/* <LectureRegister></LectureRegister> */}
    //     {/* <Profile /> */}
    //   </div>
    // </div>
    // <Main />
    // <MyProfile />
    // <Error />
    <Admin />
    // <CheckModal />

  );
}

export default App;
