import { FilterItem } from './FilterItem';

export const Filter = () => {
    return (
        <ul className='properties-filter'>
            <FilterItem
                Title='Mostrar todo'
                OnAction={() => console.log('prueba')}
            />
            <FilterItem Title='Saco' OnAction={() => console.log('prueba')} />
            <FilterItem
                Title='Pantalon'
                OnAction={() => console.log('prueba')}
            />
            <FilterItem Title='Camisa' OnAction={() => console.log('prueba')} />
            <FilterItem Title='Traje' OnAction={() => console.log('prueba')} />
            <FilterItem
                Title='Chaleco'
                OnAction={() => console.log('prueba')}
            />
        </ul>
    );
};
