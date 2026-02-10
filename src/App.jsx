import {useState, useEffect} from "react";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import ProductsPage from "./pages/ProductPage.jsx";
import Education from "./components/Secret/Education.jsx";
import DetailSkill from "./components/Secret/DetailSkill.jsx";
import Contact from "./components/Secret/Contact.jsx";
import Dashboad from "./components/Dashboad.jsx";
import UsersPage from "./pages/UsersPage.jsx";

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
      <div className="flex justify-center dark-mode border-b">
        <button onClick={() => setDark(!dark)} className="box-product m-4 items-center">Dark-Mode</button>
        <Link to="/api" className="box-product m-4 items-center">API</Link>
      </div>
      <Routes>
        <Route path="/" element={<ProductsPage dark={dark} setDark={setDark} />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/detail-skill" element={<DetailSkill/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/api" element={<Dashboad/>} >
          <Route path="users" element={<UsersPage />}/>
          <Route path="products" element={<ProductsPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
