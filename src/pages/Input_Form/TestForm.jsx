import { article } from "motion/react-client";
import { use, useId, useState } from "react";

const TestForm = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [date, setDate] = useState("");
  const [passwork, setPasswork] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  // Skill
  const [nameSkill, setNameSkill] = useState("")
  const [rating, setRating] = useState("")

  // HandleImageChange
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const [imgSkill, setImgSkill] = useState(null)
  const [skillView, setSkillView] = useState(null)
  const handleImgSkill = (e) =>{
    const file = e.target.files[0]
    setImgSkill(file)
    if (file){
      setSkillView(URL.createObjectURL(file))
    }
  }

  // Handle Profile
  const handleSubmitProfile = (e) => {
    e.preventDefault();
    alert(
      `Username: ${username}\nName: ${name}\nPhone Number: ${phone}\nEmail: ${email}\nAddress: ${address}\nAbout: ${about}\nDate: ${date}\nPassword: ${passwork}\n`,
    );
    setUsername("");
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setAbout("");
    setDate("");
    setPasswork("");
  };
  // Handle Skill
  const handleSubmitSkill = (e) =>{
    e.preventDefault();
    alert("ok")
  }


  // Console...
  console.log(ok)
  console.log(username);
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
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className={`form-input`}
        />
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className={`form-input`}
        />
        <input
          type="text"
          value={phone}
          placeholder="Phone munber"
          onChange={(e) => setPhone(e.target.value)}
          className={`form-input`}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className={`form-input`}
        />
        <input
          type="text"
          value={address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          className={`form-input`}
        />
        <textarea
          type="text"
          value={about}
          placeholder="About"
          onChange={(e) => setAbout(e.target.value)}
          cols={20}
          rows={5}
          className={`form-input`}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`form-input`}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className={`form-input`}
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-24 h-24 object-cover rounded-lg"
          />
        )}
        <button className={`form-input`}>OK</button>
      </form>
      {/* Skill */}
       <form onSubmit={handleSubmitSkill}
          className="w-full max-w-7xl m-auto py-3 flex flex-col gap-2"
       >
          <input type="text"
            value={nameSkill}
            placeholder="name"
            onChange={(e) => setNameSkill(e.target.value)}
            className={`form-input `}
          />
          <input type="text"
            value={rating}
            placeholder="rating"
            onChange={(e) => setRating(e.target.value)}
            className={`form-input`}
          />
          <input type="file"
            accept="image/*"
            onChange={handleImgSkill}
          />
          {skillView && (
            <img
              src={skillView}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-lg"
            />
          )}
          <button className="form">Add</button>
       </form>
      {/* Work */}
    </article>
  );
};

export default TestForm;
