import { useEffect, useState } from "react";
import axios from "axios";
import { useSkill } from "../../call api/hooks/useSkill";

const init_skill = {
  name: "",
  rating: "",
  image: null
}

const InputSkill = () => {
  const {skill, error, status, addSkill } = useSkill()

  const [form, setForm] = useState(init_skill)
  const [preview, setPreview] = useState(null)

  const handleOnChange = (e) => {
    const {name, value, type, files} = e.target
    if (type === "file"){
      const file = files[0]
      setForm((res) => ({
        ...res,
        image: file,
      }))
      setPreview(URL.createObjectURL(file))
      return
    }
    setForm((res) => ({
      ...res,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("rating", form.rating);
    formData.append("image", form.image);

    addSkill(formData);
  }
  

  return (<>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Skill Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleOnChange}
          required
          />
      </div>

      <div>
        <label>Rating</label>
        <input
          type="text"
          name="rating"
          value={form.rating}
          onChange={handleOnChange}
          required
          />
      </div>

      <div>
        <label>Image</label>
        <input
            type="file"
            accept="image/*"
            onChange={handleOnChange}
            className={`form-input`}
        />
      </div>

      <button type="submit">Add Skill</button>
    </form>
    {skill?.map((s, index) => (
     <div key={index}>
       <p>{s.name}</p>
       <p>{s.rating}</p>
       <img
         src={`http://localhost:5000/uploads/${s.image}`}
         alt={s.name}
         width="120"
       />
     </div>
    ))}
          </>
  );
};

export default InputSkill;