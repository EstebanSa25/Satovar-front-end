/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from 'react-redux';
import { ProductInterfaceCRUD } from '../../interfaces';
import satovarApi from '../../api/SatovarApi';
import {
    onActiveProductCrud,
    onGetProductCrud,
    onUpdateProduct,
    onUpdateProductCrud,
} from '../../redux-store';
import { useState } from 'react';

interface IState {
    ProductCrud: {
        products: ProductInterfaceCRUD[];
        isLoading: boolean;
        activeProduct: ProductInterfaceCRUD;
    };
}
interface sizeRoot {
    sizes: Size[];
}

interface Size {
    CI_ID_TALLA: number;
    CV_TALLA: string;
}
export interface CategoryRoot {
    categories: Category[];
}

export interface Category {
    CI_ID_CATEGORIA: number;
    CV_DESCRIPCION: string;
}

export interface Fabric {
    CI_ID_TELA: number;
    CV_NOMBRE: string;
}
export interface Style {
    CI_ID_ESTILO: number;
    CV_DESCRIPCION: string;
}
export const UseProductCrud = () => {
    const dispatch = useDispatch();
    const { products, isLoading, activeProduct } = useSelector(
        (state: IState) => state.ProductCrud
    );
    const [size, setSizes] = useState([] as Size[]);
    const [category, setCategory] = useState([] as Category[]);
    const [fabric, setFabric] = useState([] as Fabric[]);
    const [style, setStyle] = useState([] as Style[]);
    const [edit, setEdit] = useState(false);

    const startGetProductsAll = async () => {
        const { data } = await satovarApi.get<ProductInterfaceCRUD[]>(
            '/Products?size=false&relational=true'
        );
        dispatch(onGetProductCrud(data));
    };
    const startGetInfoProduct = async () => {
        const { data } = await satovarApi.get<sizeRoot>('/size');
        setSizes(data.sizes);
        const { data: categoryApi } = await satovarApi.get<CategoryRoot>(
            '/category'
        );
        setCategory(categoryApi.categories);
        const { data: fabricApi } = await satovarApi.get<Fabric[]>('/fabric');
        setFabric(fabricApi);
        const { data: styleApi } = await satovarApi.get<Style[]>('/style');
        setStyle(styleApi);
    };
    const startGetEditProduct = async () => {
        const { data } = await satovarApi.put<ProductInterfaceCRUD>(
            `/Products/update/${activeProduct.CI_ID_PRODUCTO}`,
            {
                Precio: +activeProduct.CD_PRECIO,
                Categoria: +activeProduct.T_CATEGORIA.CI_ID_CATEGORIA,
                Catalogo: +activeProduct.T_CATALOGO.CI_ID_CATALOGO,
                Nombre: activeProduct.CV_NOMBRE,
                Tela: +activeProduct.T_TELA.CI_ID_TELA,
                Estado: activeProduct.CB_ESTADO,
            }
        );
        dispatch(onUpdateProductCrud(data));
        setEdit(true);
    };
    const startSetActiveProduct = (product: ProductInterfaceCRUD) => {
        console.log('llegue');
        dispatch(onActiveProductCrud(product));
        console.log(product);
    };
    return {
        //Variables
        products,
        isLoading,
        activeProduct,
        size,
        category,
        fabric,
        style,
        edit,
        //Metodos
        startGetProductsAll,
        startGetInfoProduct,
        startSetActiveProduct,
        startGetEditProduct,
    };
};
