import { useState } from "react";
import {createSkill} from "../service/skillService.js";


const INITIAL_FORM = {
    name: "",
    rating: "",
    image: null,
}

export const useSkill = () => {
    const [formData, setFormData] = useState(INITIAL_FORM)
    const [preview, setPreview] = useState(null);
    const [status, setStatus]   = useState("idle"); // idle | loading | success | error
    const [error, setError]     = useState(null);

    const handleOnChange = (e) => {
        const { name, value, files, type } = e.target;
        if (type === "file") {
            const file = files[0];
            setFormData((prev) => ({
                ...prev,
                image: file,
            }));
            setPreview(URL.createObjectURL(file))
            return
        }
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }; //Inp
    const reset = () => {
        setFormData(INITIAL_FORM);
        setPreview(null);
        // setStatus("idle");
        // setError(null);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("loading");
        setError(null);
        try {
            await createSkill(formData)
            setStatus("success")
        }catch (error) {
            setError(error?.response?.data?.message ?? "Something went wrong");
            setStatus("error");
        }
    }

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     if (!form.name.trim() || !form.image) return;

    //     setStatus("loading");
    //     setError(null);

    //     try {
    //         await insertWork({ name: form.name.trim(), image: form.image });
    //         setStatus("success");
    //         reset();
    //     } catch (err) {
    //         setError(err?.response?.data?.message ?? "Something went wrong.");
    //         setStatus("error");
    //     }
    // }
    return {
        formData,
        preview,
        reset,
        handleOnChange,
        handleSubmit
    };
}