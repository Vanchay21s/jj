import { FaHome, FaSearch } from "react-icons/fa"

const ProfilePage = () => {
    const data = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
        { id: 4, name: "Diana", age: 28 },
        { id: 5, name: "Ethan", age: 35 },
    ];
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
                <div className="w-4/6 h-full bg-gray-600 overflow-y-auto ">
                    {
                        data.map((d, i) => (
                            <div key={d.id} className={`${i % 2 === 0 ? 'bg-gray-500':'bg-gray-600'} p-2 border-b `}>
                                <div className="font-bold">{d.name}</div>
                                <div>Age: {d.age}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-2/6 bg-gray-500">Insert</div>
            </div>
        </article>
    )
}

export default ProfilePage