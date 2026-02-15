import { Link, Outlet} from "react-router-dom"

const Dashboad = ({dark, setDark}) =>{
    return(
        <article className="bg-dark border-b flex ">
            <div className="w-96 h-screen bg-yellow-500 flex flex-col justify-center items-center drak-mode" >
               <button onClick={() => setDark(!dark)} className="box-product m-4 items-center">Dark-Mode</button>
                <Link className="box-product m-4 items-center" to="/users">User</Link>
                <Link className="box-product m-4 items-center" to="/skills">Skill</Link>
            </div>
            <div className="w-full">
                <Outlet />
            </div>
            
        </article>
    )
}
export default Dashboad