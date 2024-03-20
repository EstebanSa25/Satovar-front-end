import { useEffect } from 'react';
import { UseForm, UseMeasureShirt } from '../../hooks';

export const MeasureLargeShirt = () => {
    const { formState, onInputChange } = UseForm();
    const { startSaveMeasureShirtLarge } = UseMeasureShirt();
    useEffect(() => {
        startSaveMeasureShirtLarge(formState);
    }, [formState]);

    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='LargoMangaCamisa' className='form-label'>
                    Largo manga:
                </label>
                <input
                    type='number'
                    className='form-control'
                    onChange={onInputChange}
                    value={formState.LargoMangaCamisa}
                    id='LargoMangaCamisa'
                    name='LargoMangaCamisa'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='LargoTotalCamisa' className='form-label'>
                    Largo total:
                </label>
                <input
                    type='number'
                    className='form-control'
                    id='LargoTotalCamisa'
                    onChange={onInputChange}
                    name='LargoTotalCamisa'
                    value={formState.LargoTotalCamisa}
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Brazo' className='form-label'>
                    Brazo:
                </label>
                <input
                    type='number'
                    className='form-control'
                    id='BrazoCamisa'
                    onChange={onInputChange}
                    name='BrazoCamisa'
                    value={formState.BrazoCamisa}
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Pu;oCamisa' className='form-label'>
                    Puño:
                </label>
                <input
                    type='number'
                    className='form-control'
                    id='PunoCamisa'
                    onChange={onInputChange}
                    name='PunoCamisa'
                    value={formState.PunoCamisa}
                    required
                />
            </div>
        </form>
    );
};
