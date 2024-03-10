import { NavLink } from 'react-router-dom';
import { NavBarItemProperties } from '../../interfaces';
export const NavBarItem = ({ url, title }: NavBarItemProperties) => {
    return (
        <li>
            <NavLink
                className={({ isActive }) => `${isActive ? 'active' : ''}`}
                to={url}
            >
                {title}
            </NavLink>
        </li>
    );
};
