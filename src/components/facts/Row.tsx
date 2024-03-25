import { Counter } from './Counter';

export const Row = () => {
    return (
        <div className='row'>
            <Counter Counter={5000} Text1='Clientes' Text2='satisfechos' />
            <Counter Counter={20} Text1='Años' Text2='de experiencia' />
            <Counter Counter={10} Text1='Menciones' Text2='en revistas' />
        </div>
    );
};
