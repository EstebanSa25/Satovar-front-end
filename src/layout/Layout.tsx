import { Footer, Header } from '../components';
import { ChildrenProp } from '../types';

export const Layout = ({ children }: ChildrenProp) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
