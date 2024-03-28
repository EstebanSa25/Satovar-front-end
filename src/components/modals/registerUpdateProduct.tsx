/* eslint-disable @typescript-eslint/no-explicit-any */
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
        startCreateProduct,
    } = UseProductCrud();
    useEffect(() => {
        startGetInfoProduct();
    }, []);
    const { formState, onInputChange, onResetForm } = UseForm();
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
                            data-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8 col-lg-6'>
                            <div className='form-ingreso'>
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    action=''
                                >
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='email'
                                            className='form-label'
                                        >
                                            Nombre:
                                        </label>
                                        <input
                                            onChange={onInputChange}
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
                                            onChange={onInputChange}
                                            type='file'
                                            accept='image/*'
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
                                            onChange={onInputChange}
                                            value={
                                                activeProduct?.T_CATEGORIA
                                                    ?.CI_ID_CATEGORIA !==
                                                undefined
                                                    ? activeProduct?.T_CATEGORIA
                                                          ?.CI_ID_CATEGORIA
                                                    : formState.Categoría
                                            }
                                            name='Categoria'
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
                                                        onChange={onInputChange}
                                                        checked={
                                                            formState[
                                                                `style-${est.CV_DESCRIPCION}`
                                                            ] === ''
                                                                ? false
                                                                : activeProduct.T_ESTILO_X_PRODUCTO?.find(
                                                                      (e) =>
                                                                          e
                                                                              .T_ESTILO
                                                                              .CI_ID_ESTILO ===
                                                                          est.CI_ID_ESTILO
                                                                  ) !==
                                                                  undefined
                                                        }
                                                        // onChange={onInputChange}
                                                        type='checkbox'
                                                        name={`style-${est.CV_DESCRIPCION}`}
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
                                            onChange={onInputChange}
                                            name='Tela'
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
                                                        {talla.CV_TALLA}
                                                    </label>
                                                    <input
                                                        onChange={onInputChange}
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
                                                        className='cantidad-talla p-2'
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
                                            onChange={onInputChange}
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
                                        <select
                                            name='Catalogo'
                                            onChange={onInputChange}
                                        >
                                            <option value={2}>Alquiler</option>
                                            <option value={1}>Venta</option>
                                        </select>
                                    </div>
                                    {activeProduct.CI_ID_PRODUCTO !==
                                        undefined && (
                                        <div className='mb-3'>
                                            <label
                                                htmlFor='pwd'
                                                className='form-label'
                                            >
                                                Estado:
                                            </label>
                                            <select
                                                value={
                                                    activeProduct.CB_ESTADO ===
                                                    true
                                                        ? 1
                                                        : 0
                                                }
                                                name='Estado'
                                                onChange={onInputChange}
                                            >
                                                <option value={1}>
                                                    Activo
                                                </option>
                                                <option value={0}>
                                                    Inactivo
                                                </option>
                                            </select>
                                        </div>
                                    )}
                                    <button
                                        onClick={
                                            activeProduct.CI_ID_PRODUCTO !==
                                            undefined
                                                ? () => console.log('object')
                                                : () => {
                                                      startCreateProduct(
                                                          formState
                                                      );
                                                      onResetForm();
                                                  }
                                        }
                                        type='submit'
                                        className='btn btn-primary'
                                        style={{
                                            backgroundColor: '#F35525',
                                            border: '#F35525',
                                        }}
                                    >
                                        {activeProduct.CI_ID_PRODUCTO !==
                                        undefined
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
