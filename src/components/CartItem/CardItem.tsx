import { UseShoppinCart } from '../../hooks';
import { ProductShop } from '../../interfaces';

export const CardItem = ({
    id,
    nombre,
    precio,
    imagen,
    descripcion,
    cantidad,
}: ProductShop) => {
    const { startProductDelete } = UseShoppinCart();
    return (
        <div className='card-body'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex flex-row align-items-center'>
                    <div>
                        <img
                            src={imagen}
                            className='img-fluid rounded-3'
                            alt='Shopping item'
                            style={{
                                width: '65px',
                            }}
                        />
                    </div>
                    <div className='ms-3'>
                        <h5>{nombre}</h5>
                        <p className='small mb-0'>{descripcion}</p>
                    </div>
                </div>
                <div className='d-flex flex-row align-items-center'>
                    <div
                        style={{
                            width: '50px',
                        }}
                    >
                        <h5 className='fw-normal mb-0'>{cantidad}</h5>
                    </div>
                    <div
                        style={{
                            width: '80px',
                        }}
                    >
                        <h5 className='mb-0'>${precio}</h5>
                    </div>
                    <a
                        href='#!'
                        style={{
                            color: '#cecece',
                        }}
                    >
                        <i
                            onClick={() => startProductDelete(id)}
                            className='fas fa-trash-alt'
                        ></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
