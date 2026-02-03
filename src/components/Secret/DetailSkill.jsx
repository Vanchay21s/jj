import { useNavigate } from "react-router-dom";

const DetailSkill = () => {
    const pic = "https://4kwallpapers.com/images/walls/thumbs_3t/25036.jpg"

    const navigate = useNavigate();
    return (
        <div className="bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex justify-center">
            <div className="w-full px-4 sm:px-0 sm:w-2/3 flex flex-col justify-center items-center py-4 transition-colors duration-400 ">
                <div className="w-full flex justify-between transition-colors duration-400 ">
                    <button onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">BACK</button>
                </div>
                <div className="w-full text-gray-700 dark:text-white ">
                    <h1 className="text-6xl font-bold mt-4 transition-colors duration-400">Portfolio</h1>
                    <h3 className="text-lg font-bold mt-4 transition-colors duration-400">Only Front-end development</h3>
                    <div className="w-full h-[200px] lg:h-[500px] mt-4 transition-colors duration-400">
                        <img src={pic} alt="" className="w-full h-full  rounded-xl" />
                    </div>
                    <h1 className="text-3xl font-bold mt-8 transition-colors duration-400">Project Overview</h1>
                    <p className="text-sm mt-4 transition-colors duration-400">Developed using React & Tailwind CSS</p>
                    <p className="text-sm mt-8 transition-colors duration-400">Developed using React & Tailwind CSS Developed using React & Tailwind CSS Developed using React & Tailwind CSSDeveloped using React & Tailwind CSSDeveloped using React & Tailwind CSSDeveloped using React & Tailwind CSSDeveloped using React & Tailwind CSS Developed using React & Tailwind CSS
                        Developed using React & Tailwind CSS
                    </p>
                    <h1 className="text-3xl font-bold mt-8 transition-colors duration-400">Techniology Stack</h1>
                    <div className="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3  ">
                        <div className="box-product mt-4">
                            <div className="flex flex-col justify-start">
                                <p className="text-lg font-bold transition-colors duration-400">Languages & Platflorm</p>
                                <div className="mt-2 flex flex-wrap gap-3">
                                    <p className="rounded-xl border px-2 py-1 text-center">JavaScriptJavaScriptJavaScript</p>
                                    <p className="rounded-xl border px-2 py-1 text-center">JavaScript</p>
                                    <p className="rounded-xl border px-2 py-1 text-center">JavaScript</p>
                                    <p className="rounded-xl border px-2 py-1 text-center">JavaScript</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold mt-8 transition-colors duration-400">Key Features</h1>
                    <div className="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3  ">
                        <div className="box-product mt-4">
                            <div className="flex justify-start">
                                <div className="flex justify-center items-start mr-4">
                                    <p className="size-10 flex justify-center items-center rounded-full bg-gray-200 text-lg font-bold transition-colors duration-400">1</p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold transition-colors duration-400">Languages & Platflorm</p>
                                    <p className="text-sm mt-2 transition-colors duration-400">Developed using React & Tailwind CSS Developed using React & Tailwind CSS Developed using React & Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailSkill;