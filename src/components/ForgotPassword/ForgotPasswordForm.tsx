import { useParams } from 'react-router-dom';
import { UseForgotPassword, UseForm } from '../../hooks';
import { useEffect } from 'react';
const initalForm = {
    password: '',
    passwordConfirmation: '',
};

export const ForgotPasswordForm = () => {
    const { token } = useParams();

    const { startResetPassword, reset, startGetStatePassword } =
        UseForgotPassword();
    const { onInputChange, formState, onResetForm } = UseForm(initalForm);
    useEffect(() => {
        startGetStatePassword(token || '');
    }, [token]);
    return (
        <div className='container mt-2'>
            <div className='row justify-content-center align-items-center text-center p-2'>
                <div className='m-1 col-sm-8 col-md-6 col-lg-4 shadow-sm p-3 mb-5 bg-white border rounded'>
                    <div className='pt-5 pb-5'>
                        <p className='text-center  mt-3'>
                            Reestablecer contraseña
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className='form text-center gap-3 d-flex flex-column'
                        >
                            <div className='form-group input-group-md'>
                                <input
                                    value={formState.password}
                                    onChange={onInputChange}
                                    type='password'
                                    className='form-control w-75 m-auto'
                                    id='password'
                                    name='password'
                                    aria-describedby='emailHelp'
                                    placeholder='Digita tu nueva contraseña'
                                />
                            </div>
                            <div className='form-group input-group-md'>
                                <input
                                    onChange={onInputChange}
                                    value={formState.passwordConfirmation}
                                    type='password'
                                    className='form-control w-75 m-auto'
                                    id='passwordConfirmation'
                                    name='passwordConfirmation'
                                    placeholder='Confirma tu nueva contraseña'
                                />
                            </div>
                            <button
                                disabled={reset}
                                onClick={() =>
                                    startResetPassword(
                                        formState,
                                        token?.toString() || '',
                                        onResetForm
                                    )
                                }
                                className='btn btn-lg btn-block btn-secondary mt-4 w-75 m-auto'
                                type='submit'
                            >
                                Reestablece tu contraseña
                            </button>
                        </form>
                    </div>
                </div>
                {reset && (
                    <h6 className=' '>
                        La página se cerrará automáticamente en 30 segundos.
                    </h6>
                )}
            </div>
        </div>
    );
};
