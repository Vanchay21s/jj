import { useNavigate } from "react-router-dom";

const DetailSkill = () => {

    const navigate = useNavigate();
    return (
        <div className=" bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center">
            <div className=" w-full sm:w-2/3 bg-gray-100 dark:bg-gray-900 flex justify-center py-4 transition-colors duration-400 ">
                <div className="w-full max-w-7xl flex justify-between px-4 transition-colors duration-400 ">
                    <button onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">BACK</button>
                </div>
                <h2>Detail Skill Component</h2>
                <p>This component displays detailed information about a specific skill.</p>
            </div>
        </div>
    );
};

export default DetailSkill;