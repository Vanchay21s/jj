// src/api/users.api.js
import apiFetch from "./client.js";
import ENDPOINTS from "./endpoints.js";

export const getUsers = () => apiFetch(ENDPOINTS.USERS, {method: 'GET'});
export const getUserById = (id) =>
  apiFetch(`${ENDPOINTS.USERS}/${id}`, {method: 'GET'});
