import { useLocation } from 'react-router-dom';
import { Footer, Header, Loader } from '../components';
import { UseShoppinCart } from '../hooks';
import { UseAuth } from '../hooks/UseAuth';
import { ChildrenProp } from '../types';
import { useEffect } from 'react';
export const Layout = ({ children }: ChildrenProp) => {
    const location = useLocation();
    console.log(location);
    useEffect(() => {}, [location]);

    const { isLoading } = UseAuth();
    const { isLoading: cartLoading } = UseShoppinCart();
    if (isLoading) return <Loader />;
    if (cartLoading) return <Loader />;
    return (
        <>
            {!location.pathname.includes('forgot/password') && <Header />}

            {children}
            {!location.pathname.includes('forgot/password') && <Footer />}
        </>
    );
};
