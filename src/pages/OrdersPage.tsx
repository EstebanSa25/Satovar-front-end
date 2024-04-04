import { OrdesTable, OrdesTablePending } from '../components';
import { OrdersTableComplete } from '../components/tables/OrdersTableComplete';

export const OrdersPage = () => {
    return (
        <>
            <OrdesTable />
            <div className='container-pedidos mt-3'>
                <div className='text-center'>
                    <h1>
                        <br />
                    </h1>
                </div>
                <div className='container-pedidos mt-3'>
                    <div className='container-pedidos'>
                        <div className='row'>
                            <div className='col '>
                                <OrdesTablePending />
                            </div>
                            <OrdersTableComplete />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
