/* eslint-disable @typescript-eslint/no-explicit-any */

export const ChartType = {
    bar: 'bar',
    line: 'line',
    pie: 'pie',
    scatter: 'scatter',
};
export interface Series {
    name: string;
    type: string;
    data: any[];
}
export interface ChartPropPieData {
    value: number;
    name: string;
}
export interface ChartPropPie {
    data: ChartPropPieData[];
    title: string;
}
export interface ChartProp {
    title: string;
    series: Series;
    xAxis: any[];
    yAxis?: string;
}
