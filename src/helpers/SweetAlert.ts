import Swal from 'sweetalert2';

export const CampoVacioSweetAlert = (text: string = '') => {
    return Swal.fire({
        title: 'Campos vacios',
        text: `Tienes que completar los campos para continuar ${text}`,
        icon: 'warning',
    });
};
export const ErrorSweetAlert = (
    errorCode: number,
    title: string,
    text: string
) => {
    return Swal.fire({
        title: errorCode === 500 ? `Error en el sistema` : title,
        text: errorCode === 500 ? `Vuelva a intentarlo mas tarde` : text,
        icon: 'error',
    });
};
