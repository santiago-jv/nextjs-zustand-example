import axios from "axios";

export const httpApi = axios.create({
    baseURL:'http://localhost:4000/api',
})