import { NavBarItem } from './NavBarItem';
import { Link } from 'react-router-dom';

export const NavBar = () => {
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
                <Link to='/auth/login'>
                    <i className='fas fa-sign-in-alt'></i>
                    Login
                </Link>
            </li>
        </ul>
    );
};
