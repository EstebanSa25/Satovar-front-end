import React from 'react';
import { Link } from 'react-router-dom';

export const LargeCard = () => {
    return (
        <>
            <div className='col-lg-4 col-md-6'>
                <div className='item'>
                    <a href='property-details.html'>
                        <img src='src/assets/images/sebas3.jpg' alt='' />
                    </a>
                    <span className='category'>Luxury clothes</span>
                    <h6>$90.00</h6>
                    <h4>
                        <a href='property-details.html'>Esmoquin (Smoking) </a>
                    </h4>
                    <ul>
                        <li>
                            Tallas Disponibles: <span>34 a 48</span>
                        </li>
                        <li>
                            Estilos: <span>Retro, Futurista, Temático</span>
                        </li>
                        <li>
                            Disponibilidad: <span>Verificar en tienda</span>
                        </li>
                        <li>
                            Duración del Alquiler: <span>Fin de semana</span>
                        </li>
                        <li>
                            Accesorios Incluidos: <span>Guantes y corbata</span>
                        </li>
                    </ul>
                    <div className='icon-button'>
                        <Link to='/confeccion'>
                            <i className='fa fa-save'></i> Guardar Medidas
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
