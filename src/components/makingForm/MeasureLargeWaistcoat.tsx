import { useEffect } from 'react';
import { UseForm, UseMeasureWaistcoat } from '../../hooks';

export const MeasureLargeWaistcoat = () => {
    const { formState, onInputChange } = UseForm();
    const { startSaveMeasureWaistcoatLarge, measureWaistcoat } =
        UseMeasureWaistcoat();
    useEffect(() => {
        startSaveMeasureWaistcoatLarge(formState);
    }, [formState]);
    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='LargoTotalCamisa' className='form-label'>
                    Largo total:
                </label>
                <input
                    onChange={onInputChange}
                    disabled={measureWaistcoat.medida.CI_L_TOTAL ? true : false}
                    value={
                        measureWaistcoat.medida.CI_L_TOTAL ||
                        formState.LargoTotalCamisa
                    }
                    type='number'
                    className='form-control'
                    id='LargoTotalCamisa'
                    name='LargoTotalChaleco'
                    required
                />
            </div>
        </form>
    );
};
