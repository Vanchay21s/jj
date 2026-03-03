import { FaPen, FaSave } from "react-icons/fa";
import { useState } from "react";
import gojo from "../image/gojo.jpg";
import { Alert } from "bootstrap";
import { div, form } from "motion/react-client";

const initState = {
  username: "Vanchay",
  name: "Meas Vanchay",
  phone: "060446580",
  email: "vanchay@gmail.com",
  address: "133, Kpr, Svr",
  about: "I am handsome man",
  date: "2002-02-28",
  password: "**********",
  image: null,
  preview: null,
};
const ProfilePage = () => {
  const [formData, setFormData] = useState(initState);
  const [open, setOpen] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormData((data) => ({
        ...data,
        image: file,
        preview: URL.createObjectURL(file),
      }));
    }
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(`
        username: ${formData.username}
        name: ${formData.name}
        email: ${formData.email}
        address: ${formData.address}
        phone: ${formData.phone}
        date: ${formData.date}
        address: ${formData.address}
    `);
  };

  return (
    <article className="w-full flex flex-col">
      <h1 className="text-2xl w-full pb-4 border-b border-gray-400">Profile</h1>
      <button
        onClick={() => setOpen(true)}
        className="absolute right-4 mt-2 text-sm cursor-pointer flex justify-center items-center border-b"
      >
        Change password
      </button>
      <form
        onSubmit={handleSubmit}
        className="w-full h-full mt-2 flex flex-col justify-between"
      >
        <div className="">
          <h1 className="text-lg mt-2">Profile picture</h1>
          <div className="relative size-36 mt-2">
            {formData.preview ? (
              <img
                src={formData.preview}
                alt="Preview"
                about=""
                className="absolute w-full size-36 object-cover rounded-full"
              />
            ) : (
              <img
                src={gojo}
                alt="Preview"
                about=""
                className="absolute w-full size-36 object-cover rounded-full"
              />
            )}
            <input
              id="editInput"
              type="file"
              accept="image/*"
              onChange={handleChangeInput}
              className="absolute top-30 border rounded-lg    hidden "
            />
            <label
              htmlFor="editInput"
              className="absolute top-25 left-23 border rounded-lg text-sm cursor-pointer bg-gray-900 px-3 py-1 flex justify-center items-center gap-2"
            >
              <FaPen /> Edit
            </label>
          </div>
          <h1 className="text-lg mt-2">Full Name</h1>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Vanchay"
            onChange={handleChangeInput}
            className={`w-1/4 border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2`}
          />
          <p className="text-xs text-gray-400 mt-2">Your real name.</p>
          <h1 className="text-lg mt-2">Username</h1>
          <input
            type="text"
            name="username"
            value={formData.username}
            placeholder="Meas Vanchay"
            onChange={handleChangeInput}
            className={`w-1/4 border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2`}
          />
          <p className="text-xs text-gray-400 mt-2">
            Your name. The name that you wanna call.
          </p>
          <h1 className="text-lg mt-2">About me</h1>
          <textarea
            type="text"
            name="about"
            value={formData.about}
            placeholder="About me"
            onChange={handleChangeInput}
            className={`w-1/3 border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2 `}
          />
          <p className="text-xs text-gray-400 mt-2">
            You can @mention other users and organizations to link to them.
          </p>
          <h1 className="text-lg mt-2">Date</h1>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChangeInput}
            className={`border focus:border-blue-600 cursor-pointer border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2`}
          />
          <p className="text-xs text-gray-400 mt-2">
            You can @mention other users and organizations to link to them.
          </p>
          <h1 className="text-lg mt-2">Email</h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="email@gmail.com"
            onChange={handleChangeInput}
            className={`w-1/3 border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2 `}
          />
          <p className="text-xs text-gray-400 mt-2">Your gmail account...</p>
          <h1 className="text-lg mt-2">Phone</h1>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="phone number"
            onChange={handleChangeInput}
            className={`w-1/3 border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2 `}
          />
          <p className="text-xs text-gray-400 mt-2">Your phone number...</p>
          <h1 className="text-lg mt-2">Address</h1>
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="00, Xxxx, xxx"
            onChange={handleChangeInput}
            className={`w-1/3 border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2 `}
          />
          <p className="text-xs text-gray-400 mt-2">Your address...</p>
        </div>
        <button
          className={`w-30 text-lg mt-2 py-1 px-4 border rounded-lg flex justify-center items-center gap-2 cursor-pointer`}
        >
          <FaSave /> Save
        </button>
      </form>
      {open && (
        <div className="fixed inset-0 flex justify-end bg-black/50 bg-opacity-100">
          <div className="w-90 p-2 bg-gray-800 start-0">
            <div className="flex items-center justify-between border-b mt-1 pb-4 border-gray-400">
              <h1 className="text-sm w-full mt-4">Change password</h1>
              <button
                onClick={() => setOpen(false)}
                className="text-sm mt-4 border-b cursor-pointer"
              >
                close
              </button>
            </div>
            <form className="flex flex-col">
              <h1 className="text-lg mt-2">Old password</h1>
              <input
                type="text"
                name="old-password"
                placeholder="Old password"
                className={` border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2 `}
              />
              <h1 className="text-lg mt-2">New password</h1>
              <input
                type="text"
                name="new-password"
                placeholder="New password"
                className={` border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2 `}
              />
              <h1 className="text-lg mt-2">Confirm password</h1>
              <input
                type="text"
                name="confirm-password"
                placeholder="Confirm password"
                className={` border focus:border-blue-600 border-gray-400 focus:outline-none text-lg py-1 px-4 rounded-lg mt-2 `}
              />
              <div className="absolute bottom-4 flex items-center justify-center mt-2 gap-2">
                <button
                  className={`w-1/2 text-lg mt-2 py-1 px-4 border rounded-lg flex justify-center items-center gap-2 cursor-pointer`}
                >
                  Cancel
                </button>
                <button
                  className={`w-1/2 text-lg mt-2 py-1 px-4 border rounded-lg flex justify-center items-center gap-2 cursor-pointer`}
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </article>
  );
};

export default ProfilePage;
