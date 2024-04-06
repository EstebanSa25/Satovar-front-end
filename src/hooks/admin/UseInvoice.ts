import { useState } from 'react';
import satovarApi from '../../api/SatovarApi';
import { RootOrder } from '../../interfaces';
import { useNavigate } from 'react-router-dom';

export const UseInvoice = () => {
    const [order, setOrder] = useState({} as RootOrder);
    const navigate = useNavigate();
    const startgetInvoice = async (id: string | undefined) => {
        try {
            const { data } = await satovarApi.get<RootOrder>(
                `/buy/products/order/${parseInt(id || '0')}`
            );
            if (data.T_COMPRA.T_DETALLE_COMPRA.length === 0) {
                navigate(-1);
            }
            setOrder(data);
        } catch (error) {
            navigate(-1);
            console.log(error);
        }
    };
    return { order, startgetInvoice };
};
