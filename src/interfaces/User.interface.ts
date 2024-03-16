export enum Rol {
    Administrador = 1,
    Cliente = 2,
}

export interface UserEntity {
    Id?: number;
    Nombre?: string;
    Correo?: string;
    Rol?: Rol;
    Apellido1?: string;
    Apellido2?: string;
    Cedula?: string;
    Telefono?: string;
    Estado?: boolean;
}
