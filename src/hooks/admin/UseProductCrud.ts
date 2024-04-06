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
    onDeleteProductCrud,
    onGetProductCrud,
    onResetActiveProductCrud,
    onSetActiveProduct,
    onUpdateProductCrud,
} from '../../redux-store';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { ErrorSweetAlert } from '../../helpers';
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
    CV_FOTO: string;
    CD_PRECIO: string;
    CB_ESTADO: boolean;
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
        const fabricTrue = fabricApi.filter((fabric) => fabric.CB_ESTADO);
        setFabric(fabricTrue);
        const { data: styleApi } = await satovarApi.get<Style[]>('/style');
        setStyle(styleApi);
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const startGetEditProduct = async (
        form: any,
        inputRef: React.RefObject<HTMLElement>
    ) => {
        console.log(form);
        try {
            const tallas = Object.keys(form)
                .map((key: string) => {
                    if (key.includes('Cantidad')) {
                        return {
                            Id_talla:
                                size.find(
                                    (size) =>
                                        size.CV_TALLA ===
                                        key.split('Cantidad ')[1]
                                )?.CI_ID_TALLA || 0,
                            Cantidad: parseInt(form[key]),
                        } as AddTalla;
                    }
                })
                .filter(Boolean) as AddTalla[];
            const estilos = Object.keys(form).filter((key) =>
                key.startsWith('style-')
            );
            const sylesArray = estilos
                .map((key) => {
                    return parseInt(form[key]);
                })
                .filter(Boolean) as number[];
            const file = document.getElementById(
                'FotoProductoUpdate'
            ) as HTMLInputElement;
            if (!file.files) return;
            const image = file.files[0];
            if (image) {
                reader.readAsDataURL(image);
            } else {
                const productAdd = {
                    Nombre: form.Nombre,
                    Foto: activeProduct.CV_FOTO,
                    Precio: parseFloat(form.Precio),
                    Categoria: parseInt(form.Categoria),
                    Catalogo: parseInt(form.Catalogo) || 1,
                    Tallas: tallas,
                    Estilos: sylesArray.length > 0 ? sylesArray : '',
                    Tela: parseInt(form.Tela) || 1,
                } as ProductAdd;
                try {
                    const { data } = await satovarApi.put<ProductInterfaceCRUD>(
                        `/Products/update/${activeProduct.CI_ID_PRODUCTO}`,
                        {
                            ...productAdd,
                        }
                    );
                    dispatch(onUpdateProductCrud(data));
                    inputRef.current?.click();
                    startGetProductsAll();
                    Swal.fire({
                        title: 'Producto editado',
                        icon: 'success',
                    });
                    // startGetProductsAll();
                } catch (error) {
                    const axiosError = error as AxiosError;
                    const errorCode = axiosError.response?.status as number;
                    const errorString = axiosError.response
                        ?.data as AxiosErrorData;
                    console.log(error);
                    ErrorSweetAlert(
                        errorCode,
                        'Error al crear producto',
                        errorString.error || errorString.message || ''
                    );
                }
            }
            reader.onload = async function () {
                const base64 =
                    (reader.result as string) || activeProduct.CV_FOTO;
                const productAdd = {
                    Nombre: form.Nombre,
                    Foto: `${base64}` || `${activeProduct.CV_FOTO}`,
                    Precio: parseFloat(form.Precio),
                    Categoria: parseInt(form.Categoria),
                    Catalogo: parseInt(form.Catalogo) || 1,
                    Tallas: tallas,
                    Estilos: sylesArray.length > 0 ? sylesArray : '',
                    Tela: parseInt(form.Tela) || 1,
                } as ProductAdd;
                try {
                    const { data } = await satovarApi.put<ProductInterfaceCRUD>(
                        `/Products/update/${activeProduct.CI_ID_PRODUCTO}`,
                        {
                            ...productAdd,
                        }
                    );
                    inputRef.current?.click();
                    dispatch(onUpdateProductCrud(data));
                    startGetProductsAll();
                    Swal.fire({
                        title: 'Producto editado',
                        icon: 'success',
                    });
                } catch (error) {
                    const axiosError = error as AxiosError;
                    const errorCode = axiosError.response?.status as number;
                    const errorString = axiosError.response
                        ?.data as AxiosErrorData;
                    console.log(error);
                    ErrorSweetAlert(
                        errorCode,
                        'Error al crear producto',
                        errorString.error || errorString.message || ''
                    );
                }
            };
        } catch (error) {
            console.log(error);
        }
    };
    const startSetActiveProduct = (product: ProductInterfaceCRUD) => {
        dispatch(onActiveProductCrud(product));
    };
    const startResetProductActive = () => {
        dispatch(onResetActiveProductCrud());
    };
    const startCreateProduct = async (
        product: any,
        onResetForm: () => void,
        inputRef: React.RefObject<HTMLElement>
    ) => {
        if (
            !product.Nombre ||
            !product.Precio ||
            !product.Categoria ||
            !product.Catalogo ||
            !product.Foto
        ) {
            return Swal.fire({
                title: 'Error al crear producto',
                icon: 'warning',
                text: 'Todos los campos son obligatorios',
            });
        }
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
            const sylesArray = estilos
                .map((key) => {
                    return parseInt(product[key]);
                })
                .filter(Boolean) as number[];
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
                    Estilos: sylesArray.length > 0 ? sylesArray : '',
                    Tela: parseInt(product.Tela) || 1,
                } as ProductAdd;
                try {
                    const { data } =
                        await satovarApi.post<ProductInterfaceCRUD>(
                            '/Products/create',
                            {
                                ...productAdd,
                            }
                        );
                    dispatch(onAddProductCrud(data));
                    dispatch(onSetActiveProduct(data));
                    onResetForm();
                    inputRef.current?.click();
                    startGetProductsAll();
                    Swal.fire({
                        title: 'Producto creado',
                        icon: 'success',
                    });
                } catch (error) {
                    const axiosError = error as AxiosError;
                    const errorCode = axiosError.response?.status as number;
                    const errorString = axiosError.response
                        ?.data as AxiosErrorData;
                    console.log(error);
                    ErrorSweetAlert(
                        errorCode,
                        'Error al crear producto',
                        errorString.error || errorString.message || ''
                    );
                }
            };
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
    const startActiveProduct = async (id: number) => {
        try {
            await satovarApi.put(`/Products/update/${id}`, {
                Estado: true,
            });
            startGetProductsAll();
        } catch (error) {
            const axiosError = error as AxiosError;
            const errorCode = axiosError.response?.status as number;
            const errorString = axiosError.response?.data as AxiosErrorData;
            ErrorSweetAlert(
                errorCode,
                'Error al activar producto',
                errorString.error || errorString.message || ''
            );
        }
    };
    const startDeleteProduct = async (id: number) => {
        try {
            await satovarApi.delete(`/Products/delete/${id}`);
            dispatch(onDeleteProductCrud(id));
            // startGetProductsAll();
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
        //Metodos
        startGetProductsAll,
        startGetInfoProduct,
        startSetActiveProduct,
        startGetEditProduct,
        startResetProductActive,
        startCreateProduct,
        startDeleteProduct,
        startActiveProduct,
    };
};
