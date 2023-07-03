import axios from "axios";

export const AuthFetch = axios.create({
    baseURL: 'https://course-api.com',
    headers: {
        'Accept': 'application/json'
    }
});

AuthFetch.interceptors.request.use((request) => {
    console.log('request received', request);
    request.headers.Accept = 'application/json';
    return request;
}, (error) => {
    console.log(error);
    return Promise.reject(error);
});

AuthFetch.interceptors.response.use((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
    return Promise.reject(error);
})