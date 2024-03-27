import { useEffect } from 'react';
import { UseForm, UseMeasureWaistcoat } from '../../hooks';

export const MeasureUpperWaistcoat = () => {
    const { formState, onInputChange } = UseForm();
    const { startSaveMeasureWaistcoatTop, measureWaistcoat } =
        UseMeasureWaistcoat();
    useEffect(() => {
        startSaveMeasureWaistcoatTop(formState);
    }, [formState]);
    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Pecho:
                </label>
                <input
                    disabled={measureWaistcoat.medida.CI_PECHO ? true : false}
                    onChange={onInputChange}
                    value={
                        measureWaistcoat.medida.CI_PECHO ||
                        formState.pechoChaleco
                    }
                    type='number'
                    className='form-control'
                    id='pechoChaleco'
                    name='pechoChaleco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Cintura:
                </label>
                <input
                    disabled={measureWaistcoat.medida.CI_CINTURA ? true : false}
                    onChange={onInputChange}
                    value={
                        measureWaistcoat.medida.CI_CINTURA ||
                        formState.CinturaChaleco
                    }
                    type='number'
                    className='form-control'
                    id='CinturaChaleco'
                    name='CinturaChaleco'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Cadera:
                </label>
                <input
                    disabled={measureWaistcoat.medida.CI_CADERA ? true : false}
                    onChange={onInputChange}
                    value={
                        measureWaistcoat.medida.CI_CADERA ||
                        formState.espaldaCamisa
                    }
                    type='number'
                    className='form-control'
                    id='CaderaChaleco'
                    name='CaderaChaleco'
                    required
                />
            </div>
        </form>
    );
};
