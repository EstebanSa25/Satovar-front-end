import { VideoItem } from './VideoItem';

export const Video = () => {
    return (
        <>
            <div className='video section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 offset-lg-4'>
                            <div className='section-heading text-center'>
                                <h6>| Video</h6>
                                <h2>La diferencia de sentirse bien</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoItem />
        </>
    );
};
