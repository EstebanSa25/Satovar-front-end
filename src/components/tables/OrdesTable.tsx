import { useEffect } from 'react';
import { UseForm, UseOrders } from '../../hooks';
import { OrderApiInterface } from '../../interfaces';
import { Link } from 'react-router-dom';
import { ClassDateTable } from '../../helpers';

export const OrdesTable = () => {
    const { orders, startGetAllOrders, startUpdateStatusOrder } = UseOrders();
    const { formState, setFormState } = UseForm();
    const onInputChange = (
        { target }: React.ChangeEvent<HTMLSelectElement>,
        id: number
    ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
        startUpdateStatusOrder(id, +value);
    };
    useEffect(() => {
        startGetAllOrders();
    }, []);
    useEffect(() => {
        setFormState((prevState) => {
            const newState = { ...prevState };
            orders.forEach((order: OrderApiInterface) => {
                newState[`Estado-${order.CI_ID_PEDIDO}`] =
                    order.CI_ID_ESTADO.toString();
            });
            return newState;
        });
    }, [orders]);

    return (
        <div className='pedidos '>
            <div className='container mt-3'>
                <h2>Lista de pedidos</h2>
                <hr />
            </div>
            <div className=' mt-3 scrollable-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>N° Pedido</th>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Teléfono</th>
                            <th>Lugar</th>
                            <th>Total</th>
                            <th>Fecha de entrega</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map(
                            (order: OrderApiInterface) =>
                                order.CI_ID_ESTADO === 1 && (
                                    <tr
                                        key={order?.CI_ID_PEDIDO}
                                        className={ClassDateTable(
                                            order.T_COMPRA?.T_DETALLE_COMPRA[0]
                                                ?.CF_FECHA_ENTREGA
                                        )}
                                    >
                                        <td>
                                            <Link
                                                to={`/pedido/${order?.CI_ID_PEDIDO}`}
                                            >
                                                {order?.CI_ID_PEDIDO}
                                            </Link>
                                        </td>
                                        <td>
                                            <Link
                                                to={`/perfil/${order?.T_COMPRA?.T_USUARIO.CV_CEDULA}`}
                                                className='enlace-perfil'
                                            >
                                                {
                                                    order?.T_COMPRA?.T_USUARIO
                                                        .CV_CEDULA
                                                }
                                            </Link>
                                        </td>
                                        <td>
                                            {
                                                order?.T_COMPRA?.T_USUARIO
                                                    ?.CV_NOMBRE
                                            }
                                        </td>
                                        <td>
                                            {
                                                order?.T_COMPRA?.T_USUARIO
                                                    .CV_APELLIDO1
                                            }
                                        </td>
                                        <td>
                                            {
                                                order?.T_COMPRA?.T_USUARIO
                                                    .CV_TELEFONO
                                            }
                                        </td>
                                        <td>
                                            {
                                                order?.T_COMPRA?.T_USUARIO
                                                    .CV_DIRECCION
                                            }
                                        </td>
                                        <td>₡ {order?.T_COMPRA?.CD_TOTAL}</td>
                                        <td>
                                            {order?.T_COMPRA?.T_DETALLE_COMPRA[0]?.CF_FECHA_ENTREGA.split(
                                                'T'
                                            )[0] || 'No hay fecha'}
                                        </td>
                                        <td>
                                            <select
                                                onChange={(e) =>
                                                    onInputChange(
                                                        e,
                                                        order.CI_ID_PEDIDO
                                                    )
                                                }
                                                name={`Estado-${order?.CI_ID_PEDIDO}`}
                                                id={`Estado-${order?.CI_ID_PEDIDO}`}
                                                // onChange={handleChange}
                                                value={
                                                    formState[
                                                        `Estado-${order?.CI_ID_PEDIDO}`
                                                    ]
                                                }
                                            >
                                                <option value={1}>
                                                    Pendiente
                                                </option>
                                                <option value={2}>
                                                    Completado
                                                </option>
                                                <option value={3}>
                                                    En proceso
                                                </option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
