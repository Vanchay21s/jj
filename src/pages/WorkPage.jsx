import { use, useState } from "react";

const initialWorkState = {
  name: "",
  position: "",
  github: "",
  demo: "",
  framework: "",
  description: "",
  image: null,
  preview: null,
};
export const WorkPage = () => {
    const [workData, setWorkData] = useState(initialWorkState)

    const handleOnChnageWork = (e) => {

        const {name, value, type, files} = e.target
        if(type === "file"){
            const file = files[0]
            setWorkData((set) => ({
                ...set,
                image: file,
                preview: URL.createObjectURL(file)
            }))
        }
        setWorkData((set) => ({
            ...set,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`
            name: ${workData.name}
            position: ${workData.position}
            framework: ${workData.framework}
            description: ${workData.description}
            demo: ${workData.demo}
            github: ${workData.github}
        `)
    }
    return(
        <article>
            <h1>Work Page</h1>
            <form onSubmit={handleSubmit} className="">
                <h1 className="mt-2">Work name</h1>
                <input type="text"
                    name="name"
                    placeholder="Name"
                    value={workData.name}
                    onChange={handleOnChnageWork}
                    className={`border text-lg py-1 px-4 rounded-lg mt-2`}
                />

                <h1 className="mt-2">Position</h1>
                <input type="text"
                    name="position"
                    placeholder="Position"
                    value={workData.position}
                    onChange={handleOnChnageWork}
                    className={`border text-lg py-1 px-4 rounded-lg mt-2`}
                />
                <h1 className="mt-2">Framework</h1>
                <input type="text"
                    name="framework"
                    placeholder="Framework"
                    value={workData.framework}
                    onChange={handleOnChnageWork}
                    className={`border text-lg py-1 px-4 rounded-lg mt-2`}
                />
                <h1 className="mt-2">Description</h1>
                <textarea type="text"
                    name="description"
                    placeholder="Description"
                    value={workData.description}
                    onChange={handleOnChnageWork}
                    className={`border text-lg py-1 px-4 rounded-lg mt-2`}
                />
                <h1 className="mt-2">Github Socures code</h1>
                <input type="text"
                    name="github"
                    placeholder="Github"
                    value={workData.github}
                    onChange={handleOnChnageWork}
                    className={`border text-lg py-1 px-4 rounded-lg mt-2`}
                />
                <h1 className="mt-2">Demo Link</h1>
                <input type="text"
                    name="demo"
                    placeholder="Demo"
                    value={workData.demo}
                    onChange={handleOnChnageWork}
                    className={`border text-lg py-1 px-4 rounded-lg mt-2`}
                />
                <br />
                <button className="border text-sm bg-gray-950 px-4 py-1 rounded-lg mt-4">Add new work</button>
            </form>
        </article>
    )
}