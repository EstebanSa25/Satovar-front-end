import { useEffect, useState } from 'react';
import { Card, Filter, SimpleBanner } from '../components';
import { UseProduct } from '../hooks';
import { CatalogoType, Product } from '../interfaces';
export const BuyPage = () => {
    const { products = [], startGetProduct, CategoryActive } = UseProduct();

    useEffect(() => {
        startGetProduct();
        // productsExample.map((product) => startCreateProduct(product));
    }, [CategoryActive]);
    return (
        <>
            <SimpleBanner Title='Comprar' />
            <div className='section properties animate__animated animate__fadeIn'>
                <div className='container'>
                    <Filter />
                    <div className='row properties-box '>
                        {products.map((product: Product) =>
                            product.catalogo === CatalogoType.Venta &&
                            CategoryActive === 'Mostrar todo' ? (
                                <Card key={product.id} {...product}></Card>
                            ) : (
                                product.nombre.includes(CategoryActive) &&
                                product.catalogo === CatalogoType.Venta && (
                                    <Card key={product.id} {...product}></Card>
                                )
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
