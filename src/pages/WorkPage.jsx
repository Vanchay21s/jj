import { useInsertWork } from "./useInsertWork";
import styles from "./InsertWork.module.css";

export default function InsertWork() {
  const {
    form,
    preview,
    status,
    error,
    handleNameChange,
    handleImageChange,
    handleSubmit,
  } = useInsertWork();

  const isLoading = status === "loading";

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.badge}>New Entry</span>
          <h1 className={styles.title}>Insert Work</h1>
          <p className={styles.subtitle}>Upload a piece of work to your portfolio.</p>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          {/* Name field */}
          <div className={styles.field}>
            <label htmlFor="work-name" className={styles.label}>
              Work Name
            </label>
            <input
              id="work-name"
              type="text"
              value={form.name}
              onChange={handleNameChange}
              placeholder="e.g. Brand Identity – Studio Noir"
              className={styles.input}
              disabled={isLoading}
              required
            />
          </div>

          {/* Image upload */}
          <div className={styles.field}>
            <label className={styles.label}>Cover Image</label>
            <label
              htmlFor="work-image"
              className={`${styles.dropzone} ${preview ? styles.dropzoneHasImage : ""}`}
            >
              {preview ? (
                <img src={preview} alt="Preview" className={styles.preview} />
              ) : (
                <div className={styles.dropzoneInner}>
                  <svg
                    className={styles.uploadIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <span className={styles.dropzoneText}>
                    Click to upload or drag & drop
                  </span>
                  <span className={styles.dropzoneHint}>PNG, JPG, WEBP — max 10 MB</span>
                </div>
              )}
              <input
                id="work-image"
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleImageChange}
                className={styles.fileInput}
                disabled={isLoading}
              />
            </label>
          </div>

          {/* Feedback */}
          {status === "success" && (
            <p className={styles.successMsg}>✓ Work uploaded successfully!</p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>✗ {error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className={styles.btn}
            disabled={isLoading || !form.name.trim() || !form.image}
          >
            {isLoading ? (
              <span className={styles.spinner} aria-hidden="true" />
            ) : null}
            {isLoading ? "Uploading…" : "Submit Work"}
          </button>
        </form>
      </div>
    </section>
  );
}




// import { use, useState } from "react";

// const initialWorkState = {
//   name: "",
//   position: "",
//   github: "",
//   demo: "",
//   framework: "",
//   description: "",
//   image: null,
//   preview: null,
// };
// export const WorkPage = () => {
//     const [workData, setWorkData] = useState(initialWorkState)

//     const handleOnChnageWork = (e) => {

//         const {name, value, type, files} = e.target
//         if(type === "file"){
//             const file = files[0]
//             setWorkData((set) => ({
//                 ...set,
//                 image: file,
//                 preview: URL.createObjectURL(file)
//             }))
//         }
//         setWorkData((set) => ({
//             ...set,
//             [name]: value
//         }))
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         alert(`
//             name: ${workData.name}
//             position: ${workData.position}
//             framework: ${workData.framework}
//             description: ${workData.description}
//             demo: ${workData.demo}
//             github: ${workData.github}
//         `)
//     }
//     return(
//         <article>
//             <h1>Work Page</h1>
//             <form onSubmit={handleSubmit} className="">
//                 <h1 className="mt-2">Work name</h1>
//                 <input type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={workData.name}
//                     onChange={handleOnChnageWork}
//                     className={`border text-lg py-1 px-4 rounded-lg mt-2`}
//                 />

//                 <h1 className="mt-2">Position</h1>
//                 <input type="text"
//                     name="position"
//                     placeholder="Position"
//                     value={workData.position}
//                     onChange={handleOnChnageWork}
//                     className={`border text-lg py-1 px-4 rounded-lg mt-2`}
//                 />
//                 <h1 className="mt-2">Framework</h1>
//                 <input type="text"
//                     name="framework"
//                     placeholder="Framework"
//                     value={workData.framework}
//                     onChange={handleOnChnageWork}
//                     className={`border text-lg py-1 px-4 rounded-lg mt-2`}
//                 />
//                 <h1 className="mt-2">Description</h1>
//                 <textarea type="text"
//                     name="description"
//                     placeholder="Description"
//                     value={workData.description}
//                     onChange={handleOnChnageWork}
//                     className={`border text-lg py-1 px-4 rounded-lg mt-2`}
//                 />
//                 <h1 className="mt-2">Github Socures code</h1>
//                 <input type="text"
//                     name="github"
//                     placeholder="Github"
//                     value={workData.github}
//                     onChange={handleOnChnageWork}
//                     className={`border text-lg py-1 px-4 rounded-lg mt-2`}
//                 />
//                 <h1 className="mt-2">Demo Link</h1>
//                 <input type="text"
//                     name="demo"
//                     placeholder="Demo"
//                     value={workData.demo}
//                     onChange={handleOnChnageWork}
//                     className={`border text-lg py-1 px-4 rounded-lg mt-2`}
//                 />
//                 <br />
//                 <button className="border text-sm bg-gray-950 px-4 py-1 rounded-lg mt-4">Add new work</button>
//             </form>
//         </article>
//     )
// }