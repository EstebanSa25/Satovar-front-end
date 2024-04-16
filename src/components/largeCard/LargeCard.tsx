import { Link } from 'react-router-dom';
import { RentProps } from '../../interfaces';
import { UseShoppinCart } from '../../hooks';
import { useEffect } from 'react';

enum Tallas {
    S = 1,
    M = 2,
    L = 3,
    XL = 4,
    XXL = 5,
    PROPIAS = 6,
}

export const LargeCard = ({
    id,
    title,
    category,
    sizes,
    price,
    image,
}: RentProps) => {
    const { startAddProduct, productscart: products } = UseShoppinCart();
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products));
    }, [products]);
    console.log(sizes);

    const tallasArray: string[] = Object.keys(Tallas).filter(
        (key) => !isNaN(Number(Tallas[key as keyof typeof Tallas]))
    );
    return (
        <>
            <div className='col-lg-4 col-md-6'>
                <div className='item'>
                    <a href='property-details.html'>
                        <img
                            width={'250px'}
                            height={'250px'}
                            src={image}
                            alt={title}
                        />
                    </a>
                    <span className='category'>{category}</span>
                    <h6>₡ {price}</h6>
                    <h4>
                        <a href='property-details.html'>{title} </a>
                    </h4>
                    <ul>
                        <li>
                            Tallas disponibles:{' '}
                            <span>
                                {tallasArray?.map((size, index) =>
                                    sizes?.find(
                                        (x) => x?.T_TALLA.CV_TALLA == size
                                    ) !== undefined
                                        ? size +
                                          (index === tallasArray.length - 1
                                              ? ''
                                              : ' / ')
                                        : ''
                                )}
                            </span>
                        </li>

                        <li>
                            Disponibilidad: <span>Verificar en tienda</span>
                        </li>
                        <li>
                            Duración del alquiler: <span>Fin de semana</span>
                        </li>
                    </ul>
                    {sizes.length > 0 ? (
                        <div className='icon-button'>
                            <Link
                                onClick={() =>
                                    startAddProduct({
                                        id,
                                        nombre: title,
                                        precio: price,
                                        imagen: image,
                                        descripcion: '',
                                        cantidad: 1,
                                    })
                                }
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
                                ></i>{' '}
                                {products
                                    .map((product) => product.id)
                                    .includes(id)
                                    ? 'Agregado, ir al carrito'
                                    : 'Añadir al carrito'}
                            </Link>
                        </div>
                    ) : (
                        <span className='text-danger'>Producto Agotado</span>
                    )}
                </div>
            </div>
        </>
    );
};
