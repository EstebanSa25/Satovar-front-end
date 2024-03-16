import { FormItem } from '..';
import { FormProps } from '../../interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Form = ({ input, button, title, children }: FormProps) => {
    return (
        <>
            <section className='text-center'>
                {/* <!-- Background image --> */}

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
                                        SATOVAR {title}
                                    </h2>
                                    <FormItem
                                        input={input}
                                        button={button}
                                        children={children ? children : null}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
