import apiFetch from "./client.js";
import ENDPOINTS from "./endpoints.js";

export const getProducts = () => {
  return apiFetch(ENDPOINTS.PRODUCTS);
}
