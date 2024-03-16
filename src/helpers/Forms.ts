import { FormProperties, FormPropertiesButton, InputType } from '../interfaces';

export const inputLogin = [
    {
        type: InputType.email,
        id: 'email',
        label: 'Direccion de correo',
        style: '',
    },
    {
        type: InputType.password,
        id: 'password',
        label: 'Contraseña',
    },
] as FormProperties[];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('click');
};
export const buttonLogin = {
    type: 'orange',
    title: 'Ingresar',
    onClick: onClick,
} as FormPropertiesButton;
