import api from "../api/axios"

const SkillRepo = {
    get(){
        return api.get("/skill")
    },
    create(data){
        return api.post("/skill", data)
    },
    delete(id){
        return api.delete(`/skill/${id}`)
    }
}

export default SkillRepo