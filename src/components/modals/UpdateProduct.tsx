/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { UseForm, UseProductCrud } from '../../hooks';

export const UpdateProduct = () => {
    const {
        startGetInfoProduct,
        size = [],
        category = [],
        style = [],
        fabric = [],
        activeProduct,
        startGetEditProduct,
        startResetProductActive,
    } = UseProductCrud();
    useEffect(() => {
        startGetInfoProduct();
    }, [activeProduct]);
    const refFile = useRef<HTMLInputElement>(null);
    const { onInputChange, onResetForm, formState, setFormState } = UseForm();
    useEffect(() => {
        onResetForm();
        setFormState({
            ...formState,
            Nombre: activeProduct?.CV_NOMBRE || '',
            FotoProductoUpdate: '',
            Categoria: activeProduct?.T_CATEGORIA?.CI_ID_CATEGORIA.toString(),
            Tela: `${activeProduct?.T_TELA?.CI_ID_TELA}`,
            Precio: activeProduct?.CD_PRECIO,
            Catalogo: `${activeProduct?.T_CATALOGO?.CI_ID_CATALOGO}`,
            ...activeProduct.T_PRODUCTO_X_TALLA?.reduce((acc, talla) => {
                acc[`Cantidad ${talla.T_TALLA.CV_TALLA}`] =
                    talla.CI_CANTIDAD.toString();
                return acc;
            }, {} as { [key: string]: string }),
            ...activeProduct.T_ESTILO_X_PRODUCTO?.reduce((acc, estilo) => {
                acc[`style-${estilo.T_ESTILO.CV_DESCRIPCION}`] =
                    estilo.T_ESTILO.CI_ID_ESTILO.toString();
                return acc;
            }, {} as { [key: string]: string }),
        });
        document
            .querySelectorAll<HTMLInputElement>('input[type=checkbox]')
            .forEach((check) => {
                activeProduct.T_ESTILO_X_PRODUCTO?.forEach((estilo) => {
                    if (
                        check.value === estilo.T_ESTILO.CI_ID_ESTILO.toString()
                    ) {
                        check.checked = true;
                    } else {
                        check.checked = false;
                    }
                });
            });
    }, [activeProduct]);

    const inputRef = useRef(null);
    return (
        <div
            className='modal fade w-100 m-0'
            id='update-product'
            tabIndex={-1}
            role='dialog'
            aria-labelledby='exampleModalCenterTitle'
            aria-hidden='true'
        >
            <div className='modal-dialog d-flex justify-content-center '>
                <div className='modal-content w-100'>
                    <div className='modal-header text-center'>
                        <h5
                            className='modal-title text-center '
                            id='exampleModalLabel2'
                        >
                            Actualizar producto
                        </h5>
                        <button
                            onClick={startResetProductActive}
                            ref={inputRef}
                            type='button'
                            className='btn-close'
                            data-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8 '>
                            <div className='form-ingreso p-3'>
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    action=''
                                >
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='NombreActualizado'
                                            className='form-label'
                                        >
                                            Nombre:
                                        </label>
                                        <input
                                            onChange={onInputChange}
                                            value={formState.Nombre}
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
                                            htmlFor='FotoActualizada'
                                            className='form-label'
                                        >
                                            Foto
                                        </label>
                                        <img
                                            onClick={() => {
                                                refFile.current?.click();
                                            }}
                                            className=''
                                            width={100}
                                            height={100}
                                            src={activeProduct.CV_FOTO}
                                            alt=''
                                        />
                                        <input
                                            ref={refFile}
                                            value={formState.FotoProductoUpdate}
                                            onChange={onInputChange}
                                            type='file'
                                            accept='image/*'
                                            height={'100'}
                                            className='fotoUpdate opacity-1'
                                            id='FotoProductoUpdate'
                                            placeholder='Arrastre o busque una foto'
                                            name='FotoProductoUpdate'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='CategoriaActualizada'
                                            className='form-label'
                                        >
                                            Categoría:
                                        </label>
                                        <select
                                            onChange={onInputChange}
                                            value={formState.Categoria}
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
                                            htmlFor='EstiloActualizado'
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
                                            htmlFor='TelaActualizada'
                                            className='form-label'
                                        >
                                            Tela:
                                        </label>
                                        <select
                                            onChange={onInputChange}
                                            value={formState.Tela}
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
                                            htmlFor='TallasActualizadas'
                                            className='form-label'
                                        >
                                            Tallas Disponibles:
                                        </label>
                                        <br />
                                        {size.map((talla) => (
                                            <>
                                                <div key={talla.CI_ID_TALLA}>
                                                    <label>
                                                        {talla.CI_ID_TALLA === 6
                                                            ? ''
                                                            : talla.CV_TALLA}
                                                    </label>
                                                    <input
                                                        onChange={onInputChange}
                                                        value={
                                                            formState[
                                                                `Cantidad ${talla.CV_TALLA}`
                                                            ]
                                                        }
                                                        type='text'
                                                        style={{
                                                            marginLeft: '20px',
                                                        }}
                                                        className={
                                                            talla.CI_ID_TALLA ===
                                                            6
                                                                ? 'd-none'
                                                                : 'cantidad-talla p-2'
                                                        }
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
                                            htmlFor='PrecioActualizado'
                                            className='form-label'
                                        >
                                            Precio:
                                        </label>
                                        <input
                                            onChange={onInputChange}
                                            value={formState.Precio}
                                            type='text'
                                            className='form-control'
                                            id='Precio'
                                            placeholder='350'
                                            name='Precio'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Catalogo'
                                            className='form-label'
                                        >
                                            Catálogo:
                                        </label>
                                        <select
                                            value={formState.Catalogo}
                                            name='Catalogo'
                                            onChange={onInputChange}
                                        >
                                            <option value={2}>Alquiler</option>
                                            <option value={1}>Venta</option>
                                        </select>
                                    </div>

                                    <button
                                        onClick={() =>
                                            startGetEditProduct(
                                                {
                                                    ...formState,
                                                    inputRef,
                                                },
                                                inputRef
                                            )
                                        }
                                        type='submit'
                                        className='btn btn-primary '
                                        style={{
                                            backgroundColor: '#F35525',
                                            border: '#F35525',
                                        }}
                                    >
                                        Editar Producto
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
