import './App.css';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import RegisterDone from '@/pages/RegisterDone';
import LectureRegister from '@/pages/LectureRegister';
import MentorList from '@/pages/MentorList';
import MentorRank from '@/pages/MentorRank';
import Apply from './pages/Apply';
import Navbar from './components/ui/navbar';
import BasicModify from './pages/Profile/BasicModify';
import MentorModify from './pages/Profile/MentorModify';
import Main from './pages/MainPage/MainPage';
import MyProfile from './pages/Profile/MyProfile';
import Error from './pages/Error';
import Admin from './pages/Admin';
import { Routes, Route, Outlet } from 'react-router-dom';
import Footer from './components/ui/Footer';
import Loading from './components/Loading';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

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
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="basicmodify" element={<BasicModify />} />
          <Route path="mentormodify" element={<MentorModify />} />
          <Route path="admin" element={<Admin />} />
          <Route path="error" element={<Error />} />
          <Route path="loading" element={<Loading />} />
          <Route path="mentorlist" element={<MentorList />} />
          <Route path="mentorrank" element={<MentorRank />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
