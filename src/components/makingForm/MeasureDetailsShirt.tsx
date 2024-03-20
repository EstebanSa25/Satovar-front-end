import { useEffect, useState } from 'react';
import { UseMeasureShirt } from '../../hooks';

export const MeasureDetailsShirt = () => {
    const [formState, setFormState] = useState('');

    const { startSaveMeasureShirtDetails } = UseMeasureShirt();
    useEffect(() => {
        startSaveMeasureShirtDetails(formState);
    }, [formState]);

    const onChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = target;
        setFormState(value);
    };
    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='DetallesCamisa' className='form-label'>
                    Detalles Adicionales:
                </label>
                <textarea
                    onChange={onChange}
                    className='form-control'
                    id='DetallesCamisa'
                    name='DetallesCamisa'
                    rows='4'
                ></textarea>
            </div>
        </form>
    );
};
