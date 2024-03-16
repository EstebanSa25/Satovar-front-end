import { Footer, Header, Loader } from '../components';
import { UseAuth } from '../hooks/UseAuth';
import { ChildrenProp } from '../types';

export const Layout = ({ children }: ChildrenProp) => {
    const { isLoading } = UseAuth();
    if (isLoading) return <Loader />;
    return (
        <>
            <div className='animate__animated animate__fadeIn'>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
};
