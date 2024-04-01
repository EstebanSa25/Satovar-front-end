import { useParams } from 'react-router-dom';
import { UseForm, UseProfileUser } from '../../hooks';
import { useEffect } from 'react';

export const UserSuitJacket = () => {
    const { id } = useParams();
    const { formState, setFormState, onInputChange } = UseForm();
    const {
        startGetMeasureSuitJacket,
        measureSuitJacket,
        startSaveSuitJacket,
        startUpdateMeasureSuitJacket,
    } = UseProfileUser();

    useEffect(() => {
        startGetMeasureSuitJacket(id);
    }, [id]);

    useEffect(() => {
        setFormState({
            ...formState,
            PechoSaco: measureSuitJacket?.medida?.CI_PECHO.toString(),
            CinturaSaco: measureSuitJacket?.medida?.CI_CINTURA.toString(),
            CaderaSaco: measureSuitJacket?.medida?.CI_CADERA.toString(),
            EspaldaSaco: measureSuitJacket?.medida?.CI_ESPALDA.toString(),
            HombroSaco: measureSuitJacket?.medida?.CI_HOMBRO.toString(),
            L_mangaSaco: measureSuitJacket?.medida?.CI_L_MANGA.toString(),
            L_totalSaco: measureSuitJacket?.medida?.CI_L_TOTAL.toString(),
            BrazoSaco: measureSuitJacket?.medida?.CI_BRAZO.toString(),
            PunioSaco: measureSuitJacket?.medida?.CI_PUNO.toString(),
            DetalleSaco: measureSuitJacket?.medida?.CV_DETALLES || '',
        });
    }, [measureSuitJacket]);

    return (
        <div className='col-md-2 border med-saco'>
            <div className='titulo-cont-medidas text-center'>
                <h2>Saco</h2>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>pecho</span>
                <input
                    onChange={onInputChange}
                    value={formState.PechoSaco}
                    name='PechoSaco'
                    type='number'
                    className='form-control'
                    placeholder='100'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cintura</span>
                <input
                    onChange={onInputChange}
                    value={formState.CinturaSaco}
                    name='CinturaSaco'
                    type='number'
                    className='form-control'
                    placeholder='90'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cadera</span>
                <input
                    onChange={onInputChange}
                    value={formState.CaderaSaco}
                    name='CaderaSaco'
                    type='number'
                    className='form-control'
                    placeholder='100'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Espalda</span>
                <input
                    onChange={onInputChange}
                    value={formState.EspaldaSaco}
                    name='EspaldaSaco'
                    type='number'
                    className='form-control'
                    placeholder='45'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Hombro</span>
                <input
                    onChange={onInputChange}
                    value={formState.HombroSaco}
                    name='HombroSaco'
                    type='number'
                    className='form-control'
                    placeholder='16'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L.Manga</span>
                <input
                    onChange={onInputChange}
                    value={formState.L_mangaSaco}
                    name='L_mangaSaco'
                    type='number'
                    className='form-control'
                    placeholder='64'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L. Total</span>
                <input
                    onChange={onInputChange}
                    value={formState.L_totalSaco}
                    name='L_totalSaco'
                    type='number'
                    className='form-control'
                    placeholder='70'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Brazo</span>
                <input
                    onChange={onInputChange}
                    value={formState.BrazoSaco}
                    name='BrazoSaco'
                    type='number'
                    className='form-control'
                    placeholder='28'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Puño</span>
                <input
                    onChange={onInputChange}
                    value={formState.PunioSaco}
                    name='PunioSaco'
                    type='number'
                    className='form-control'
                    placeholder='20'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='' className='form-label input-group-text'>
                    Detalles:
                </label>
                <textarea
                    onChange={onInputChange}
                    value={formState.DetalleSaco}
                    typeof='text'
                    className='form-control'
                    id='pwd'
                    placeholder='Saco con dos aberturas'
                    name='DetalleSaco'
                ></textarea>
            </div>
            <div className='botones m-auto'>
                <button
                    onClick={() =>
                        startUpdateMeasureSuitJacket(
                            formState,
                            measureSuitJacket?.medida?.CI_ID_SACO,
                            id
                        )
                    }
                    className={
                        !measureSuitJacket?.medida?.CI_ID_SACO
                            ? 'd-none'
                            : 'btn btn-warning'
                    }
                    type='button'
                    name='Editar'
                >
                    Editar
                </button>
                <button
                    onClick={() => startSaveSuitJacket(formState, id)}
                    className={
                        measureSuitJacket?.medida?.CI_ID_SACO
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
