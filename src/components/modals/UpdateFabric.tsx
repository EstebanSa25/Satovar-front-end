/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { UseFabricCrud, UseForm } from '../../hooks';
const initialForm = {
    Nombre: '',
    Foto: '',
    Precio: '',
};

export const UpdateFabric = () => {
    const { formState, onInputChange, onResetForm, setFormState } =
        UseForm(initialForm);
    const { startUpdateFabric, ActiveFabric } = UseFabricCrud();
    useEffect(() => {
        onResetForm();
        setFormState({
            ...formState,
            Nombre: ActiveFabric?.CV_NOMBRE || '',
            Foto: '',
            Precio: ActiveFabric?.CD_PRECIO || '0',
        });
    }, [ActiveFabric]);
    const ref = useRef(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    return (
        <div
            className='modal fade'
            id='update-fabric'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='exampleModalCenterTitle'
            aria-hidden='true'
        >
            <div className='modal-dialog d-flex justify-content-center '>
                <div className='modal-content w-100'>
                    <div className='modal-header text-center'>
                        <h5
                            className='modal-title text-center '
                            id='exampleModalLabel2'
                        >
                            Actualizar tela
                        </h5>
                        <button
                            ref={ref}
                            type='button'
                            className='btn-close'
                            data-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8 '>
                            <div className='form-ingreso p-3'>
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    action=''
                                >
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='Nombre'
                                            className='form-label'
                                        >
                                            Nombre:
                                        </label>
                                        <input
                                            onChange={onInputChange}
                                            value={formState.Nombre}
                                            // onChange={onInputChange}
                                            type='text'
                                            className='form-control'
                                            id='Nombre'
                                            placeholder='Nombre'
                                            name='Nombre'
                                        />
                                    </div>
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='FotoActualizar'
                                            className='form-label'
                                        >
                                            Foto
                                        </label>
                                        <img
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                                inputRef.current?.click()
                                            }
                                            src={ActiveFabric?.CV_FOTO}
                                            alt={ActiveFabric?.CV_NOMBRE}
                                        />
                                        <input
                                            ref={inputRef}
                                            value={formState.FotoActualizar}
                                            onChange={onInputChange}
                                            type='file'
                                            accept='image/*'
                                            className='form-control-sm '
                                            id='FotoActualizar'
                                            placeholder='Primer apellido'
                                            name='FotoActualizar'
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Precio'
                                            className='form-label'
                                        >
                                            Precio:
                                        </label>
                                        <input
                                            onChange={onInputChange}
                                            value={formState.Precio}
                                            type='number'
                                            className='form-control'
                                            id='Precio'
                                            placeholder='Precio'
                                            name='Precio'
                                        />
                                    </div>

                                    <button
                                        onClick={() => {
                                            startUpdateFabric(
                                                formState,
                                                onResetForm,
                                                ref,
                                                ActiveFabric?.CI_ID_TELA
                                            );
                                        }}
                                        type='submit'
                                        className='btn btn-primary m-auto '
                                        style={{
                                            padding: '10px 10px',
                                            backgroundColor: '#F35525',
                                            border: '#F35525',
                                        }}
                                    >
                                        Actualizar tela
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
