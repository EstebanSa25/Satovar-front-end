import { Banner, Video } from '../components';
import { Facts } from '../components/facts/Facts';
import { Feature } from '../components/feature/Feature';

export const HomePage = () => {
    return (
        <>
            <div className='animate__animated animate__fadeIn'>
                <Banner />
                <Feature />
                <Video />
                <Facts />
            </div>
        </>
    );
};
