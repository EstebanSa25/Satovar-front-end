import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ChartProp } from '../../interfaces';

export const EchartsGeneric = ({ title, series, xAxis }: ChartProp) => {
    const chartRef = useRef(null);
    // console.log(xAxis);
    useEffect(() => {
        // Create the echarts instance
        const myChart = echarts.init(chartRef.current);

        // Draw the chart
        myChart.setOption({
            title: {
                left: 'center',
                text: title,
            },

            color: ['#ee626b'],
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    saveAsImage: { show: true },
                },
            },
            tooltip: {},
            xAxis: {
                data: [...xAxis],
            },
            yAxis: {},
            series: [series],
        });
        // window.location.reload();
        // Clean up the chart when component unmounts
        return () => {
            myChart.dispose();
        };
    }, [series]); // Empty dependency array to run effect only once

    return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};
