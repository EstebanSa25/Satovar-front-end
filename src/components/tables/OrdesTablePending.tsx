import { useEffect } from 'react';
import { UseForm, UseOrders } from '../../hooks';
import { OrderApiInterface } from '../../interfaces';
import { Link } from 'react-router-dom';

export const OrdesTablePending = () => {
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
        console.log(value);
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
        <div className='container mt-2 border tabla-proceso'>
            <div className='text-center'>
                <h2>Pedidos en Progreso</h2>
                <hr />
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>N.Pedido</th>
                        <th>Cédula</th>
                        <th>Télefono</th>
                        <th>Fecha Entrega</th>
                        <th>Estado </th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map(
                        (order: OrderApiInterface) =>
                            order.CI_ID_ESTADO === 3 && (
                                <tr key={order.CI_ID_PEDIDO}>
                                    <td>
                                        <Link
                                            to={`/pedido/${order.CI_ID_PEDIDO}`}
                                        >
                                            {order.CI_ID_PEDIDO}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/perfil/${order.T_COMPRA.T_USUARIO.CV_CEDULA}`}
                                            className='enlace-perfil'
                                        >
                                            {order.T_COMPRA.T_USUARIO.CV_CEDULA}
                                        </Link>
                                    </td>
                                    <td>
                                        {order.T_COMPRA.T_USUARIO.CV_TELEFONO}
                                    </td>
                                    <td>
                                        {order.T_COMPRA.T_DETALLE_COMPRA.at(0)
                                            ?.CF_FECHA_ENTREGA.split('T')
                                            .at(0)}
                                    </td>
                                    <td>
                                        <select
                                            onChange={(e) =>
                                                onInputChange(
                                                    e,
                                                    order.CI_ID_PEDIDO
                                                )
                                            }
                                            name={`Estado-${order.CI_ID_PEDIDO}`}
                                            id={`Estado-${order.CI_ID_PEDIDO}`}
                                            // onChange={handleChange}
                                            value={
                                                formState[
                                                    `Estado-${order.CI_ID_PEDIDO}`
                                                ]
                                            }
                                        >
                                            <option value={1}>Pendiente</option>
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
    );
};
