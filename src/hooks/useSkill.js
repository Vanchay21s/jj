import { useEffect, useMemo, useState } from "react";
import SkillService from "../services/SkillService";
import { data } from "react-router-dom";

const useSkill = (pageSize = 5) => {
    const [skills, setSkills] = useState([null])
    const [loading, setLoading] = useState(false)

    const load = async () => {
        try{
            // setLoading(false);
            const data = await SkillService.find();
            setSkills(data);
        }catch(err){
            console.error("Load failed: ", err )
            setSkills([]); 
            setLoading(false);
        }finally{
            setLoading(true);
        }
    }; 
    const addSkill = async (skill) => {
        try{
            await SkillService.save(skill);
            await load();
        }catch(err){
            console.error("Failed to load skills:", err);
        }
    };   
    const removeSkill = async (id) => {
        await SkillService.remove(id);
        await load();
    };
    useEffect(()=>{
        load()
    }, [])

    return {skills, loading, addSkill, removeSkill }
}


export default useSkill;