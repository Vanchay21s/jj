import { CardSkill } from "./CardSkill"

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
                    <article className="bg-[#111118] py-4 px-6 rounded-md flex flex-col border-t-3 border-[#7C6AF8] ">
                        <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2">Add skills</h1>
                        <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2">ICON / IMAGE <span className="text-[#333355] lowercase font-medium">optional</span></h1>
                        <div>
                            
                        </div>
                    </article>
                </div>
            </div>
        </article>
    )
}
