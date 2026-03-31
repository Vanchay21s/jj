import {useState, useEffect} from "react";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import Dashboad from "./components/Dashboad.jsx";
import { FormSkill } from "./pages/skill/FormSkill.jsx";
import FormProfile from "./pages/profile/FormProfile.jsx";
import FormWork from "./pages/work/FormWork.jsx";
// import { WorkPage } from "./pages/WorkPage.jsx";

function App() {
  const [dark, setDark] = useState(() => {
    // Load from localStorage BEFORE first render
    return localStorage.getItem("theme") === "dark";
  });

  // Apply theme to <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Dashboad dark={dark} setDark={setDark}/>} >
          <Route path="profile" element={<FormProfile />}/>
          <Route path="skill" element={<FormSkill />}/>
          <Route path="work" element={<FormWork /> } />
        </Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
