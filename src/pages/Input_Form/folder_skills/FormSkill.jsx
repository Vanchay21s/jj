export const FormSkill = () =>{
    return(
        <article className="w-full">
            {/* header */}
            <div className="w-full flex justify-between">
                <div className="">
                    <span className="text-[10px] text-[#7C6AF8] bg-[#7C6AF715] font-bold uppercase px-2 py-1 border rounded-sm ">Portfolio Manager</span>
                    <h1 className="text-[46px] font-bold text-[#EDEDF8]">Skills.</h1>
                    <p className="text-[14px] mt-[-5px] text-[#55556A]">Traks & manage your technical expertise</p>
                </div>
            </div>

            {/* Skill list and form */}
            <div className="flex gap-5 mt-[36px]">
                {/* Skill list */}
                <div className="w-2/3 flex flex-col ">
                    <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-[14px]">your skills</h1>
                    <div className="bg-[#111118] py-4 px-6 rounded-sm flex flex-col ">
                        <div className="flex items-center gap-3">
                            <div className="size-10 bg-gray-300">
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h1>PostgreSQL</h1>
                                <h1>70%</h1>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-1/2 border">Edit</button>
                            <button className="w-1/2 border text-[12px]">Delete</button>
                        </div>
                    </div>
                </div>
                {/* Skill Form  */}
                <div className="w-1/3 bg-gray-300 g">
                </div>
            </div>
        </article>
    )
}
