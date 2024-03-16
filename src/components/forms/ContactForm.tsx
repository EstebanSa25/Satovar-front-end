export const ContactForm = () => {
    return (
        <form id='contact-form' action='' method='post'>
            <div className='row'>
                <div className='col-lg-12'>
                    <fieldset>
                        <label htmlFor='name'>Nombre completo</label>
                        <input
                            type='name'
                            name='name'
                            id='name'
                            placeholder='Tu nombre...'
                            autoComplete='on'
                            required
                        />
                    </fieldset>
                </div>
                <div className='col-lg-12'>
                    <fieldset>
                        <label htmlFor='email'>Direccion de correo</label>
                        <input
                            type='text'
                            name='email'
                            id='email'
                            pattern='[^ @]*@[^ @]*'
                            placeholder='Tu E-mail...'
                            required
                        />
                    </fieldset>
                </div>
                <div className='col-lg-12'>
                    <fieldset>
                        <label htmlFor='subject'>Asunto</label>
                        <input
                            type='subject'
                            name='subject'
                            id='subject'
                            placeholder='Asunto...'
                            autoComplete='on'
                        />
                    </fieldset>
                </div>
                <div className='col-lg-12'>
                    <fieldset>
                        <label htmlFor='message'>Mensaje</label>
                        <textarea
                            name='message'
                            id='message'
                            placeholder='Tu mensaje'
                        ></textarea>
                    </fieldset>
                </div>
                <div className='col-lg-12'>
                    <fieldset>
                        <button
                            type='submit'
                            id='form-submit'
                            className='orange-button'
                        >
                            Enviar Mensaje
                        </button>
                    </fieldset>
                </div>
            </div>
        </form>
    );
};
