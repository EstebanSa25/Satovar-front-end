import { UseAuth } from '../../hooks/UseAuth';
import { NavBarItem } from './NavBarItem';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const { status, startLogout } = UseAuth();
    return (
        <ul className='nav'>
            <NavBarItem url='/' title='Inicio'></NavBarItem>
            <NavBarItem url='/compra' title='Compra'></NavBarItem>
            <NavBarItem url='/alquiler' title='Alquiler'></NavBarItem>
            <NavBarItem url='/confeccion' title='Confeccion'></NavBarItem>
            <NavBarItem url='/contacto' title='Contactenos'></NavBarItem>
            <NavBarItem url='/carrito' title='Carrito'></NavBarItem>
            <li>
                {' '}
                <Link
                    onClick={
                        status === 'authenticated' ? startLogout : () => {}
                    }
                    to={status === 'not-authenticated' ? '/auth/login' : ''}
                >
                    <i className='fas fa-sign-in-alt'></i>
                    {status === 'not-authenticated' ? 'Login' : 'Salir'}
                </Link>
            </li>
        </ul>
    );
};
