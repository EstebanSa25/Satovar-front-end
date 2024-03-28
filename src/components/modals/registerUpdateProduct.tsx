import { useEffect } from 'react';
import { UseForm, UseProductCrud } from '../../hooks';

export const RegisterUpdateProduct = () => {
    const {
        startGetInfoProduct,
        size = [],
        category = [],
        style = [],
        fabric = [],
        edit,
        activeProduct,
    } = UseProductCrud();
    useEffect(() => {
        startGetInfoProduct();
    }, []);
    const { formState, onInputChange } = UseForm();
    return (
        <div
            className='modal fade'
            id='register-update-product'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='exampleModalCenterTitle'
            aria-hidden='true'
        >
            <div className='modal-dialog d-flex justify-content-center p-1'>
                <div className='modal-content w-100'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel2'>
                            Sign up
                        </h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-mdb-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8 col-lg-6'>
                            <div className='form-ingreso'>
                                <form action=''>
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='email'
                                            className='form-label'
                                        >
                                            Nombre:
                                        </label>
                                        <input
                                            value={
                                                activeProduct.CV_NOMBRE ||
                                                formState.Nombre ||
                                                ''
                                            }
                                            // onChange={onInputChange}
                                            type='text'
                                            className='form-control'
                                            id='Nombre'
                                            placeholder='Nombre'
                                            name='Nombre'
                                        />
                                    </div>
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='email'
                                            className='form-label'
                                        >
                                            Foto
                                        </label>
                                        <input
                                            // onChange={onInputChange}
                                            type='file'
                                            className='form-control'
                                            id='Foto'
                                            placeholder='Arrastre o busque una foto'
                                            name='Foto'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='pwd'
                                            className='form-label'
                                        >
                                            Categoría:
                                        </label>
                                        <select
                                            value={
                                                activeProduct?.T_CATEGORIA
                                                    ?.CI_ID_CATEGORIA !==
                                                undefined
                                                    ? activeProduct?.T_CATEGORIA
                                                          ?.CI_ID_CATEGORIA
                                                    : formState.Categoría
                                            }
                                            name='Categoría'
                                        >
                                            {category.map((cat) => (
                                                <option
                                                    value={cat.CI_ID_CATEGORIA}
                                                    key={cat.CI_ID_CATEGORIA}
                                                >
                                                    {cat.CV_DESCRIPCION}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='email'
                                            className='form-label'
                                        >
                                            Estilo:
                                        </label>
                                        <br />
                                        {style.map((est) => (
                                            <>
                                                <label key={est.CI_ID_ESTILO}>
                                                    <input
                                                        checked={
                                                            activeProduct?.T_ESTILO_X_PRODUCTO?.find(
                                                                (s) =>
                                                                    s.T_ESTILO
                                                                        .CI_ID_ESTILO ===
                                                                    est.CI_ID_ESTILO
                                                            ) !== undefined
                                                        }
                                                        // onChange={onInputChange}
                                                        type='checkbox'
                                                        name={
                                                            est.CV_DESCRIPCION
                                                        }
                                                        value={est.CI_ID_ESTILO}
                                                    />{' '}
                                                    {est.CV_DESCRIPCION}
                                                </label>
                                                <br />
                                            </>
                                        ))}
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='pwd'
                                            className='form-label'
                                        >
                                            Tela:
                                        </label>
                                        <select
                                            name='Tela'
                                            value={
                                                activeProduct?.T_TELA
                                                    ?.CI_ID_TELA !== undefined
                                                    ? activeProduct?.T_TELA
                                                          ?.CI_ID_TELA
                                                    : formState.Tela
                                            }
                                        >
                                            {fabric.map((fab) => (
                                                <option
                                                    value={fab.CI_ID_TELA}
                                                    key={fab.CI_ID_TELA}
                                                >
                                                    {fab.CV_NOMBRE}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='email'
                                            className='form-label'
                                        >
                                            Tallas Disponibles:
                                        </label>
                                        <br />
                                        {size.map((talla) => (
                                            <>
                                                <div key={talla.CI_ID_TALLA}>
                                                    <label>
                                                        <input
                                                            checked={
                                                                activeProduct?.T_PRODUCTO_X_TALLA !==
                                                                    undefined &&
                                                                activeProduct?.T_PRODUCTO_X_TALLA.find(
                                                                    (t) =>
                                                                        t
                                                                            .T_TALLA
                                                                            .CI_ID_TALLA ===
                                                                        talla.CI_ID_TALLA
                                                                ) !== undefined
                                                            }
                                                            type='checkbox'
                                                            name={
                                                                talla.CV_TALLA
                                                            }
                                                            value={
                                                                talla.CI_ID_TALLA
                                                            }
                                                        />{' '}
                                                        {talla.CV_TALLA}
                                                    </label>
                                                    <input
                                                        value={
                                                            activeProduct?.T_PRODUCTO_X_TALLA?.find(
                                                                (t) =>
                                                                    t.T_TALLA
                                                                        .CI_ID_TALLA ===
                                                                    talla.CI_ID_TALLA
                                                            )?.CI_CANTIDAD ||
                                                            formState[
                                                                `Cantidad ${talla.CV_TALLA}`
                                                            ] ||
                                                            ''
                                                        }
                                                        type='text'
                                                        style={{
                                                            marginLeft: '20px',
                                                        }}
                                                        className='cantidad-talla'
                                                        placeholder=''
                                                        name={`Cantidad ${talla.CV_TALLA}`}
                                                    />
                                                    <br />
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='pwd'
                                            className='form-label'
                                        >
                                            Precio:
                                        </label>
                                        <input
                                            value={
                                                activeProduct.CD_PRECIO ||
                                                formState.Precio ||
                                                ''
                                            }
                                            type='text'
                                            className='form-control'
                                            id='Precio'
                                            placeholder='350'
                                            name='Precio'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='pwd'
                                            className='form-label'
                                        >
                                            Catálogo:
                                        </label>
                                        <select>
                                            <option value={2}>Alquiler</option>
                                            <option value={1}>Venta</option>
                                        </select>
                                    </div>
                                    <button
                                        type='submit'
                                        className='btn btn-primary'
                                        style={{
                                            backgroundColor: '#F35525',
                                            border: '#F35525',
                                        }}
                                    >
                                        {edit
                                            ? 'Actualizar Producto'
                                            : 'Guardar Producto'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
