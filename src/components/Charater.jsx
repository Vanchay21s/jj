import React from 'react'

const Charater = ({technique}) => {
  return (
    <div className="h-screen bg-slate-100 dark:bg-gray-900 transition-colors duration-400 flex flex-col items-center justify-center">
        <div className="min-h-screen w-full sm:w-2/3 bg-gray-100 dark:bg-gray-900 flex justify-center py-16 transition-colors duration-400 ">
            <div className="w-full max-w-7xl px-4 py-16 transition-colors duration-400 ">
                <div className="grid grid-cols-2 2 md:grid-cols-2 lg:grid-cols-4 gap-3  ">
                    {technique.map((s) => (
                    <div key={s.id} className="box-product font-bold">
                        <p className="flex items-center"><img src={s.image} alt="" className="size-6 mr-2" />{s.name}</p>
                        {/* light saber */}
                        <div className="w-full max-w-xs py-2">
                        <div className="h-3 w-full bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden relative transition duration-400 ">
                            <div 
                            className="absolute top-0 left-0 h-full rounded-full blur-sm bg-green-500"
                            style={{ width: `${s.rating}%` }}
                            />
                            <div
                            className="absolute top-0 left-0 h-full rounded-full bg-green-400"
                            style={{ width: `${s.rating}%` }}
                            />
                            </div>
                            <p className="mt-2 text-sm text-green-500 text-right">
                                {s.rating}%
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Charater