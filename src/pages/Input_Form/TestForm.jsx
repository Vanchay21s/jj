import { init } from "@emailjs/browser";
import { img } from "motion/react-m";
import { useState } from "react";
import FormInputFeature from "./FormInputFeature";

const initialFormState = {
  name: "",
  position: "",
  github: "",
  demo: "",
  framework: "",
  description: "",
  image: null,
  preview: null,
};
const initialFormProfileState = {
  username: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  about: "",
  data: "",
  password: "",
  image: null,
  preview: null,
};
const initialFormSkillState = {
  name: "",
  rating: "",
  image: null,
  preview: null,
};

const TestForm = () => {
  // FormData----
  const [formProfile, setFormProfile] = useState(initialFormProfileState); //-- Profile
  const [formSkill, setFormSkill] = useState(initialFormSkillState); //-- Skill
  const [formWork, setFormWork] = useState(initialFormState); //-- Work

  // Handle Input Function----
  const handleInputProfile = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormProfile((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file),
      }));
      return
    }
    setFormProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  }; //Input Profile
  const handleinputSkill = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormSkill((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file),
      }));
    } else {
      setFormSkill((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleInputWork = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormWork((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file),
      }));
    }
    setFormWork((prev) => ({
      ...prev,
      [name]: value,
    }));
  }; //Input Work

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    console.log(formProfile);
    alert("ok");
    resetProfile();
  };
  const handleSubmitSkill = (e) => {
    e.preventDefault();
    console.log(formSkill);
    alert("ok");
    resetSkill();
  };
  const handleSubmitWork = (e) => {
    e.preventDefault();
    if (!formWork.name || !formWork.position) {
      alert("Please fill in all required fields");
      return;
    }
    window.confirm("Are you sure you want to delete this profile?");
    resetFormWork();
  };

  // Reset Function
  const resetProfile = () => {
    if (formProfile.preview) {
      URL.revokeObjectURL(formProfile.preview);
    }
    setFormProfile(initialFormProfileState);
  };
  const resetSkill = () => {
    if (formSkill.preview) {
      URL.revokeObjectURL(formSkill.preview);
    }
    setFormSkill(initialFormSkillState);
  };
  const resetFormWork = () => {
    if (formWork.preview) {
      URL.revokeObjectURL(formWork.preview);
    }
    setFormWork(initialFormState);
  };

  return (
    <article className="bg-gray-300 ">
      {/* Profile */}
      <form
        onSubmit={handleSubmitProfile}
        className="w-full max-w-7xl m-auto py-3 flex flex-col gap-2"
      >
        <label htmlFor="">Profile Form</label>
        <input
          type="text"
          name="username"
          value={formProfile.username}
          placeholder="Username"
          onChange={handleInputProfile}
          className={`form-input`}
        />
        <input
          type="text"
          name="name"
          value={formProfile.name}
          placeholder="name"
          onChange={handleInputProfile}
          className={`form-input`}
        />
        <input
          type="text"
          name="phone"
          value={formProfile.phone}
          placeholder="Phone munber"
          onChange={handleInputProfile}
          className={`form-input`}
        />
        <input
          type="email"
          name="email"
          value={formProfile.email}
          placeholder="Email"
          onChange={handleInputProfile}
          className={`form-input`}
        />
        <input
          type="text"
          name="address"
          value={formProfile.address}
          placeholder="Address"
          onChange={handleInputProfile}
          className={`form-input`}
        />
        <textarea
          type="text"
          name="about"
          value={formProfile.about}
          placeholder="About"
          onChange={handleInputProfile}
          cols={20}
          rows={5}
          className={`form-input`}
        />
        <input
          type="date"
          name="date"
          value={formProfile.date}
          onChange={handleInputProfile}
          className={`form-input`}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleInputProfile}
          required
          className={`form-input`}
        />
        {formProfile.preview && (
          <img
            src={formProfile.preview}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-lg"
          />
        )}
        <button className={`form-input`}>OK</button>
      </form>
      {/* Skill is not yet */}
      <form
        onSubmit={handleSubmitSkill}
        className="w-full max-w-7xl m-auto py-3 flex flex-col gap-2"
      >
        <label htmlFor="">Skill Form</label>
        <input
          type="text"
          name="name"
          value={formSkill.name}
          placeholder="name"
          onChange={handleinputSkill}
          className={`form-input `}
        />
        <input
          type="text"
          name="rating"
          value={formSkill.rating}
          placeholder="rating"
          onChange={handleinputSkill}
          className={`form-input`}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleinputSkill}
          className={`form-input`}
        />
        {formSkill.preview && (
          <img
            src={formSkill.preview}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-lg"
          />
        )}
        <button className="form-input">Add</button>
      </form>
      {/* Work is done */}
      <form onSubmit={handleSubmitWork}
        className="w-full max-w-7xl m-auto py-3 flex flex-col gap-2"
      >
        <label htmlFor="">Work Form</label>
        <input
          type="text"
          name="name"
          value={formWork.name}
          placeholder="Name Work"
          onChange={handleInputWork}
          className={`form-input`}
        />
        <input
          type="text"
          name="position"
          value={formWork.position}
          placeholder="Positionn"
          onChange={handleInputWork}
          className={`form-input`}
        />
        <input type="text"
          name="github"
          value={formWork.github}
          placeholder="Your link Github"
          onChange={handleInputWork}
          className={`form-input`}
        />
        <input type="text"
          name="demo"
          value={formWork.demo}
          placeholder="Your Demo link"
          onChange={handleInputWork}
          className={`form-input`}
        />
        <input type="text"
          name="framework"
          value={formWork.framework}
          placeholder="Framework"
          onChange={handleSubmitWork}
          className={`form-input`}
        />
        <input type="text"
          name="description"
          value={formWork.description}
          placeholder="Description"
          onChange={handleInputWork}
          className={`form-input`}
        />
        <input type="file" 
           accept="image/*"
           onChange={handleInputWork}
           className={`form-input`}
        />
        {
          formWork.preview && (
            <img 
              src={formWork.preview} 
              alt="" 
              srcset="" 
              className="w-24 h-24 object-cover rounded-lg"  
            />
          )
        }
        <button type="submit" className={`form-input`}>ok</button>
      </form>
    </article>
  );
};

export default TestForm;
