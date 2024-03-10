import { AccordionItemProps } from '../../interfaces';

export const AccordionItem = ({
    Title,
    ForTitle,
    Name,
}: AccordionItemProps) => {
    return (
        <div className='mb-3'>
            <label htmlFor={ForTitle} className='form-label'>
                {Title}:
            </label>
            <input
                type='number'
                className='form-control'
                id={Name}
                name={Name}
                required
            />
        </div>
    );
};
