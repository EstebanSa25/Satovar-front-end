import { useEffect, useState } from 'react';
import { UseProduct, UseShoppinCart } from '../../hooks';
import { Product, C_TProductoXTalla } from '../../interfaces';
import { ProductShop } from '../../interfaces/Product.interface';

export const CardItem = ({
    id,
    nombre,
    precio,
    imagen,
    descripcion,
    cantidad,
}: ProductShop) => {
    const {
        startProductDelete,
        startAddSize,
        productscart: cartProducts,
        startCountProduct,
        starCalculateMount,
    } = UseShoppinCart();
    const { products } = UseProduct();
    const [formState, setFormState] = useState(
        products
            .filter((product) => product.id === id)
            .flatMap((product) =>
                product.tallas
                    .filter(
                        (talla) =>
                            talla.T_TALLA.CI_ID_TALLA ===
                            product.tallas[0].T_TALLA.CI_ID_TALLA
                    )
                    .map((talla) => talla.T_TALLA.CI_ID_TALLA)
            )[0]
    );

    const onChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = target;
        setFormState(+value);
    };
    const [formCountState, setFormCountState] = useState(cantidad || 1);

    const onChangeCount = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        setFormCountState(parseInt(value));
        startCountProduct(id, parseInt(value));
    };
    startAddSize(id, formState);

    useEffect(() => {
        setFormCountState(1);
    }, [formState]);
    useEffect(() => {
        starCalculateMount();
    }, [formCountState]);
    useEffect(() => {
        starCalculateMount();
    }, [cartProducts]);

    return (
        <div className='card-body'>
            <div className='d-flex gap-5  justify-between align-items-center'>
                <div className='d-flex flex-row w-100 align-items-center'>
                    <div>
                        <img
                            src={imagen}
                            className='img-fluid rounded-3'
                            alt='Shopping item'
                            style={{
                                width: '65px',
                                height: '65px',
                            }}
                        />
                    </div>
                    <div className='ms-3 w-100'>
                        <h4 className=' w-100 '>{nombre}</h4>
                        <p className='small mb-0'>{descripcion}</p>
                    </div>
                </div>

                <select
                    onChange={onChange}
                    value={formState}
                    className='form-select w-50 h-100  '
                    name={`talla${id}`}
                    id='talla'
                >
                    {products.map((product: Product) =>
                        product.id === id
                            ? product.tallas.map((talla: C_TProductoXTalla) => (
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
                <div className='d-flex justify-content-md-around  gap-5 flex-row align-items-center'>
                    <div
                        style={{
                            width: '80px',
                        }}
                    >
                        <input
                            min={1}
                            max={
                                formState === 6
                                    ? 1
                                    : products
                                          .filter(
                                              (product) => product.id === id
                                          )
                                          .flatMap((product) =>
                                              product.tallas
                                                  .filter(
                                                      (talla) =>
                                                          talla.T_TALLA
                                                              .CI_ID_TALLA ===
                                                          formState
                                                  )
                                                  .map(
                                                      (talla) =>
                                                          talla.CI_CANTIDAD
                                                  )
                                          )
                                          .reduce(
                                              (prev, current) =>
                                                  Math.max(prev, current),
                                              0
                                          )
                            }
                            onChange={onChangeCount}
                            name={`Cantidad-${id}`}
                            type='number'
                            value={formCountState}
                            className={
                                formState === 6
                                    ? 'd-none'
                                    : 'd-block form-control'
                            }
                        ></input>
                    </div>
                    <div
                        style={{
                            width: '80px',
                        }}
                    >
                        <span className=''>₡ {precio}</span>
                    </div>
                    <a
                        href='#!'
                        style={{
                            color: '#cecece',
                        }}
                    >
                        <i
                            onClick={() => {
                                setFormCountState(0);
                                startProductDelete(id);
                            }}
                            className='fas fa-trash-alt'
                        ></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
