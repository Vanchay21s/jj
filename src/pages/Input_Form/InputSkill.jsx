import { use, useState } from "react";

const InputSkill = ({ onAdd, setForm }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Name: ${name}\nRating: ${rating}`);
    onAdd({name, rating})
    setName("");
    setRating("");
    setForm(false)
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className={`focus:outline-0 border-b p-4 focus:border-y-amber-400`}
        />
      <input
        type="number"
        min={0}
        max={100}
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        placeholder="Rating"
        className={`focus:outline-0 border-b p-4 focus:border-y-amber-400`}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="bg-gray-200 p-4 hover:scale-105 hover:bg-yellow-400 rounded-lg duration-300 cursor-pointer"
        required
      />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-24 h-24 object-cover rounded-lg"
        />
      )}
      <button className={`box-button`}>ADD</button>
    </form>
  );
};

export default InputSkill;