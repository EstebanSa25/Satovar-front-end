import { useEffect } from 'react';
import { UseForm, UseMeasureShirt } from '../../hooks';
import { TopShirtMeasure } from '../../interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialForm = {
    cinturaCamisa: '',
    pechocamisa: '',
    caderaCamisa: '',
    espaldaCamisa: '',
    hombroCamisa: '',
    cuelloCamisa: '',
} as TopShirtMeasure;
export const MeasureTopShirt = () => {
    const { startSaveMeasureShirtTop, startGetMeasureShirt, measureShirt } =
        UseMeasureShirt();
    useEffect(() => {
        startGetMeasureShirt();
    }, []);

    const { formState, onInputChange } = UseForm(initialForm);
    useEffect(() => {
        startSaveMeasureShirtTop(formState);
    }, [formState]);

    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Pecho:
                </label>
                <input
                    type='number'
                    className='form-control'
                    id='pechocamisa'
                    disabled={measureShirt.medida.CI_PECHO ? true : false}
                    value={
                        measureShirt.medida.CI_PECHO
                            ? measureShirt.medida.CI_PECHO
                            : formState.pechocamisa
                    }
                    onChange={onInputChange}
                    name='pechocamisa'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Cintura:
                </label>
                <input
                    disabled={measureShirt.medida.CI_CINTURA ? true : false}
                    type='number'
                    onChange={onInputChange}
                    value={
                        measureShirt.medida.CI_CINTURA
                            ? measureShirt.medida.CI_CINTURA
                            : formState.cinturaCamisa
                    }
                    className='form-control'
                    id='cinturacamisa'
                    name='cinturaCamisa'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Cadera:
                </label>
                <input
                    disabled={measureShirt.medida.CI_CADERA ? true : false}
                    type='number'
                    onChange={onInputChange}
                    value={
                        measureShirt.medida.CI_CADERA
                            ? measureShirt.medida.CI_CADERA
                            : formState.caderaCamisa
                    }
                    className='form-control'
                    id='caderacamisa'
                    name='caderaCamisa'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Espalda:
                </label>
                <input
                    disabled={measureShirt.medida.CI_ESPALDA ? true : false}
                    type='number'
                    className='form-control'
                    id='espaldaCamisa'
                    value={
                        measureShirt.medida.CI_ESPALDA
                            ? measureShirt.medida.CI_ESPALDA
                            : formState.espaldaCamisa
                    }
                    onChange={onInputChange}
                    name='espaldaCamisa'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Hombro:
                </label>
                <input
                    disabled={measureShirt.medida.CI_HOMBRO ? true : false}
                    type='number'
                    className='form-control'
                    id='hombrocamisa'
                    value={
                        measureShirt.medida.CI_HOMBRO
                            ? measureShirt.medida.CI_HOMBRO
                            : formState.hombroCamisa
                    }
                    onChange={onInputChange}
                    name='hombroCamisa'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='headingTopShirt' className='form-label'>
                    Cuello:
                </label>
                <input
                    disabled={measureShirt.medida.CI_CUELLO ? true : false}
                    type='number'
                    className='form-control'
                    id='cuelloCamisa'
                    value={
                        measureShirt.medida.CI_CUELLO
                            ? measureShirt.medida.CI_CUELLO
                            : formState.cuelloCamisa
                    }
                    onChange={onInputChange}
                    name='cuelloCamisa'
                    required
                />
            </div>
        </form>
    );
};
