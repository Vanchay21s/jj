// src/hooks/useUsers.js
import { useEffect, useState } from "react";
import { getUsers } from "../api/user.api.js";

export function useUsers() {
  const [data, setData] = useState([]);
  const [userError, setUserError] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then(setData)
      .catch(setUserError)
      .finally(() => setUserLoading(false));
  }, []);

  return { data, userLoading, userError };
}
