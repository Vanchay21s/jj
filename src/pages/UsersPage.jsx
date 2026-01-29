// src/pages/UsersPage.jsx
import { useUsers } from "../hooks/useUsers.js";
import UserList from "../components/UserList.jsx";

export default function UsersPage() {
  const { data, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return <UserList users={data} />;
}
