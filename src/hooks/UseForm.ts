import { useState } from 'react';
interface FormState {
    [key: string]: string;
}
export const UseForm = (initialForm = {}) => {
    const [formState, setFormState] = useState<FormState>(initialForm);
    const onInputChange = ({
        target,
    }:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const onResetForm = () => {
        setFormState(initialForm);
    };
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        setFormState,
    };
};
