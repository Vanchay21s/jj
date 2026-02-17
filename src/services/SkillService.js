import { aside } from "motion/react-client"
import SkillRepo from "../respository/SkillRepo"

const SkillService = {
    async find(){
        const res = await SkillRepo.get()
        return res.data
    },
    save: async(skill)=>{
        console.log("Service", skill)
        const result = await SkillRepo.create(skill) 
        return result.data
    },
    remove: async(id)=>{
        const result = await SkillRepo.delete(id) 
        return result.data
    }
}

export default SkillService