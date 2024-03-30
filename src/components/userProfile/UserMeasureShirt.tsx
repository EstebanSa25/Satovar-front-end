export const UserMeasureShirt = () => {
    return (
        <div className='col-md-2 border med-camisa'>
            <div className='titulo-cont-medidas text-center'>
                <h2>camisa</h2>
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Pecho</span>
                <input type='text' className='form-control' placeholder='96' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cintura</span>
                <input type='text' className='form-control' placeholder='85' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cadera</span>
                <input type='text' className='form-control' placeholder='96' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Espalda</span>
                <input type='text' className='form-control' placeholder='43' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Hombro</span>
                <input type='text' className='form-control' placeholder='16' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Cuello</span>
                <input type='text' className='form-control' placeholder='24' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L.Manga</span>
                <input type='text' className='form-control' placeholder='65' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>L.Total</span>
                <input type='text' className='form-control' placeholder='75' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Brazo</span>
                <input type='text' className='form-control' placeholder='26' />
            </div>
            <div className='input-group'>
                <span className='input-group-text'>Puño</span>
                <input type='text' className='form-control' placeholder='17' />
            </div>
            <div className='mb-3'>
                <label htmlFor='' className='form-label input-group-text'>
                    Detalles:
                </label>
                <textarea
                    typeof='string'
                    className='form-control'
                    id='pwd'
                    placeholder='Tradicional'
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
