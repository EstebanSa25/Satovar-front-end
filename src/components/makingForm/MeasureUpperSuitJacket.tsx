import { useEffect } from 'react';
import { UseForm, UseMeasureSuitJacket } from '../../hooks';

export const MeasureUpperSuitJacket = () => {
    const { onInputChange, formState, setFormState } = UseForm();
    const { startSaveSuitJacketTop, measureSuitJacket } =
        UseMeasureSuitJacket();
    useEffect(() => {
        startSaveSuitJacketTop(formState);
    }, [formState]);

    useEffect(() => {
        setFormState({
            ...formState,
            PechoSaco: measureSuitJacket?.CI_PECHO,
            CinturaSaco: measureSuitJacket?.CI_CINTURA,
            CaderaSaco: measureSuitJacket?.CI_CADERA,
            EspaldaSaco: measureSuitJacket?.CI_ESPALDA,
            HombroSaco: measureSuitJacket?.CI_HOMBRO,
        });
    }, [measureSuitJacket]);

    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='PechoSaco' className='form-label'>
                    Pecho:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_PECHO !== undefined}
                    onChange={onInputChange}
                    value={formState.PechoSaco}
                    type='number'
                    className='form-control'
                    id='PechoSaco'
                    name='PechoSaco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='CinturaSaco' className='form-label'>
                    Cintura:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_CINTURA !== undefined}
                    onChange={onInputChange}
                    value={formState.CinturaSaco}
                    type='number'
                    className='form-control'
                    id='CinturaSaco'
                    name='CinturaSaco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='CaderaSaco' className='form-label'>
                    Cadera:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_CADERA !== undefined}
                    onChange={onInputChange}
                    value={formState.CaderaSaco}
                    type='number'
                    className='form-control'
                    id='CaderaSaco'
                    name='CaderaSaco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='EspaldaSaco' className='form-label'>
                    Espalda:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_ESPALDA !== undefined}
                    onChange={onInputChange}
                    value={formState.EspaldaSaco}
                    type='number'
                    className='form-control'
                    id='EspaldaSaco'
                    name='EspaldaSaco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='HombroSaco' className='form-label'>
                    Hombro:
                </label>
                <input
                    disabled={measureSuitJacket?.CI_HOMBRO !== undefined}
                    onChange={onInputChange}
                    value={formState.HombroSaco}
                    type='number'
                    className='form-control'
                    id='HombroSaco'
                    name='HombroSaco'
                    required
                />
            </div>
        </form>
    );
};
