/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { UseForm, UseUsersCrud } from '../../hooks';
import { Rol } from '../../interfaces';
const initialForm = {
    Nombre: '',
    Apellido1: '',
    Apellido2: '',
    Cedula: '',
    Correo: '',
    Direccion: '',
    Telefono: '',
    Clave: '',
    Rol: Rol.Cliente.toString(),
};

export const RegisterUser = () => {
    const { formState, onInputChange, onResetForm, setFormState } =
        UseForm(initialForm);
    const { startCreateUser, Users } = UseUsersCrud();

    useEffect(() => {
        onResetForm();
        setFormState({
            ...initialForm,
        });
    }, [Users]);
    const ref = useRef(null);
    console.log(formState);
    return (
        <div
            className='modal fade'
            id='register-user'
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
                            Registro de usuarios
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
                                            htmlFor='Apellido1'
                                            className='form-label'
                                        >
                                            Primer apellido
                                        </label>
                                        <input
                                            value={formState.Apellido1}
                                            onChange={onInputChange}
                                            type='text'
                                            className='form-control'
                                            id='Apellido1'
                                            placeholder='Primer apellido'
                                            name='Apellido1'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Apellido2'
                                            className='form-label'
                                        >
                                            Segundo apellido:
                                        </label>
                                        <input
                                            value={formState.Apellido2}
                                            onChange={onInputChange}
                                            type='text'
                                            className='form-control'
                                            id='Apellido2'
                                            placeholder='Segundo apellido'
                                            name='Apellido2'
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label
                                            htmlFor='TelaRegistro'
                                            className='form-label'
                                        >
                                            Cédula:
                                        </label>
                                        <input
                                            value={formState.Cedula}
                                            onChange={onInputChange}
                                            type='text'
                                            className='form-control'
                                            id='Cedula'
                                            placeholder='Cédula'
                                            name='Cedula'
                                        />
                                    </div>

                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Correo'
                                            className='form-label'
                                        >
                                            Correo electrónico:
                                        </label>
                                        <input
                                            onChange={onInputChange}
                                            value={formState.Correo}
                                            type='email'
                                            className='form-control'
                                            id='Correo'
                                            placeholder='Correo electrónico'
                                            name='Correo'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Direccion'
                                            className='form-label'
                                        >
                                            Dirección:
                                        </label>
                                        <input
                                            onChange={onInputChange}
                                            value={formState.Direccion}
                                            type='text'
                                            className='form-control'
                                            id='Direccion'
                                            placeholder='Dirección'
                                            name='Direccion'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Telefono'
                                            className='form-label'
                                        >
                                            Teléfono:
                                        </label>
                                        <input
                                            onChange={onInputChange}
                                            value={formState.Telefono}
                                            type='text'
                                            className='form-control'
                                            id='Telefono'
                                            placeholder='Teléfono'
                                            name='Telefono'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Clave'
                                            className='form-label'
                                        >
                                            Clave:
                                        </label>
                                        <input
                                            onChange={onInputChange}
                                            value={formState.Clave}
                                            type='text'
                                            className='form-control'
                                            id='Clave'
                                            placeholder='Clave'
                                            name='Clave'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Rol'
                                            className='form-label'
                                        >
                                            Rol:
                                        </label>
                                        <select
                                            onChange={onInputChange}
                                            value={formState.Rol}
                                            className='form-control'
                                            id='Rol'
                                            name='Rol'
                                        >
                                            <option value={1}>
                                                Administrador
                                            </option>
                                            <option value={2}>Cliente</option>
                                        </select>
                                    </div>
                                    <button
                                        onClick={() => {
                                            startCreateUser(
                                                formState,
                                                onResetForm,
                                                ref
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
                                        Guardar usuario
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
