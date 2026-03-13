import { useEffect, useState } from "react";
import axios from "axios";
import { useSkill } from "../../call api/hooks/useSkill";
import { Link, NavLink } from "react-router-dom";

const init_skill = {
  name: "",
  rating: "",
  image: null
}

const InputSkill = () => {
  const {skill, error, status, addSkill, removeSkill } = useSkill()

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
      {/* <div>
        <label>Skill Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleOnChange}
          required
          />
      </div> */}
      <div>
        <label>Skill Name</label>
        <select
          name="name"
          value={form.name}
          onChange={handleOnChange}
          required
        >
          <option value="">-- Select Skill --</option>
          <option value="React.js">React.js</option>
          <option value="Express.js">Express.js</option>
          <option value="MongoDB">MongoDB</option>
          <option value="PostgreSQL">PostgreSQL</option>
          <option value="Vue.js">Vue.js</option>
        </select>
      </div>
      <div>
        <label>Rating</label>
        <select
          name="rating"
          value={form.rating}
          onChange={handleOnChange}
          required
          >
            <option value="">0%</option>
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
            <option value="60">60%</option>
            <option value="70">70%</option>
            <option value="80">80%</option>
            <option value="90">90%</option>
            <option value="100">100%</option>
          </select>
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
      <div>
        <Link to={`/test/${s.id}`} key={s.id}>
          <div key={s.id} className="bg-amber-200 w-52 flex items-center justify-start gap- 4">
            <img
              src={`http://localhost:5000/uploads/${s.image}`}
              alt={s.name}
              className="size-15 rounded-full "
            />
            <div>
              <p>{s.name}</p>
              <p>{s.rating}</p>
            </div>
          </div>
        </Link>
        <button onClick={() => removeSkill(s.id)}>Remove</button>
      </div>
    ))}
          </>
  );
};

export default InputSkill;