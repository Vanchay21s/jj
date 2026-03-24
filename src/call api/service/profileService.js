import api from "../api/axios"


export const profileService = {
    async find(){
        const res = await api.get("/profile")
        return res.data || []
    },
    async updateOne(id, data){
        const res = await api.put(`/profile/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return res.data
    }
}