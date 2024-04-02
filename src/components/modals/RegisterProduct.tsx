/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { UseForm, UseProductCrud } from '../../hooks';
const initialForm = {
    Catalogo: 1,
    Categoria: 1,
    Foto: '',
    Nombre: '',
    Precio: '',
    Tela: 1,
    StyleInitial: false,
    'Cantidad PROPIA': '999999999',
};

export const RegisterProduct = () => {
    const { formState, onInputChange, onResetForm, setFormState } =
        UseForm(initialForm);
    const {
        startGetInfoProduct,
        size,
        category,
        style,
        fabric,
        startCreateProduct,
        products,
    } = UseProductCrud();

    useEffect(() => {
        onResetForm();
        setFormState({
            ...formState,
            Nombre: '',
            FotoProductoUpdate: '',
            Categoria: `${category?.at(0)?.CI_ID_CATEGORIA}`,
            Tela: `${fabric?.at(0)?.CI_ID_TELA}`,
            Precio: '',
            Catalogo: `${1}`,
            ...size?.reduce((acc, talla) => {
                if (talla?.CI_ID_TALLA === 6) {
                    acc[`Cantidad ${talla?.CV_TALLA}`] = `'99999999'`;
                } else {
                    acc[`Cantidad ${talla?.CV_TALLA}`] = '';
                }
                return acc;
            }, {} as { [key: string]: string }),
        });
        document
            .querySelectorAll<HTMLInputElement>('input[type=checkbox]')
            .forEach((check) => {
                check.checked = false;
            });
    }, [products]);
    const ref = useRef(null);
    const refEstilo = useRef<HTMLInputElement>(null);
    useEffect(() => {
        startGetInfoProduct();
    }, []);
    return (
        <div
            className='modal fade'
            id='register-product'
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
                            Registro de productos
                        </h5>
                        <button
                            ref={ref}
                            type='button'
                            className='btn-close'
                            data-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>

                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8 col-lg-6'>
                            <div className='form-ingreso p-3'>
                                <form
                                    onSubmit={(e) => e.preventDefault()}
                                    action=''
                                >
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='Nombre'
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
                                            htmlFor='Foto'
                                            className='form-label'
                                        >
                                            Foto
                                        </label>
                                        <input
                                            value={formState.Foto}
                                            onChange={onInputChange}
                                            type='file'
                                            accept='image/*'
                                            className='form-control-sm'
                                            id='Foto'
                                            placeholder='Arrastre o busque una foto'
                                            name='Foto'
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Categoria'
                                            className='form-label'
                                        >
                                            Categoría:
                                        </label>
                                        <select
                                            onChange={onInputChange}
                                            value={formState.Categoria}
                                            name='Categoria'
                                            id='Categoria'
                                        >
                                            {category.map((cat) => (
                                                <option
                                                    value={cat?.CI_ID_CATEGORIA}
                                                    key={cat?.CI_ID_CATEGORIA}
                                                >
                                                    {cat?.CV_DESCRIPCION}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-3 mt-3'>
                                        <label
                                            // htmlFor={}
                                            className='form-label'
                                        >
                                            Estilo:
                                        </label>
                                        <br />
                                        {style.map((est) => (
                                            <>
                                                <label key={est?.CI_ID_ESTILO}>
                                                    <input
                                                        ref={refEstilo}
                                                        onChange={onInputChange}
                                                        type='checkbox'
                                                        name={`style-${est?.CV_DESCRIPCION}`}
                                                        id={`style-${est?.CV_DESCRIPCION}`}
                                                        value={
                                                            est?.CI_ID_ESTILO
                                                        }
                                                    />{' '}
                                                    {est?.CV_DESCRIPCION}
                                                </label>
                                                <br />
                                            </>
                                        ))}
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='TelaRegistro'
                                            className='form-label'
                                        >
                                            Tela:
                                        </label>
                                        <select
                                            id='TelaRegistro'
                                            onChange={onInputChange}
                                            name='Tela'
                                        >
                                            {fabric.map((fab) => (
                                                <option
                                                    value={fab?.CI_ID_TELA}
                                                    key={fab?.CI_ID_TELA}
                                                >
                                                    {fab?.CV_NOMBRE}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='mb-3 mt-3'>
                                        <label
                                            htmlFor='TallasRegistro'
                                            className='form-label'
                                        >
                                            Tallas Disponibles:
                                        </label>
                                        <br />
                                        {size.map((talla) => (
                                            <>
                                                <div key={talla?.CI_ID_TALLA}>
                                                    <label>
                                                        {talla.CI_ID_TALLA === 6
                                                            ? ''
                                                            : talla?.CV_TALLA}
                                                    </label>
                                                    <input
                                                        id={`Cantidad ${talla?.CV_TALLA}`}
                                                        onChange={onInputChange}
                                                        value={
                                                            formState[
                                                                `Cantidad ${talla?.CV_TALLA}`
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
                                                        name={`Cantidad ${talla?.CV_TALLA}`}
                                                    />
                                                    <br />
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <div className='mb-3'>
                                        <label
                                            htmlFor='Precio'
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
                                            htmlFor='CatalogoRegistro'
                                            className='form-label'
                                        >
                                            Catálogo:
                                        </label>
                                        <select
                                            value={formState.Catalogo}
                                            name='Catalogo'
                                            id='CatalogoRegistro'
                                            onChange={onInputChange}
                                        >
                                            <option value={2}>Alquiler</option>
                                            <option value={1}>Venta</option>
                                        </select>
                                    </div>

                                    <button
                                        onClick={() => {
                                            startCreateProduct(
                                                formState,
                                                onResetForm,
                                                ref
                                            );
                                        }}
                                        type='submit'
                                        className='btn btn-primary '
                                        style={{
                                            backgroundColor: '#F35525',
                                            border: '#F35525',
                                        }}
                                    >
                                        Guardar Producto
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
