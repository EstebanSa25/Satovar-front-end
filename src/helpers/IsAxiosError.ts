/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';

export const isAxiosError = (error: any): error is AxiosError => {
    return error && typeof error.isAxiosError === 'boolean';
};
