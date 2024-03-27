import { Link } from 'react-router-dom';
import { RentProps } from '../../interfaces';
import { UseShoppinCart } from '../../hooks';

export const LargeCard = ({
    id,
    title,
    category,
    sizes,
    price,
    image,
}: RentProps) => {
    const { startAddProduct } = UseShoppinCart();
    return (
        <>
            <div className='col-lg-4 col-md-6'>
                <div className='item'>
                    <a href='property-details.html'>
                        <img src={image} alt={title} />
                    </a>
                    <span className='category'>{category}</span>
                    <h6>₡ {price}</h6>
                    <h4>
                        <a href='property-details.html'>{title} </a>
                    </h4>
                    <ul>
                        <li>
                            Tallas Disponibles:{' '}
                            <span>
                                {sizes
                                    .map((size) => size.T_TALLA.CV_TALLA + ' ')
                                    .join(' / ')}
                            </span>
                        </li>

                        <li>
                            Disponibilidad: <span>Verificar en tienda</span>
                        </li>
                        <li>
                            Duración del Alquiler: <span>Fin de semana</span>
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
                                to=''
                            >
                                <i className='fa fa-shopping-cart'></i> Alquilar
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
