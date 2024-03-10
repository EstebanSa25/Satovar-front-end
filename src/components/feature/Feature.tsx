import { Link } from 'react-router-dom';
import { SectionHeading } from './SectionHeading';
import { TableInfo } from './TableInfo';

export const Feature = () => {
    return (
        <div className='featured section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='left-image '>
                            <img
                                src='src/assets/images/traje_vino.jpg'
                                alt=''
                            />
                            <Link to='/compra'>
                                <img
                                    src='src/assets/images/icons8-marca-de-verificación-de-instagram-96.png'
                                    alt=''
                                    style={{ maxWidth: '80px', padding: '0px' }}
                                />
                            </Link>
                        </div>
                    </div>
                    {/*  */}
                    <SectionHeading />
                    <div className='col-lg-3'>
                        <TableInfo></TableInfo>
                    </div>
                </div>
            </div>
        </div>
    );
};
