import {useState, useEffect} from "react";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import Dashboad from "./components/Dashboad.jsx";
import Skill from "./pages/Skill.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import TestForm from "./pages/Input_Form/TestForm.jsx";
import TextSkillPage from "./pages/Input_Form/TextSkillPage.jsx";
// import { WorkPage } from "./pages/WorkPage.jsx";
import InputSkill from "./pages/Input_Form/InputSkill.jsx";

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
        <Route path="/test" element={<InputSkill/>} />
        <Route path="/test/:id" element={<TextSkillPage/>} />
        {/* <Route path="/test1" element={<TestForm/>} /> */}
        <Route path="/" element={<Dashboad dark={dark} setDark={setDark}/>} >
          <Route path="profile" element={<ProfilePage />}/>
          <Route path="skill" element={<Skill />}/>
          
          {/* <Route path="work" element={<WorkPage />}/> */}

        </Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
