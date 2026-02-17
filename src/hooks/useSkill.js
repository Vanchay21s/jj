import { useEffect, useMemo, useState } from "react";
import SkillService from "../services/SkillService";
import { data } from "react-router-dom";

const useSkill = (pageSize = 5) => {
    const [skills, setSkills] = useState([null])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);

    const load = async () => {
        try{
            // setLoading(false);
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
            await SkillService.save(skill);
            await load();
        }catch(err){
            console.error("Failed to load skills:", err);
        }
    };   
    const removeSkill = async (id) => {
        await SkillService.remove(id);
    };
    useEffect(()=>{
        load()
    }, [])
    const totalPages = Math.ceil(skills.length / pageSize);

    const pagedSkill = useMemo(() => {
        const start = (page - 1) * pageSize;
        return skills.slice(start, start + pageSize);
    }, [skills, page, pageSize]);

    return {skills: pagedSkill, loading, page, totalPages, setPage, addSkill, removeSkill }
}


export default useSkill;