export enum InputType {
    text = 'text',
    password = 'password',
    email = 'email',
    number = 'number',
    date = 'date',
    file = 'file',
    checkbox = 'checkbox',
    radio = 'radio',
    submit = 'submit',
    reset = 'reset',
    button = 'button',
}
export enum InputColorButton {
    primary = 'primary',
    secondary = 'secondary',
    grey = 'grey',
    danger = 'danger',
    orange = 'orange',
}
export interface FormProperties {
    type: InputType;
    id: string;
    htmlFor: string;
    label: string;
}
export interface FormPropertiesButton {
    type: InputColorButton;
    title: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
}

export interface FormProps {
    input: FormProperties[];
    button: FormPropertiesButton;
    children?: React.ReactNode;
    title?: string;
}

export interface RegisterForm {
    Nombre: string;
    Apellido1: string;
    Apellido2: string;
    Cedula: string;
    Correo: string;
    Direccion: string;
    Telefono: string;
    Clave: string;
}
