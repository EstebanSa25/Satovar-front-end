import { SalesHeaderItem } from '..';

export const SalesHeader = () => {
    return (
        <div className='team-grid'>
            <div className='container'>
                <div className='intro'>
                    <h2 className='text-center'>Ventas </h2>
                    <p className='text-center'>
                        Actualización en tiempo real de los ingresos y usuarios
                        de la plataforma
                    </p>
                </div>
                <div
                    className='row people'
                    style={{ backgroundImage: 'url()' }}
                >
                    <div className='col-md-4 col-lg-3 item '>
                        {/*  */}
                        <SalesHeaderItem
                            Title='Ingresos'
                            valor={50}
                            icon={['fa fa-money', 'fa fa-dollar']}
                        />
                    </div>
                    <div className='col-md-4 col-lg-3 item '>
                        <SalesHeaderItem
                            Title='Pedidos Actuales'
                            valor={548}
                            icon={['fa fa-shopping-cart', 'fa fa-box']}
                        />
                    </div>
                    <div className='col-md-4 col-lg-3 item '>
                        <SalesHeaderItem
                            Title='Visitantes Online'
                            valor={95}
                            icon={['fa fa-users', 'fa fa-globe']}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
