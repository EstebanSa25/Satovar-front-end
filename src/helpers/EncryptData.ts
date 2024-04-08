/* eslint-disable @typescript-eslint/no-explicit-any */
import CryptoJS from 'crypto-js';
import { getEnvVariables } from './getEnvVariables';
const { VITE_SECRET_KEY } = getEnvVariables();
interface DecryptionResult<T> {
    status: 'success' | 'error';
    data?: T;
    error?: string;
}
export const EncryptData = (data: { [key: string]: any }): string => {
    return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        VITE_SECRET_KEY
    ).toString();
};

export const decryptData = <T>(encryptedData: string): DecryptionResult<T> => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, VITE_SECRET_KEY);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        const data: T = JSON.parse(decryptedData);

        const status: 'success' | 'error' = 'success';
        return { status, data };
    } catch (error) {
        return {
            status: 'error',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
};
