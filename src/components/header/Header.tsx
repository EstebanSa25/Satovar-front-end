import { Link } from 'react-router-dom';
import { NavBar } from '..';

export const Header = () => {
    return (
        <header className='header-area header-sticky'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <nav className='main-nav'>
                            <Link to='/' className='logo'>
                                <h1>SATOVAR</h1>
                            </Link>
                            <NavBar />
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
