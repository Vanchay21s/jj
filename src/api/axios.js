import axios from "axios";

const api = axios.create({
    baseURL: "https://api-portfolio-sable.vercel.app/api",
    headers: {"Content-Type": "application/json"},
})

export default api