import axios from "axios";

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    function (request) {
        const token = localStorage.getItem('token'); 
        if (token) {
            request.headers.Authorization = `FINALITI__${token}`; 
        }
        return request;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
