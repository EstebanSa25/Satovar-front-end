import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../layout';
import {
    BuyPage,
    CartPage,
    Contact,
    HomePage,
    LoginPage,
    MakingPage,
    OrdersPage,
    ProductCreatePage,
    RegisterPage,
    RentPage,
    SalesPage,
    UserCrudPage,
    UserProfilePage,
} from '../pages';
import { UseAuth } from '../hooks/UseAuth';
import { useEffect } from 'react';
import { InvoiceOrderPage } from '../pages/InvoiceOrderPage';
export const AppRouter = () => {
    //Todo: Status db from redux

    // const { checkAuthToken, status } = useAuth();
    // useEffect(() => {
    //     checkAuthToken();
    //     console.log('estoy validando el token');
    // }, []);

    // if (status === 'checking') {
    //     return <h3>Cargando...</h3>;
    // }
    const { startCheckAuthToken, status, user } = UseAuth();
    useEffect(() => {
        startCheckAuthToken();
        console.log('Estoy validando el token');
    }, []);

    return (
        <Layout>
            <Routes>
                {
                    //TODO: add routes
                    user?.CI_ID_ROL === 2 || status === 'not-authenticated' ? (
                        <>
                            <Route path='/auth/login' element={<LoginPage />} />
                            <Route path='/compra' element={<BuyPage />} />
                            <Route path='/carrito' element={<CartPage />} />
                            <Route path='/alquiler' element={<RentPage />} />
                            <Route path='/contacto' element={<Contact />} />
                            <Route
                                path='/auth/registro'
                                element={<RegisterPage />}
                            />

                            <Route
                                path='/confeccion'
                                element={<MakingPage />}
                            />
                            {/* <Route
                            path='/*'
                            element={<Navigate to={'/auth/login'} />}
                        /> */}
                        </>
                    ) : (
                        <>
                            <Route path='/ventas' element={<SalesPage />} />
                            <Route path='/pedidos' element={<OrdersPage />} />
                            <Route
                                path='/producto'
                                element={<ProductCreatePage />}
                            />
                            <Route
                                path='/perfil/:id'
                                element={<UserProfilePage />}
                            />
                            <Route
                                path='/pedido/:id'
                                element={<InvoiceOrderPage />}
                            />
                            <Route path='/usuario' element={<UserCrudPage />} />
                            <Route
                                path='/*'
                                element={<Navigate to={'/ventas'} />}
                            />
                        </>
                    )
                }
                <Route path='/*' element={<HomePage />} />
            </Routes>
        </Layout>
    );
};
