import Profile from "./pages/Home";
import Login from "./pages/Login";
import "./style.scss";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import CalendarB from "./components/CalendarB";
import Search from "./components/Search";
import CalendarTeacher from "./components/CalendarTeacher";
import StartPage from "./pages/StartPage";
import ProfilesTeachers from "./components/ProfilesTeachers";
import ProfilesStudents from "./components/ProfilesStudents";

function App() {
  // eslint-disable-next-line
  const { currentUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route index element={<StartPage />} />
          <Route path="/login" index element={<Login />} />
          <Route path="/profile" index element={<Profile />} />
          <Route path="/booking/:id" index element={<CalendarB />} />
          <Route path="/booked/:id" index element={<CalendarTeacher />} />
          <Route path="/search" index element={<Search />} />
          <Route path="/teachers" index element={<ProfilesTeachers />} />
          <Route path="/students" index element={<ProfilesStudents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
