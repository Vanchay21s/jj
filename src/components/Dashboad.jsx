import { Link, Outlet} from "react-router-dom"

const Dashboad = () =>{
    return(
        <article className="dark-mode border-b">
            <div className="flex justify-center items-center" >
                <Link className="box-product m-4 items-center" to="/api/users">User</Link>
                <Link className="box-product m-4 items-center" to="/api/products">Product</Link>
            </div>
            <div>
                <Outlet />
            </div>
            
        </article>
    )
}
export default Dashboad