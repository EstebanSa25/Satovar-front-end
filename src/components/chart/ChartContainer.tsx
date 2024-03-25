import { EchartsPie, EchartsPieRose } from '..';
import { ChartType } from '../../interfaces';
import { EchartsGeneric } from './ChartSales';

export const ChartContainer = () => {
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
                            data: [5, 20, 36, 10, 10, 20],
                        }}
                    />
                </div>
                <div className='col'>
                    <EchartsGeneric
                        title='Ventas por anio'
                        xAxis={['2020', '2021', '2022', '2023', '2024']}
                        series={{
                            name: 'Ventas',
                            type: ChartType.bar,
                            data: [5, 20, 36, 10, 10],
                        }}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <EchartsPie
                        title='Productos que mas se venden'
                        data={[
                            { value: 335, name: 'Producto 1' },
                            { value: 310, name: 'Producto 2' },
                            { value: 234, name: 'Producto 3' },
                            { value: 135, name: 'Producto 4' },
                            { value: 1548, name: 'Producto 5' },
                        ]}
                    ></EchartsPie>
                </div>
                <div className='col'>
                    <EchartsPieRose
                        title='Productos que mas se venden'
                        data={[
                            { value: 400, name: 'Producto 1' },
                            { value: 500, name: 'Producto 2' },
                            { value: 600, name: 'Producto 3' },
                            { value: 700, name: 'Producto 4' },
                            { value: 800, name: 'Producto 5' },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};
