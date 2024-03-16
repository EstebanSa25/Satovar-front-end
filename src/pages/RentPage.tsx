import { LargeCard } from '../components';

export const RentPage = () => {
    return (
        <>
            <div className='properties section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 offset-lg-4'>
                            <div className='section-heading text-center'>
                                <h6>| ALQUILERES</h6>
                                <h2>Los mejores en alquiler de prendas</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row animate__animated animate__fadeIn'>
                        <LargeCard />
                    </div>
                </div>
            </div>
        </>
    );
};
