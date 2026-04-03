import axios from "axios";
import { useState } from "react";
import { RiImage2Line } from "react-icons/ri";
import { insertWork } from "../../call api/service/workService";

const FormWork = () => {
  const [form, setForm] = useState({
    name: "",
    position: "",
    framework: "",
    github: "",
    demo: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [image, setImage] = useState([]);
  const [preview, setPreview] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImage((prev) => [...prev, ...files]);

    const previewUrls = files.map((file) => URL.createObjectURL(file));

    setPreview((prev) => [...prev, ...previewUrls]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    image.forEach((img) => {
      formData.append("image", img);
    });
    
    console.log(Object.fromEntries(formData));
    await insertWork(formData)
  };
  

  return (
    <article className="">
      {/* Header */}
      <div className="w-full flex justify-between">
        <div className="">
          <span className="text-[10px] text-[#7C6AF8] bg-[#7C6AF715] font-bold uppercase px-2 py-1 border border-[#7C6AF730] rounded-sm ">
            Portfolio Manager
          </span>
          <h1 className="title">Work.</h1>
          <p className="sub-title mt-[-5px] ">
            Traks & manage your technical expertise
          </p>
        </div>
      </div>
      {/* List and Form-data */}
      <div className="flex gap-5 mt-[36px]">
        <div className="w-1/3 flex flex-col gap-2">
          <h1 className="header uppercase mb-2">
            your work
            <span className="sup-tag ml-2">0</span>
          </h1>
          <article className="bg-[#111118] py-4 px-6 rounded-md flex flex-col border-l-3 border-[#7C6AF8] ">
            <h1 className="header uppercase mb-2 text-white">Portfolio</h1>
            <div className="flex gap-3 mb-2">
              <p className="sup-tag bg-purple-950/50 text-purple-500 border-purple-900/50">
                React.js
              </p>
              <p className="sup-tag bg-green-950/50 text-green-500 border-green-900/50">
                #1
              </p>
            </div>
            <p className="sub-header">2002-11-17</p>
          </article>
          <article className="bg-[#111118] py-4 px-6 rounded-md flex flex-col border-l-3 border-[#7C6AF8] ">
            <h1 className="header uppercase mb-2 text-white">Portfolio</h1>
            <div className="flex gap-3 mb-2">
              <p className="sup-tag bg-purple-950/50 text-purple-500 border-purple-900/50">
                React.js
              </p>
              <p className="sup-tag bg-green-950/50 text-green-500 border-green-900/50">
                #1
              </p>
            </div>
            <p className="sub-header">2002-11-17</p>
          </article>
        </div>
        <div className="w-2/3 flex flex-col">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-[#111118] py-4 px-6 rounded-md border-t-3 border-[#7C6AF8] flex flex-col  gap-5"
          >
            <div className="flex gap-3">
              <div className="w-1/2">
                <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">
                  Project name
                </h1>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleOnChange}
                  placeholder="Project name"
                  className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
                />
              </div>
              <div className="w-1/2">
                <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">
                  Position{" "}
                </h1>
                <input
                  name="position"
                  value={form.position}
                  onChange={handleOnChange}
                  placeholder="Position"
                  className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1/2">
                <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">
                  Framework
                </h1>
                <input
                  name="framework"
                  value={form.framework}
                  onChange={handleOnChange}
                  placeholder="React, Express..."
                  className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
                />
              </div>
              <div className="w-1/2">
                <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">
                  Demo URL
                </h1>
                <input
                  name="demo"
                  value={form.demo}
                  onChange={handleOnChange}
                  placeholder="https://..."
                  className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
                />
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">
                Github URl
              </h1>
              <input
                name="github"
                value={form.github}
                onChange={handleOnChange}
                placeholder="https://github.com/..."
                className="w-full bg-[#0A0A10]  border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold"
              />
            </div>
            <div className="w-full">
              <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2 ">
                Description
              </h1>
              <textarea
                id=""
                rows={5}
                name="description"
                value={form.description}
                onChange={handleOnChange}
                className="w-full bg-[#0A0A10] border border-[#22223A] rounded-md py-2 px-3 text-[#66668A] text-[12px] font-bold focus:outline-0"
                placeholder="Brief description of the project..."
              ></textarea>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#66668A] uppercase text-[10px] font-bold mb-2">
                ICON / IMAGE{" "}
                <span className="text-[#333355] lowercase font-medium">
                  optional
                </span>
              </h1>
              <label
                htmlFor="imageInputId"
                className=" border border-[#22223A] bg-[#0A0A10] p-4 rounded-md border-dashed flex gap-3 justify-center items-center cursor-pointer"
              >
                {preview.length > 0 ? (
                  preview.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt="Preview"
                      className="h-[45px] object-cover rounded-md text-[#66668A] text-[10px] font-bold flex flex-col justify-center items-center"
                    />
                  ))
                ) : (
                  <span className="text-[#66668A] text-[10px] font-bold flex flex-col justify-center items-center">
                    <RiImage2Line size={30} color="#66668A" /> Click to upload
                  </span>
                )}
                {/* <span className="text-[#66668A] text-[10px] font-bold flex flex-col justify-center items-center"><RiImage2Line size={30} color="#66668A"/> Click to upload</span> */}
                <input
                  id="imageInputId"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <div className="">
              <button type="button">Cancel</button>
              <button>Add new</button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
};

export default FormWork;
