// src/hooks/useUsers.js
import { useEffect, useState } from "react";
import { getUsers } from "../api/user.api.js";

export function useUsers() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
}
