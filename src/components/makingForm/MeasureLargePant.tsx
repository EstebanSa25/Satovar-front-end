import { useEffect } from 'react';
import { UseForm } from '../../hooks';
import { UseMeasurePant } from '../../hooks/UseMeasurePant';

export const MeasureLargePant = () => {
    const { onInputChange, formState, setFormState } = UseForm();
    const { startLargePant, measurePant } = UseMeasurePant();
    useEffect(() => {
        startLargePant(formState);
    }, [formState]);

    useEffect(() => {
        setFormState({
            ...formState,
            LargoTotalPantalon: measurePant?.CI_LARGO,
        });
    }, [measurePant]);

    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='LargoTotalPantalon' className='form-label'>
                    Largo total:
                </label>
                <input
                    disabled={measurePant?.CI_LARGO !== undefined}
                    onChange={onInputChange}
                    value={formState.LargoTotalPantalon}
                    type='number'
                    className='form-control'
                    id='LargoTotalPantalon'
                    name='LargoTotalPantalon'
                    required
                />
            </div>
        </form>
    );
};
