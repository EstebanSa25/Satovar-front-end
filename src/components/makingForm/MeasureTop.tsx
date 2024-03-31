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
    const { startSaveMeasureShirtTop, measureShirt } = UseMeasureShirt();

    const { formState, onInputChange, setFormState } = UseForm(initialForm);
    useEffect(() => {
        startSaveMeasureShirtTop(formState);
    }, [formState]);

    useEffect(() => {
        setFormState({
            ...formState,
            pechocamisa: measureShirt?.medida?.CI_PECHO,
            cinturaCamisa: measureShirt?.medida?.CI_CINTURA,
            caderaCamisa: measureShirt?.medida?.CI_CADERA,
            espaldaCamisa: measureShirt?.medida?.CI_ESPALDA,
            hombroCamisa: measureShirt?.medida?.CI_HOMBRO,
            cuelloCamisa: measureShirt?.medida?.CI_CUELLO,
        });
    }, [measureShirt]);

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
                    disabled={measureShirt.medida?.CI_PECHO ? true : false}
                    value={formState.pechocamisa}
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
                    disabled={measureShirt.medida?.CI_CINTURA ? true : false}
                    type='number'
                    onChange={onInputChange}
                    value={formState.cinturaCamisa}
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
                    disabled={measureShirt.medida?.CI_CADERA ? true : false}
                    type='number'
                    onChange={onInputChange}
                    value={formState.caderaCamisa}
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
                    disabled={measureShirt.medida?.CI_ESPALDA ? true : false}
                    type='number'
                    className='form-control'
                    id='espaldaCamisa'
                    value={formState.espaldaCamisa}
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
                    disabled={measureShirt.medida?.CI_HOMBRO ? true : false}
                    type='number'
                    className='form-control'
                    id='hombrocamisa'
                    value={formState.hombroCamisa}
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
                    disabled={measureShirt.medida?.CI_CUELLO ? true : false}
                    type='number'
                    className='form-control'
                    id='cuelloCamisa'
                    value={formState.cuelloCamisa}
                    onChange={onInputChange}
                    name='cuelloCamisa'
                    required
                />
            </div>
        </form>
    );
};
