import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ChartPropPie } from '../../interfaces';

export const EchartsPieRose = ({ data, title }: ChartPropPie) => {
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
            legend: {
                top: 'bottom',
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
                    startAngle: 180,
                    endAngle: 360,
                    name: 'Nightingale Chart',
                    type: 'pie',
                    // radius: [50, 250],
                    // center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8,
                    },
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
