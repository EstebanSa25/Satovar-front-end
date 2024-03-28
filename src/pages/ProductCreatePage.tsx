import { useEffect } from 'react';
import { UseProductCrud } from '../hooks';
import { RegisterUpdateProduct } from '../components';

export const ProductCreatePage = () => {
    const { startGetProductsAll, products, startSetActiveProduct } =
        UseProductCrud();
    useEffect(() => {
        startGetProductsAll();
    }, []);

    return (
        <>
            <div className='container'>
                <div className='title-box'>
                    <h1>Gestión de Productos</h1>
                </div>
                <button
                    data-mdb-toggle='modal'
                    data-mdb-target='#staticBackdrop2'
                    className='btn btn-primary btn-nueva'
                >
                    <b>+</b> Añadir producto
                </button>

                <table className='table table-bordered grocery-crud-table table-hover'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Tela</th>
                            <th>Catalogo</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.CI_ID_PRODUCTO}>
                                <td>{product.CV_NOMBRE}</td>
                                <td>{product.CD_PRECIO}</td>
                                <td>{product.T_TELA.CV_NOMBRE} </td>
                                <td>{product.T_CATALOGO.CV_DESCRIPCION} </td>
                                <td>{product.T_CATEGORIA.CV_DESCRIPCION} </td>
                                <td>
                                    <button
                                        type='button'
                                        className='btn btn-dark'
                                        data-toggle='modal'
                                        data-target='#register-update-product'
                                        onClick={() =>
                                            startSetActiveProduct(product)
                                        }
                                    >
                                        Editar
                                    </button>
                                    <button className='btn btn-secondary  m-1'>
                                        Borrar
                                    </button>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <RegisterUpdateProduct />
        </>
    );
};
