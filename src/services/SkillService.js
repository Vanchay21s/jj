import SkillRepo from "../respository/SkillRepo"

const SkillService = {
    async find(){
        const res = await SkillRepo.getAll()
        return res.data
    }
}

export default SkillService