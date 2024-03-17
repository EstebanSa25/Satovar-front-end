import { Button } from '..';
import { UseForm } from '../../hooks';
import { UseAuth } from '../../hooks/UseAuth';
import { FormProperties, FormProps } from '../../interfaces';

export const FormItem = ({ input, button, children = null }: FormProps) => {
    const { onInputChange, formState } = UseForm();
    const { startLogin, startGoogleSignIn } = UseAuth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { email = '', password = '' } = formState as any;
    return (
        <>
            <form>
                {input.map((item: FormProperties, index) => {
                    return (
                        <div className='form-outline mb-4' key={index}>
                            <input
                                onChange={(e) => onInputChange(e)}
                                type={item.type}
                                id={item.id}
                                name={item.id}
                                value={item.id === 'email' ? email : password}
                                className='form-control mx-auto text-center w-50'
                            />
                            <label className='form-label' htmlFor={item.id}>
                                {item.label}
                            </label>
                        </div>
                    );
                })}
                <Button
                    type={button.type}
                    title={button.title}
                    onClick={(e) => startLogin(email, password, e)}
                />
                <br />
                <div className='text-center'>
                    <p>o ingrese con:</p>

                    <button
                        onClick={startGoogleSignIn}
                        type='button'
                        className='btn btn-link btn-floating mx-1'
                    >
                        <i className='fab fa-google'></i>
                    </button>
                </div>
                {children}
            </form>
        </>
    );
};
