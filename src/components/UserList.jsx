// src/components/UserList.jsx
export default function UserList({ users }) {
  return (
    <ul className="">
      {users.map(u => (
        <li key={u.id}>{u.name.firstname}</li>
      ))}
    </ul>
  );
}
