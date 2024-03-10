import { Link } from 'react-router-dom';
import { Product } from '../../interfaces';
import { UseShoppinCart } from '../../hooks';

export const Card = ({
    id,
    nombre,
    precio,
    imagen,
    descripcion,
    cantidad,
    color,
}: Product) => {
    const { startAddProduct } = UseShoppinCart();
    return (
        <div className='col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 tra'>
            <div className='item'>
                <a href='property-details.html'>
                    <img src={imagen} alt={nombre} />
                </a>
                <span className='category'>Gris Oxford</span>
                <h6>${precio}</h6>
                <h4>
                    <a href='property-details.html'>{nombre} </a>
                </h4>
                <ul>
                    <li>
                        Pantalon: <span>{cantidad.Pantalon}</span>
                    </li>
                    <li>
                        Saco: <span>{cantidad.Saco}</span>
                    </li>
                    <li>
                        Chaleco: <span>{cantidad.Chaleco}</span>
                    </li>
                    <li>
                        Corbata: <span>{cantidad.Corbata}</span>
                    </li>
                    <li>
                        camisa: <span>{cantidad.camisa}</span>
                    </li>
                </ul>
                <div className='icon-button'>
                    <Link
                        onClick={() =>
                            startAddProduct({
                                id,
                                nombre,
                                precio,
                                imagen,
                                descripcion,
                                cantidad: 1,
                            })
                        }
                        to=''
                    >
                        <i className='fa fa-shopping-cart'></i> Anadir al
                        carrito
                    </Link>
                </div>
            </div>
        </div>
    );
};
