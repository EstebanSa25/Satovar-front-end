import { UseForm } from '../../hooks';
import { UseAuth } from '../../hooks/UseAuth';

export const RegisterForm = () => {
    const { userGoogle, startCreateUser } = UseAuth();
    const initialForm = {
        Nombre: userGoogle?.Nombre || '',
        Apellido1: userGoogle?.Apellido1 || '',
        Apellido2: userGoogle?.Apellido2 || '',
        Correo: userGoogle?.Correo || '',
        Cedula: '',
        Direccion: '',
        Telefono: '',
        Clave: '',
    };
    const {
        formState = {} as typeof initialForm,
        Clave,
        Direccion,
        Cedula,
        Correo,
        Apellido2,
        Apellido1,
        Nombre,
        Telefono,
        onInputChange,
        onResetForm,
    } = UseForm(initialForm);
    // console.log(userGoogle);

    return (
        <form>
            {/* <!--nombre input--> */}
            <div className='form-row row'>
                {/* <!-- Nombre --> */}
                <div className=' col col-md-4 mb-3'>
                    <input
                        onChange={onInputChange}
                        type='text'
                        className='form-control'
                        value={Nombre}
                        id='Nombre'
                        name='Nombre'
                        required
                    />
                    <label className='form-label' htmlFor='nombre'>
                        Nombre
                    </label>
                </div>
                {/* <!-- Primer apellido --> */}
                <div className=' col col-md-4 mb-3'>
                    <input
                        onChange={onInputChange}
                        type='text'
                        className='form-control'
                        id='Apellido1'
                        value={Apellido1}
                        required
                        name='Apellido1'
                    />
                    <label className='form-label' htmlFor='apellido1'>
                        Primer Apellido
                    </label>
                </div>
                {/* <!-- Segundo apellido --> */}
                <div className='col col-md-4 mb-3'>
                    <input
                        onChange={onInputChange}
                        type='text'
                        className='form-control'
                        id='Apellido2'
                        value={Apellido2}
                        name='Apellido2'
                    ></input>{' '}
                    <label className='form-label' htmlFor='apellido2'>
                        Segundo Apellido
                    </label>
                </div>
            </div>
            {/* <!-- Cedula input --> */}
            <div className='form-outline mb-4'>
                <input
                    onChange={onInputChange}
                    type='text'
                    id='Cedula'
                    value={Cedula}
                    name='Cedula'
                    className='form-control'
                />
                <label className='form-label' htmlFor='cedula'>
                    Cédula
                </label>
            </div>
            {/* <!-- Telefono input --> */}
            <div className='form-outline mb-4'>
                <input
                    onChange={onInputChange}
                    type='text'
                    id='Telefono'
                    value={Telefono}
                    name='Telefono'
                    className='form-control'
                />
                <label className='form-label' htmlFor='telefono'>
                    Teléfono
                </label>
            </div>
            {/* <!-- Direccion input --> */}
            <div className='form-outline mb-4'>
                <input
                    onChange={onInputChange}
                    type='text'
                    id='Direccion'
                    value={Direccion}
                    name='Direccion'
                    className='form-control'
                />
                <label className='form-label' htmlFor='direccion'>
                    Dirección
                </label>
            </div>
            {/* <!-- Email input --> */}
            <div className='form-outline mb-4'>
                <input
                    onChange={onInputChange}
                    type='email'
                    id='Correo'
                    name='Correo'
                    value={Correo}
                    className='form-control'
                />
                <label className='form-label' htmlFor='email'>
                    Dirección de correo
                </label>
            </div>
            {/* <!-- Password input --> */}
            <div className='form-outline mb-4'>
                <input
                    onChange={onInputChange}
                    type='password'
                    id='Clave'
                    name='Clave'
                    value={Clave}
                    className={
                        userGoogle
                            ? `d-none form-control`
                            : `d-block form-control`
                    }
                />
                <label
                    className={userGoogle ? `d-none` : `d-block form-label`}
                    htmlFor='password'
                >
                    Contraseña
                </label>
            </div>

            <button
                onClick={(e) => startCreateUser(formState, e, onResetForm)}
                type='submit'
                className='btn btn-secondary btn-block mb-4'
            >
                Registrar
            </button>
            {/* <!-- Register buttons --> */}
        </form>
    );
};
