import apiFetch from "./client.js";
import ENDPOINTS from "./endpoints.js";

const getProducts = () => {
  return apiFetch(ENDPOINTS.PRODUCTS);
}

export {getProducts}