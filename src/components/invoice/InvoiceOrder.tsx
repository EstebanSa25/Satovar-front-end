import './invoices.scss';
export const InvoiceOrder = () => {
    return (
        <>
            <div className='container-fluid'>
                <div id='bill-display'>
                    <table className='table table-bordered'>
                        <caption className='text-center'>
                            RETAIL INVOICE{' '}
                            <small className='pull-right'>(original)</small>
                        </caption>
                        <tr>
                            <td colSpan={3} rowSpan={3}>
                                <div className='box-title'>
                                    ROKADNATH TRADERS
                                </div>
                                <div className='box-content'>
                                    GF-2. Shiv Prasad Complex,
                                    <br />
                                    Mangal Bazar,
                                    <br />
                                    Vadodara-390006.
                                    <br />
                                    Ph: 0265-2561202
                                    <br />
                                    M: 9601683578 / 9879962148
                                </div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>Invoice No</div>
                                <div className='box-content'>452</div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>Dated</div>
                                <div className='box-content'>10-08-2016</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className='box-title'>Delivery Note</div>
                                <div className='box-content'>967</div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>Mode of Payment</div>
                                <div className='box-content'></div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div className='box-title'>
                                    Dispatch Document
                                </div>
                                <div className='box-content'></div>
                            </td>
                            <td colSpan={2}>
                                <div className='box-title'>Dated</div>
                                <div className='box-content'>10-08-2016</div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} rowSpan={3}>
                                <div className='box-title'>Buyer</div>
                                <div className='box-content'>
                                    <b>Maulik Darji</b>
                                    <br />
                                    Vadodara.
                                    <br />
                                    M: 9898979796
                                </div>
                            </td>
                            <td colSpan={4}>
                                <div className='box-title'>
                                    Terms of Delivery
                                </div>
                                <div className='box-content'></div>
                            </td>
                        </tr>
                        <tr></tr>
                        <tr></tr>
                        <tr className='heading-row v-row'>
                            <td>
                                Sr
                                <br />
                                No.
                            </td>
                            <td>Description of goods</td>
                            <td>HSN Code</td>
                            <td>Quantity</td>
                            <td>Rate</td>
                            <td>per</td>
                            <td>Amount</td>
                        </tr>
                        <tr className='v-row'>
                            <td>1</td>
                            <td>Metal Screw Ph Combination</td>
                            <td></td>
                            <td className='text-right'>237.00 Kgs</td>
                            <td className='text-right'>110.00</td>
                            <td>Kg</td>
                            <td className='text-right'>26070.00</td>
                        </tr>
                        <tr className='v-row'>
                            <td>1</td>
                            <td>Metal Screw Ph Combination</td>
                            <td></td>
                            <td className='text-right'>237.00 Kgs</td>
                            <td className='text-right'>110.00</td>
                            <td>Kg</td>
                            <td className='text-right'>26070.00</td>
                        </tr>
                        <tr className='v-row'>
                            <td>1</td>
                            <td>Metal Screw Ph Combination</td>
                            <td></td>
                            <td className='text-right'>237.00 Kgs</td>
                            <td className='text-right'>110.00</td>
                            <td>Kg</td>
                            <td className='text-right'>26070.00</td>
                        </tr>
                        <tr className='total-row v-row'>
                            <td colSpan={3} className='text-right'>
                                Total
                            </td>
                            <td className='text-right'>711.00 Kgs</td>
                            <td></td>
                            <td></td>
                            <td className='text-right'>78210.00</td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <div className='box-content'>
                                    Amount Chargeable(in words)
                                </div>
                                <div className='box-title'>
                                    Seventy Eight Thousands Two Hundred Ten Rs
                                    Only
                                </div>
                            </td>
                            <td colSpan={4}></td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                Company's VAT TIN:{' '}
                                <span id='comp-vat-tin'></span>
                                <br />
                                Company's CST No: <span id='comp-cst-no'></span>
                                <br />
                                BANK DETAILS: A/C NO: <br />
                                IFSCODE: <br />
                                Declaration:
                                <br />
                                We declare that this invoice shows the actual
                                price of the goods described and that all
                                particulars are true and correct.
                            </td>
                            <td colSpan={4}>
                                <div className='box-title text-right'>
                                    for ROKADNATH TRADERS
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={7} className='text-center'>
                                SUBJECT TO VADODARA JURIDICTION
                                <br />
                                This is a Computer Generated Invoice.
                            </td>
                        </tr>
                    </table>
                </div>
                <button
                    className='btn btn-default .print-btn'
                    onClick={() => window.print()}
                >
                    Print Invoice
                </button>
            </div>
        </>
    );
};
