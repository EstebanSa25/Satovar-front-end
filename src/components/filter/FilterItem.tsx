import { FilterItemProps } from '../../interfaces';

export const FilterItem = ({ Title, OnAction }: FilterItemProps) => {
    return (
        <li>
            <button onClick={() => OnAction()}>{Title}</button>
        </li>
    );
};
