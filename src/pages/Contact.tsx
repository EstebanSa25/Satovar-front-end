import { Map, SimpleBanner } from '../components';
import { ContactForm } from '../components/forms/ContactForm';

export const Contact = () => {
    return (
        <>
            <div className='animate__animated animate__fadeIn'>
                <SimpleBanner Title='Contactenos' />
                <div className='contact-page section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='section-heading'>
                                    <h6>| Contactenos</h6>
                                    <h2>
                                        Póngase en contacto con nuestros agentes
                                    </h2>
                                </div>
                                <p>
                                    Estamos aquí para atender sus consultas y
                                    brindarle la mejor asistencia posible. Si
                                    tiene preguntas, comentarios o inquietudes,
                                    no dude en comunicarse con nuestro equipo de
                                    agentes capacitados. Valoramos su opinión y
                                    estamos aquí para ayudarle en lo que
                                    necesite.
                                </p>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='item phone'>
                                            <img
                                                src='../src/assets/images/phone-icon.png'
                                                alt=''
                                                style={{ maxWidth: '52px' }}
                                            />
                                            <h6>
                                                506-0000-8655
                                                <br />
                                                <span>Numero de telefono</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='item email'>
                                            <img
                                                src='../src/assets/images/email-icon.png'
                                                alt=''
                                                style={{ maxWidth: '52px' }}
                                            />
                                            <h6>
                                                cotizar@SATOVAR.co
                                                <br />
                                                <span>Correo empresarial</span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6'>
                                <ContactForm />
                            </div>
                            <div className='col-lg-12'>
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
