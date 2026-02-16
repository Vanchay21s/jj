import {useState, useEffect} from "react";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import Dashboad from "./components/Dashboad.jsx";
import Skill from "./pages/Skill.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

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
          <Route path="profile" element={<ProfilePage />}/>
          <Route path="skill" element={<Skill />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
