import { useEffect, useState } from "react";
import SkillService from "../services/skillService";

const useSkill = () => {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(false)

    const load = async () => {
        // setLoading(true);
        const data = await SkillService.find();
        setSkills(data);
        setLoading(false);
    };    
    useEffect(()=>{
        load()
    })

    return {skills, loading}
}
export default useSkill;