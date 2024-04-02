import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UseForm, UseProfileUser } from '../../hooks';

export const UserWaistcoat = () => {
    const { id } = useParams();
    const {
        startGetMeasureWaistcoat,
        measureWaistcoat,
        CreateMeasureWaistcoat,
        startUpdateMeasureWaistcoat,
    } = UseProfileUser();
    const { onInputChange, formState, setFormState } = UseForm();
    useEffect(() => {
        startGetMeasureWaistcoat(id);
    }, [id]);
    useEffect(() => {
        setFormState({
            ...formState,
            PechoChaleco: `${measureWaistcoat?.medida?.CI_PECHO}`,
            CinturaChaleco: `${measureWaistcoat?.medida?.CI_CINTURA}`,
            CaderaChaleco: `${measureWaistcoat?.medida?.CI_CADERA}`,
            L_totalChaleco: `${measureWaistcoat?.medida?.CI_L_TOTAL}`,
            DetalleChaleco: `${measureWaistcoat?.medida?.CV_DETALLES || ''}`,
        });
    }, [measureWaistcoat]);

    return (
        <div className='col-md-2 border med-pantalon text-center'>
            <div className='titulo-cont-medidas'>
                <h2>Chaleco</h2>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Pecho</span>
                <input
                    onChange={onInputChange}
                    value={formState.PechoChaleco}
                    name='PechoChaleco'
                    type='number'
                    className='form-control'
                    placeholder='90'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cintura</span>
                <input
                    onChange={onInputChange}
                    value={formState.CinturaChaleco}
                    name='CinturaChaleco'
                    type='number'
                    className='form-control'
                    placeholder='90'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cadera</span>
                <input
                    onChange={onInputChange}
                    value={formState.CaderaChaleco}
                    name='CaderaChaleco'
                    type='number'
                    className='form-control'
                    placeholder='90'
                />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L. Total</span>
                <input
                    onChange={onInputChange}
                    value={formState.L_totalChaleco}
                    name='L_totalChaleco'
                    type='number'
                    className='form-control'
                    placeholder='60'
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='' className='form-label input-group-text'>
                    Detalles:
                </label>
                <textarea
                    onChange={onInputChange}
                    value={formState.DetalleChaleco}
                    typeof='text'
                    className='form-control'
                    id='pwd'
                    placeholder='Atras de tela y con fajita'
                    name='DetalleChaleco'
                ></textarea>
            </div>
            <div className='botones'>
                <button
                    onClick={() =>
                        startUpdateMeasureWaistcoat(
                            formState,
                            measureWaistcoat?.medida?.CI_ID_CHALECO,
                            id
                        )
                    }
                    className={
                        !measureWaistcoat?.medida?.CI_ID_CHALECO
                            ? 'd-none'
                            : 'btn btn-warning'
                    }
                    type='button'
                    name='Editar'
                >
                    Actualizar
                </button>
                <button
                    onClick={() => CreateMeasureWaistcoat(formState, id)}
                    className={
                        measureWaistcoat?.medida?.CI_ID_CHALECO
                            ? 'd-none'
                            : 'btn btn-success'
                    }
                    type='button'
                    name='Guardar'
                >
                    Crear
                </button>
            </div>
        </div>
    );
};
