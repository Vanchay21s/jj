import { use, useState } from "react";
import { CardSkill } from "./CardSkill"
import { form } from "motion/react-client";
import { FaPlus } from "react-icons/fa6";
import { useSkill } from "../../../call api/hooks/useSkill";
// import {urlImage} from "../../../../public/vite"
import { RiImage2Line } from "react-icons/ri";
const SKILLS = [
  "React.js", "Express.js", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "Node.js", "TypeScript", "GraphQL",
  "Docker", "Redis", "Next.js", "Vue.js",
  "Python", "Django", "FastAPI", "MySQL",
];
const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];



export const FormSkill = () =>{
    const {skill, addSkill, removeSkill} = useSkill()
    const [form, setForm] = useState({
        name: "",
        rating: "",
        image: null
    })
    const [preview, setPreview] = useState(null)
    const [editId, setEditId] = useState(null)

    const handleEdit = (skill) => {
        setEditId(skill.id)
        setPreview(null)
        setForm({
            name: skill.name,
            rating: skill.rating,
            image: skill.image,
        })
        
    }
    const handleCencel = () => {
        setEditId(null)
        setPreview(null)
        setForm({
            name: "",
            rating: "",
            image: null
        })
        
    }
    const handleDelete = () => {
        
    }
    const handleOnChange = (e) => {
        const {name, value, type, files} = e.target
        if(type === "file"){
            const file = files[0]
            setForm((prev) =>({
                ...prev,
                image: file,
            }))
            setPreview(URL.createObjectURL(file))
            return
        }
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }  
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", form.name)
        formData.append("rating", form.rating)
        formData.append("image", form.image)

        if(editId){
            console.log(form)
            return
        }
        addSkill(formData)
        setForm({
            name: "",
            rating: "",
            image: null
        })
        setPreview(null)
    }
    // console.log(editId) 
    return(
        <article className="w-full">
            {/* header */}
            <div className="w-full flex justify-between">
                <div className="">
                    <span className="text-[10px] text-[#7C6AF8] bg-[#7C6AF715] font-bold uppercase px-2 py-1 border border-[#7C6AF730] rounded-sm ">Portfolio Manager</span>
                    <h1 className="text-[46px] font-bold text-[#EDEDF8]">Skills.</h1>
                    <p className="text-[14px] mt-[-5px] text-[#55556A]">Traks & manage your technical expertise</p>
                </div>
            </div>

            {/* Skill list and form */}
            <div className="flex gap-5 mt-[36px]">
                {/* Skill list */}
                <div className="w-2/3 flex flex-col gap-2 ">
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2">
                        your skills
                        <span className="text-[10px] text-[#7C6AF8] bg-[#7C6AF715] uppercase px-2 py-1 border border-[#7C6AF730] rounded-full ml-2">3</span>
                    </h1>
                    {skill?.data?.map((sk) => (
                        <CardSkill key={sk.id} skill={sk} onEdit={handleEdit} onDelete={removeSkill}/>
                    ))}
                </div>
                {/* Skill Form  */}
                <div className="w-1/3 ">
                    <form onSubmit={handleSubmit} className="w-full bg-[#111118] py-4 px-6 rounded-md flex flex-col border-t-3 border-[#7C6AF8] gap-5">
                        <h1 className="text-[#66668A] uppercase text-[10px] font-bold">Add skills  
                            {
                                editId ? 
                                <span className="text-[10px] text-yellow-400 bg-yellow-950 px-3 border normal-case font-medium border-yellow-700 shadow-2xl rounded-full ml-2">● Editting</span> 
                                :
                                <span className="text-[10px] text-green-400 bg-green-950 px-3 border normal-case font-medium border-green-700 shadow-2xl rounded-full ml-2">● Adding</span>
                            }
                            
                        </h1>
                        {/* Image */}
                        <div className="flex flex-col">
                            <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2">ICON / IMAGE <span className="text-[#333355] lowercase font-medium">optional</span></h1>
                            <label htmlFor="imageInputId" 
                                className="border border-[#22223A] bg-[#0A0A10] p-4 rounded-md border-dashed flex flex-col justify-center items-center cursor-pointer"
                            >   
                                {preview ? (
                                    <img
                                        src={preview}
                                        alt="No Image"
                                        className="h-[45px] object-cover rounded-md text-[#66668A] text-[10px] font-bold flex flex-col justify-center items-center"
                                    /> 
                                ) : editId? (
                                    <img
                                        src={`http://localhost:5000/uploads/${form.image}`}
                                        alt="No Image"
                                        className="h-[45px] object-cover rounded-md text-[#66668A] text-[10px] font-bold flex flex-col justify-center items-center"
                                    /> 
                                ) : (
                                    <span className="text-[#66668A] text-[10px] font-bold flex flex-col justify-center items-center"><RiImage2Line size={30} color="#66668A"/> Click to upload</span>
                                )}
                                <input id="imageInputId" type="file" accept="image/*" onChange={handleOnChange} className="hidden"/>
                            </label>
                        </div>
                        {/* Skill name */}
                        <div>
                            <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Skills name </h1>
                            <select 
                                name="name"
                                value={form.name}
                                onChange={handleOnChange}
                                className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
                            >
                                {editId?
                                    <option value="" className="w-full bg-[#0A0A10] text-[#66668A] text-[12px] font-bold">{form.name}</option>
                                    :
                                    <option value="" className="w-full bg-[#0A0A10] text-[#66668A] text-[12px] font-bold">Select a skill</option>
                                }
                                
                                {SKILLS.map((s)=><option key={s} value={s} className="w-full bg-[#0A0A10]">{s}</option>)}
                            </select>
                        </div>
                        {/* Skill rating */}
                        <div>
                            <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Skills rating</h1>
                            <select 
                                name="rating"
                                value={form.rating}
                                onChange={handleOnChange}
                                className="w-full bg-[#0A0A10] border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
                            >
                                {editId?
                                    <option value="" className="w-full bg-[#0A0A10] text-[#66668A] text-[12px] font-bold">{form.rating}%</option>
                                    :
                                    <option value="" className="w-full bg-[#0A0A10] text-[#66668A] text-[12px] font-bold">Select rating</option>
                                }
                                {RATINGS.map((r)=><option key={r} value={r} className="w-full bg-[#0A0A10]">{r}%</option>)}
                            </select>
                        </div>
                        {editId? (
                            <div className=" gap-3 flex ">
                                <button 
                                    type="button"
                                    onClick={handleCencel}
                                    className="w-full p-3 rounded-sm text-[12px] text-[#8888BB] bg-[#18182A] border border-[#22223A] font-bold cursor-pointer">Cancel</button>
                                <button className="w-full p-3 rounded-sm text-[12px] text-[#06060C] bg-[#7C6AF7] font-bold cursor-pointer">Update Skill</button>
                            </div> 
                        ):(
                            <button className="w-full p-3 rounded-sm text-[12px] text-[#06060C] bg-[#7C6AF7] font-bold cursor-pointer flex items-center justify-center gap-1"><FaPlus/> Add Skill</button>
                        )}
                    </form>
                </div>
            </div>
        </article>
    )
}
