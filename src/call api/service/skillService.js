import api from "../api/axios";


export const createSkill = async (formData) => {
  const response = await api.post("/skill", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};