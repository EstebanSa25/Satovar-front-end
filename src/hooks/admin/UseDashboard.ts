import { useState } from 'react';
import satovarApi from '../../api/SatovarApi';
import {
    CurrentOrders,
    FabricMostUsed,
    ProductSales,
    SalesMonth,
    SalesTotal,
    SalesYear,
    SuccessOrders,
} from '../../interfaces';

export const UseDashboard = () => {
    const [salesYear, setSalesYear] = useState([{}] as SalesYear[]);
    const [salesMonth, setSalesMonth] = useState({} as SalesMonth);
    const [productMostSale, setProductMostSale] = useState(
        [] as ProductSalesChart[]
    );
    const [fabricMostSale, setFabricMostSale] = useState(
        [] as ProductSalesChart[]
    );
    const [salesTotal, setSalesTotal] = useState({} as SalesTotal);

    const [ordersPending, setOrdersPending] = useState({} as CurrentOrders);

    const [ordersCompleted, setOrdersCompleted] = useState({} as SuccessOrders);

    interface ProductSalesChart {
        value: number;
        name: string;
    }
    const startGetSalesYear = async () => {
        try {
            const { data } = await satovarApi.get<SalesYear[]>(
                '/dashboard/year-sale'
            );
            setSalesYear(data);
            return data;
        } catch (error) {
            console.log(error);
        }
    };
    const startGetSalesMonth = async () => {
        try {
            const { data } = await satovarApi.get<SalesMonth[]>(
                '/dashboard/month-sale'
            );
            setSalesMonth(data[0]);
        } catch (error) {
            console.log(error);
        }
    };

    const startGetProductMostSale = async () => {
        try {
            const { data } = await satovarApi.get<ProductSales[]>(
                '/dashboard/product-top'
            );
            const dataParse = data.map((item) => {
                return {
                    value: item.TotalCantidad,
                    name: item.Producto,
                };
            }) as ProductSalesChart[];
            setProductMostSale(dataParse);
        } catch (error) {
            console.log(error);
        }
    };

    const startGetFabricMostSale = async () => {
        try {
            const { data } = await satovarApi.get<FabricMostUsed[]>(
                '/dashboard/fabric-top'
            );
            const dataParse = data.map((item) => {
                return {
                    value: item.CANTIDAD,
                    name: item.CV_NOMBRE,
                };
            }) as ProductSalesChart[];
            setFabricMostSale(dataParse);
        } catch (error) {
            console.log(error);
        }
    };
    const startGetSales = async () => {
        try {
            const { data } = await satovarApi.get<SalesTotal>(
                '/dashboard/incomes'
            );
            setSalesTotal(data);
        } catch (error) {
            console.log(error);
        }
    };
    const startGetOrdersPending = async () => {
        try {
            const { data } = await satovarApi.get<CurrentOrders>(
                '/dashboard/current-orders'
            );
            setOrdersPending(data);
        } catch (error) {
            console.log(error);
        }
    };
    const startGetOrdersCompleted = async () => {
        try {
            const { data } = await satovarApi.get<SuccessOrders>(
                '/dashboard/complete-orders'
            );
            console.log(data);
            setOrdersCompleted(data);
        } catch (error) {
            console.log(error);
        }
    };

    return {
        //Variables
        salesYear,
        salesMonth,
        productMostSale,
        fabricMostSale,
        salesTotal,
        ordersPending,
        ordersCompleted,
        //Metodos
        startGetSalesYear,
        startGetSalesMonth,
        startGetProductMostSale,
        startGetFabricMostSale,
        setSalesTotal,
        startGetSales,
        startGetOrdersPending,
        startGetOrdersCompleted,
    };
};
