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
    const { startAddProduct, products } = UseShoppinCart();
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products));
    }, [products]);

    const [count, setCount] = useState(0);
    return (
        <div className='col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 tra'>
            <div className='item'>
                <a href='#!'>
                    <img src={imagen} alt={nombre} />
                </a>
                <span className='category'>{color}</span>
                <h6>${precio}</h6>
                <h4>
                    <a href='property-details.html'>{nombre} </a>
                </h4>

                {tallas.length > 0 ? (
                    <div className='icon-button  '>
                        <Link
                            onClick={() => {
                                !products
                                    .map((product) => product.id)
                                    .includes(id) && setCount(count + 1);
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
                            to=''
                        >
                            <i className='fa fa-shopping-cart'>
                                {' '}
                                {count === 0 ? '' : ` ${count}`}
                            </i>
                            {products.map((product) => product.id).includes(id)
                                ? 'Agregado'
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
