export const TableInfo = () => {
    return (
        <div className='info-table'>
            <ul>
                <li>
                    <img
                        src='src/assets/images/icons8-traje-formal-100.png'
                        alt=''
                        style={{ maxWidth: '52px' }}
                    />
                    <h4>
                        Amplia Variedad de Estilos y Tallas
                        <br />
                        <span>
                            Descubre trajes únicos que expresan tu
                            individualidad, ¡estilo personalizado para todos!
                        </span>
                    </h4>
                </li>
                <li>
                    <img
                        src='src/assets/images/icons8-coser-100.png'
                        alt=''
                        style={{ maxWidth: '52px' }}
                    />
                    <h4>
                        Confección a Medida
                        <br />
                        <span>
                            {' '}
                            Diseña tu estilo. Nuestros sastres expertos crean
                            moda exclusiva para ti.
                        </span>
                    </h4>
                </li>
                <li>
                    <img
                        src='src/assets/images/icons8-producto-exclusivo-96.png'
                        alt=''
                        style={{ maxWidth: '52px' }}
                    />
                    <h4>
                        Diseños Exclusivos
                        <br />
                        <span>
                            Colección única: clásicos y tendencias. ¡Viste la
                            elegancia atemporal y moderna!{' '}
                        </span>
                    </h4>
                </li>
            </ul>
        </div>
    );
};
