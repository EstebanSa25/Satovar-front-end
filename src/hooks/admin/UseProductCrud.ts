/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from 'react-redux';
import {
    AddTalla,
    AxiosErrorData,
    ProductAdd,
    ProductInterfaceCRUD,
} from '../../interfaces';
import satovarApi from '../../api/SatovarApi';
import {
    onActiveProductCrud,
    onAddProductCrud,
    onGetProductCrud,
    onResetActiveProductCrud,
    onSetActiveProduct,
    onUpdateProductCrud,
} from '../../redux-store';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { ErrorSweetAlert } from '../../helpers';
import { Product, ProductAdd } from '../../interfaces/Product.interface';
import Swal from 'sweetalert2';

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
    const reader = new FileReader();

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
        dispatch(onActiveProductCrud(product));
    };
    const startResetProductActive = () => {
        dispatch(onResetActiveProductCrud());
    };
    const startCreateProduct = async (product: any) => {
        try {
            const tallas = Object.keys(product)
                .map((key: string) => {
                    if (key.includes('Cantidad')) {
                        return {
                            Id_talla:
                                size.find(
                                    (size) =>
                                        size.CV_TALLA ===
                                        key.split('Cantidad ')[1]
                                )?.CI_ID_TALLA || 0,
                            Cantidad: parseInt(product[key]),
                        } as AddTalla;
                    }
                })
                .filter(Boolean) as AddTalla[];

            const estilos = Object.keys(product).filter((key) =>
                key.startsWith('style-')
            );
            const sylesArray = estilos.map((key) => {
                return parseInt(product[key]);
            });
            const file = document.getElementById('Foto') as HTMLInputElement;
            if (!file.files) return;
            const image = file.files[0];

            //convertir a base64
            reader.readAsDataURL(image);
            reader.onload = async function () {
                const base64 = reader.result as string;
                const productAdd = {
                    Nombre: product.Nombre,
                    Foto: `${base64}`,
                    Precio: parseFloat(product.Precio),
                    Categoria: parseInt(product.Categoria),
                    Catalogo: parseInt(product.Catalogo) || 1,
                    Tallas: tallas,
                    Estilos: sylesArray,
                    Tela: parseInt(product.Tela) || 1,
                } as ProductAdd;
                const { data } = await satovarApi.post<ProductInterfaceCRUD>(
                    '/Products/create',
                    {
                        ...productAdd,
                    }
                );
                dispatch(onAddProductCrud(data));
                dispatch(onSetActiveProduct(data));
            };
            Swal.fire({
                title: 'Producto creado',
                icon: 'success',
            });
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            console.log(error);
            ErrorSweetAlert(
                errorCode,
                'Error al crear producto',
                errorString.error || errorString.message || ''
            );
        }
    };
    const startDeleteProduct = async (id: number) => {
        try {
            await satovarApi.delete(`/Products/delete/${id}`);
            Swal.fire({
                title: 'Producto eliminado',
                icon: 'success',
            });
            startGetProductsAll();
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al borrar producto',
                errorString.error || errorString.message || ''
            );
        }
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
        startResetProductActive,
        startCreateProduct,
        startDeleteProduct,
    };
};
