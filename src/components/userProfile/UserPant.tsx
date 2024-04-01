import { useParams } from 'react-router-dom';
import { UseForm, UseProfileUser } from '../../hooks';
import { useEffect } from 'react';

export const UserPant = () => {
    const { id } = useParams();
    const { onInputChange, formState, setFormState } = UseForm();
    const {
        measurePants,
        startGetMeasurePants,
        startSavePant,
        startUpdateMeasurePants,
    } = UseProfileUser();
    useEffect(() => {
        startGetMeasurePants(id);
    }, [id]);
    useEffect(() => {
        setFormState({
            ...formState,
            CinturaPantalon: measurePants?.medida?.CI_CINTURA.toString(),
            CaderaPantalon: measurePants?.medida?.CI_CADERA.toString(),
            TiroPantalon: measurePants?.medida?.CI_TIRO.toString(),
            RodillaPantalon: measurePants?.medida?.CI_RODILLA.toString(),
            RuedoPantalon: measurePants?.medida?.CI_RUEDO.toString(),
            LargoPantalon: measurePants?.medida?.CI_LARGO.toString(),
            DetallePantalon: measurePants?.medida?.CV_DETALLES || '',
        });
    }, [measurePants]);

    return (
        <div className='col-md-2 border med-chaleco'>
            <div className='titulo-cont-medidas text-center'>
                <h2>Pantalón</h2>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cintura</span>
                <input
                    value={formState.CinturaPantalon}
                    onChange={onInputChange}
                    name='CinturaPantalon'
                    type='number'
                    className='form-control'
                    placeholder='83'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cadera</span>
                <input
                    value={formState.CaderaPantalon}
                    onChange={onInputChange}
                    name='CaderaPantalon'
                    type='number'
                    className='form-control'
                    placeholder='95'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Tiro</span>
                <input
                    value={formState.TiroPantalon}
                    onChange={onInputChange}
                    name='TiroPantalon'
                    type='number'
                    className='form-control'
                    placeholder='17'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Rodilla</span>
                <input
                    onChange={onInputChange}
                    value={formState.RodillaPantalon}
                    name='RodillaPantalon'
                    type='number'
                    className='form-control'
                    placeholder='42'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Ruedo</span>
                <input
                    value={formState.RuedoPantalon}
                    onChange={onInputChange}
                    name='RuedoPantalon'
                    type='number'
                    className='form-control'
                    placeholder='34'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Largo</span>
                <input
                    value={formState.LargoPantalon}
                    onChange={onInputChange}
                    name='LargoPantalon'
                    type='number'
                    className='form-control'
                    placeholder='96'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='' className='form-label input-group-text'>
                    Detalles:
                </label>
                <textarea
                    value={formState.DetallePantalon}
                    onChange={onInputChange}
                    typeof='text'
                    className='form-control'
                    id='pwd'
                    placeholder='Estilo Tradicional'
                    name='DetallePantalon'
                ></textarea>
            </div>
            <div className='botones m-auto'>
                <button
                    onClick={() =>
                        startUpdateMeasurePants(
                            formState,
                            measurePants?.medida?.CI_ID_PANTALON,
                            id
                        )
                    }
                    className={
                        !measurePants?.medida?.CI_ID_PANTALON
                            ? 'd-none'
                            : 'btn btn-warning'
                    }
                    type='button'
                    name='Editar'
                >
                    Editar
                </button>
                <button
                    onClick={() => startSavePant(formState, id)}
                    className={
                        measurePants?.medida?.CI_ID_PANTALON
                            ? 'd-none'
                            : 'btn btn-success'
                    }
                    type='button'
                    name='Guardar'
                >
                    Guardar
                </button>
            </div>
        </div>
    );
};
