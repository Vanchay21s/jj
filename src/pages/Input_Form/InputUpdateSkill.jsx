import React, { use, useState } from "react";

const InputUpdateSkill = ({ updateSkill, setEdit }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Name: ${name}\nRating: ${rating}`);
    updateSkill({name, rating})
    setName("");
    setRating("");
    setEdit(false)
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
        className={`bg-gray-200 p-4 hover:scale-102 hover:bg-yellow-400 rounded-lg duration-400  cursor-pointer`}
      />
      <button className={`box-button`}>ADD</button>
    </form>
  );
};

export default InputUpdateSkill;