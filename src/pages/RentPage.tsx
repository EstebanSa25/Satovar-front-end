import { useEffect } from 'react';
import { LargeCard } from '../components';
import { UseProduct } from '../hooks';
import { CatalogoType, Product } from '../interfaces';

export const RentPage = () => {
    const { products, startGetProduct } = UseProduct();
    useEffect(() => {
        startGetProduct();
    }, []);

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
                        {products.map(
                            (product: Product) =>
                                product.catalogo === CatalogoType.Alquiler && (
                                    <LargeCard
                                        title={product.nombre}
                                        category={product.color}
                                        sizes={product.tallas}
                                        price={product.precio}
                                        image={product.imagen}
                                        key={product.id}
                                        id={product.id}
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
