import { useEffect } from 'react';
import { UseForm, UseMeasurePant } from '../../hooks';

export const MeasureUppderPant = () => {
    const { onInputChange, formState, setFormState } = UseForm();
    const { startSaveUpperPant, measurePant } = UseMeasurePant();
    useEffect(() => {
        setFormState({
            ...formState,
            CinturaPantalon: measurePant?.CI_CINTURA,
            CaderaPantalon: measurePant?.CI_CADERA,
            TiroPantalon: measurePant?.CI_TIRO,
            RodillaPantalon: measurePant?.CI_RODILLA,
            RuedoPantalon: measurePant?.CI_RUEDO,
        });
    }, [measurePant]);

    useEffect(() => {
        startSaveUpperPant(formState);
    }, [formState]);
    return (
        <form>
            <div className='mb-3'>
                <label htmlFor='CinturaPantalon' className='form-label'>
                    Cintura:
                </label>
                <input
                    disabled={measurePant?.CI_CINTURA !== undefined}
                    onChange={onInputChange}
                    value={formState.CinturaPantalon}
                    type='number'
                    className='form-control'
                    id='CinturaPantalon'
                    name='CinturaPantalon'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='CaderaPantalon' className='form-label'>
                    Cadera:
                </label>
                <input
                    disabled={measurePant?.CI_CADERA !== undefined}
                    onChange={onInputChange}
                    value={formState.CaderaPantalon}
                    type='number'
                    className='form-control'
                    id='CaderaPantalon'
                    name='CaderaPantalon'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='TiroPantalon' className='form-label'>
                    Tiro:
                </label>
                <input
                    disabled={measurePant?.CI_TIRO !== undefined}
                    onChange={onInputChange}
                    value={formState.TiroPantalon}
                    type='number'
                    className='form-control'
                    id='TiroPantalon'
                    name='TiroPantalon'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='RodillaPantalon' className='form-label'>
                    Rodilla:
                </label>
                <input
                    disabled={measurePant?.CI_RODILLA !== undefined}
                    onChange={onInputChange}
                    value={formState.RodillaPantalon}
                    type='number'
                    className='form-control'
                    id='RodillaPantalon'
                    name='RodillaPantalon'
                    required
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='RuedoPantalon' className='form-label'>
                    Ruedo:
                </label>
                <input
                    disabled={measurePant?.CI_RUEDO !== undefined}
                    onChange={onInputChange}
                    value={formState.RuedoPantalon}
                    type='number'
                    className='form-control'
                    id='RuedoPantalon'
                    name='RuedoPantalon'
                    required
                />
            </div>
        </form>
    );
};
