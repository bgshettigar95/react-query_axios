import axios from "axios";

export const AuthFetch = axios.create({
    baseURL: 'https://course-api.com',
    headers: {
        'Accept': 'application/json'
    }
})