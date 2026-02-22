import { useState } from "react"
import { Link, Outlet} from "react-router-dom"

const Dashboad = ({dark, setDark}) =>{

    const [active, setActive] = useState(null)
    console.log(active)
    return(
        <article className="bg-dark border-b flex overflow-hidden">
            <div className="w-96 h-screen bg-gray-800 flex flex-col dark-mode p-4" >
               <button onClick={() => setDark(!dark)} className="btn-dashboard">Dark-Mode</button>
                <Link className={"btn-dashboard " + (active === "profile" ? "bg-gray-700" : "")} onClick={()=>setActive("profile")}  to="/profile">Profile</Link>
                <Link className={"btn-dashboard " + (active === "skill" ? "bg-gray-700" : "")} onClick={()=>setActive("skill")}  to="/skill">Skill</Link>
            </div>
            <div className="w-full h-screen bg-gray-800 p-4 overflow-hidden">
                <Outlet />
            </div>
            
        </article>
    )
}
export default Dashboad