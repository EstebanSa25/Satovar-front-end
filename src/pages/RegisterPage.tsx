import { BannerForm, RegisterForm } from '../components';

export const RegisterPage = () => {
    return (
        <section className='text-center'>
            <BannerForm />
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-lg-8'>
                        <div
                            className='card shadow-5-strong'
                            style={{
                                background: 'hsla(0, 0%, 100%, 0.8)',
                                backdropFilter: 'blur(30px)',
                                marginTop: '-25%',
                            }}
                        >
                            <div className='card-body py-5 px-md-5'>
                                <h2 className='fw-bold mb-5'>
                                    SATOVAR{' '}
                                    <div style={{ color: '#F35525' }}>
                                        Registro
                                    </div>
                                </h2>
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
