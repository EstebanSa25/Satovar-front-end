import { useEffect } from 'react';
import { EchartsPie, EchartsPieRose } from '..';
import { UseDashboard } from '../../hooks';
import { ChartType } from '../../interfaces';
import { EchartsGeneric } from './ChartSales';

export const ChartContainer = () => {
    const {
        salesYear,
        startGetSalesYear,
        salesMonth,
        startGetSalesMonth,
        productMostSale,
        startGetProductMostSale,
        startGetFabricMostSale,
        fabricMostSale,
    } = UseDashboard();
    // const ref = useRef(null);
    useEffect(() => {
        startGetSalesMonth();
        startGetSalesYear();
        startGetProductMostSale();
        startGetFabricMostSale();
    }, []);
    return (
        <div className='container-graficas'>
            <div className='row'>
                <div className='col'>
                    <EchartsGeneric
                        title='Ventas por mes'
                        xAxis={[
                            'Enero',
                            'Ferebro',
                            'Marzo',
                            'Abril',
                            'Mayo',
                            'Junio',
                            'Julio',
                            'Agosto',
                            'Septiembre',
                            'Octubre',
                            'Noviembre',
                            'Diciembre',
                        ]}
                        series={{
                            name: 'Ventas',
                            type: ChartType.line,
                            data: [
                                parseFloat(salesMonth?.ENERO),
                                parseFloat(salesMonth?.FEBRERO),
                                parseFloat(salesMonth?.MARZO),
                                parseFloat(salesMonth?.ABRIL),
                                parseFloat(salesMonth?.MAYO),
                                parseFloat(salesMonth?.JUNIO),
                                parseFloat(salesMonth?.JULIO),
                                parseFloat(salesMonth?.AGOSTO),
                                parseFloat(salesMonth?.SEPTIEMBRE),
                                parseFloat(salesMonth?.OCTUBRE),
                                parseFloat(salesMonth?.NOVIEMBRE),
                                parseFloat(salesMonth?.DICIEMBRE),
                            ],
                        }}
                    />
                </div>

                <div className='col'>
                    <EchartsGeneric
                        title='Ventas por año'
                        xAxis={[...salesYear.map((sale) => sale.ANIO)]}
                        series={{
                            name: 'Ventas',
                            type: ChartType.bar,
                            data: [
                                ...salesYear.map((sale) =>
                                    parseFloat(sale.VALOR)
                                ),
                            ],
                        }}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <EchartsPie
                        title='Productos que mas se venden'
                        data={[...productMostSale]}
                    ></EchartsPie>
                </div>
                <div className='col'>
                    <EchartsPieRose
                        title='Telas que mas se utilizan'
                        data={[...fabricMostSale]}
                    />
                </div>
            </div>
        </div>
    );
};
