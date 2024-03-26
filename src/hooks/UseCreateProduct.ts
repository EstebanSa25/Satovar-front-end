import satovarApi from '../api/SatovarApi';
import { useState } from 'react';
import { Category } from '../interfaces';

export const UseCreateProduct = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [categories, setCategories] = useState([] as Category[]);
    const startGetCategories = async () => {
        try {
            const { data } = await satovarApi.get<Category[]>('/categories');
            setCategories(data);
        } catch (error) {
            console.error(error);
        }
    };

    return { startGetCategories, categories };
};
