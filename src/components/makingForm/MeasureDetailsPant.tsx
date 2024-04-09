import { useEffect } from 'react';
import { UseForm, UseMeasurePant } from '../../hooks';

export const MeasureDetailsPant = () => {
    const { onInputChange, formState, setFormState } = UseForm();
    const { startDetailsPant, measurePant } = UseMeasurePant();
    useEffect(() => {
        startDetailsPant(formState);
    }, [formState]);

    useEffect(() => {
        setFormState({
            ...formState,
            DetallesPantalon: measurePant?.CV_DETALLES,
        });
    }, [measurePant]);

    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='DetallesPantalon' className='form-label'>
                    Detalles adicionales:
                </label>
                <textarea
                    disabled={measurePant?.CV_DETALLES !== undefined}
                    value={formState.DetallesPantalon}
                    onChange={onInputChange}
                    className='form-control'
                    id='DetallesPantalon'
                    name='DetallesPantalon'
                    rows={4}
                ></textarea>
            </div>
        </form>
    );
};
