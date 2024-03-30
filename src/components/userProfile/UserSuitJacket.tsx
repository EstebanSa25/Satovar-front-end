export const UserSuitJacket = () => {
    return (
        <div className='col-md-2 border med-saco'>
            <div className='titulo-cont-medidas text-center'>
                <h2>Saco</h2>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>pecho</span>
                <input type='text' className='form-control' placeholder='100' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cintura</span>
                <input type='text' className='form-control' placeholder='90' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cadera</span>
                <input type='text' className='form-control' placeholder='100' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Espalda</span>
                <input type='text' className='form-control' placeholder='45' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Hombro</span>
                <input type='text' className='form-control' placeholder='16' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L.Manga</span>
                <input type='text' className='form-control' placeholder='64' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L. Total</span>
                <input type='text' className='form-control' placeholder='70' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Brazo</span>
                <input type='text' className='form-control' placeholder='28' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Puño</span>
                <input type='text' className='form-control' placeholder='20' />
            </div>
            <div className='mb-3'>
                <label htmlFor='' className='form-label input-group-text'>
                    Detalles:
                </label>
                <textarea
                    typeof='text'
                    className='form-control'
                    id='pwd'
                    placeholder='Saco con dos aberturas'
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
