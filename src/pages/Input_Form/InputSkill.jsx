import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSkill } from "../../call api/hooks/useSkill";


const InputSkill = () => {
  const [data, setData] = useState([])
  // const [values, setValues] = useState(init_form);
  // const navigate = useNavigate();

  const {formData, preview, handleOnChange, handleSubmit} = useSkill()

  
  useEffect(()=>{
    axios.get('http://localhost:5000/api/skill')
      .then(res => setData(res.data.data))
      .catch(err => console.log(err))
  }, [])
  console.log("3==>",formData)
  return (<>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Skill Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          required
          />
      </div>

      <div>
        <label>Rating</label>
        <input
          type="text"
          name="rating"
          value={formData.rating}
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