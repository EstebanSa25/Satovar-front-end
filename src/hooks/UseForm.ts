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
        | React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = target;
        if (target.type !== 'checkbox') {
            setFormState({
                ...formState,
                [name]: value,
            });
        }
        if (target.type === 'checkbox' && target instanceof HTMLInputElement) {
            if (target.checked) {
                setFormState({
                    ...formState,
                    [name]: value,
                });
            }
            if (!target.checked) {
                const { [name]: deletedKey, ...newFormState } = formState;
                setFormState(newFormState);
            }
        }
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
