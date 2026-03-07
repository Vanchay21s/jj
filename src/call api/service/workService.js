import api from "../../lib/api";

/**
 * Insert a new work with a name and image file.
 * @param {{ name: string, image: File }} data
 * @returns {Promise<Object>} Created work object
 */
export async function insertWork({ name, image }) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", image);

  const response = await api.post("/works", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
}