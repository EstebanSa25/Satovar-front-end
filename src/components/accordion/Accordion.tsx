import { AccordionItem } from '..';
import { AccordionProps } from '../../interfaces';

export const Accordion = ({ items }: AccordionProps) => {
    return (
        <div
            id='collapsTopShirt'
            className='accordion-collapse collapse'
            aria-labelledby='headingTopShirt'
            data-bs-parent='#accordion'
        >
            <div className='accordion-body'>
                <form>
                    {items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            Title={item.Title}
                            ForTitle={item.ForTitle}
                            Name={item.Name}
                        />
                    ))}
                </form>
            </div>
        </div>
    );
};
