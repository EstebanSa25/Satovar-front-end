export const SectionHeading = () => {
    return (
        <div className='col-lg-5'>
            <div className='section-heading'>
                <h6>| Diseña</h6>
                <h2>Estilo exclusivo y elegancia personalizada.</h2>
            </div>
            <div className='accordion' id='accordionExample'>
                <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingTwo'>
                        <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                        >
                            ¿Por qué elegirnos?
                        </button>
                    </h2>
                    <div
                        id='collapseTwo'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingTwo'
                        data-bs-parent='#accordionExample'
                    >
                        <div className='accordion-body'>
                            Somos una empresa con años de experiencia en el
                            mundo de la moda y el diseño. Miles de clientes han
                            confiado su estilo y diseño a nuestros sastres
                            expertos. Nuestro compromiso es brindar a cada
                            cliente una experiencia única, adaptando nuestras
                            creaciones a sus gustos y necesidades. Ya sea que
                            busques un atuendo elegante, moderno o clásico,
                            nuestro equipo está aquí para ayudarte a lucir tu
                            mejor versión.
                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h2 className='accordion-header' id='headingThree'>
                        <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                        >
                            ¿Por qué somos los mejores?
                        </button>
                    </h2>
                    <div
                        id='collapseThree'
                        className='accordion-collapse collapse'
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionExample'
                    >
                        <div className='accordion-body'>
                            Nuestro compromiso es brindar a cada cliente una
                            experiencia única, adaptando nuestras creaciones a
                            sus gustos y necesidades. Ya sea que busques un
                            atuendo elegante, moderno o clásico, nuestro equipo
                            está aquí para ayudarte a lucir tu mejor versión.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
