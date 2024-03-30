export const UserWaistcoat = () => {
    return (
        <div className='col-md-2 border med-pantalon text-center'>
            <div className='titulo-cont-medidas'>
                <h2>Chaleco</h2>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Pecho</span>
                <input type='text' className='form-control' placeholder='90' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cintura</span>
                <input type='text' className='form-control' placeholder='90' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cadera</span>
                <input type='text' className='form-control' placeholder='90' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L. Total</span>
                <input type='text' className='form-control' placeholder='60' />
            </div>
            <div className='mb-3'>
                <label htmlFor='' className='form-label input-group-text'>
                    Detalles:
                </label>
                <textarea
                    typeof='text'
                    className='form-control'
                    id='pwd'
                    placeholder='Atras de tela y con fajita'
                    name='detalle'
                ></textarea>
            </div>
            <div className='botones'>
                <button className='btn btn-warning' type='button' name='Editar'>
                    Editar
                </button>
                <button
                    className='btn btn-success'
                    type='button'
                    name='Guardar'
                >
                    Guardar
                </button>
            </div>
        </div>
    );
};
