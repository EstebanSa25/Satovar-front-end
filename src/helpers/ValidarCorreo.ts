export const validarFormatoCorreo = (correo: string): boolean => {
    // Expresión regular para validar el formato de un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Prueba si la cadena cumple con el formato de correo electrónico
    return regexCorreo.test(correo);
};
