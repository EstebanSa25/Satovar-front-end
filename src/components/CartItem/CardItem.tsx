import { useState } from 'react';
import { UseProduct, UseShoppinCart } from '../../hooks';
import { Product, TProductoXTalla } from '../../interfaces';
import { ProductShop } from '../../interfaces/Product.interface';

export const CardItem = ({
    id,
    nombre,
    precio,
    imagen,
    descripcion,
    cantidad,
}: ProductShop) => {
    const { startProductDelete, startAddSize } = UseShoppinCart();
    const { products } = UseProduct();
    const [formState, setFormState] = useState(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        products.find((product: ProductShop) => product.id === id)?.tallas[0]
            ?.T_TALLA.CI_ID_TALLA || 1
    );
    const onChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = target;
        setFormState(value);
    };
    startAddSize(id, +formState);
    return (
        <div className='card-body'>
            <div className='d-flex justify-content-left  gap-5'>
                <div className='d-flex flex-row  w-75 align-items-center'>
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
                    <div className='ms-3 w-100'>
                        <h5 className=' w-100 '>{nombre}</h5>
                        <p className='small mb-0'>{descripcion}</p>
                    </div>
                </div>

                <select
                    onChange={onChange}
                    value={formState}
                    className='form-select w-25'
                    name={`talla${id}`}
                    id='talla'
                >
                    {products.map((product: Product) =>
                        product.id === id
                            ? product.tallas.map((talla: TProductoXTalla) => (
                                  <option
                                      key={talla.T_TALLA.CI_ID_TALLA}
                                      value={talla.T_TALLA.CI_ID_TALLA}
                                  >
                                      {talla.T_TALLA.CV_TALLA}
                                  </option>
                              ))
                            : ``
                    )}
                </select>
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
