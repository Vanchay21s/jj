import {useState, useEffect} from "react";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import ProductsPage from "./pages/ProductPage.jsx";
import Education from "./components/Secret/Education.jsx";
import DetailSkill from "./components/Secret/DetailSkill.jsx";
import Contact from "./components/Secret/Contact.jsx";
import Dashboad from "./components/Dashboad.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import Animation from "./components/Animation.jsx";
import Skill from "./pages/Skill.jsx";

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
          <Route path="users" element={<UsersPage />}/>
          <Route path="skills" element={<Skill />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
