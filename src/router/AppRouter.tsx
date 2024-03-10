import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from '../layout';
import { BuyPage, CartPage, HomePage, MakingPage, RentPage } from '../pages';
export const AppRouter = () => {
    //Todo: Status db from redux
    const status = 'not-authenticated';
    // const { checkAuthToken, status } = useAuth();
    // useEffect(() => {
    //     checkAuthToken();
    //     console.log('estoy validando el token');
    // }, []);

    // if (status === 'checking') {
    //     return <h3>Cargando...</h3>;
    // }
    return (
        <Layout>
            <Routes>
                {
                    //TODO: add routes
                    status === 'not-authenticated' ? (
                        <>
                            <Route path='/compra' element={<BuyPage />} />
                            <Route path='/carrito' element={<CartPage />} />
                            <Route path='/alquiler' element={<RentPage />} />
                            <Route
                                path='/confeccion'
                                element={<MakingPage />}
                            />
                            <Route path='/*' element={<HomePage />} />
                            {/* <Route
                            path='/*'
                            element={<Navigate to={'/auth/login'} />}
                        /> */}
                        </>
                    ) : (
                        <>
                            {/* <Route path='/' element={<CalendarPage />} /> */}
                            <Route path='/*' element={<Navigate to={'/'} />} />
                        </>
                    )
                }
            </Routes>
        </Layout>
    );
};
