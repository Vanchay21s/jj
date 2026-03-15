import { CardSkill } from "./CardSkill"
const SKILLS = [
  "React.js", "Express.js", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "Node.js", "TypeScript", "GraphQL",
  "Docker", "Redis", "Next.js", "Vue.js",
  "Python", "Django", "FastAPI", "MySQL",
];
const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export const FormSkill = () =>{
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
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2">your skills</h1>
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                    <CardSkill />
                </div>
                {/* Skill Form  */}
                <div className="w-1/3 ">
                    <form className="bg-[#111118] py-4 px-6 rounded-md flex flex-col border-t-3 border-[#7C6AF8] gap-5">
                        <h1 className="text-[#66668A] uppercase text-[10px] font-bold">Add skills</h1>
                        {/* Image */}
                        <div className="flex flex-col">
                            <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2">ICON / IMAGE <span className="text-[#333355] lowercase font-medium">optional</span></h1>
                            <label htmlFor="imageInputId" 
                                className="border border-[#22223A] bg-[#0A0A10] p-4 rounded-md border-dashed flex flex-col justify-center items-center cursor-pointer"
                            >   
                                <span className="text-[#66668A] text-[10px] font-bold">Click to upload</span>
                                <input id="imageInputId" type="file" className="hidden"/>
                            </label>
                        </div>
                        {/* Skill name */}
                        <div>
                            <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Skills name</h1>
                            <select 
                                className="w-full bg-[#0A0A10] border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
                            >
                                <option value="" className="w-full bg-[#0A0A10] text-[#66668A] text-[12px] font-bold">Select a skill</option>
                                {SKILLS.map((s)=><option key={s} value={s} className="w-full bg-[#0A0A10]">{s}</option>)}
                            </select>
                        </div>
                        {/* Skill rating */}
                        <div>
                            <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">Skills rating</h1>
                            <select 
                                className="w-full bg-[#0A0A10] border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
                            >
                                <option value="" className="w-full bg-[#0A0A10] text-[#66668A] text-[12px] font-bold">Select a rating</option>
                                {RATINGS.map((r)=><option key={r} value={r} className="w-full bg-[#0A0A10]">{r}%</option>)}
                            </select>
                        </div>
                        <button className="py-2 px-3  rounded-sm text-[12px] text-[#06060C] bg-[#7C6AF7] shadow-sm shadow-[#7C6AF7] font-bold cursor-pointer">+ Add Skill</button>
                    </form>
                </div>
            </div>
        </article>
    )
}
