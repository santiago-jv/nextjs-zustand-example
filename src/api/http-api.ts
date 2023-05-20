import axios from "axios";

export const httpApi = axios.create({
    baseURL:'http://localhost:3000/api',
})