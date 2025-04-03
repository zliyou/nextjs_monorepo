import { Axios } from "axios";

const axiosInstance = new Axios({
    baseURL: ''
})

axiosInstance.interceptors.request.use(request => {
    return request
})

axiosInstance.interceptors.response.use(response => {
    console.log('target response', response);
    return {
        ...response,
        data: JSON.parse(response.data)
    }
})

export const axios = axiosInstance