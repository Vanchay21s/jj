// src/components/UserList.jsx
export default function UserList({ users }) {
  return (
    <ul className="user-list">
      {users.map(u => (
        <li key={u.id}>{u.name.firstname}</li>
      ))}
    </ul>
  );
}
