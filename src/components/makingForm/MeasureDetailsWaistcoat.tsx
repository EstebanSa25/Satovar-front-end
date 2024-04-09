import { useEffect, useState } from 'react';
import { UseMeasureWaistcoat } from '../../hooks';

export const MeasureDetailsWaistcoat = () => {
    const [formState, setFormState] = useState('');

    const { startSaveMeasureWaistcoatDetails, measureWaistcoat } =
        UseMeasureWaistcoat();
    useEffect(() => {
        startSaveMeasureWaistcoatDetails(formState);
    }, [formState]);

    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setFormState(value);
    };
    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='DetallesCamisa' className='form-label'>
                    Detalles adicionales:
                </label>
                <input
                    disabled={
                        measureWaistcoat.medida?.CV_DETALLES ? true : false
                    }
                    onChange={onChange}
                    value={measureWaistcoat.medida?.CV_DETALLES || formState}
                    type='text'
                    className='form-control'
                    id='DetallesCamisa'
                    name='DetallesCamisa'
                />
            </div>
        </form>
    );
};
