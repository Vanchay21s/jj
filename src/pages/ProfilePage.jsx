import { FaHome, FaSearch } from "react-icons/fa"

const ProfilePage = () => {
    return (
        <article className="w-full h-full flex flex-col">
            <div className={`flex justify-between items-center gap-4 pb-2 border-b border-gray-700`}>
                <FaHome className="text-2xl text-gray-400" />
                <div className="relative bg-gray-700 w-96 rounded-full">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Skill, work, etc" 
                        className="focus:outline-0 text-base py-3 pl-10 p-4 w-full"
                    />
                </div>
            </div>
            <div className="w-full flex-1 flex mt-2 gap-4 overflow-hidden scrtollbar-hide">
                <div className="w-4/6 h-full bg-gray-600 overflow-y-auto rounded-lg ">
                    {/* <div className={`${i % 2 === 0 ? 'bg-gray-500':'bg-gray-600'} p-2 border-b `}> */}
                    <div className={`bg-gray-500 p-2 border-b `}>
                        <div className="font-bold">asdasd</div>
                        <div>ssss</div>
                    </div>
                </div>
                <div className="w-2/6 bg-gray-500 rounded-lg">Insert</div>
            </div>
        </article>
    )
}

export default ProfilePage