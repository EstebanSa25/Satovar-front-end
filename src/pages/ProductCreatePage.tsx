import { useEffect } from 'react';
import { UseProductCrud } from '../hooks';
import { RegisterProduct, UpdateProduct } from '../components';
export const ProductCreatePage = () => {
    const {
        startGetProductsAll,
        products,
        startSetActiveProduct,
        startResetProductActive,
        startDeleteProduct,
        startActiveProduct,
    } = UseProductCrud();

    useEffect(() => {
        startGetProductsAll();
    }, []);

    return (
        <>
            <div className='container'>
                <div className='title-box'>
                    <h1>Gestión de productos</h1>
                </div>
                <button
                    onClick={() => startResetProductActive()}
                    type='button'
                    className='btn btn-dark'
                    data-toggle='modal'
                    data-target='#register-product'
                >
                    <b>+</b> Añadir producto
                </button>

                <table className='table table-bordered grocery-crud-table table-hover'>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Tela</th>
                            <th>Catalogo</th>
                            <th>Categoria</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product) => (
                            <tr key={product.CI_ID_PRODUCTO}>
                                <td>
                                    <img
                                        width={100}
                                        height={100}
                                        src={product?.CV_FOTO}
                                        alt={product?.CV_NOMBRE}
                                    />
                                </td>
                                <td>{product?.CV_NOMBRE}</td>
                                <td>{product?.CD_PRECIO}</td>
                                <td>{product?.T_TELA?.CV_NOMBRE} </td>
                                <td>{product?.T_CATALOGO.CV_DESCRIPCION} </td>
                                <td>{product?.T_CATEGORIA.CV_DESCRIPCION} </td>
                                <td
                                    className={
                                        product?.CB_ESTADO === true
                                            ? 'text-success'
                                            : 'text-danger'
                                    }
                                >
                                    {product.CB_ESTADO === true
                                        ? 'Activo'
                                        : 'Inactivo'}{' '}
                                </td>
                                <td>
                                    <button
                                        type='button'
                                        className='btn btn-dark'
                                        data-toggle='modal'
                                        data-target='#update-product'
                                        onClick={() => {
                                            startResetProductActive();
                                            startSetActiveProduct(product);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={
                                            product?.CB_ESTADO === true
                                                ? () =>
                                                      startDeleteProduct(
                                                          product?.CI_ID_PRODUCTO
                                                      )
                                                : () =>
                                                      startActiveProduct(
                                                          product?.CI_ID_PRODUCTO
                                                      )
                                        }
                                        className='btn btn-secondary  m-1'
                                    >
                                        {product.CB_ESTADO === false
                                            ? 'Activar'
                                            : 'Desactivar'}
                                    </button>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <RegisterProduct />
            <UpdateProduct />
        </>
    );
};
