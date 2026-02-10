import { useState } from "react";
import { createUser } from "../../api/user.api";

const useCreateUser = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const submit = async (form) => {
        console.log("submitting", form);
        setLoading(true);
        try {
            await createUser(form);
            setMessage("User created successfully");
        } catch (error) {
            console.error("Error creating user:", error);
            setMessage("Error creating user");
        } finally {
            setLoading(false);
        }
    };

    return { submit, loading, message };
};

export default useCreateUser;