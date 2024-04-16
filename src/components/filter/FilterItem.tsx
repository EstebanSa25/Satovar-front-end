import { Link } from 'react-router-dom';
import { FilterItemProps } from '../../interfaces';
import { UseProduct } from '../../hooks';

export const FilterItem = ({ Title }: FilterItemProps) => {
    const { CategoryActive, startCategoryActive } = UseProduct();
    return (
        <li>
            <Link
                to='#!'
                data-filter={'.sac'}
                onClick={() => startCategoryActive(Title)}
                className={CategoryActive === Title ? `is_active` : ``}
            >
                {Title}
            </Link>
        </li>
    );
};
