import { useEffect } from 'react';
import { UseUsersCrud } from '../hooks';
import { Rol } from '../interfaces';
import { RegisterUser, UpdateUser } from '../components';
export const UserCrudPage = () => {
    const {
        Users,
        startGetAllUsers,
        startResetActiveUser,
        startDeleteUser,
        startSetActiveUser,
    } = UseUsersCrud();
    useEffect(() => {
        startGetAllUsers();
    }, []);

    return (
        <>
            <div className='container'>
                <div className='title-box'>
                    <h1>Gestión de usuarios</h1>
                </div>
                <button
                    onClick={() => startResetActiveUser()}
                    type='button'
                    className='btn btn-dark'
                    data-toggle='modal'
                    data-target='#register-user'
                >
                    <b>+</b> Añadir Usuario
                </button>

                <table className='table table-bordered grocery-crud-table table-hover'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Primer Apellido</th>
                            <th>Segundo Apellido</th>
                            <th>Cedula</th>
                            <th>Correo</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Rol</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Users?.map((user) => (
                            <tr key={user.CI_ID_USUARIO}>
                                <td>{user.CV_NOMBRE}</td>
                                <td>{user.CV_APELLIDO1}</td>
                                <td>{user.CV_APELLIDO2}</td>
                                <td>{user.CV_CEDULA}</td>
                                <td>{user.CV_CORREO} </td>
                                <td>{user.CV_DIRECCION} </td>
                                <td>{user.CV_TELEFONO} </td>
                                <td>
                                    {user.CI_ID_ROL === Rol.Administrador
                                        ? 'Administrador'
                                        : 'Cliente'}{' '}
                                </td>
                                <td
                                    className={
                                        user.CB_ESTADO === true
                                            ? 'text-success'
                                            : 'text-danger'
                                    }
                                >
                                    {user.CB_ESTADO === true
                                        ? 'Activo'
                                        : 'Inactivo'}{' '}
                                </td>
                                <td>
                                    <button
                                        type='button'
                                        className='btn btn-dark'
                                        data-toggle='modal'
                                        data-target='#update-user'
                                        onClick={() => {
                                            startResetActiveUser();
                                            startSetActiveUser(user);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() =>
                                            startDeleteUser(user?.CI_ID_USUARIO)
                                        }
                                        className='btn btn-secondary  m-1'
                                    >
                                        {user?.CB_ESTADO === false
                                            ? 'Activar'
                                            : 'Desactivar'}
                                    </button>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <RegisterUser />
            <UpdateUser />
        </>
    );
};
