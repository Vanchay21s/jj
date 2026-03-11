// import { useEffect, useState } from "react";
// import {createSkill, find} from "../service/skillService.js";

import { useEffect, useState } from "react"
import {skillService} from "../service/skillService"

export const useSkill =  () => {
    const [skill, setSkill] = useState([])
    const [status, setState] = useState(null)
    const [error, setError] = useState(null)

    const loadSkill = async () => {
        setState("loading")
        setError(null)
        try{
            const res = await skillService.find()
            setSkill(res.data)
            setState("success")
        }catch(err){
            setError(err.message)
            setState("error")
        }
    }

    const addSkill = async (data) => {
        setState("loading")
        setError(null)
        try {
            console.log("useSkill:", data)
            await skillService.save(data)
            await loadSkill()
            setState("success")
        } catch (err) {
            setError(err.message)
            setState("error")
        }
    }

    useEffect(() => {
        loadSkill()
    }, [])

    return {
        skill,
        status,
        error,
        addSkill
    }
}