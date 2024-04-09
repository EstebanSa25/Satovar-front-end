import { useEffect } from 'react';
import { SalesHeaderItem } from '..';
import { UseDashboard } from '../../hooks';

export const SalesHeader = () => {
    const {
        salesTotal,
        startGetSales,
        ordersPending,
        startGetOrdersPending,
        ordersCompleted,
        startGetOrdersCompleted,
    } = UseDashboard();
    useEffect(() => {
        startGetSales();
        startGetOrdersPending();
        startGetOrdersCompleted();
    }, []);

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
                            valor={+salesTotal.total_ingresos}
                            icon={['fa fa-money', 'fa fa-dollar']}
                        />
                    </div>
                    <div className='col-md-4 col-lg-3 item '>
                        <SalesHeaderItem
                            Title='Pedidos actuales'
                            valor={+ordersPending.CantidadPedidos}
                            icon={['fa fa-shopping-cart', 'fa fa-box']}
                        />
                    </div>
                    <div className='col-md-4 col-lg-3 item '>
                        <SalesHeaderItem
                            Title='Pedidos completados'
                            valor={+ordersCompleted.CantidadPedidos}
                            icon={['fa fa-check', 'fa fa-shop']}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
