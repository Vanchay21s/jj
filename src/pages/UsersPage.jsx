// src/pages/UsersPage.jsx
import { useUsers } from "../hooks/useUsers.js";
import UserList from "../components/UserList.jsx";
import { useState } from "react";
import { AddUser } from "./AddUser.jsx";

export default function UsersPage() {
  const { data, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;
  console.log(data)

  return(
    <article className="dark-mode" >
      <div>
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
              <tr>
                <td className="border px-4 py-2">{ss.id}</td>
                <td className="border px-4 py-2">{ss.username}</td>
                <td className="border px-4 py-2">{ss.email}</td>
                <td className="border px-4 py-2">{ss.phone}</td>
                <td className="w-60 border px-4 py-2">
                  <div className="w-full flex gap-4">
                    <button key={ss.id} className="box bg-blue-500 text-white">Edit</button>
                    <button key={ss.id} className="box bg-red-500 text-white">Remove</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
