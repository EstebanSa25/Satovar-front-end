import { CardSalesProps } from '../../interfaces';

export const SalesHeaderItem = ({ Title, valor, icon }: CardSalesProps) => {
    return (
        <div className='box box-color1' style={{ backgroundImage: 'url()' }}>
            <div className='cover'>
                <h3 className='name'>{Title}</h3>
                <p className='title'>
                    {Title.includes('Ingresos') ? '₡' : ''} {valor}
                </p>
                <div className='social'>
                    <a href='#'>
                        <i className={icon[0]}></i>
                    </a>
                    <a href='#'></a>
                    <a href='#'>
                        <i className={icon[1]}></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
