import { useEffect } from 'react';
import { UseFabricCrud } from '../hooks';
import { RegisterFabric, UpdateFabric } from '../components';
export const FabricPageCrud = () => {
    const {
        Fabrics,
        startGetAllFabric,
        startResetActiveFabric,
        startSetActiveFabric,
        startDeleteFabric,
    } = UseFabricCrud();
    useEffect(() => {
        startGetAllFabric();
    }, []);

    return (
        <>
            <div className='container'>
                <div className='title-box'>
                    <h1>Mantenimiento de telas</h1>
                </div>
                <button
                    onClick={() => startResetActiveFabric()}
                    type='button'
                    className='btn btn-dark'
                    data-toggle='modal'
                    data-target='#register-fabric'
                >
                    <b>+</b> Añadir tela
                </button>

                <table className='table table-bordered grocery-crud-table table-hover'>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Estado</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Fabrics?.map((fabric) => (
                            <tr
                                className='animate__animated animate__fadeIn'
                                key={fabric.CI_ID_TELA}
                            >
                                <td>
                                    <img
                                        width={'60px'}
                                        height={'60px'}
                                        src={fabric?.CV_FOTO}
                                        alt={fabric?.CV_NOMBRE}
                                    />
                                </td>
                                <td>{fabric?.CV_NOMBRE}</td>
                                <td>{fabric?.CD_PRECIO}</td>
                                <td
                                    className={
                                        fabric?.CB_ESTADO === true
                                            ? 'text-success'
                                            : 'text-danger'
                                    }
                                >
                                    {fabric?.CB_ESTADO ? 'Activo' : 'Inactivo'}
                                </td>
                                <td>
                                    <button
                                        type='button'
                                        className='btn btn-dark'
                                        data-toggle='modal'
                                        data-target='#update-fabric'
                                        onClick={() => {
                                            startResetActiveFabric();
                                            startSetActiveFabric(fabric);
                                        }}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() =>
                                            startDeleteFabric(
                                                fabric?.CI_ID_TELA
                                            )
                                        }
                                        className='btn btn-secondary  m-1'
                                    >
                                        {fabric?.CB_ESTADO === false
                                            ? 'Activar'
                                            : 'Desactivar'}
                                    </button>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <RegisterFabric />
            <UpdateFabric />
        </>
    );
};
