import axios from 'axios';
import { getEnvVariables } from '../helpers';
const { VITE_API_URL } = getEnvVariables();

const satovarApi = axios.create({
    baseURL: VITE_API_URL,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
satovarApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default satovarApi;
