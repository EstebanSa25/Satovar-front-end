export const VideoItem = () => {
    return (
        <div className='video-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                        <div className='video-frame'>
                            <img
                                src='src/assets/images/video-frame.jpg'
                                alt=''
                            />
                            <a
                                href='https://www.youtube.com/watch?v=4bD3oEVvl7w'
                                target='_blank'
                            >
                                <i className='fa fa-play'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
