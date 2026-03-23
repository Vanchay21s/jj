import api from "../api/axios"


export const profileService = {
    async find(){
        const res = await api.get("profile")
        return res.data || []
    }
}