import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { UseProfileUser } from '../../hooks';

export const UserInfo = () => {
    const { id } = useParams();

    const {
        startGetProfileUserInfo,
        userInfo,
        startGetProfileUserOrder,
        userOrders,
    } = UseProfileUser();
    useEffect(() => {
        startGetProfileUserInfo(id);
        startGetProfileUserOrder(id);
    }, []);
    if (userInfo.userWithoutCLAVE === null) return <Navigate to='/pedidos' />;
    return (
        <div className='datos-usuario'>
            <div className='container-usuario text-center border'>
                <h1>DATOS USUARIO</h1>
            </div>
            <div className=' container'>
                <div className='text-center'>
                    <div className='container'>
                        <h5>Nombre</h5>
                        <p>{userInfo.userWithoutCLAVE?.CV_NOMBRE}</p>
                        <h5>Cédula</h5>
                        <p>{userInfo.userWithoutCLAVE?.CV_CEDULA}</p>
                        <h5>Correo eletrónico</h5>
                        <p>{userInfo.userWithoutCLAVE?.CV_CORREO}</p>
                        <h5>Dirección</h5>
                        <p>{userInfo.userWithoutCLAVE?.CV_DIRECCION}</p>
                        <h5>Teléfono</h5>
                        <p>{userInfo.userWithoutCLAVE?.CV_TELEFONO}</p>
                        <h5>N. Pedido</h5>
                        {userOrders?.map((order) => (
                            <p key={order.CI_ID_PEDIDO}>
                                <Link to='perfil.html'>
                                    -{order.CI_ID_PEDIDO}
                                </Link>{' '}
                                /{' '}
                                {new Date(
                                    order.T_COMPRA.CF_FECHA_PAGO
                                ).toLocaleDateString('es-Es', {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}{' '}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
