import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const init_form = {
  name: "",
  rating: "",
  image: null
};

const InputSkill = () => {
  const [data, setData] = useState([])
  const [values, setValues] = useState(init_form);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("rating", values.rating);
    formData.append("image", values.image);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/skill",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    axios.get('http://localhost:5000/api/skill').then(res => setData(res.data.data)).catch(err => console.log(err))
  }, [])

  return (<>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Skill Name</label>
        <input
          type="text"
          onChange={(e) =>
            setValues({ ...values, name: e.target.value })
          }
          required
          />
      </div>

      <div>
        <label>Rating</label>
        <input
          type="number"
          step="0.1"
          onChange={(e) =>
            setValues({ ...values, rating: e.target.value })
          }
          required
          />
      </div>

      <div>
        <label>Image</label>
        <input
          type="file"
          onChange={(e) =>
            setValues({ ...values, image: e.target.files[0] })
          }
          required
          />
      </div>

      <button type="submit">Add Skill</button>
    </form>
    {data.map((s, index) => (
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