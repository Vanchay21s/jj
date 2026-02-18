import { FaPlus } from "react-icons/fa"
import useSkill from "../hooks/useSkill"
import { useState } from "react"
import { OrbitProgress } from "react-loading-indicators"
import InputSkill from "./Input_Form/InputSkill"
import { AiOutlineClose } from "react-icons/ai"
import InputUpdateSkill from "./Input_Form/InputUpdateSkill"

const Skill = () =>{
    const [form, setForm] = useState(false)
    const [edit, setEdit] = useState(false)

    const {skills, loading, addSkill, removeSkill} = useSkill()
    console.log(loading)
    return(
        <article className="bg-dark">
            <div className="w-full p-10 h-screen flex flex-col justify-start items-start">
                <div className="w-full flex justify-between items-center ">
                    <h1 className={`text-2xl sm:text-6xl`}>Skills</h1>
                    <button onClick={()=> setForm(true)} className={`box-button flex items-center gap-2`}><FaPlus />ADD NEW SKILL</button>
                </div>
                {loading? 
                    <table className={`table-fixed w-full mt-10 text-lg  rounded-xl bg-gray-200 border-collapse overfolow-hidden`}>
                        <caption className="caption-bottom bg-gray-200 rounded-b-xl">
                            Table of Skill list.
                        </caption>
                        <thead className={`text-gray-600 dark:text-white`}>
                            <tr>
                                <th className={`text-start px-4 py-1`}>NO.</th>
                                <th className={`text-start px-4 py-1`}>Name</th>
                                <th className={`text-start px-4 py-1`}>Rating</th>
                                <th className={`text-start px-4 py-1`}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {skills?.data?.map((s, i)=>(
                                <tr key={s.id}>
                                    <td className={`bg-white px-4 py-2 `}>{1+i}</td>
                                    <td className={`bg-white px-4 py-2`}>{s.name}</td>
                                    <td className={`bg-white px-4 py-2`}>{s.rating}%</td>
                                    <td className={`bg-white px-4 py-2 flex justify-start items-center gap-3`}>
                                        <button onClick={() => setEdit(true)} className={`bg-green-500 hover:bg-green-600 transition-all ducation-300 cursor-pointer  flex flex-col justify-center items-center px-5 rounded-full text-white`}><p>EDIT</p></button>
                                        <button onClick={() => removeSkill(s.id)} className={`bg-red-500 hover:bg-red-600 transition-all ducation-300 cursor-pointer  flex justify-center items-center px-5 rounded-full text-white`}>REMOVE</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> 
                    : 
                    <div className="w-full flex justify-center items-center h-screen">
                        <OrbitProgress variant="track-disc" color="#fff900" size="medium" text="Loading ..." textColor="#444444" />
                    </div>
                }
                {form && (
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg w-80">
                            <div className="flex justify-between itemsp-center">
                                <h1 className={`flex items-center gap-2`}><FaPlus />ADD NEW SKILL</h1>
                                <button onClick={()=> setForm(false)} className={`box-button flex items-center gap-2`}><AiOutlineClose/> Cancel</button>
                            </div>
                            <InputSkill onAdd={addSkill} setForm={setForm}/>
                        </div>
                    </div>
                )}
                {edit && (
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg w-80">
                            <div className="flex justify-between itemsp-center">
                                <h1 className={`flex items-center gap-2`}><FaPlus />EDIT SKILL</h1>
                                <button onClick={()=> setEdit(false)} className={`box-button flex items-center gap-2`}><AiOutlineClose/> Cancel</button>
                            </div>
                            <InputUpdateSkill 
                                // updateSkill={updateSkill} 
                                setEdit={setEdit}
                            />
                        </div>
                    </div>
                )}
            </div>
        </article>
    )
}
export default Skill