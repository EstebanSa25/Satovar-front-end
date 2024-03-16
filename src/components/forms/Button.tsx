import { FormPropertiesButton, InputColorButton } from '../../interfaces';

export const Button = ({
    type = InputColorButton.orange,
    title,
    onClick,
    style,
}: FormPropertiesButton) => {
    return (
        <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                onClick(e);
            }}
            className={style ? style : 'btn btn-primary btn-block mb-4'}
            style={
                type === 'orange'
                    ? { background: '#F35525', border: '#F35525' }
                    : { background: '#6c757d', border: '#6c757d' }
            }
        >
            {title}
        </button>
    );
};
