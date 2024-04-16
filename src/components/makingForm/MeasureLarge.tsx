import { useEffect } from 'react';
import { UseForm, UseMeasureShirt } from '../../hooks';

export const MeasureLargeShirt = () => {
    const { formState, onInputChange, setFormState } = UseForm();
    const { startSaveMeasureShirtLarge, measureShirt } = UseMeasureShirt();
    useEffect(() => {
        startSaveMeasureShirtLarge(formState);
    }, [formState]);

    useEffect(() => {
        setFormState({
            ...formState,
            LargoMangaCamisa: measureShirt?.medida?.CI_L_MANGA,
        });
    }, [measureShirt]);

    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='LargoMangaCamisa' className='form-label'>
                    Largo manga:
                </label>
                <input
                    disabled={measureShirt.medida?.CI_L_MANGA ? true : false}
                    type='number'
                    className='form-control'
                    onChange={onInputChange}
                    value={
                        measureShirt.medida?.CI_L_MANGA
                            ? measureShirt.medida?.CI_L_MANGA
                            : formState.LargoMangaCamisa
                    }
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
                    disabled={measureShirt.medida?.CI_L_TOTAL ? true : false}
                    type='number'
                    className='form-control'
                    id='LargoTotalCamisa'
                    onChange={onInputChange}
                    name='LargoTotalCamisa'
                    value={
                        measureShirt.medida?.CI_L_TOTAL
                            ? measureShirt.medida?.CI_L_TOTAL
                            : formState.LargoTotalCamisa
                    }
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Brazo' className='form-label'>
                    Brazo:
                </label>
                <input
                    disabled={measureShirt.medida?.CI_BRAZO ? true : false}
                    type='number'
                    className='form-control'
                    id='BrazoCamisa'
                    onChange={onInputChange}
                    name='BrazoCamisa'
                    value={
                        measureShirt.medida?.CI_BRAZO
                            ? measureShirt.medida?.CI_BRAZO
                            : formState.BrazoCamisa
                    }
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Pu;oCamisa' className='form-label'>
                    Puño:
                </label>
                <input
                    disabled={measureShirt.medida?.CI_PUNO ? true : false}
                    type='number'
                    className='form-control'
                    id='PunoCamisa'
                    onChange={onInputChange}
                    name='PunoCamisa'
                    value={
                        measureShirt.medida?.CI_PUNO
                            ? measureShirt.medida?.CI_PUNO
                            : formState.PunoCamisa
                    }
                    required
                />
            </div>
        </form>
    );
};
