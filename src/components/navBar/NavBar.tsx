import { NavBarItem } from './NavBarItem';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <ul className='nav'>
            <NavBarItem url='/' title='Home'></NavBarItem>
            <NavBarItem url='/compra' title='Compra'></NavBarItem>
            <NavBarItem url='/alquiler' title='Alquiler'></NavBarItem>
            <NavBarItem url='/confeccion' title='Confeccion'></NavBarItem>
            <NavBarItem url='/contactenos' title='Contactenos'></NavBarItem>
            <NavBarItem url='/carrito' title='Carrito'></NavBarItem>
            <li>
                {' '}
                <Link to='/login'>
                    <i className='fas fa-sign-in-alt'></i>
                    Login
                </Link>
            </li>
        </ul>
    );
};
