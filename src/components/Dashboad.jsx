import { useState } from "react"
import { Link, Outlet} from "react-router-dom"

const Dashboad = ({dark, setDark}) =>{

    const [active, setActive] = useState(null)
    return(
        <article className="bg-[#0A0A10] h- border-b overflow-hidden">
            <div className="flex w-full max-w-7xl m-auto pt-[36px] gap-5 text-[#EDEDF8]">
                <div className="w-96 flex flex-col" >
                    <button onClick={() => setDark(!dark)} className="btn-dashboard">Dark-Mode</button>
                    <Link className={"btn-dashboard " + (active === "profile" ? "bg-gray-700" : "")} onClick={()=>setActive("profile")}  to="/profile">Profile</Link>
                    <Link className={"btn-dashboard " + (active === "skill" ? "bg-gray-700" : "")} onClick={()=>setActive("skill")}  to="/skill">Skill</Link>
                    <Link className={"btn-dashboard " + (active === "work" ? "bg-gray-700" : "")} onClick={()=>setActive("work")}  to="/work">Work</Link>
                    <Link className={"btn-dashboard " + (active === "feature" ? "bg-gray-700" : "")} onClick={()=>setActive("feature")}  to="/feature">Feature</Link>
                </div>
                <div className="w-full overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </article>
    )
}
export default Dashboad