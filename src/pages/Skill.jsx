import { FaPlus } from "react-icons/fa"

const Skill = () =>{
    return(
        <article className="bg-dark">
            <div className="w-full p-10 h-screen flex flex-col justify-start items-start">
                <div className="w-full flex justify-between items-center ">
                    <h1 className={`text-2xl sm:text-6xl`}>Skills</h1>
                    <button className={`box-button flex items-center gap-2`}><FaPlus />ADD NEW SKILL</button>
                </div>
                <table class={`table-fixed w-full mt-10 text-lg rounded-xl bg-yellow-400 border-collapse overfolow-hidden`}>
                    <caption class="caption-bottom bg-yellow-400 rounded-b-xl">
                        Table of Skill list.
                    </caption>
                    <thead className={``}>
                        <tr>
                            <th className={`text-start px-4 py-1`}>ID</th>
                            <th className={`text-start px-4 py-1`}>Name</th>
                            <th className={`text-start px-4 py-1`}>Rating</th>
                            <th className={`text-start px-4 py-1`}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={`bg-white text-start px-4 py-2`}>01</td>
                            <td className={`bg-white text-start px-4 py-2`}>React.js</td>
                            <td className={`bg-white text-start px-4 py-2`}>50%</td>
                            <td className={`bg-white text-start px-4 py-2 flex justify-start items-center gap-3`}>
                                <button className={`bg-green-500 hover:bg-green-600 transition-all ducation-300 cursor-pointer  flex flex-col justify-center items-center px-5 rounded-full text-white`}><p>EDIT</p></button>
                                <button className={`bg-red-500 hover:bg-red-600 transition-all ducation-300 cursor-pointer  flex justify-center items-center px-5 rounded-full text-white`}>REMOVE</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    )
}
export default Skill