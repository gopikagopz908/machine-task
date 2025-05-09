import axios from "axios";
const baseURL=import.meta.env.VITE_BASE_URL

console.log(baseURL,"wdwd")
const axiosInstance=axios.create({
    baseURL,
    timeout:5000,
})

export default axiosInstance;