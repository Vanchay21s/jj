import { useState } from "react";


const INITIAL_FORM = {
    name: "",
    rating: "",
    image: null
}

export const useSkill = () => {
    const [form, setForm] = useState(INITIAL_FORM)
    const [preview, setPreview] = useState(null);
    const [status, setStatus]   = useState("idle"); // idle | loading | success | error
    const [error, setError]     = useState(null);

    // function handleNameChange(e) {
    //     setForm((prev) => ({ ...prev, name: e.target.value }));
    // }

    // function handleImageChange(e) {
    //     const file = e.target.files?.[0] ?? null;
    //     setForm((prev) => ({ ...prev, image: file }));
    //     setPreview(file ? URL.createObjectURL(file) : null);
    // }
    const handleOnChange = (e) => {
        const {name, value, type, files} = e.target
        if(type === "files"){
            const file = files[0]
            setForm((prev) => ({
                ...prev,
                image: file,
            }))
            setPreview(URL.createObjectURL(file))
        }
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    } 
    function reset() {
        setForm(INITIAL_FORM);
        setPreview(null);
        setStatus("idle");
        setError(null);
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
        form,
        handleOnChange
    };
}