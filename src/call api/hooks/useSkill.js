// import { useEffect, useState } from "react";
// import {createSkill, find} from "../service/skillService.js";

import { useEffect, useState } from "react"
import {skillService} from "../service/skillService"
import { data } from "react-router-dom"

export const useSkill =  () => {
    const [skill, setSkill] = useState([])
    const [skillOne, setSkillOne] = useState([])
    const [editId, setEditId] = useState(null)
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null) 

    const loadSkill = async () => {
        setLoading(true)
        setError(null)
        try{
            const res = await skillService.find()
            setSkill(res)
        }catch(err){
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }
    
    const oneSkill = async (id) => {
        setLoading(true)
        setError(null)
        try{
            const res = await skillService.findOne(id)
            setSkillOne(res.data)
        }catch(err) {
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    const addSkill = async (data) => {
        setLoading(true)
        setError(null)
        setSuccess(null)
        try {
            const res = await skillService.save(data)
            console.log(res.status)
            if (res.status === false){
                setSuccess({msg: "Skill name already exists", type: "error"})
                return
            }
            setSuccess({msg: "Skill added successfull", type: "added"})
            await loadSkill()
        } catch (err) {
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    const editSkill = async (id, data) => {
        setLoading(true)
        setError(null)
        setSuccess(null)
        try{
            await skillService.updateOne(id, data)
            setSuccess({msg: "Skill updated successfull", type: "updated"})
            await loadSkill()
        }catch(err){
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    const removeSkill = async (id) => {
        setLoading(true)
        setError(null)
        setSuccess(null)
        try {
            await skillService.deleteOne(id)
            setSuccess({msg: "Skill deleted successfully", type: "deleted"})
            await loadSkill()
        } catch (err) {
            setError(err.message)
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadSkill()
    }, [])

    return {
        skill,
        loading,
        success,
        error,
        skillOne,
        oneSkill,
        addSkill,
        editSkill,
        removeSkill
    }
}