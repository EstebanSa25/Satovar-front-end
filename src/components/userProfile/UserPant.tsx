export const UserPant = () => {
    return (
        <div className='col-md-2 border med-chaleco'>
            <div className='titulo-cont-medidas text-center'>
                <h2>Pantalón</h2>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cintura</span>
                <input type='text' className='form-control' placeholder='83' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cadera</span>
                <input type='text' className='form-control' placeholder='95' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Tiro</span>
                <input type='text' className='form-control' placeholder='17' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Rodilla</span>
                <input type='text' className='form-control' placeholder='42' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Ruedo</span>
                <input type='text' className='form-control' placeholder='34' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Largo</span>
                <input type='text' className='form-control' placeholder='96' />
            </div>
            <div className='mb-3'>
                <label htmlFor='' className='form-label input-group-text'>
                    Detalles:
                </label>
                <textarea
                    typeof='text'
                    className='form-control'
                    id='pwd'
                    placeholder='Estilo Tradicional'
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
