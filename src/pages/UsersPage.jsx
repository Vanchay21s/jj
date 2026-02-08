// src/pages/UsersPage.jsx
import { useUsers } from "../hooks/useUsers.js";
import UserList from "../components/UserList.jsx";
import { useState } from "react";
import useCreateUser from "../hooks/userHook/useCreateUser.js";

export default function UsersPage() {
  const [open, setOpen] = useState(false);
  const { data, loading, error } = useUsers();
  const {submit, loading: saving, message} = useCreateUser();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault();
    await submit(form);
    setForm({
      username: "",
      email: "",
      password: ""
    })
    alert(message);
  }

  return(
    <article className="dark-mode" >
      <div className="w-full">
        <div className="w-full max-w-7xl m-auto flex items-center justify-between">
          <h1>User</h1>
          <button onClick={()=> setOpen(true)} className="box box bg-green-500 text-white">Add User</button>
        </div>
        <table className="w-full max-w-7xl border rounded-lg overflow-hidden m-auto">
          <thead className="">
            <tr>
              <th className="border px-4 py-2 text-left">ID</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Phone</th>
              <th className="border px-4 py-2 text-left">Event</th>
            </tr>
          </thead>
          <tbody>
            {data.map((ss, index) =>(
              <tr key={ss.id}>
                <td className="border px-4 py-2">{ss.id}</td>
                <td className="border px-4 py-2">{ss.username}</td>
                <td className="border px-4 py-2">{ss.email}</td>
                <td className="border px-4 py-2">{ss.phone}</td>
                <td className="w-60 border px-4 py-2">
                  <div className="w-full flex gap-4">
                    <button className="box bg-blue-500 text-white">Edit</button>
                    <button className="box bg-red-500 text-white">Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {open && (
        <article className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-7xl m-auto bg-white dark:bg-gray-800 p-6 rounded-lg">
            <div className="w-full max-w-7xl m-auto flex items-center justify-between pb-4">
              <h1>Add User</h1>
              <button onClick={()=> setOpen(false)} className="box bg-white text-black">Close</button>
            </div>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="form-input"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-input"
            />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="form-input"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              {loading ? "Saving..." : "Submit"}
            </button>

            {message && <p className="text-center">{message}</p>}
          </form>
        </article>
      )}
    </article>
  );
}
