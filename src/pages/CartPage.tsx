import { Link } from 'react-router-dom';
import { CardItem } from '../components/CartItem/CardItem';
import { UseShoppinCart } from '../hooks';
import { ProductShop } from '../interfaces';

export const CartPage = () => {
    const { products } = UseShoppinCart();
    return (
        <section className='h-100 h-custom' style={{ backgroundColor: '#eee' }}>
            <div className='container py-5 h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body p-4'>
                                <div className='row'>
                                    <div className='col-lg-7'>
                                        <h5 className='mb-3'>
                                            <Link
                                                to='/compra'
                                                className='text-body'
                                            >
                                                <i className='fas fa-long-arrow-alt-left me-2'></i>
                                                Seguir Comprando
                                            </Link>
                                        </h5>
                                        <hr />

                                        <div className='d-flex justify-content-between align-items-center mb-4'>
                                            <div>
                                                <p className='mb-1'>
                                                    Carrito de Compras
                                                </p>
                                                <p className='mb-0'>
                                                    Usted tiene 0 elementos en
                                                    su carrito de compras
                                                </p>
                                            </div>
                                            <div className='dropdown'>
                                                <button
                                                    type='button'
                                                    className='btn btn-primary dropdown-toggle'
                                                    style={{
                                                        backgroundColor:
                                                            '#F35525',
                                                        border: '#F35525',
                                                    }}
                                                    data-toggle='dropdown'
                                                >
                                                    Filtrar por
                                                </button>
                                                <div className='dropdown-menu'>
                                                    <a
                                                        className='dropdown-item'
                                                        href='#'
                                                    >
                                                        Precio
                                                    </a>
                                                    <a
                                                        className='dropdown-item'
                                                        href='#'
                                                    >
                                                        Cantidad
                                                    </a>
                                                    <a
                                                        className='dropdown-item'
                                                        href='#'
                                                    >
                                                        Nombre
                                                    </a>
                                                </div>
                                            </div>
                                            {/* TODO:CARDS */}
                                        </div>
                                        <div className='card mb-3'>
                                            {products.map(
                                                (product: ProductShop) => (
                                                    <CardItem
                                                        id={product.id}
                                                        nombre={product.nombre}
                                                        precio={product.precio}
                                                        imagen={product.imagen}
                                                        descripcion={
                                                            product.descripcion
                                                        }
                                                        cantidad={
                                                            product.cantidad
                                                        }
                                                    ></CardItem>
                                                )
                                            )}
                                            {/* <div className='card-body'>
                                                
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className='col-lg-5'>
                                        <div className='card bg-primary text-white rounded-3'>
                                            <div
                                                className='card-body'
                                                style={{
                                                    backgroundColor: '#E97C5B',
                                                    border: '#E97C5B',
                                                }}
                                            >
                                                <div className='d-flex justify-content-between align-items-center mb-4'>
                                                    <h5 className='mb-0'>
                                                        Detalles de Tarjeta
                                                    </h5>
                                                </div>

                                                <p className='small mb-2'>
                                                    Tipo de Tarjetas
                                                </p>
                                                <a
                                                    href='#!'
                                                    type='submit'
                                                    className='text-white'
                                                >
                                                    <i className='fab fa-cc-mastercard fa-2x me-2'></i>
                                                </a>
                                                <a
                                                    href='#!'
                                                    type='submit'
                                                    className='text-white'
                                                >
                                                    <i className='fab fa-cc-visa fa-2x me-2'></i>
                                                </a>
                                                <a
                                                    href='#!'
                                                    type='submit'
                                                    className='text-white'
                                                >
                                                    <i className='fab fa-cc-amex fa-2x me-2'></i>
                                                </a>
                                                <a
                                                    href='#!'
                                                    type='submit'
                                                    className='text-white'
                                                >
                                                    <i className='fab fa-cc-paypal fa-2x'></i>
                                                </a>

                                                <form className='mt-4'>
                                                    <div className='form-outline form-white mb-4'>
                                                        <input
                                                            type='text'
                                                            id='typeName'
                                                            className='form-control form-control-lg'
                                                            size={17}
                                                            placeholder='Nombre Completo'
                                                        />
                                                        <label
                                                            className='form-label'
                                                            htmlFor='typeName'
                                                        >
                                                            Propietario de
                                                            tarjeta
                                                        </label>
                                                    </div>

                                                    <div className='form-outline form-white mb-4'>
                                                        <input
                                                            type='text'
                                                            id='typeText'
                                                            className='form-control form-control-lg'
                                                            size={17}
                                                            placeholder='xxxx xxxx xxxx xxxx'
                                                            minLength={19}
                                                            maxLength={19}
                                                        />
                                                        <label
                                                            className='form-label'
                                                            htmlFor='typeText'
                                                        >
                                                            Numero de Tarjeta
                                                        </label>
                                                    </div>

                                                    <div className='row mb-4'>
                                                        <div className='col-md-6'>
                                                            <div className='form-outline form-white'>
                                                                <input
                                                                    type='text'
                                                                    id='typeExp'
                                                                    className='form-control form-control-lg'
                                                                    placeholder='MM/YYYY'
                                                                    size={7}
                                                                    // id='exp'
                                                                    minLength={
                                                                        7
                                                                    }
                                                                    maxLength={
                                                                        7
                                                                    }
                                                                />
                                                                <label
                                                                    className='form-label'
                                                                    htmlFor='typeExp'
                                                                >
                                                                    Expira
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='form-outline form-white'>
                                                                <input
                                                                    type='password'
                                                                    id='typeText'
                                                                    className='form-control form-control-lg'
                                                                    placeholder='&#9679;&#9679;&#9679;'
                                                                    size={1}
                                                                    minLength={
                                                                        3
                                                                    }
                                                                    maxLength={
                                                                        3
                                                                    }
                                                                />
                                                                <label
                                                                    className='form-label'
                                                                    htmlFor='typeText'
                                                                >
                                                                    Cvv
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>

                                                <hr className='my-4' />

                                                <div className='d-flex justify-content-between'>
                                                    <p className='mb-2'>
                                                        Subtotal
                                                    </p>
                                                    <p className='mb-2'>
                                                        $0.00
                                                    </p>
                                                </div>

                                                <div className='d-flex justify-content-between'>
                                                    <p className='mb-2'>
                                                        Envío
                                                    </p>
                                                    <p className='mb-2'>
                                                        $00.00
                                                    </p>
                                                </div>

                                                <div className='d-flex justify-content-between mb-4'>
                                                    <p className='mb-2'>
                                                        Total(Incl. impuestos)
                                                    </p>
                                                    <p className='mb-2'>
                                                        $0.00
                                                    </p>
                                                </div>

                                                <button
                                                    type='button'
                                                    className='btn btn-info btn-block btn-lg'
                                                    style={{
                                                        backgroundColor:
                                                            '#6BD699',
                                                    }}
                                                    data-bs-toggle='modal'
                                                    data-bs-target='#myModal'
                                                >
                                                    <div className='d-flex justify-content-between'>
                                                        <span>$0.00</span>
                                                        <span>
                                                            Validar{' '}
                                                            <i className='fas fa-long-arrow-alt-right ms-2'></i>
                                                        </span>
                                                    </div>
                                                </button>
                                                <div
                                                    className='modal fade'
                                                    id='myModal'
                                                    tabIndex={-1}
                                                    role='dialog'
                                                    aria-labelledby='exampleModalLabel'
                                                    aria-hidden='true'
                                                >
                                                    <div
                                                        className='modal-dialog modal-dialog-centered'
                                                        role='document'
                                                    >
                                                        <div className='modal-content'>
                                                            <div className='modal-header'>
                                                                <h5
                                                                    className='modal-title'
                                                                    id='exampleModalLabel'
                                                                >
                                                                    Se ha
                                                                    enviado un
                                                                    codigo de
                                                                    confirmacion
                                                                    a su correo
                                                                </h5>
                                                                <button
                                                                    type='button'
                                                                    className='btn-close'
                                                                    data-bs-dismiss='modal'
                                                                    aria-label='Close'
                                                                ></button>
                                                            </div>
                                                            <div className='modal-body'>
                                                                <input
                                                                    type='text'
                                                                    id='codigoInput'
                                                                    className='form-control'
                                                                    placeholder='Ingrese el código'
                                                                />
                                                            </div>
                                                            <div className='modal-footer'>
                                                                <button
                                                                    type='button'
                                                                    className='btn btn-primary'
                                                                    data-bs-dismiss='modal'
                                                                >
                                                                    OK
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
