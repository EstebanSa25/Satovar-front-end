import { useEffect } from 'react';
import { UseForm, UseMeasureSuitJacket } from '../../hooks';

export const MeasureLargeSuitJacket = () => {
    const { formState, setFormState, onInputChange } = UseForm();
    const { startSaveSuitJacketLarge, measureSuitJacket } =
        UseMeasureSuitJacket();
    useEffect(() => {
        startSaveSuitJacketLarge(formState);
    }, [formState]);
    useEffect(() => {
        setFormState({
            ...formState,
            L_mangaSaco: measureSuitJacket?.CI_L_MANGA,
            L_totalSaco: measureSuitJacket?.CI_L_TOTAL,
            BrazoSaco: measureSuitJacket?.CI_BRAZO,
            PunioSaco: measureSuitJacket?.CI_PUNO,
        });
    }, [measureSuitJacket]);

    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='L_mangaSaco' className='form-label'>
                    Largo manga:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_L_MANGA !== undefined}
                    onChange={onInputChange}
                    value={formState.L_mangaSaco}
                    type='number'
                    className='form-control'
                    id='L_mangaSaco'
                    name='L_mangaSaco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='L_totalSaco' className='form-label'>
                    Largo total:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_L_TOTAL !== undefined}
                    onChange={onInputChange}
                    value={formState.L_totalSaco}
                    type='number'
                    className='form-control'
                    id='L_totalSaco'
                    name='L_totalSaco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='BrazoSaco' className='form-label'>
                    Brazo:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_BRAZO !== undefined}
                    onChange={onInputChange}
                    value={formState.BrazoSaco}
                    type='number'
                    className='form-control'
                    id='BrazoSaco'
                    name='BrazoSaco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='PunioSaco' className='form-label'>
                    Puño:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_PUNO !== undefined}
                    onChange={onInputChange}
                    value={formState.PunioSaco}
                    type='number'
                    className='form-control'
                    id='PunioSaco'
                    name='PunioSaco'
                    required
                />
            </div>
        </form>
    );
};
