import "./App.css";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import RegisterDone from "@/pages/RegisterDone";
import LectureRegister from "@/pages/LectureRegister";
import Navbar from "./components/ui/navbar";
import Profile from "@/pages/Profile";
function App() {
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-start items-center">
        {/* <Navbar /> */}
        <div className="max-w-[1100px] w-full mx-auto">
          {/* <Login></Login> */}
          {/* <Register /> */}
          {/* <RegisterDone></RegisterDone> */}
          {/* <LectureRegister></LectureRegister> */}
        </div>
    </div>
  );
}

export default App;
