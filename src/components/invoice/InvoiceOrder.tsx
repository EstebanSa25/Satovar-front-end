import { Link } from 'react-router-dom';
import './invoices.scss';
export const InvoiceOrder = () => {
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
                                    Nombre del cliente
                                    <br />
                                    Direccion
                                    <br />
                                    Correo
                                    <br />
                                    Telefono
                                    <br />
                                    Cedula
                                </div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>Factura #</div>
                                <div className='box-content'>452</div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>Fecha de compra</div>
                                <div className='box-content'>10-08-2016</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <div className='box-title'>Total</div>
                                <div className='box-content'>
                                    Subtotal: 3000
                                    <br></br>
                                    Impuesto: 300
                                    <br></br>
                                    Total: 3300
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className='box-title'>Estado</div>
                                <div className='box-content'>Entregado</div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>
                                    Fecha de entrega
                                </div>
                                <div className='box-content'>10-08-2016</div>
                            </td>
                        </tr>

                        <tr className='heading-row v-row'>
                            <td>Producto</td>
                            <td>Medida</td>
                            <td>Cantidad</td>
                            <td>Precio unitario</td>
                            <td>Monto</td>
                        </tr>
                        <tr className='v-row'>
                            <td className='text-center'>
                                Metal Screw Ph Combination
                            </td>
                            <td className='text-center'>M</td>
                            <td className='text-center'>23</td>
                            <td className='text-center'>110.00</td>
                            <td className='text-center'>26070.00</td>
                        </tr>
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
