import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ChartPropPie } from '../../interfaces';

export const EchartsPie = ({ data, title }: ChartPropPie) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Create the echarts instance
        const myChart = echarts.init(chartRef.current);

        // Draw the chart
        myChart.setOption({
            title: {
                left: 'center',
                text: title,
            },
            tooltip: {
                trigger: 'item',
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    saveAsImage: { show: true },
                },
            },
            series: [
                {
                    type: 'pie',
                    data: data,
                },
            ],
        });

        // Clean up the chart when component unmounts
        return () => {
            myChart.dispose();
        };
    }, [data]); // Empty dependency array to run effect only once

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};
