import { useEffect, useState } from "react";
import SkillService from "../services/SkillService";
import { data } from "react-router-dom";

const useSkill = () => {
    const [skills, setSkills] = useState([null])
    const [loading, setLoading] = useState(false)

    const load = async () => {
        try{
            setLoading(false);
            const data = await SkillService.find();
            setSkills(data);
            setLoading(true);
        }catch(err){
            console.error("Load failed: ", err )
            setSkills([]); // fallback to empty array
            setLoading(false);
        }
    }; 
    const addSkill = async (skill) => {
        try{
            const newSkill = await SkillService.save(skill);
            if (newSkill) {
                setSkills(prev => Array.isArray(prev) ? [...prev, newSkill] : [prev, newSkill]);
            }
        }catch(err){
            console.error("Failed to load skills:", err);
        }
    };   
    const removeSkill = async (id) => {
        await SkillService.remove(id);
        setSkills((prev) => prev.filter((s) => s.id !== id));
    };
    useEffect(()=>{
        load()
    }, [])

    return {skills, loading, addSkill, removeSkill}
}


export default useSkill;