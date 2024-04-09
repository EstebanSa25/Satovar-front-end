import { useEffect } from 'react';
import { UseForm, UseMeasureSuitJacket } from '../../hooks';

export const MeasureDetailsSuitJacket = () => {
    const { formState, setFormState, onInputChange } = UseForm();
    const { startSaveSuitJacketDetails, measureSuitJacket } =
        UseMeasureSuitJacket();

    useEffect(() => {
        startSaveSuitJacketDetails(formState);
    }, [formState]);
    useEffect(() => {
        setFormState({
            ...formState,
            DetallesSaco: measureSuitJacket?.CV_DETALLES,
        });
    }, [measureSuitJacket]);

    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='DetallesSaco' className='form-label'>
                    Detalles adicionales:
                </label>
                <textarea
                    disabled={measureSuitJacket?.CV_DETALLES !== undefined}
                    onChange={onInputChange}
                    value={formState.DetallesSaco}
                    className='form-control'
                    id='DetallesSaco'
                    name='DetallesSaco'
                    rows={4}
                ></textarea>
            </div>
        </form>
    );
};
