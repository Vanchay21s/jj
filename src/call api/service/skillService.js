import { data } from "react-router-dom";
import api from "../api/axios";



export const skillService = {
  async find(){
    const res = await api.get("skill")
    return res.data
  },

  async save(data){
    const res = await api.post("/skill", data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return res.data
  },

  async findOne(id){
    const res = await api.get(`/skill/${id}`)
    return res.data
  },

  async deleteOne(id){
    const res = await api.delete(`/skill/${id}`)
    return res.data
  },

  async updateOne(id, data){
    const res = await api.put(`/skill/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return res.data
  }
}