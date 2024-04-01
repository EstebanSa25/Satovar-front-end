import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UseForm, UseProfileUser } from '../../hooks';

export const UserMeasureShirt = () => {
    const { id } = useParams();
    const {
        startGetMeasureShirt,
        measureShirt,
        startCreateMeasureShirt,
        startUpdateMeasureShirt,
    } = UseProfileUser();
    const { onInputChange, formState, setFormState } = UseForm();
    useEffect(() => {
        startGetMeasureShirt(id);
    }, [id]);
    useEffect(() => {
        setFormState({
            ...formState,
            PechoCamisa: `${measureShirt?.medida?.CI_PECHO}`,
            CinturaCamisa: `${measureShirt?.medida?.CI_CINTURA}`,
            CaderaCamisa: `${measureShirt?.medida?.CI_CADERA}`,
            EspaldaCamisa: `${measureShirt?.medida?.CI_ESPALDA}`,
            HombroCamisa: `${measureShirt?.medida?.CI_HOMBRO}`,
            CuelloCamisa: `${measureShirt?.medida?.CI_CUELLO}`,
            L_mangaCamisa: `${measureShirt?.medida?.CI_L_MANGA}`,
            L_totalCamisa: `${measureShirt?.medida?.CI_L_TOTAL}`,
            BrazoCamisa: `${measureShirt?.medida?.CI_BRAZO}`,
            PunioCamisa: `${measureShirt?.medida?.CI_PUNO}`,
            DetalleCamisa: `${measureShirt?.medida?.CV_DETALLES || ''}`,
        });
    }, [measureShirt]);

    return (
        <div className='col-md-2 border med-camisa'>
            <div className='titulo-cont-medidas text-center'>
                <h2>camisa</h2>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Pecho</span>
                <input
                    onChange={onInputChange}
                    value={formState.PechoCamisa}
                    type='number'
                    name='PechoCamisa'
                    className='form-control'
                    placeholder='96'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cintura</span>
                <input
                    onChange={onInputChange}
                    value={formState.CinturaCamisa}
                    name='CinturaCamisa'
                    type='number'
                    className='form-control'
                    placeholder='85'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cadera</span>
                <input
                    onChange={onInputChange}
                    value={formState.CaderaCamisa}
                    name='CaderaCamisa'
                    type='number'
                    className='form-control'
                    placeholder='96'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Espalda</span>
                <input
                    onChange={onInputChange}
                    value={formState.EspaldaCamisa}
                    name='EspaldaCamisa'
                    type='number'
                    className='form-control'
                    placeholder='43'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Hombro</span>
                <input
                    onChange={onInputChange}
                    value={formState.HombroCamisa}
                    name='HombroCamisa'
                    type='number'
                    className='form-control'
                    placeholder='16'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cuello</span>
                <input
                    onChange={onInputChange}
                    value={formState.CuelloCamisa}
                    name='CuelloCamisa'
                    type='number'
                    className='form-control'
                    placeholder='24'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L.Manga</span>
                <input
                    onChange={onInputChange}
                    value={formState.L_mangaCamisa}
                    name='L_mangaCamisa'
                    type='number'
                    className='form-control'
                    placeholder='65'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L.Total</span>
                <input
                    onChange={onInputChange}
                    value={formState.L_totalCamisa}
                    name='L_totalCamisa'
                    type='number'
                    className='form-control'
                    placeholder='75'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Brazo</span>
                <input
                    onChange={onInputChange}
                    value={formState.BrazoCamisa}
                    name='BrazoCamisa'
                    type='number'
                    className='form-control'
                    placeholder='26'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Puño</span>
                <input
                    onChange={onInputChange}
                    value={formState.PunioCamisa}
                    name='PunioCamisa'
                    type='number'
                    className='form-control'
                    placeholder='17'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label input-group-text'>Detalles:</label>
                <textarea
                    onChange={onInputChange}
                    value={formState.DetalleCamisa}
                    typeof='string'
                    className='form-control'
                    id='pwd'
                    placeholder='Tradicional'
                    name='DetalleCamisa'
                ></textarea>
            </div>
            <div className='botones m-auto'>
                <button
                    onClick={() =>
                        startUpdateMeasureShirt(
                            formState,
                            measureShirt?.medida.CI_ID_CAMISA,
                            id
                        )
                    }
                    className={
                        !measureShirt?.medida?.CI_ID_CAMISA
                            ? 'd-none'
                            : 'btn btn-warning'
                    }
                    type='button'
                    name='Editar'
                >
                    Editar
                </button>
                <button
                    onClick={() => startCreateMeasureShirt(formState, id)}
                    className={
                        measureShirt?.medida?.CI_ID_CAMISA
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
