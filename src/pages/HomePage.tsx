import { Banner, Video } from '../components';
import { Facts } from '../components/facts/Facts';
import { Feature } from '../components/feature/Feature';

export const HomePage = () => {
    return (
        <>
            <Banner />
            <Feature />
            <Video />
            <Facts />
        </>
    );
};
