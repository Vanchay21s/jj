import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Education = () => {
    const View = "</> Code"
    const navigate = useNavigate();
  return (
    <div className=" bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center">
        <div className=" w-full sm:w-2/3 bg-gray-100 dark:bg-gray-900 flex justify-center py-4 transition-colors duration-400 ">
            <div className="w-full max-w-7xl px-4 transition-colors duration-400 ">
                <div className="flex justify-between items-center pb-4">
                    <button className='box-product flex justify-center items-center' onClick={() => navigate(-1)}><MdArrowBackIos />BACK</button>
                    <a className="box-product" href="https://www.google.com">{View}</a>
                </div>
                <div className="w-full md:w-10/12 md:flex flex-col items-center mx-auto my-5 space-y-6">
                    <h1 className="text-2xl font-bold mb-5 text-gray-600 dark:text-white">CHARACTER</h1>
                    <img className="w-full border-2 border-amber-50 rounded-lg" src="https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/43/Satoru_Gojo_%28JUMP_31-2023%29.png" alt="" />
                    <img className="w-full border-2 border-amber-50 rounded-lg" src="https://static.wikia.nocookie.net/jujutsu-kaisen/images/4/43/Satoru_Gojo_%28JUMP_31-2023%29.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Education