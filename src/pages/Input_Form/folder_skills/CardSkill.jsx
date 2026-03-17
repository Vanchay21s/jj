import { FaEdit, FaRecycle, FaRemoveFormat } from "react-icons/fa"
import { FaClapperboard, FaDeleteLeft } from "react-icons/fa6"
import { RiDeleteBin6Line } from "react-icons/ri"

export const CardSkill = ({skill, onEdit}) => {
    return(
        <article className="bg-[#111118] py-4 px-6 rounded-md flex flex-col border-l-3 border-[#7C6AF8] ">
            <div className="flex items-center gap-3">
                <div className="size-10 bg-[#0A0A10]">
                    <img src={`http://localhost:5000/uploads/${skill.image}`} alt="" />
                </div>
                <div>
                    <h1 className="text-[14px]">PostgreSQL</h1>
                    <h1 className="text-[11px]">70%</h1>
                </div>
            </div>
            <div className="flex gap-2 mt-3">
                <button
                    onClick={()=> onEdit(skill)} 
                    className="w-1/2 py-2 px-3 border rounded-s border-[#22223A] text-[12px] text-[#8888BB] bg-[#18182A] font-bold cursor-pointer flex items-center justify-center gap-1"><FaEdit/> Edit</button>
                <button className="w-1/2 py-2 px-3 border rounded-sm border-[#FF4D4D22]  text-[12px] text-[#FF6666] bg-[#FF4D4D0D]  font-bold cursor-pointer flex items-center justify-center gap-1" ><RiDeleteBin6Line/> Delete</button>
            </div>
        </article>
    )
}