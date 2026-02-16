import api from "../api/axios"

const SkillRepo = {
    getAll(){
        return api.get("/skill")
    }
}

export default SkillRepo