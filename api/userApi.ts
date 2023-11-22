import axios from "axios";

export const userApi = axios.create({
    baseURL:"https://m3ssmugestiondeusuarios-production.up.railway.app/"
})