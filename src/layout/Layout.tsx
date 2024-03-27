import { Footer, Header, Loader } from '../components';
import { UseShoppinCart } from '../hooks';
import { UseAuth } from '../hooks/UseAuth';
import { ChildrenProp } from '../types';

export const Layout = ({ children }: ChildrenProp) => {
    const { isLoading } = UseAuth();
    const { isLoading: cartLoading } = UseShoppinCart();
    if (isLoading) return <Loader />;
    if (cartLoading) return <Loader />;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
