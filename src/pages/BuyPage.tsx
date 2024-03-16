import { useEffect } from 'react';
import { Card, Filter, SimpleBanner } from '../components';
import { UseProduct } from '../hooks';
import { Product } from '../interfaces';
import { productsExample } from '../helpers';
export const BuyPage = () => {
    const { products = [], startCreateProduct } = UseProduct();
    useEffect(() => {
        productsExample.map((product) => startCreateProduct(product));
    }, []);
    return (
        <>
            <SimpleBanner Title='Comprar' />
            <div className='section properties animate__animated animate__fadeIn'>
                <div className='container'>
                    <Filter />
                    <div className='row properties-box '>
                        {products.map((product: Product) => (
                            <Card key={product.id} {...product}></Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
