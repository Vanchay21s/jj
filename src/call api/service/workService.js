import api from "../api/axios";
/**
 * Insert a new work with a name and image file.
 * @param {{ name: string, image: File }} data
 * @returns {Promise<Object>} Created work object
 */
// export async function insertWork({ name, image }) {
  // const formData = new FormData();
  // formData.append("name", name);
  // formData.append("image", image);
export async function insertWork(formData) {
  const response = await api.post("/work", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
}