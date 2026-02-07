// src/pages/UsersPage.jsx
import { useUsers } from "../hooks/useUsers.js";
import UserList from "../components/UserList.jsx";
import { useState } from "react";
import { AddUser } from "./AddUser.jsx";

export default function UsersPage() {
  const { data, userLoading, userError } = useUsers();
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (userLoading) return <p>Loading...</p>;
  if (userError) return <p>Error loading users</p>;
  console.log(data)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    loading(true);

    try {
      await createUser(form);
      setMessage("Saved successfully!");
      setForm({ username: "", email: "", password: "" });
    } catch {
      setMessage("Error saving data");
    } finally {
      loading(false);
    }
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
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-7xl m-auto bg-white p-6 rounded-lg">
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="border p-2 w-full rounded"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 w-full rounded"
            />
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="border p-2 w-full rounded"
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
