import { Link } from 'react-router-dom';
import { SimpleBannerProps } from '../../interfaces';

export const SimpleBanner = ({ Title }: SimpleBannerProps) => {
    return (
        <div className='page-heading header-text'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <span className='breadcrumb'>
                            <Link to='/'>SATOVAR</Link> / {Title}
                        </span>
                        <h3>{Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
