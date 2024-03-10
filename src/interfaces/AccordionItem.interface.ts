export interface AccordionItemProps {
    Title: string;
    ForTitle: string;
    Name: string;
}
interface AccordionData {
    Title: string;
    ForTitle: string;
    Name: string;
}
export interface AccordionProps {
    items: AccordionData[];
}
