import { useEffect } from 'react';
import { UseForm, UseMeasureShirt } from '../../hooks';
const initialForm = {
    cinturacamisa: '',
    pechocamisa: '',
    caderacamisa: '',
    espaldaCamisa: '',
    hombroCamisa: '',
    cuelloCamisa: '',
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MeasureTopShirt = () => {
    const { startSaveMeasureShirtTop, startGetMeasureShirt, measureShirt } =
        UseMeasureShirt();
    useEffect(() => {
        startGetMeasureShirt();
    }, []);

    const { formState, onInputChange } = UseForm(initialForm);
    console.log(formState);
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
                    type='number'
                    onChange={onInputChange}
                    value={formState.cinturacamisa}
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
                    type='number'
                    onChange={onInputChange}
                    value={formState.caderacamisa}
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
