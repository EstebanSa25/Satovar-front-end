import { CounterProps } from '../../interfaces';

export const Counter = ({ Counter, Text1, Text2 }: CounterProps) => {
    return (
        <div className='col-lg-4'>
            <div className='counter'>
                <h2
                    className='timer count-title count-number'
                    data-to={`+${Counter}`}
                    data-speed='1000'
                ></h2>
                <p className='count-text '>
                    {Text1}
                    <br />
                    {Text2}
                </p>
            </div>
        </div>
    );
};
