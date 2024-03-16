import { Footer, Header, Loader } from '../components';
import { UseAuth } from '../hooks/UseAuth';
import { ChildrenProp } from '../types';

export const Layout = ({ children }: ChildrenProp) => {
    const { isLoading } = UseAuth();
    if (isLoading) return <Loader />;
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
