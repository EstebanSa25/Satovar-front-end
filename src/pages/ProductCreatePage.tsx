export const ProductCreatePage = () => {
    return (
        <div className='container container-ingreso'>
            <div className='row justify-content-center'>
                <div className='col-12 col-md-8 col-lg-6'>
                    <div className='form-ingreso'>
                        <form action=''>
                            <div className='mb-3 mt-3'>
                                <label htmlFor='email' className='form-label'>
                                    Nombre:
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='email'
                                    placeholder='Nombre'
                                    name='email'
                                />
                            </div>
                            <div className='mb-3 mt-3'>
                                <label htmlFor='email' className='form-label'>
                                    Foto
                                </label>
                                <input
                                    type='file'
                                    className='form-control'
                                    id='email'
                                    placeholder='Arrastre o busque una foto'
                                    name='email'
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='pwd' className='form-label'>
                                    Categoría:
                                </label>
                                <select>
                                    <option>traje</option>
                                    <option>Pantalon</option>
                                    <option>Camisa</option>
                                    <option>Chaleco</option>
                                    <option>Saco</option>
                                </select>
                            </div>
                            <div className='mb-3 mt-3'>
                                <label htmlFor='email' className='form-label'>
                                    Estilo:
                                </label>
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion1'
                                    />{' '}
                                    Business
                                </label>
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion2'
                                    />{' '}
                                    Gala
                                </label>
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion3'
                                    />{' '}
                                    Casual
                                </label>
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion3'
                                    />{' '}
                                    Formal
                                </label>
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion4'
                                    />{' '}
                                    Futurista
                                </label>
                                <br />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='pwd' className='form-label'>
                                    Tela:
                                </label>
                                <select>
                                    <option>Lana España</option>
                                    <option>Lana Peru</option>
                                    <option>Casimir Mexicano</option>
                                    <option>Oxford Miami</option>
                                    <option>Lana Colombia</option>
                                </select>
                            </div>
                            <div className='mb-3 mt-3'>
                                <label htmlFor='email' className='form-label'>
                                    Tallas Disponibles:
                                </label>
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion1'
                                    />{' '}
                                    XS
                                </label>
                                <input
                                    type='text'
                                    style={{ marginLeft: '20px' }}
                                    className='cantidad-talla'
                                    placeholder=''
                                    name='pswd'
                                />
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion2'
                                    />{' '}
                                    S{' '}
                                </label>
                                <input
                                    type='text'
                                    style={{ marginLeft: '30px' }}
                                    className='cantidad-talla'
                                    placeholder=''
                                    name='pswd'
                                />
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion3'
                                    />{' '}
                                    M{' '}
                                </label>
                                <input
                                    type='text'
                                    style={{ marginLeft: '27px' }}
                                    className='cantidad-talla'
                                    placeholder=''
                                    name='pswd'
                                />
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion3'
                                    />{' '}
                                    L{' '}
                                </label>
                                <input
                                    type='text'
                                    style={{ marginLeft: '32px' }}
                                    className='cantidad-talla'
                                    placeholder=''
                                    name='pswd'
                                />
                                <br />
                                <label>
                                    <input
                                        type='checkbox'
                                        name='opciones'
                                        value='opcion4'
                                    />{' '}
                                    XL
                                </label>
                                <input
                                    type='text'
                                    style={{ marginLeft: '21px' }}
                                    className='cantidad-talla'
                                    placeholder=''
                                    name='pswd'
                                />
                                <br />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='pwd' className='form-label'>
                                    Precio:
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='pwd'
                                    placeholder='350'
                                    name='pswd'
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='pwd' className='form-label'>
                                    Catálogo:
                                </label>
                                <select>
                                    <option>Alquiler</option>
                                    <option>Venta</option>
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
                                Guardar Producto
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
