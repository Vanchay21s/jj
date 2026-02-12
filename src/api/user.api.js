// src/api/users.api.js
import apiFetch from "./client.js";
import ENDPOINTS from "./endpoints.js";

const getUsers = () => apiFetch(ENDPOINTS.USERS, {method: 'GET'});
const getUserById = (id) =>
  apiFetch(`${ENDPOINTS.USERS}/${id}`, {method: 'GET'});
const createUser = (data) =>
  apiFetch(ENDPOINTS.USERS, {
    method: 'POST',
    body: JSON.stringify(data)
  });

export {getUsers, getUserById, createUser}
