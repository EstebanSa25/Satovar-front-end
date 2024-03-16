import { UseBanner } from '../../hooks';
import './Banner.scss';
export const Banner = () => {
    const { image, changeImage } = UseBanner();
    const { imagen, titulo, categoria } = image;
    return (
        <div className='banner animate__animated animate__fadeInLeft'>
            <img src={imagen} alt={titulo} className='banner__img' />
            <i
                onClick={() => changeImage()}
                className='fa fa-angle-left'
                aria-hidden='true'
            ></i>

            <i
                onClick={() => changeImage()}
                className='fa fa-angle-right'
                aria-hidden='true'
            ></i>

            <div className='banner__copy'>
                <span className='category'>
                    Boda, <em className='bold-Orange'>{categoria}</em>
                </span>
                <h1 className='banner__title'>{titulo}</h1>
            </div>
        </div>
    );
};
