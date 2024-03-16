import { useNavigate } from 'react-router-dom';
import { BannerForm, Button, Form } from '../components';
import { buttonLogin, inputLogin } from '../helpers';
import { InputColorButton } from '../interfaces';

export const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='animate__animated animate__fadeIn'>
                <BannerForm />
                <Form
                    input={inputLogin}
                    button={buttonLogin}
                    title={'Inicio sesion'}
                    children={
                        <Button
                            title='Registrarse'
                            type={InputColorButton.grey}
                            onClick={(
                                e: React.MouseEvent<HTMLButtonElement>
                            ) => {
                                e.preventDefault();
                                navigate('/auth/registro');
                            }}
                        />
                    }
                />
            </div>
        </>
    );
};
