import { Link, useParams } from 'react-router-dom';
import './invoices.scss';
import { useEffect } from 'react';
import { UseInvoice } from '../../hooks';
export const InvoiceOrder = () => {
    const { id } = useParams();
    const { order, startgetInvoice } = UseInvoice();
    useEffect(() => {
        startgetInvoice(id);
    }, [id]);

    return (
        <>
            <div className='container-fluid'>
                <div id='bill-display'>
                    <table className='table table-bordered'>
                        <caption className='text-center'>
                            Factura{' '}
                            <small className='pull-right'>(original)</small>
                        </caption>
                        <tr>
                            <td colSpan={3} rowSpan={3}>
                                <div className='box-title'>
                                    Datos del cliente
                                </div>
                                <div className='box-content'>
                                    Nombre:{' '}
                                    {order?.T_COMPRA?.T_USUARIO?.CV_NOMBRE}
                                    <br />
                                    Direccion:{' '}
                                    {order?.T_COMPRA?.T_USUARIO?.CV_DIRECCION}
                                    <br />
                                    Correo:{' '}
                                    {order?.T_COMPRA?.T_USUARIO?.CV_CORREO}
                                    <br />
                                    Telefono +506{'  '}
                                    {order?.T_COMPRA?.T_USUARIO?.CV_TELEFONO}
                                    <br />
                                    <Link
                                        to={`/perfil/${order?.T_COMPRA?.T_USUARIO?.CV_CEDULA}`}
                                    >
                                        {'Cedula : '}
                                        {order?.T_COMPRA?.T_USUARIO?.CV_CEDULA}
                                    </Link>
                                </div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>Factura #</div>
                                <div className='box-content'>
                                    {order?.CI_ID_PEDIDO}
                                </div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>Fecha de compra</div>
                                <div className='box-content'>
                                    {order?.T_COMPRA?.CF_FECHA_PAGO.split(
                                        'T'
                                    ).at(0)}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <div className='box-title'>Total</div>
                                <div className='box-content'>
                                    Subtotal: {order?.T_COMPRA?.CD_SUBTOTAL}
                                    <br></br>
                                    Impuesto: {order?.T_COMPRA?.CD_IMPUESTOS}
                                    <br></br>
                                    Total: {order?.T_COMPRA?.CD_TOTAL}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className='box-title'>Estado</div>
                                <div className='box-content'>
                                    {order?.T_ESTADO?.CV_DESCRIPCION}
                                </div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>
                                    Fecha de entrega
                                </div>
                                <div className='box-content'>
                                    {order.T_COMPRA?.T_DETALLE_COMPRA?.at(0)
                                        ?.CF_FECHA_ENTREGA.split('T')
                                        .at(0)}
                                </div>
                            </td>
                        </tr>

                        <tr className='heading-row v-row'>
                            <td>Producto</td>
                            <td>Medida</td>
                            <td>Cantidad</td>
                            <td>Precio unitario</td>
                            <td>Monto</td>
                        </tr>
                        {order?.T_COMPRA?.T_DETALLE_COMPRA?.map((item) => (
                            <tr
                                key={item.T_PRODUCTO.CV_NOMBRE}
                                className='v-row'
                            >
                                <td className='text-center'>
                                    {item?.T_PRODUCTO?.CV_NOMBRE}
                                </td>
                                <td className='text-center'>
                                    {
                                        item?.T_PRODUCTO_X_TALLA?.T_TALLA
                                            ?.CV_TALLA
                                    }
                                </td>
                                <td className='text-center'>
                                    {item?.CI_CANTIDAD}
                                </td>
                                <td className='text-center'>
                                    {item?.T_PRODUCTO?.CD_PRECIO}
                                </td>
                                <td className='text-center'>
                                    {+item.T_PRODUCTO.CD_PRECIO *
                                        item?.CI_CANTIDAD}
                                </td>
                            </tr>
                        ))}

                        <br></br>
                        <tr>
                            <td colSpan={7} className='text-center'>
                                SATOVAR
                                <br />
                                Esta es una factura generada por computadora.
                            </td>
                        </tr>
                    </table>
                </div>
                <div className='icon-button  '>
                    <Link onClick={() => window.print()} to={''}>
                        <i className={'fa fa fa-print'}> </i>
                        Imprimir
                    </Link>
                </div>
            </div>
        </>
    );
};
