import { UseAuth } from '../../hooks/UseAuth';
import { NavBarItem } from './NavBarItem';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const { status, startLogout, user } = UseAuth();
    return (
        <ul className='nav'>
            {(status === 'authenticated' || status === 'not-authenticated') &&
            user.CI_ID_ROL !== 1 ? (
                <>
                    {/* Cliente o usuario no logueado */}
                    <NavBarItem url='/' title='Inicio'></NavBarItem>
                    <NavBarItem url='/compra' title='Compra'></NavBarItem>
                    <NavBarItem url='/alquiler' title='Alquiler'></NavBarItem>
                    <NavBarItem
                        url='/confeccion'
                        title='Confección'
                    ></NavBarItem>
                    <NavBarItem
                        url='/contacto'
                        title='Contáctenos'
                    ></NavBarItem>
                    <NavBarItem url='/carrito' title='Carrito'></NavBarItem>
                </>
            ) : (
                // ADMIN
                <>
                    <NavBarItem url='/ventas' title='Ventas'></NavBarItem>
                    <NavBarItem url='/pedidos' title='Pedidos'></NavBarItem>
                    <NavBarItem url='/producto' title='Productos'></NavBarItem>
                    <NavBarItem url='/usuario' title='Usuarios'></NavBarItem>
                    <NavBarItem url='/tela' title='Telas'></NavBarItem>
                </>
            )}

            <li>
                {' '}
                <Link
                    onClick={
                        status === 'authenticated' ? startLogout : () => {}
                    }
                    to={status === 'not-authenticated' ? '/auth/login' : ''}
                >
                    <i className='fas fa-sign-in-alt'></i>
                    {status === 'not-authenticated'
                        ? 'Iniciar sesión'
                        : 'Salir'}
                </Link>
            </li>
        </ul>
    );
};
