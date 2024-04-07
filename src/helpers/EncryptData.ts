/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from 'crypto-js';
import { getEnvVariables } from './getEnvVariables';
const { VITE_SECRET_KEY } = getEnvVariables();

export const EncryptData = (data: { [key: string]: any }): string => {
    return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        VITE_SECRET_KEY
    ).toString();
};
