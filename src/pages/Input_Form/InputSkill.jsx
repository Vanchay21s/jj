import React, { use, useState } from "react";

const InputSkill = ({ onAdd, setForm }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");

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
      <button className={`box-button`}>ADD</button>
    </form>
  );
};

export default InputSkill;