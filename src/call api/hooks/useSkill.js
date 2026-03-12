// import { useEffect, useState } from "react";
// import {createSkill, find} from "../service/skillService.js";

import { useEffect, useState } from "react"
import {skillService} from "../service/skillService"
import { data } from "react-router-dom"

export const useSkill =  () => {
    const [skill, setSkill] = useState([])
    const [skillOne, setSkillOne] = useState([])
    const [editId, setEditId] = useState(null)
    
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
    
    const oneSkill = async (id) => {
        setState("loading")
        setError(null)
        try{
            const res = await skillService.findOne(id)
            setSkillOne(res.data)
            setState("success")
        }catch(err) {
            setError(err.message)
            setState("error")
        }
    }

    const addSkill = async (data) => {
        setState("loading")
        setError(null)
        try {
            await skillService.save(data)
            await loadSkill()
            setState("success")
        } catch (err) {
            setError(err.message)
            setState("error")
        }
    }

    const editSkill = async (id, data) => {
        setState("loading")
        setError(null)
        try{
            await skillService.updateOne({id: id, data: data})
            await loadSkill()
        }catch(err){
            setError(err.message)
            setState("error")
        }
    }

    const removeSkill = async (id) => {
        setState("loading")
        setError(null)
        try {
            await skillService.deleteOne(id)
            await loadSkill()
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
        skillOne,
        oneSkill,
        addSkill,
        editSkill,
        removeSkill
    }
}