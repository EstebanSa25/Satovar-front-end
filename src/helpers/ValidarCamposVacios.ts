// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validarCamposVacios = (objeto: any) => {
    for (const key in objeto) {
        // eslint-disable-next-line no-prototype-builtins
        if (objeto.hasOwnProperty(key)) {
            if (!objeto[key]) {
                return true; // Se encontró al menos un campo vacío
            }
        }
    }
    return false; // No se encontraron campos vacíos
};
