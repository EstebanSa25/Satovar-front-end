import axios from 'axios';
import { getEnvVariables } from '../helpers';
const { VITE_API_URL } = getEnvVariables();

const satovarApi = axios.create({
    baseURL: VITE_API_URL,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
satovarApi.interceptors.request.use((config: any) => {
    config.headers = {
        ...config.headers,
        Authorization: localStorage.getItem('token') || '',
    };
    return config;
});

export default satovarApi;
