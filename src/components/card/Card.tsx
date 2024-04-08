import { Link } from 'react-router-dom';
import { Product } from '../../interfaces';
import { UseProduct, UseShoppinCart } from '../../hooks';
import { useEffect, useState } from 'react';

export const Card = ({
    id,
    nombre,
    precio,
    imagen,
    descripcion,
    color,
    tallas,
}: Product) => {
    const { startAddProduct, productscart: products } = UseShoppinCart();
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products));
    }, [products]);

    return (
        <div className='col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 tra'>
            <div className='item'>
                <a href='#!'>
                    <img
                        width={'250px'}
                        height={'250px'}
                        src={imagen}
                        alt={nombre}
                    />
                </a>
                <span className='category'>{color}</span>
                <h6>₡{precio}</h6>
                <h4>
                    <a href='property-details.html'>{nombre} </a>
                </h4>

                {tallas.length > 0 ? (
                    <div className='icon-button  '>
                        <Link
                            onClick={() => {
                                !products
                                    .map((product) => product.id)
                                    .includes(id) &&
                                    startAddProduct({
                                        id,
                                        nombre,
                                        precio,
                                        imagen,
                                        descripcion,
                                        cantidad: 1,
                                    });
                            }}
                            to={
                                (products
                                    .map((product) => product.id)
                                    .includes(id) &&
                                    '/carrito') ||
                                ''
                            }
                        >
                            <i
                                className={
                                    (products
                                        .map((product) => product.id)
                                        .includes(id) &&
                                        'fa fa-credit-card-alt') ||
                                    'fa fa-shopping-cart'
                                }
                            >
                                {' '}
                            </i>
                            {products.map((product) => product.id).includes(id)
                                ? 'Agregado, ir al carrito'
                                : 'Anadir al carrito'}
                        </Link>
                    </div>
                ) : (
                    <span className='text-danger'>Producto Agotado</span>
                )}
            </div>
        </div>
    );
};
