import { j as e, r as u, a as ha } from './react-DFZ_2keO.js';
import { c as ua } from './react-dom-CaCC8XUe.js';
import { u as W, a as q, P as pa } from './react-redux-DdSkcy5T.js';
import { L as B, N as xa, B as Ca } from './react-router-dom-Dr9Zph7X.js';
import { c as Z, a as ja } from './@reduxjs-UNmdh41Z.js';
import { a as Y } from './axios-Bo0ATomq.js';
import { S as P } from './sweetalert2-B_UTk7nN.js';
import { C as Ne } from './crypto-js-Ci0zXM0r.js';
import './firebase-yzTORpRS.js';
import {
    i as ga,
    g as ba,
    a as Na,
    G as fa,
    s as va,
} from './@firebase-BTzdziNd.js';
import {
    a as Q,
    e as ee,
    f as aa,
    b as _a,
    g as Ia,
    h as z,
} from './react-router-BGB44VNh.js';
import { i as Le } from './echarts-ChS4Rbe6.js';
import './scheduler-CzFDRTuY.js';
import './use-sync-external-store-BRcv7EME.js';
import './@remix-run-C3Jetdt7.js';
import './redux-DITMfSWq.js';
import './immer-BPoY8EgY.js';
import './reselect-BeKUwQU7.js';
import './redux-thunk-ClJT1hhx.js';
import './tslib-BGVaTf34.js';
import './idb-BXWtuYvb.js';
import './zrender-BAl-H0iw.js';
(function () {
    const s = document.createElement('link').relList;
    if (s && s.supports && s.supports('modulepreload')) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        l(r);
    new MutationObserver((r) => {
        for (const o of r)
            if (o.type === 'childList')
                for (const n of o.addedNodes)
                    n.tagName === 'LINK' && n.rel === 'modulepreload' && l(n);
    }).observe(document, { childList: !0, subtree: !0 });
    function t(r) {
        const o = {};
        return (
            r.integrity && (o.integrity = r.integrity),
            r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === 'use-credentials'
                ? (o.credentials = 'include')
                : r.crossOrigin === 'anonymous'
                ? (o.credentials = 'omit')
                : (o.credentials = 'same-origin'),
            o
        );
    }
    function l(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = t(r);
        fetch(r.href, o);
    }
})();
const Aa = () =>
        e.jsx('header', {
            className: 'header-area header-sticky',
            children: e.jsx('div', {
                className: 'container',
                children: e.jsx('div', {
                    className: 'row',
                    children: e.jsx('div', {
                        className: 'col-12',
                        children: e.jsxs('nav', {
                            className: 'main-nav',
                            children: [
                                e.jsx(B, {
                                    to: '/',
                                    className: 'logo',
                                    children: e.jsx('h1', {
                                        children: 'SATOVAR',
                                    }),
                                }),
                                e.jsx(Ps, {}),
                                e.jsx('a', {
                                    className: 'menu-trigger',
                                    children: e.jsx('span', {
                                        children: 'Menu',
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        }),
    H = ({ url: a, title: s }) =>
        e.jsx('li', {
            children: e.jsx(xa, {
                className: ({ isActive: t }) => `${t ? 'active' : ''}`,
                to: a,
                children: s,
            }),
        }),
    Sa = {
        products: [],
        activeProduct: null,
        isLoadingProduct: !1,
        CategoryActive: 'Mostrar todo',
    },
    fe = Z({
        name: 'Product',
        initialState: Sa,
        reducers: {
            onSetActiveProduct: (a, { payload: s }) => {
                a.activeProduct = s;
            },
            onAddNewProduct: (a, { payload: s }) => {
                (a.isLoadingProduct = !1),
                    (a.activeProduct = null),
                    a.products.some((l) => l.id === s.id) || a.products.push(s);
            },
            onUpdateProduct: (a, { payload: s }) => {
                a.products = a.products.map((t) => (t.id === s.id ? s : t));
            },
            onDeleteProduct: (a) => {
                a.activeProduct &&
                    ((a.products = a.products.filter(
                        (s) => s.id !== a.activeProduct.id
                    )),
                    (a.activeProduct = null));
            },
            onLoadProducts: (a, { payload: s }) => {
                (a.isLoadingProduct = !0),
                    (a.activeProduct = null),
                    s.forEach((t) => {
                        a.products.some((r) => r.id === t.id)
                            ? (a.products = a.products.map((r) =>
                                  r.id === t.id ? t : r
                              ))
                            : a.products.push(t);
                    });
            },
            onCategoryActive: (a, { payload: s }) => {
                a.CategoryActive = s;
            },
            onResetCategoryActive: (a) => {
                a.CategoryActive = '';
            },
            onResetProductActive: (a) => {
                a.activeProduct = null;
            },
        },
    }),
    {
        onSetActiveProduct: Ea,
        onAddNewProduct: ya,
        onUpdateProduct: vr,
        onDeleteProduct: _r,
        onLoadProducts: Da,
        onCategoryActive: Ta,
        onResetCategoryActive: Ir,
        onResetProductActive: Ar,
    } = fe.actions,
    Pa = {
        products: localStorage.getItem('cart')
            ? Array.from(JSON.parse(localStorage.getItem('cart') || '[]'))
            : [],
        subtotal: 0,
        envio: 0,
        impuesto: 0,
        total: 0,
        isLoading: !1,
    },
    ve = Z({
        name: 'Cart',
        initialState: Pa,
        reducers: {
            OnProductAdd: (a, { payload: s }) => {
                a.products.some((t) => t.id === s.id)
                    ? (a.products = a.products.map((t) =>
                          t.id === s.id ? { ...t, cantidad: t.cantidad + 1 } : t
                      ))
                    : a.products.push(s);
            },
            OnProductDelete: (a, { payload: s }) => {
                a.products = a.products.filter((t) => t.id !== s);
            },
            onCountProduct: (a, s) => {
                a.products = a.products.map(
                    (t) => (
                        t.id === s.payload.id &&
                            (t.cantidad = s.payload.cantidad),
                        t
                    )
                );
            },
            onAddSize: (a, { payload: s }) => {
                a.products.map((t) => {
                    t.id === s.id && (t.talla = s.talla);
                });
            },
            onBuyCart: (a) => {
                (a.isLoading = !1),
                    (a.products = []),
                    (a.subtotal = 0),
                    (a.envio = 0),
                    (a.impuesto = 0),
                    (a.total = 0);
            },
            onCalculateMount: (a, { payload: s }) => {
                a.products.length === 0
                    ? ((a.subtotal = 0),
                      (a.envio = 0),
                      (a.impuesto = 0),
                      (a.total = 0))
                    : ((a.subtotal = s.subtotal),
                      (a.envio = s.envio),
                      (a.impuesto = s.impuesto),
                      (a.total = a.subtotal + a.envio + a.impuesto));
            },
            onLoading: (a, { payload: s }) => {
                a.isLoading = s;
            },
        },
    }),
    {
        OnProductAdd: La,
        OnProductDelete: Oa,
        onAddSize: Ra,
        onBuyCart: Fa,
        onCalculateMount: ke,
        onLoading: Ge,
        onCountProduct: wa,
    } = ve.actions,
    Ma = {
        status: 'not-authenticated',
        user: {},
        errorMessage: void 0,
        isLoading: !1,
        userGoogle: null,
    },
    _e = Z({
        name: 'Auth',
        initialState: Ma,
        reducers: {
            onChecking: (a) => {
                (a.isLoading = !0),
                    (a.status = 'checking'),
                    (a.user = {}),
                    (a.userGoogle = null),
                    (a.errorMessage = void 0);
            },
            onLogin: (a, { payload: s }) => {
                (a.isLoading = !1),
                    (a.status = 'authenticated'),
                    (a.user = s),
                    (a.userGoogle = null),
                    (a.errorMessage = void 0);
            },
            onLogout: (a, { payload: s }) => {
                (a.isLoading = !1),
                    (a.status = 'not-authenticated'),
                    (a.user = {}),
                    (a.userGoogle = null),
                    (a.errorMessage = s);
            },
            clearErrorMessage: (a) => {
                a.errorMessage = void 0;
            },
            onLoginGoogle: (a, { payload: s }) => {
                (a.isLoading = !1),
                    (a.status = 'not-authenticated'),
                    (a.userGoogle = s),
                    (a.errorMessage = void 0);
            },
        },
    }),
    {
        onChecking: Ua,
        onLogin: xe,
        onLogout: re,
        clearErrorMessage: Va,
        onLoginGoogle: ka,
    } = _e.actions,
    Ga = {
        measureShirtTop: {},
        measureShirtLarge: {},
        measureShirtDetails: {},
        measureWaistcoatTop: {},
        measureWaistcoatLarge: {},
        measureWaistcoatDetails: {},
        measurePantTop: {},
        measurePantLarge: {},
        measurePantDetails: {},
        measureSuitJacketTop: {},
        measureSuitJacketLarge: {},
        measureSuitJacketDetails: {},
        measureShirt: {
            medida: {
                CI_CINTURA: null,
                CI_PECHO: null,
                CI_CADERA: null,
                CI_ESPALDA: null,
                CI_HOMBRO: null,
                CI_CUELLO: null,
            },
        },
        measureWaistcoat: {
            medida: {
                CI_PECHO: null,
                CI_CINTURA: null,
                CI_CADERA: null,
                CI_L_TOTAL: null,
                CV_DETALLES: null,
            },
        },
        measurePant: {},
        measureSuitJacket: {},
    },
    Ie = Z({
        name: 'MeasureCreateShirt',
        initialState: Ga,
        reducers: {
            onCreateMeasureShirtTop: (a, { payload: s }) => {
                a.measureShirtTop = s;
            },
            onCreateMeasureShirtLarge: (a, { payload: s }) => {
                a.measureShirtLarge = s;
            },
            onCreateMeasureShirtDetails: (a, { payload: s }) => {
                a.measureShirtDetails = s;
            },
            onGetMeasureShirt: (a, { payload: s }) => {
                a.measureShirt = s;
            },
            onGetMeasureWaistcoat: (a, { payload: s }) => {
                a.measureWaistcoat = s;
            },
            onCreateMeasureWaistcoatTop: (a, { payload: s }) => {
                a.measureWaistcoatTop = s;
            },
            onCreateMeasureWaistcoatLarge: (a, { payload: s }) => {
                a.measureWaistcoatLarge = s;
            },
            onCreateMeasureWaistcoatDetails: (a, { payload: s }) => {
                a.measureWaistcoatDetails = s;
            },
            onReset: (a) => {
                (a.measureShirtDetails = {}),
                    (a.measureShirtLarge = {}),
                    (a.measureShirtTop = {});
            },
            onResetMeasure: (a) => {
                (a.measureShirt = {
                    medida: {
                        CI_CINTURA: null,
                        CI_PECHO: null,
                        CI_CADERA: null,
                        CI_ESPALDA: null,
                        CI_HOMBRO: null,
                        CI_CUELLO: null,
                    },
                }),
                    (a.measureWaistcoat = {
                        medida: {
                            CI_PECHO: null,
                            CI_CINTURA: null,
                            CI_CADERA: null,
                            CI_L_TOTAL: null,
                            CV_DETALLES: null,
                        },
                    });
            },
            onCreateMeasurePantTop: (a, { payload: s }) => {
                a.measurePantTop = s;
            },
            onCreateMeasurePantLarge: (a, { payload: s }) => {
                a.measurePantLarge = s;
            },
            onCreateMeasurePantDetails: (a, { payload: s }) => {
                a.measurePantDetails = s;
            },
            onGetMeasurePant: (a, { payload: s }) => {
                a.measurePant = s;
            },
            onCreateMeasureSuitJacketTop: (a, { payload: s }) => {
                a.measureSuitJacketTop = s;
            },
            onCreateMeasureSuitJacketLarge: (a, { payload: s }) => {
                a.measureSuitJacketLarge = s;
            },
            onCreateMeasureSuitJacketDetails: (a, { payload: s }) => {
                a.measureSuitJacketDetails = s;
            },
            onGetMeasureSuitJacket: (a, { payload: s }) => {
                a.measureSuitJacket = s;
            },
        },
    }),
    {
        onCreateMeasureShirtTop: Ba,
        onCreateMeasureShirtLarge: $a,
        onCreateMeasureShirtDetails: za,
        onReset: Sr,
        onGetMeasureShirt: qa,
        onResetMeasure: Ha,
        onGetMeasureWaistcoat: Be,
        onCreateMeasureWaistcoatTop: $e,
        onCreateMeasureWaistcoatLarge: ze,
        onCreateMeasureWaistcoatDetails: qe,
        onCreateMeasurePantTop: Wa,
        onCreateMeasurePantLarge: Xa,
        onCreateMeasurePantDetails: Ya,
        onGetMeasurePant: Za,
        onCreateMeasureSuitJacketTop: Ja,
        onCreateMeasureSuitJacketLarge: Ka,
        onCreateMeasureSuitJacketDetails: Qa,
        onGetMeasureSuitJacket: es,
    } = Ie.actions,
    as = { products: [], isLoading: !1, activeProduct: {} },
    Ae = Z({
        name: 'ProductCrud',
        initialState: as,
        reducers: {
            onIsLoadingCrud: (a) => {
                a.isLoading = !0;
            },
            onAddProductCrud: (a, s) => {
                a.products.find(
                    (t) =>
                        t.CI_ID_PRODUCTO === s.payload.CI_ID_PRODUCTO ||
                        t.CV_NOMBRE === s.payload.CV_NOMBRE
                ) || a.products.push(s.payload),
                    (a.isLoading = !1);
            },
            onGetProductCrud: (a, s) => {
                s.payload.forEach((t) => {
                    a.products.some(
                        (r) => r.CI_ID_PRODUCTO === t.CI_ID_PRODUCTO
                    )
                        ? (a.products = a.products.map((r) =>
                              r.CI_ID_PRODUCTO === t.CI_ID_PRODUCTO ? t : r
                          ))
                        : a.products.push(t);
                }),
                    (a.isLoading = !1);
            },
            onUpdateProductCrud: (a, s) => {
                (a.products = a.products.map((t) =>
                    t.CI_ID_PRODUCTO === s.payload.CI_ID_PRODUCTO
                        ? s.payload
                        : t
                )),
                    (a.isLoading = !1);
            },
            onDeleteProductCrud: (a, s) => {
                (a.products = a.products.map(
                    (t) => (
                        t.CI_ID_PRODUCTO === s.payload &&
                            (t.CB_ESTADO = !t.CB_ESTADO),
                        t
                    )
                )),
                    (a.isLoading = !1);
            },
            onActiveProductCrud: (a, s) => {
                a.activeProduct = s.payload;
            },
            onResetActiveProductCrud: (a) => {
                a.activeProduct = {};
            },
        },
    }),
    {
        onAddProductCrud: ss,
        onDeleteProductCrud: ts,
        onGetProductCrud: rs,
        onUpdateProductCrud: He,
        onActiveProductCrud: os,
        onResetActiveProductCrud: ns,
        onIsLoadingCrud: Er,
    } = Ae.actions,
    ls = { orders: [] },
    Se = Z({
        name: 'Order',
        initialState: ls,
        reducers: {
            onGetAllOrders: (a, s) => {
                s.payload.forEach((t) => {
                    a.orders.some((r) => r.CI_ID_PEDIDO === t.CI_ID_PEDIDO)
                        ? (a.orders = a.orders.map((r) =>
                              r.CI_ID_PEDIDO === t.CI_ID_PEDIDO ? t : r
                          ))
                        : a.orders.push(t);
                });
            },
            onChangeOrderStatus: (a, s) => {
                a.orders = a.orders.map(
                    (t) => (
                        t.CI_ID_PEDIDO === s.payload.id &&
                            (t.CI_ID_ESTADO = s.payload.estado),
                        t
                    )
                );
            },
        },
    }),
    { onGetAllOrders: cs, onChangeOrderStatus: is } = Se.actions,
    ds = { Users: [], isLoading: !1, ActiveUser: {} },
    Ee = Z({
        name: 'UserCrud',
        initialState: ds,
        reducers: {
            onActiveUser: (a, s) => {
                a.ActiveUser = s.payload;
            },
            onResetActiveUser: (a) => {
                a.ActiveUser = {};
            },
            onStartLoading: (a) => {
                a.isLoading = !0;
            },
            onCreateUsers: (a, s) => {
                a.Users.find(
                    (t) => t.CI_ID_USUARIO === s.payload.CI_ID_USUARIO
                ) || a.Users.push(s.payload),
                    (a.isLoading = !1);
            },
            onUpdateUser: (a, s) => {
                (a.Users = a.Users.map((t) =>
                    t.CI_ID_USUARIO === s.payload.CI_ID_USUARIO ? s.payload : t
                )),
                    (a.isLoading = !1);
            },
            onDeteleteUser: (a, s) => {
                (a.Users = a.Users.filter(
                    (t) => t.CI_ID_USUARIO !== s.payload
                )),
                    (a.isLoading = !1);
            },
            onGetAllUsers: (a, s) => {
                s.payload.forEach((t) => {
                    a.Users.some((r) => r.CI_ID_USUARIO === t.CI_ID_USUARIO)
                        ? (a.Users = a.Users.map((r) =>
                              r.CI_ID_USUARIO === t.CI_ID_USUARIO ? t : r
                          ))
                        : a.Users.push(t);
                }),
                    (a.isLoading = !1);
            },
            onChangeUserState: (a, s) => {
                a.Users = a.Users.map(
                    (t) => (
                        t.CI_ID_USUARIO === s.payload &&
                            (t.CB_ESTADO === !0
                                ? (t.CB_ESTADO = !1)
                                : (t.CB_ESTADO = !0)),
                        t
                    )
                );
            },
        },
    }),
    {
        onGetAllUsers: ms,
        onCreateUsers: yr,
        onDeteleteUser: Dr,
        onStartLoading: Tr,
        onUpdateUser: hs,
        onResetActiveUser: us,
        onActiveUser: ps,
        onChangeUserState: xs,
    } = Ee.actions,
    Cs = { Fabrics: [], isLoading: !1, ActiveFabric: {} },
    ye = Z({
        name: 'FabricCrud',
        initialState: Cs,
        reducers: {
            onActiveFabric: (a, s) => {
                a.ActiveFabric = s.payload;
            },
            onResetActiveFabric: (a) => {
                a.ActiveFabric = {};
            },
            onStartLoading: (a) => {
                a.isLoading = !0;
            },
            onCreateFabric: (a, s) => {
                a.Fabrics.find((t) => t.CI_ID_TELA === s.payload.CI_ID_TELA) ||
                    a.Fabrics.push(s.payload),
                    (a.isLoading = !1);
            },
            onUpdateFabric: (a, s) => {
                (a.Fabrics = a.Fabrics.map((t) =>
                    t.CI_ID_TELA === s.payload.CI_ID_TELA ? s.payload : t
                )),
                    (a.isLoading = !1);
            },
            onGetAllFabric: (a, s) => {
                s.payload.forEach((t) => {
                    a.Fabrics.some((r) => r.CI_ID_TELA === t.CI_ID_TELA)
                        ? (a.Fabrics = a.Fabrics.map((r) =>
                              r.CI_ID_TELA === t.CI_ID_TELA ? t : r
                          ))
                        : a.Fabrics.push(t);
                }),
                    (a.isLoading = !1);
            },
            onChangeFabricState: (a, s) => {
                a.Fabrics = a.Fabrics.map(
                    (t) => (
                        t.CI_ID_TELA === s.payload &&
                            (t.CB_ESTADO === !0
                                ? (t.CB_ESTADO = !1)
                                : (t.CB_ESTADO = !0)),
                        t
                    )
                );
            },
        },
    }),
    {
        onActiveFabric: js,
        onChangeFabricState: gs,
        onCreateFabric: Pr,
        onGetAllFabric: bs,
        onResetActiveFabric: Ns,
        onStartLoading: Lr,
        onUpdateFabric: Or,
    } = ye.actions,
    fs = ja({
        reducer: {
            [fe.name]: fe.reducer,
            [ve.name]: ve.reducer,
            [_e.name]: _e.reducer,
            [Ie.name]: Ie.reducer,
            [Ae.name]: Ae.reducer,
            [Se.name]: Se.reducer,
            [Ee.name]: Ee.reducer,
            [ye.name]: ye.reducer,
        },
        middleware: (a) => a({ serializableCheck: !1 }),
    });
var vs = {
    VITE_API_URL: 'http://localhost:3000/api',
    VITE_SECRET_KEY: 'd152aefc1ee74e7911ea1c77efa98e54',
    BASE_URL: '/',
    MODE: 'production',
    DEV: !1,
    PROD: !0,
    SSR: !1,
};
const sa = () => ({ ...vs }),
    We = { bar: 'bar', line: 'line', pie: 'pie', scatter: 'scatter' };
var De = ((a) => (
        (a.text = 'text'),
        (a.password = 'password'),
        (a.email = 'email'),
        (a.number = 'number'),
        (a.date = 'date'),
        (a.file = 'file'),
        (a.checkbox = 'checkbox'),
        (a.radio = 'radio'),
        (a.submit = 'submit'),
        (a.reset = 'reset'),
        (a.button = 'button'),
        a
    ))(De || {}),
    Oe = ((a) => (
        (a.primary = 'primary'),
        (a.secondary = 'secondary'),
        (a.grey = 'grey'),
        (a.danger = 'danger'),
        (a.orange = 'orange'),
        a
    ))(Oe || {}),
    se = ((a) => (
        (a[(a.Administrador = 1)] = 'Administrador'),
        (a[(a.Cliente = 2)] = 'Cliente'),
        a
    ))(se || {}),
    ie = ((a) => (
        (a[(a.Venta = 1)] = 'Venta'), (a[(a.Alquiler = 2)] = 'Alquiler'), a
    ))(ie || {});
const _s = [
        {
            type: De.email,
            id: 'email',
            label: 'Dirección de correo',
            style: '',
        },
        { type: De.password, id: 'password', label: 'Contraseña' },
    ],
    Is = (a) => {
        a.preventDefault(), console.log('click');
    },
    As = { type: 'orange', title: 'Ingresar', onClick: Is },
    Xe = (a) => {
        for (const s in a) if (a.hasOwnProperty(s) && !a[s]) return !0;
        return !1;
    },
    Ye = (a = '') =>
        P.fire({
            title: 'Campos vacíos',
            text: `Tienes que completar los campos para continuar ${a}`,
            icon: 'warning',
        }),
    R = (a, s, t) =>
        P.fire({
            title: a === 500 ? 'Error en el sistema' : s,
            text: a === 500 ? 'Vuelva a intentarlo mas tarde' : t,
            icon: 'error',
        }),
    de = (a) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a),
    Ss = (a) => {
        const s = Math.floor(
            (new Date(Date.now()).getTime() - new Date(a).getTime()) / 864e5
        );
        return s >= 0
            ? 'table-danger'
            : s >= -2
            ? 'table-warning'
            : 'table-success';
    },
    { VITE_SECRET_KEY: ta } = sa(),
    G = (a) => Ne.AES.encrypt(JSON.stringify(a), ta).toString(),
    Te = (a) => {
        try {
            const t = Ne.AES.decrypt(a, ta).toString(Ne.enc.Utf8);
            return { status: 'success', data: JSON.parse(t) };
        } catch (s) {
            return {
                status: 'error',
                error: s instanceof Error ? s.message : 'Unknown error',
            };
        }
    },
    { VITE_API_URL: Es } = sa(),
    I = Y.create({ baseURL: Es });
I.interceptors.request.use(
    (a) => {
        const s = localStorage.getItem('token');
        return s && (a.headers.Authorization = `Bearer ${s}`), a;
    },
    (a) => Promise.reject(a)
);
const ys = {
        apiKey: 'AIzaSyC-Fd5DD_74FPCbt_8J1F2w0yQwbX82-1Q',
        authDomain: 'satovar-948e6.firebaseapp.com',
        projectId: 'satovar-948e6',
        storageBucket: 'satovar-948e6.appspot.com',
        messagingSenderId: '596825872377',
        appId: '1:596825872377:web:a9c80f234311875d4d4f28',
        measurementId: 'G-EJXYQT5MXB',
    },
    ra = ga(ys),
    oa = ba(ra);
Na(ra);
const Ds = new fa(),
    Ts = async () => {
        try {
            const a = await va(oa, Ds),
                {
                    displayName: s,
                    uid: t,
                    photoURL: l,
                    email: r,
                    phoneNumber: o,
                } = a.user;
            return {
                ok: !0,
                displayName: s,
                email: r,
                photoURL: l,
                uid: t,
                phoneNumber: o,
            };
        } catch (a) {
            console.log(a);
            const s = a.name;
            return { ok: !1, errorMessage: a.message, errorCode: s };
        }
    },
    Ce = async () => await oa.signOut(),
    te = () => {
        const a = W(),
            s = Q(),
            {
                status: t,
                user: l,
                errorMessage: r,
                isLoading: o,
                userGoogle: n,
            } = q((j) => j.Auth);
        return {
            status: t,
            user: l,
            errorMessage: r,
            userGoogle: n,
            isLoading: o,
            startLogin: async (j, i, C) => {
                var g, N;
                if ((Ce(), C.preventDefault(), !de(j)))
                    return R(
                        0,
                        'Correo inválido',
                        'Verifique su correo electrónico e intente de nuevo'
                    );
                if (
                    (j.trim() === '' || i.trim() === '') &&
                    Xe({ email: j, password: i })
                )
                    return Ye('con el inicio de sesión');
                a(Ua());
                try {
                    const v = G({ correo: j, clave: i }),
                        { data: f } = await I.post('/auth/login', {
                            encryptedData: v,
                        }),
                        { encryptData: S } = f,
                        D = Te(S).data || {},
                        { token: L, user: F } = D;
                    localStorage.setItem('token', L),
                        localStorage.setItem(
                            'token-init-date',
                            new Date().getTime().toString()
                        ),
                        s('/'),
                        a(xe(F));
                } catch (_) {
                    const v = _,
                        f = (g = v.response) == null ? void 0 : g.status,
                        S = (N = v.response) == null ? void 0 : N.data;
                    a(re('Credenciales incorrectas')),
                        R(
                            f,
                            'Error al iniciar sesión',
                            S.error || S.message || ''
                        ),
                        setTimeout(() => {
                            a(Va());
                        }, 10);
                }
            },
            startGoogleSignIn: async () => {
                var f, S, b;
                Ce();
                const j = await Ts();
                if (!j.ok) return a(re('Error al iniciar sesion'));
                const { displayName: i, email: C, uid: g, phoneNumber: N } = j,
                    _ = i.split(' '),
                    v = {
                        Nombre: _[0],
                        Apellido1: _[1] || '',
                        Apellido2: _[2] || '',
                        Correo: C,
                        Telefono: N || '',
                        GoogleId: g,
                    };
                try {
                    const D = { correo: C, clave: `${g}$` },
                        L = G(D),
                        { data: F } = await I.post('/auth/login', {
                            encryptedData: L,
                        }),
                        { encryptData: E } = F,
                        x = Te(E).data || {},
                        { token: A, user: O } = x;
                    localStorage.setItem('token', A),
                        localStorage.setItem(
                            'token-init-date',
                            new Date().getTime().toString()
                        ),
                        s('/'),
                        a(xe(O));
                } catch (D) {
                    const L = D,
                        F = (f = L.response) == null ? void 0 : f.status,
                        E = (S = L.response) == null ? void 0 : S.data;
                    switch ((b = L.response) == null ? void 0 : b.status) {
                        case 404:
                            a(ka(v)), s('/auth/registro');
                            break;
                        case 401:
                            R(
                                F,
                                'Error al iniciar sesión',
                                E.error ===
                                    'Verifique su cuenta o contacte a un administrador'
                                    ? E.error
                                    : 'Su cuenta ya fue registrada ingrese con su correo y clave'
                            );
                            break;
                    }
                }
            },
            startLogout: () => {
                localStorage.clear(), Ce(), a(re('')), a(Ha()), s('/');
            },
            startCreateUser: async (j, i, C) => {
                var N, _;
                if ((i.preventDefault(), !de(j.Correo)))
                    return R(
                        0,
                        'Correo electrónico inválido',
                        'Verifique su correo electrónico e intente de nuevo'
                    );
                if ((n && (j.Clave = `${n.GoogleId}$`), Xe(j)))
                    return Ye('con el registro');
                try {
                    const v = G(j);
                    console.log(v),
                        await I.post('/auth/create', { encryptedData: v }),
                        P.fire(
                            'Verifica tu correo electrónico para activar tu cuenta'
                        ),
                        C(),
                        s('/');
                } catch (v) {
                    const f = v,
                        S = (N = f.response) == null ? void 0 : N.status,
                        b = (_ = f.response) == null ? void 0 : _.data;
                    console.log(v),
                        R(
                            S,
                            'Error al crear usuario',
                            `${b.error || b.message || ''}`
                        );
                }
            },
            startCheckAuthToken: async () => {
                if (!localStorage.getItem('token')) {
                    a(re(''));
                    return;
                }
                try {
                    const { data: i } = await I.get('/auth/renew');
                    localStorage.setItem('token', i.token),
                        localStorage.setItem(
                            'token-init-date',
                            new Date().getTime().toString()
                        );
                    const { user: C } = i;
                    a(xe(C));
                } catch {
                    localStorage.clear(), a(re('Token invalido'));
                }
            },
        };
    },
    Ps = () => {
        const { status: a, startLogout: s, user: t } = te();
        return e.jsxs('ul', {
            className: 'nav',
            children: [
                (a === 'authenticated' || a === 'not-authenticated') &&
                t.CI_ID_ROL !== 1
                    ? e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(H, { url: '/', title: 'Inicio' }),
                              e.jsx(H, { url: '/compra', title: 'Compra' }),
                              e.jsx(H, { url: '/alquiler', title: 'Alquiler' }),
                              e.jsx(H, {
                                  url: '/confeccion',
                                  title: 'Confección',
                              }),
                              e.jsx(H, {
                                  url: '/contacto',
                                  title: 'Contáctenos',
                              }),
                              e.jsx(H, { url: '/carrito', title: 'Carrito' }),
                          ],
                      })
                    : e.jsxs(e.Fragment, {
                          children: [
                              e.jsx(H, { url: '/ventas', title: 'Ventas' }),
                              e.jsx(H, { url: '/pedidos', title: 'Pedidos' }),
                              e.jsx(H, {
                                  url: '/producto',
                                  title: 'Productos',
                              }),
                              e.jsx(H, { url: '/usuario', title: 'Usuarios' }),
                              e.jsx(H, { url: '/tela', title: 'Telas' }),
                          ],
                      }),
                e.jsxs('li', {
                    children: [
                        ' ',
                        e.jsxs(B, {
                            onClick: a === 'authenticated' ? s : () => {},
                            to: a === 'not-authenticated' ? '/auth/login' : '',
                            children: [
                                e.jsx('i', { className: 'fas fa-sign-in-alt' }),
                                a === 'not-authenticated'
                                    ? 'Iniciar sesión'
                                    : 'Salir',
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    je = [
        {
            imagen: '/assets/traje-para-eventos-de-noche-re.jpg',
            categoria: 'Smoking',
            titulo: 'Satovar ¡Porque la primera impresión es la que vale!',
        },
        {
            imagen: '/assets/photo-boda-re.jpg',
            categoria: 'Exterior',
            titulo: 'Siéntete bien en un día tan especial',
        },
    ],
    Ls = () => {
        const [a, s] = u.useState(je[0]),
            [t, l] = u.useState(0);
        return {
            image: a,
            changeImage: () => {
                switch (t) {
                    case 0:
                        s(je[1]), l(1);
                        break;
                    case 1:
                        s(je[0]), l(0);
                        break;
                }
            },
        };
    },
    oe = () => {
        const {
                products: a,
                activeProduct: s,
                isLoadingProduct: t,
                CategoryActive: l,
            } = q((m) => m.Product),
            r = W();
        return {
            products: a,
            activeProduct: s,
            isLoadingProduct: t,
            CategoryActive: l,
            startCreateProduct: (m) => {
                r(ya(m));
            },
            startGetProduct: async () => {
                const { data: m } = await I.get('/Products?size=true'),
                    p = m.map((h) => {
                        if (h.CB_ESTADO === !0)
                            return {
                                id: h.CI_ID_PRODUCTO,
                                nombre: h.CV_NOMBRE,
                                precio: h.CD_PRECIO,
                                imagen: h.CV_FOTO,
                                descripcion: '',
                                cantidad: {
                                    Pantalon: 1,
                                    Saco: 2,
                                    Chaleco: 3,
                                    Corbata: 4,
                                    camisa: 5,
                                },
                                catalogo: h.T_CATALOGO.CI_ID_CATALOGO,
                                color: h.T_TELA.CV_NOMBRE,
                                tallas: h.T_PRODUCTO_X_TALLA,
                            };
                    });
                r(Da(p));
            },
            startCategoryActive: (m) => {
                r(Ta(m));
            },
        };
    },
    ne = () => {
        const a = W(),
            {
                products: s,
                subtotal: t,
                envio: l,
                impuesto: r,
                total: o,
                isLoading: n,
            } = q((g) => g.Cart),
            { status: d } = q((g) => g.Auth),
            m = Q(),
            p = (g) => {
                a(La(g));
            },
            h = (g) => {
                a(Oa(g)), j();
            },
            c = (g, N) => {
                a(Ra({ id: g, talla: N }));
            },
            j = () => {
                let g = 0;
                if (s.length === 0)
                    return a(ke({ subtotal: 0, envio: 0, impuesto: 0 }));
                s == null ||
                    s.map((N) => {
                        g += +(N.precio * N.cantidad);
                    }),
                    a(ke({ subtotal: g, envio: 3e3, impuesto: g * 0.13 })),
                    localStorage.setItem('cart', JSON.stringify(s));
            };
        return {
            productscart: s,
            subtotal: t,
            envio: l,
            impuesto: r,
            total: o,
            isLoading: n,
            startAddProduct: p,
            startProductDelete: h,
            startAddSize: c,
            startShoppinCart: async (g) => {
                var _, v;
                if (d === 'not-authenticated') return m('/auth/login');
                if (
                    g.NUM_TARJETA === '' ||
                    g.NOMBRE === '' ||
                    g.EXPIRA === '' ||
                    g.CVV === ''
                )
                    return P.fire({
                        icon: 'warning',
                        title: 'Debe completar los campos de la tarjeta',
                        text: 'Completé los campos para continuar',
                        showConfirmButton: !0,
                    });
                if (g.FECHA_ENTREGA === '' || g.FECHA_ENTREGA === null)
                    return P.fire({
                        icon: 'warning',
                        title: 'Debe completar la fecha de entrega',
                        text: 'Complete los campos para continuar',
                        showConfirmButton: !0,
                    });
                const N = s.map((f) => ({
                    id: +f.id,
                    cantidad: +f.cantidad,
                    talla: +f.talla,
                }));
                try {
                    const f = {
                            subtotal: t,
                            impuestos: r,
                            fecha_pago: new Date(g.FECHA_ENTREGA),
                            descuentos: 0,
                            total: o,
                            productos: N,
                        },
                        S = G(f);
                    a(Ge(!0)),
                        await I.post('/buy/products', { encryptedData: S }),
                        a(Ge(!1)),
                        m('/'),
                        P.fire({
                            icon: 'success',
                            title: 'Compra realizada con éxito',
                            text: 'Gracias por su compra',
                            showConfirmButton: !0,
                            timer: 3e3,
                        }),
                        a(Fa());
                } catch (f) {
                    const S = f,
                        b = (_ = S.response) == null ? void 0 : _.status,
                        D = (v = S.response) == null ? void 0 : v.data;
                    R(
                        b,
                        'Error al realizar la compra',
                        D.error || D.message || ''
                    );
                }
            },
            starCalculateMount: j,
            startCountProduct: (g, N) => {
                a(wa({ id: g, cantidad: N }));
            },
        };
    },
    V = (a = {}) => {
        const [s, t] = u.useState(a);
        return {
            ...s,
            formState: s,
            onInputChange: ({ target: o }) => {
                const { name: n, value: d } = o;
                if (
                    (o.type !== 'checkbox' && t({ ...s, [n]: d }),
                    o.type === 'checkbox' &&
                        o instanceof HTMLInputElement &&
                        (o.checked && t({ ...s, [n]: d }), !o.checked))
                ) {
                    const { [n]: m, ...p } = s;
                    t(p);
                }
            },
            onResetForm: () => {
                t(a);
            },
            setFormState: t,
        };
    },
    me = () => {
        const a = W(),
            {
                measureShirtTop: s,
                measureShirtLarge: t,
                measureShirtDetails: l,
                measureShirt: r,
            } = q((c) => c.MeasureCreateShirt),
            { user: o } = q((c) => c.Auth);
        return {
            measureShirtTop: s,
            measureShirtLarge: t,
            measureShirtDetails: l,
            measureShirt: r,
            startSaveMeasureShirtTop: (c) => {
                a(Ba(c));
            },
            startSaveMeasureShirtLarge: (c) => {
                a($a(c));
            },
            startSaveMeasureShirtDetails: (c) => {
                a(za(c));
            },
            startGetMeasureShirt: async () => {
                try {
                    if (!o.CI_ID_USUARIO) return;
                    const { data: c } = await I.get(
                        `/measure/shirt/${o.CI_ID_USUARIO}`
                    );
                    a(qa(c)), console.log(c);
                } catch (c) {
                    console.log(c);
                }
            },
            CreateMeasureShirt: async () => {
                var c, j;
                try {
                    await I.post('/measure/shirt', {
                        id: o.CI_ID_USUARIO,
                        pecho: s.pechocamisa,
                        cintura: s.cinturaCamisa,
                        cadera: s.caderaCamisa,
                        espalda: s.espaldaCamisa,
                        hombro: s.hombroCamisa,
                        cuello: s.cuelloCamisa,
                        largoManga: t.LargoMangaCamisa,
                        largoTotal: t.LargoTotalCamisa,
                        brazo: t.BrazoCamisa,
                        puno: t.PunoCamisa,
                        detalles: l,
                    }),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de camisa guardada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (i) {
                    if (Y.isAxiosError(i)) {
                        const C = i,
                            g = (c = C.response) == null ? void 0 : c.status,
                            N = (j = C.response) == null ? void 0 : j.data;
                        R(
                            g,
                            'Error al guardar medida de camisa',
                            `${N.error || N.message || ''}`
                        );
                    }
                }
            },
        };
    },
    he = () => {
        const a = W(),
            {
                measureWaistcoatTop: s,
                measureWaistcoatLarge: t,
                measureWaistcoatDetails: l,
                measureWaistcoat: r,
            } = q((c) => c.MeasureCreateShirt),
            { user: o } = q((c) => c.Auth);
        return {
            measureWaistcoatTop: s,
            measureWaistcoatLarge: t,
            measureWaistcoatDetails: l,
            measureWaistcoat: r,
            onGetMeasureWaistcoat: Be,
            onCreateMeasureWaistcoatTop: $e,
            onCreateMeasureWaistcoatLarge: ze,
            onCreateMeasureWaistcoatDetails: qe,
            startGetMeasureWaistcoat: async () => {
                try {
                    if (!o.CI_ID_USUARIO) return;
                    const { data: c } = await I.get(
                        `/measure/waistcoat/${o.CI_ID_USUARIO}`
                    );
                    a(Be(c)), console.log(c);
                } catch (c) {
                    console.log(c);
                }
            },
            startSaveMeasureWaistcoatTop: (c) => {
                a($e(c));
            },
            startSaveMeasureWaistcoatLarge: (c) => {
                a(ze(c));
            },
            startSaveMeasureWaistcoatDetails: (c) => {
                a(qe(c));
            },
            CreateMeasureWaistcoat: async () => {
                var c, j;
                try {
                    await I.post('/measure/waistcoat', {
                        id: +o.CI_ID_USUARIO,
                        pecho: +s.pechoChaleco,
                        cintura: +s.CinturaChaleco,
                        cadera: +s.CaderaChaleco,
                        largoTotal: +t.LargoTotalChaleco,
                        detalles: l,
                    }),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de chaleco guardada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (i) {
                    if (Y.isAxiosError(i)) {
                        const C = i,
                            g = (c = C.response) == null ? void 0 : c.status,
                            N = (j = C.response) == null ? void 0 : j.data;
                        R(
                            g,
                            'Error al guardar medida de chaleco',
                            `${N.error || N.message || ''}`
                        );
                    }
                }
            },
        };
    },
    Re = () => {
        const a = W(),
            {
                products: s,
                isLoading: t,
                activeProduct: l,
            } = q((b) => b.ProductCrud),
            [r, o] = u.useState([]),
            [n, d] = u.useState([]),
            [m, p] = u.useState([]),
            [h, c] = u.useState([]),
            j = new FileReader(),
            i = async () => {
                const { data: b } = await I.get(
                    '/Products?size=false&relational=true'
                );
                a(rs(b));
            };
        return {
            products: s,
            isLoading: t,
            activeProduct: l,
            size: r,
            category: n,
            fabric: m,
            style: h,
            startGetProductsAll: i,
            startGetInfoProduct: async () => {
                const { data: b } = await I.get('/size');
                o(b.sizes);
                const { data: D } = await I.get('/category');
                d(D.categories);
                const { data: L } = await I.get('/fabric'),
                    F = L.filter((k) => k.CB_ESTADO);
                p(F);
                const { data: E } = await I.get('/style');
                c(E);
            },
            startSetActiveProduct: (b) => {
                a(os(b));
            },
            startGetEditProduct: async (b, D) => {
                var L, F, E;
                console.log(b);
                try {
                    const k = Object.keys(b)
                            .map((y) => {
                                var T;
                                if (y.includes('Cantidad'))
                                    return {
                                        Id_talla:
                                            ((T = r.find(
                                                (w) =>
                                                    w.CV_TALLA ===
                                                    y.split('Cantidad ')[1]
                                            )) == null
                                                ? void 0
                                                : T.CI_ID_TALLA) || 0,
                                        Cantidad: parseInt(b[y]),
                                    };
                            })
                            .filter(Boolean),
                        A = Object.keys(b)
                            .filter((y) => y.startsWith('style-'))
                            .map((y) => parseInt(b[y]))
                            .filter(Boolean),
                        O = document.getElementById('FotoProductoUpdate');
                    if (!O.files) return;
                    const U = O.files[0];
                    if (U) j.readAsDataURL(U);
                    else {
                        const y = {
                            Nombre: b.Nombre,
                            Foto: l.CV_FOTO,
                            Precio: parseFloat(b.Precio),
                            Categoria: parseInt(b.Categoria),
                            Catalogo: parseInt(b.Catalogo) || 1,
                            Tallas: k,
                            Estilos: A.length > 0 ? A : '',
                            Tela: parseInt(b.Tela) || 1,
                        };
                        try {
                            const T = G(y),
                                M = G({ Id: l.CI_ID_PRODUCTO }).replace(
                                    /\//g,
                                    '-'
                                ),
                                { data: $ } = await I.put(
                                    `/Products/update/${M}`,
                                    { encryptedData: T }
                                );
                            a(He($)),
                                (L = D.current) == null || L.click(),
                                i(),
                                P.fire({
                                    title: 'Producto editado',
                                    icon: 'success',
                                });
                        } catch (T) {
                            const w = T,
                                M =
                                    (F = w.response) == null
                                        ? void 0
                                        : F.status,
                                $ = (E = w.response) == null ? void 0 : E.data;
                            console.log(T),
                                R(
                                    M,
                                    'Error al crear producto',
                                    $.error || $.message || ''
                                );
                        }
                    }
                    j.onload = async function () {
                        var J, X, ce;
                        const y = j.result || l.CV_FOTO,
                            T = {
                                Nombre: b.Nombre,
                                Foto: `${y}` || `${l.CV_FOTO}`,
                                Precio: parseFloat(b.Precio),
                                Categoria: parseInt(b.Categoria),
                                Catalogo: parseInt(b.Catalogo) || 1,
                                Tallas: k,
                                Estilos: A.length > 0 ? A : '',
                                Tela: parseInt(b.Tela) || 1,
                            },
                            w = G(T),
                            $ = G({ Id: l.CI_ID_PRODUCTO }).replace(/\//g, '-');
                        try {
                            const { data: K } = await I.put(
                                `/Products/update/${$}`,
                                { encryptedData: w }
                            );
                            (J = D.current) == null || J.click(),
                                a(He(K)),
                                i(),
                                P.fire({
                                    title: 'Producto editado',
                                    icon: 'success',
                                });
                        } catch (K) {
                            const Ue = K,
                                ma =
                                    (X = Ue.response) == null
                                        ? void 0
                                        : X.status,
                                Ve =
                                    (ce = Ue.response) == null
                                        ? void 0
                                        : ce.data;
                            console.log(K),
                                R(
                                    ma,
                                    'Error al crear producto',
                                    Ve.error || Ve.message || ''
                                );
                        }
                    };
                } catch (k) {
                    console.log(k);
                }
            },
            startResetProductActive: () => {
                a(ns());
            },
            startCreateProduct: async (b, D, L) => {
                var F, E;
                if (
                    !b.Nombre ||
                    !b.Precio ||
                    !b.Categoria ||
                    !b.Catalogo ||
                    !b.Foto
                )
                    return P.fire({
                        title: 'Error al crear producto',
                        icon: 'warning',
                        text: 'Todos los campos son obligatorios',
                    });
                try {
                    const k = Object.keys(b)
                            .map((y) => {
                                var T;
                                if (y.includes('Cantidad'))
                                    return {
                                        Id_talla:
                                            ((T = r.find(
                                                (w) =>
                                                    w.CV_TALLA ===
                                                    y.split('Cantidad ')[1]
                                            )) == null
                                                ? void 0
                                                : T.CI_ID_TALLA) || 0,
                                        Cantidad: parseInt(b[y]),
                                    };
                            })
                            .filter(Boolean),
                        A = Object.keys(b)
                            .filter((y) => y.startsWith('style-'))
                            .map((y) => parseInt(b[y]))
                            .filter(Boolean),
                        O = document.getElementById('Foto');
                    if (!O.files) return;
                    const U = O.files[0];
                    j.readAsDataURL(U),
                        (j.onload = async function () {
                            var w, M, $;
                            const y = j.result,
                                T = {
                                    Nombre: b.Nombre,
                                    Foto: `${y}`,
                                    Precio: parseFloat(b.Precio),
                                    Categoria: parseInt(b.Categoria),
                                    Catalogo: parseInt(b.Catalogo) || 1,
                                    Tallas: k,
                                    Estilos: A.length > 0 ? A : '',
                                    Tela: parseInt(b.Tela) || 1,
                                };
                            try {
                                const J = G(T),
                                    { data: X } = await I.post(
                                        '/Products/create',
                                        { encryptedData: J }
                                    );
                                a(ss(X)),
                                    a(Ea(X)),
                                    D(),
                                    (w = L.current) == null || w.click(),
                                    i(),
                                    P.fire({
                                        title: 'Producto creado',
                                        icon: 'success',
                                    });
                            } catch (J) {
                                const X = J,
                                    ce =
                                        (M = X.response) == null
                                            ? void 0
                                            : M.status,
                                    K =
                                        ($ = X.response) == null
                                            ? void 0
                                            : $.data;
                                console.log(J),
                                    R(
                                        ce,
                                        'Error al crear producto',
                                        K.error || K.message || ''
                                    );
                            }
                        });
                } catch (k) {
                    const x = k,
                        A = (F = x.response) == null ? void 0 : F.status,
                        O = (E = x.response) == null ? void 0 : E.data;
                    console.log(k),
                        R(
                            A,
                            'Error al crear producto',
                            O.error || O.message || ''
                        );
                }
            },
            startDeleteProduct: async (b) => {
                var D, L;
                try {
                    const E = G({ Id: b }).replace(/\//g, '-');
                    await I.delete(`/Products/delete/${E}`), a(ts(b));
                } catch (F) {
                    console.log(F);
                    const E = F,
                        k = (D = E.response) == null ? void 0 : D.status,
                        x = (L = E.response) == null ? void 0 : L.data;
                    R(
                        k,
                        'Error al borrar producto',
                        x.error || x.message || ''
                    );
                }
            },
            startActiveProduct: async (b) => {
                var D, L;
                try {
                    const F = G({ Estado: !0 }),
                        k = G({ Id: b }).replace(/\//g, '-');
                    await I.put(`/Products/update/${k}`, { encryptedData: F }),
                        i();
                } catch (F) {
                    const E = F,
                        k = (D = E.response) == null ? void 0 : D.status,
                        x = (L = E.response) == null ? void 0 : L.data;
                    R(
                        k,
                        'Error al activar producto',
                        x.error || x.message || ''
                    );
                }
            },
        };
    },
    na = () => {
        const [a, s] = u.useState([{}]),
            [t, l] = u.useState({}),
            [r, o] = u.useState([]),
            [n, d] = u.useState([]),
            [m, p] = u.useState({}),
            [h, c] = u.useState({}),
            [j, i] = u.useState({});
        return {
            salesYear: a,
            salesMonth: t,
            productMostSale: r,
            fabricMostSale: n,
            salesTotal: m,
            ordersPending: h,
            ordersCompleted: j,
            startGetSalesYear: async () => {
                try {
                    const { data: b } = await I.get('/dashboard/year-sale');
                    return s(b), b;
                } catch (b) {
                    console.log(b);
                }
            },
            startGetSalesMonth: async () => {
                try {
                    const { data: b } = await I.get('/dashboard/month-sale');
                    l(b[0]);
                } catch (b) {
                    console.log(b);
                }
            },
            startGetProductMostSale: async () => {
                try {
                    const { data: b } = await I.get('/dashboard/product-top'),
                        D = b.map((L) => ({
                            value: L.TotalCantidad,
                            name: L.Producto,
                        }));
                    o(D);
                } catch (b) {
                    console.log(b);
                }
            },
            startGetFabricMostSale: async () => {
                try {
                    const { data: b } = await I.get('/dashboard/fabric-top'),
                        D = b.map((L) => ({
                            value: L.CANTIDAD,
                            name: L.CV_NOMBRE,
                        }));
                    d(D);
                } catch (b) {
                    console.log(b);
                }
            },
            setSalesTotal: p,
            startGetSales: async () => {
                try {
                    const { data: b } = await I.get('/dashboard/incomes');
                    p(b);
                } catch (b) {
                    console.log(b);
                }
            },
            startGetOrdersPending: async () => {
                try {
                    const { data: b } = await I.get(
                        '/dashboard/current-orders'
                    );
                    c(b);
                } catch (b) {
                    console.log(b);
                }
            },
            startGetOrdersCompleted: async () => {
                try {
                    const { data: b } = await I.get(
                        '/dashboard/complete-orders'
                    );
                    i(b);
                } catch (b) {
                    console.log(b);
                }
            },
        };
    },
    Fe = () => {
        const { orders: a } = q((r) => r.Order),
            s = W();
        return {
            orders: a,
            startGetAllOrders: async () => {
                try {
                    const { data: r } = await I.get('/buy/products');
                    s(cs(r));
                } catch (r) {
                    console.log(r);
                }
            },
            startUpdateStatusOrder: async (r, o) => {
                try {
                    await I.put(`/buy/products/${r}`, { Estado: o }),
                        s(is({ id: r, estado: o }));
                } catch (n) {
                    console.log(n);
                }
            },
        };
    },
    we = () => {
        const a = W(),
            { Users: s, isLoading: t, ActiveUser: l } = q((h) => h.UserCrud),
            r = async (h, c, j) => {
                var i, C, g, N;
                try {
                    if (!de(h.Correo))
                        return R(
                            0,
                            'Correo invalido',
                            'Verifique su correo electronico e intente de nuevo'
                        );
                    if (+h.Rol === se.Administrador) {
                        const _ = G(h);
                        await I.post('/auth/create/admin', {
                            encryptedData: _,
                        }),
                            o(),
                            P.fire({
                                title: 'Usuario creado',
                                text: 'El usuario se ha creado correctamente',
                                icon: 'success',
                            }),
                            c(),
                            (i = j.current) == null || i.click();
                    } else {
                        const _ = G(h);
                        await I.post('/auth/create', { encryptedData: _ }),
                            o(),
                            P.fire({
                                title: 'Usuario creado',
                                text: 'El usuario se ha creado correctamente',
                                icon: 'success',
                            }),
                            c(),
                            (C = j.current) == null || C.click();
                    }
                } catch (_) {
                    const v = _,
                        f = (g = v.response) == null ? void 0 : g.status,
                        S = (N = v.response) == null ? void 0 : N.data;
                    console.log(_),
                        R(
                            f,
                            'Error al crear usuario',
                            S.error || S.message || ''
                        ),
                        console.log(_);
                }
            },
            o = async () => {
                try {
                    const { data: h } = await I.get('/auth');
                    a(ms(h));
                } catch (h) {
                    console.log(h);
                }
            };
        return {
            Users: s,
            isLoading: t,
            ActiveUser: l,
            startCreateUser: r,
            startGetAllUsers: o,
            startUpdateUser: async (h, c, j, i) => {
                var C, g, N;
                try {
                    const _ = G(h),
                        f = G({ Id: i }).replace(/\//g, '-'),
                        { data: S } = await I.put(`/auth/${f}`, {
                            encryptedData: _,
                        });
                    (C = j.current) == null || C.click(),
                        a(hs(S)),
                        o(),
                        c(),
                        P.fire({
                            title: 'Usuario actualizado',
                            text: 'El usuario se ha actualizado correctamente',
                            icon: 'success',
                        });
                } catch (_) {
                    const v = _,
                        f = (g = v.response) == null ? void 0 : g.status,
                        S = (N = v.response) == null ? void 0 : N.data;
                    R(
                        f,
                        'Error al actualizar usuario',
                        S.error || S.message || ''
                    );
                }
            },
            startDeleteUser: async (h) => {
                var i, C;
                const j = (await G({ Id: h })).replace(/\//g, '-');
                try {
                    await I.put(`/auth/state/${j}`), a(xs(h)), o();
                } catch (g) {
                    console.log(g);
                    const N = g,
                        _ = (i = N.response) == null ? void 0 : i.status,
                        v = (C = N.response) == null ? void 0 : C.data;
                    R(
                        _,
                        'Error al cambiar estado de usuario',
                        v.error || v.message || v.Error || ''
                    );
                }
            },
            startSetActiveUser: (h) => {
                a(ps(h));
            },
            startResetActiveUser: () => {
                a(us());
            },
        };
    },
    le = () => {
        const [a, s] = u.useState({}),
            [t, l] = u.useState([]),
            [r, o] = u.useState({}),
            [n, d] = u.useState({}),
            [m, p] = u.useState({}),
            [h, c] = u.useState({}),
            j = Q(),
            i = async (x) => {
                try {
                    const { data: A } = await I.get(
                        `/auth/${parseInt(x || '0')}`
                    );
                    return s(A), A;
                } catch (A) {
                    j(-1), console.log(A);
                }
            },
            C = async (x) => {
                try {
                    const { data: A } = await I.get(
                        `/buy/products/${parseInt(x || '0')}`
                    );
                    return l(A), A;
                } catch (A) {
                    console.log(A);
                }
            },
            g = async (x) => {
                try {
                    const { data: A } = await I.get(
                        `/measure/shirt/${parseInt(x || '0')}`
                    );
                    o(A);
                } catch (A) {
                    console.log(A);
                }
            },
            N = async (x) => {
                try {
                    const { data: A } = await I.get(
                        `/measure/waistcoat/${parseInt(x || '0')}`
                    );
                    d(A);
                } catch (A) {
                    console.log(A);
                }
            },
            _ = async (x) => {
                try {
                    const { data: A } = await I.get(
                        `/measure/suit-jacket/${parseInt(x || '0')}`
                    );
                    p(A);
                } catch (A) {
                    console.log(A);
                }
            },
            v = async (x) => {
                try {
                    const { data: A } = await I.get(
                        `/measure/pant/${parseInt(x || '0')}`
                    );
                    c(A);
                } catch (A) {
                    console.log(A);
                }
            };
        return {
            userInfo: a,
            userOrders: t,
            measureShirt: r,
            measureWaistcoat: n,
            measureSuitJacket: m,
            measurePants: h,
            startGetProfileUserInfo: i,
            startGetProfileUserOrder: C,
            startGetMeasureShirt: g,
            startGetMeasureWaistcoat: N,
            startGetMeasureSuitJacket: _,
            startGetMeasurePants: v,
            startCreateMeasureShirt: async (x, A) => {
                var O, U;
                console.log(x);
                try {
                    await I.post('/measure/shirt', {
                        id: parseInt(A || '0'),
                        pecho: +x.PechoCamisa,
                        cintura: +x.CinturaCamisa,
                        cadera: +x.CaderaCamisa,
                        espalda: +x.EspaldaCamisa,
                        hombro: +x.HombroCamisa,
                        cuello: +x.CuelloCamisa,
                        largoManga: +x.L_mangaCamisa,
                        largoTotal: +x.L_totalCamisa,
                        brazo: +x.BrazoCamisa,
                        puno: +x.PunioCamisa,
                        detalles: x.DetalleCamisa,
                    }),
                        g(A),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de camisa guardada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (y) {
                    if (Y.isAxiosError(y)) {
                        const T = y,
                            w = (O = T.response) == null ? void 0 : O.status,
                            M = (U = T.response) == null ? void 0 : U.data;
                        R(
                            w,
                            'Error al guardar medida de camisa',
                            `${M.error || M.message || ''}`
                        );
                    }
                }
            },
            startSaveSuitJacket: async (x, A) => {
                var O, U;
                try {
                    await I.post('/measure/suit-jacket', {
                        id: parseInt(A || '0'),
                        pecho: +x.PechoSaco,
                        cintura: +x.CinturaSaco,
                        cadera: +x.CaderaSaco,
                        espalda: +x.EspaldaSaco,
                        hombro: +x.HombroSaco,
                        largoManga: +x.L_mangaSaco,
                        largoTotal: +x.L_totalSaco,
                        brazo: +x.BrazoSaco,
                        puno: +x.PunioSaco,
                        detalles: x.DetalleSaco,
                    }),
                        _(A),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de saco guardada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (y) {
                    const T = y,
                        w = (O = T.response) == null ? void 0 : O.status,
                        M = (U = T.response) == null ? void 0 : U.data;
                    R(
                        w,
                        'Error al crear medida de saco',
                        `${
                            M.error ||
                            M.Error ||
                            M.message ||
                            'Internal server error'
                        }`
                    );
                }
            },
            startSavePant: async (x, A) => {
                var O, U;
                try {
                    const { data: y } = await I.post('/measure/pant', {
                        id: parseInt(A || '0'),
                        cintura: +x.CinturaPantalon,
                        cadera: +x.CaderaPantalon,
                        tiro: +x.TiroPantalon,
                        rodilla: +x.RodillaPantalon,
                        ruedo: +x.RuedoPantalon,
                        largo: +x.LargoPantalon,
                        detalles: x.DetallePantalon || '',
                    });
                    if (!y.estado)
                        throw new Error(
                            'Error al guardar la medida de pantalón'
                        );
                    v(A),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de pantalón guardada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (y) {
                    console.log(y);
                    const T = y,
                        w = (O = T.response) == null ? void 0 : O.status,
                        M = (U = T.response) == null ? void 0 : U.data;
                    R(
                        w,
                        'Error al crear medida de pantalon',
                        `${
                            M.error ||
                            M.Error ||
                            M.message ||
                            'Internal server error'
                        }`
                    );
                }
            },
            CreateMeasureWaistcoat: async (x, A) => {
                var O, U;
                try {
                    await I.post('/measure/waistcoat', {
                        id: parseInt(A || '0'),
                        pecho: +x.PechoChaleco,
                        cintura: +x.CinturaChaleco,
                        cadera: +x.CaderaChaleco,
                        largoTotal: +x.L_totalChaleco,
                        detalles: x.DetalleChaleco,
                    }),
                        N(A),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de chaleco guardada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (y) {
                    if (Y.isAxiosError(y)) {
                        const T = y,
                            w = (O = T.response) == null ? void 0 : O.status,
                            M = (U = T.response) == null ? void 0 : U.data;
                        R(
                            w,
                            'Error al guardar medida de chaleco',
                            `${M.error || M.message || ''}`
                        );
                    }
                }
            },
            startUpdateMeasureShirt: async (x, A, O) => {
                var U, y;
                try {
                    await I.put(`/measure/shirt/${+A}`, {
                        pecho: +x.PechoCamisa,
                        cintura: +x.CinturaCamisa,
                        cadera: +x.CaderaCamisa,
                        espalda: +x.EspaldaCamisa,
                        hombro: +x.HombroCamisa,
                        cuello: +x.CuelloCamisa,
                        largoManga: +x.L_mangaCamisa,
                        largoTotal: +x.L_totalCamisa,
                        brazo: +x.BrazoCamisa,
                        puno: +x.PunioCamisa,
                        detalles: x.DetalleCamisa,
                    }),
                        g(O),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de camisa actualizada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (T) {
                    const w = T,
                        M = (U = w.response) == null ? void 0 : U.status,
                        $ = (y = w.response) == null ? void 0 : y.data;
                    R(
                        M,
                        'Error al editar medida de camisa',
                        `${$.error || $.message || ''}`
                    ),
                        console.log(T);
                }
            },
            startUpdateMeasureWaistcoat: async (x, A, O) => {
                var U, y;
                try {
                    await I.put(`/measure/waistcoat/${+A}`, {
                        pecho: +x.PechoChaleco,
                        cintura: +x.CinturaChaleco,
                        cadera: +x.CaderaChaleco,
                        largoTotal: +x.L_totalChaleco,
                        detalles: x.DetalleChaleco,
                    }),
                        N(O),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de chaleco actualizada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (T) {
                    if (Y.isAxiosError(T)) {
                        const w = T,
                            M = (U = w.response) == null ? void 0 : U.status,
                            $ = (y = w.response) == null ? void 0 : y.data;
                        R(
                            M,
                            'Error al editar medida de chaleco',
                            `${$.error || $.message || ''}`
                        );
                    }
                }
            },
            startUpdateMeasureSuitJacket: async (x, A, O) => {
                var U, y;
                try {
                    await I.put(`/measure/suit-jacket/${+A}`, {
                        pecho: +x.PechoSaco,
                        cintura: +x.CinturaSaco,
                        cadera: +x.CaderaSaco,
                        espalda: +x.EspaldaSaco,
                        hombro: +x.HombroSaco,
                        largoManga: +x.L_mangaSaco,
                        largoTotal: +x.L_totalSaco,
                        brazo: +x.BrazoSaco,
                        puno: +x.PunioSaco,
                        detalles: x.DetalleSaco,
                    }),
                        _(O),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de saco actualizada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (T) {
                    if (Y.isAxiosError(T)) {
                        const w = T,
                            M = (U = w.response) == null ? void 0 : U.status,
                            $ = (y = w.response) == null ? void 0 : y.data;
                        R(
                            M,
                            'Error al editar medida de saco',
                            `${$.error || $.message || ''}`
                        );
                    }
                }
            },
            startUpdateMeasurePants: async (x, A, O) => {
                var U, y;
                try {
                    await I.put(`/measure/pant/${+A}`, {
                        cintura: +x.CinturaPantalon,
                        cadera: +x.CaderaPantalon,
                        tiro: +x.TiroPantalon,
                        rodilla: +x.RodillaPantalon,
                        ruedo: +x.RuedoPantalon,
                        largo: +x.LargoPantalon,
                        detalles: x.DetallePantalon,
                    }),
                        v(O),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de pantalón actualizada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (T) {
                    if (Y.isAxiosError(T)) {
                        const w = T,
                            M = (U = w.response) == null ? void 0 : U.status,
                            $ = (y = w.response) == null ? void 0 : y.data;
                        R(
                            M,
                            'Error al editar medida de pantalon',
                            `${$.error || $.message || ''}`
                        );
                    }
                }
            },
        };
    },
    ue = () => {
        const a = W(),
            {
                measurePantTop: s,
                measurePantLarge: t,
                measurePantDetails: l,
                measurePant: r,
            } = q((c) => c.MeasureCreateShirt),
            { user: o } = q((c) => c.Auth);
        return {
            startSaveUpperPant: (c) => {
                a(Wa(c));
            },
            startLargePant: (c) => {
                a(Xa(c));
            },
            startDetailsPant: (c) => {
                a(Ya(c));
            },
            startSavePant: async () => {
                var c, j;
                try {
                    const { data: i } = await I.post('/measure/pant', {
                        id: +o.CI_ID_USUARIO,
                        cintura: +s.CinturaPantalon,
                        cadera: +s.CaderaPantalon,
                        tiro: +s.TiroPantalon,
                        rodilla: +s.RodillaPantalon,
                        ruedo: +s.RuedoPantalon,
                        largo: +t.LargoTotalPantalon,
                        detalles: l.DetallesPantalon || '',
                    });
                    if (!i.estado)
                        throw new Error(
                            'Error al guardar la medida de pantalón'
                        );
                    P.fire({
                        icon: 'success',
                        title: 'Medida de pantalón guardada',
                        showConfirmButton: !1,
                        timer: 1800,
                    });
                } catch (i) {
                    console.log(i);
                    const C = i,
                        g = (c = C.response) == null ? void 0 : c.status,
                        N = (j = C.response) == null ? void 0 : j.data;
                    R(
                        g,
                        'Error al crear medida de pantalón',
                        `${
                            N.error ||
                            N.Error ||
                            N.message ||
                            'Internal server error'
                        }`
                    );
                }
            },
            startGetMeasurePant: async () => {
                try {
                    const { data: c } = await I.get(
                        `/measure/pant/${+o.CI_ID_USUARIO}`
                    );
                    a(Za(c.medida));
                } catch (c) {
                    console.log(c);
                }
            },
            measurePant: r,
        };
    },
    pe = () => {
        const {
                measureSuitJacketTop: a,
                measureSuitJacketLarge: s,
                measureSuitJacketDetails: t,
                measureSuitJacket: l,
            } = q((c) => c.MeasureCreateShirt),
            { user: r } = q((c) => c.Auth),
            o = W();
        return {
            measureSuitJacket: l,
            startSaveSuitJacketTop: (c) => {
                o(Ja(c));
            },
            startSaveSuitJacketLarge: (c) => {
                o(Ka(c));
            },
            startSaveSuitJacketDetails: (c) => {
                o(Qa(c));
            },
            startSaveSuitJacket: async () => {
                var c, j;
                try {
                    await I.post('/measure/suit-jacket', {
                        id: +r.CI_ID_USUARIO,
                        pecho: +a.PechoSaco,
                        cintura: +a.CinturaSaco,
                        cadera: +a.CaderaSaco,
                        espalda: +a.EspaldaSaco,
                        hombro: +a.HombroSaco,
                        largoManga: +s.L_mangaSaco,
                        largoTotal: +s.L_totalSaco,
                        brazo: +s.BrazoSaco,
                        puno: +s.PunioSaco,
                        detalles: t.DetallesSaco,
                    }),
                        P.fire({
                            icon: 'success',
                            title: 'Medida de saco guardada',
                            showConfirmButton: !1,
                            timer: 1800,
                        });
                } catch (i) {
                    console.log(i);
                    const C = i,
                        g = (c = C.response) == null ? void 0 : c.status,
                        N = (j = C.response) == null ? void 0 : j.data;
                    R(
                        g,
                        'Error al crear medida de saco',
                        `${
                            N.error ||
                            N.Error ||
                            N.message ||
                            'Internal server error'
                        }`
                    );
                }
            },
            startGetMeasureSuitJacket: async () => {
                try {
                    const { data: c } = await I.get(
                        `/measure/suit-jacket/${+r.CI_ID_USUARIO}`
                    );
                    o(es(c.medida));
                } catch (c) {
                    console.log(c);
                }
            },
        };
    },
    Me = () => {
        const a = W(),
            s = new FileReader(),
            {
                Fabrics: t,
                isLoading: l,
                ActiveFabric: r,
            } = q((c) => c.FabricCrud),
            o = async (c, j, i) => {
                var C, g;
                try {
                    const N = document.getElementById('Foto');
                    if (!N.files) return;
                    const _ = N.files[0];
                    if (!c.Foto)
                        return P.fire({
                            title: 'Error',
                            text: 'Debe seleccionar una imagen',
                            icon: 'error',
                        });
                    s.readAsDataURL(_),
                        (s.onload = async function () {
                            var f, S, b;
                            const v = s.result;
                            try {
                                const D = G({ ...c, Foto: v });
                                await I.post('/fabric/create', {
                                    encryptedData: D,
                                }),
                                    j(),
                                    (f = i.current) == null || f.click(),
                                    n(),
                                    P.fire({
                                        title: 'Tela creada',
                                        icon: 'success',
                                    });
                            } catch (D) {
                                const L = D,
                                    F =
                                        (S = L.response) == null
                                            ? void 0
                                            : S.status,
                                    E =
                                        (b = L.response) == null
                                            ? void 0
                                            : b.data;
                                console.log(D),
                                    R(
                                        F,
                                        'Error al crear la tela',
                                        E.error || E.message || ''
                                    );
                            }
                        });
                } catch (N) {
                    const _ = N,
                        v = (C = _.response) == null ? void 0 : C.status,
                        f = (g = _.response) == null ? void 0 : g.data;
                    console.log(N),
                        R(
                            v,
                            'Error al crear la tela',
                            f.error || f.message || ''
                        ),
                        console.log(N);
                }
            },
            n = async () => {
                try {
                    const { data: c } = await I.get('/fabric');
                    a(bs(c));
                } catch (c) {
                    console.log(c);
                }
            };
        return {
            Fabrics: t,
            isLoading: l,
            ActiveFabric: r,
            startCreateFabric: o,
            startGetAllFabric: n,
            startUpdateFabric: async (c, j, i, C) => {
                var g, N, _;
                console.log(c);
                try {
                    const v = document.getElementById('FotoActualizar');
                    if (!v.files) return;
                    const f = v.files[0];
                    if (
                        c.FotoActualizar === void 0 ||
                        c.FotoActualizar === null ||
                        c.FotoActualizar === ''
                    ) {
                        const S = G({ ...c, Foto: void 0 }),
                            D = G({ Id: C }).replace(/\//g, '-');
                        return (
                            await I.put(`/fabric/${D}`, { encryptedData: S }),
                            n(),
                            j(),
                            (g = i.current) == null || g.click(),
                            P.fire({
                                title: 'Tela actualizada',
                                icon: 'success',
                            })
                        );
                    }
                    s.readAsDataURL(f),
                        (s.onload = async function () {
                            var b, D, L;
                            const S = s.result;
                            try {
                                const F = G({ ...c, Foto: S || '' }),
                                    k = G({ Id: C }).replace(/\//g, '-');
                                await I.put(`/fabric/${k}`, {
                                    encryptedData: F,
                                }),
                                    j(),
                                    (b = i.current) == null || b.click(),
                                    n(),
                                    P.fire({
                                        title: 'Tela actualizada',
                                        icon: 'success',
                                    });
                            } catch (F) {
                                const E = F,
                                    k =
                                        (D = E.response) == null
                                            ? void 0
                                            : D.status,
                                    x =
                                        (L = E.response) == null
                                            ? void 0
                                            : L.data;
                                console.log(F),
                                    R(
                                        k,
                                        'Error al actualizar la tela',
                                        x.error || x.message || ''
                                    );
                            }
                        });
                } catch (v) {
                    const f = v,
                        S = (N = f.response) == null ? void 0 : N.status,
                        b = (_ = f.response) == null ? void 0 : _.data;
                    R(
                        S,
                        'Error al actualizar la tela',
                        b.error || b.message || ''
                    );
                }
            },
            startDeleteFabric: async (c) => {
                var j, i;
                try {
                    const g = G({ Id: c }).replace(/\//g, '-');
                    await I.put(`/fabric/state/${g}`), a(gs(c)), n();
                } catch (C) {
                    const g = C,
                        N = (j = g.response) == null ? void 0 : j.status,
                        _ = (i = g.response) == null ? void 0 : i.data;
                    R(
                        N,
                        'Error al cambiar estado de la tela',
                        _.error || _.message || ''
                    );
                }
            },
            startSetActiveFabric: (c) => {
                a(js(c));
            },
            startResetActiveFabric: () => {
                a(Ns());
            },
        };
    },
    Os = () => {
        const [a, s] = u.useState({}),
            t = Q();
        return {
            order: a,
            startgetInvoice: async (r) => {
                try {
                    const { data: o } = await I.get(
                        `/buy/products/order/${parseInt(r || '0')}`
                    );
                    o.T_COMPRA.T_DETALLE_COMPRA.length === 0 && t(-1), s(o);
                } catch (o) {
                    t(-1), console.log(o);
                }
            },
        };
    },
    la = () => {
        const [a, s] = u.useState(!1),
            t = Q();
        return {
            reset: a,
            startSendEmail: async () => {
                P.fire({
                    title: 'Ingresa tu correo electrónico',
                    input: 'text',
                    inputAttributes: { autocapitalize: 'off' },
                    showCancelButton: !0,
                    confirmButtonText: 'Enviar',
                    showLoaderOnConfirm: !0,
                    preConfirm: async (n) => {
                        var d;
                        if (!de(n))
                            return P.showValidationMessage(
                                'Ingresa un correo valido'
                            );
                        try {
                            const m = G(n);
                            await I.post('/auth/forgot-password', {
                                encryptedData: m,
                            }),
                                P.fire({
                                    icon: 'success',
                                    title: 'Correo enviado',
                                    text: 'Revisa tu correo para continuar con el proceso',
                                });
                        } catch (m) {
                            const h =
                                (d = m.response) == null ? void 0 : d.data;
                            P.showValidationMessage(
                                `Error: ${
                                    h.Error || h.error || h.message || ''
                                }`
                            );
                        }
                    },
                    allowOutsideClick: () => !P.isLoading(),
                });
            },
            startResetPassword: async (n, d, m) => {
                var p;
                if (
                    n.password === void 0 ||
                    n.password === '' ||
                    n.passwordConfirmation === void 0 ||
                    n.passwordConfirmation === ''
                )
                    return P.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Debes ingresar una contraseña y confirmarla',
                    });
                if (n.password !== n.passwordConfirmation)
                    return P.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Las contraseñas no coinciden',
                    });
                try {
                    const h = G(n.password);
                    await I.post(`/auth/reset-password/${d}`, {
                        encryptedData: h,
                    }),
                        P.fire({
                            icon: 'success',
                            title: 'Contraseña actualizada',
                            text: 'Tu contraseña ha sido actualizada correctamente',
                        }),
                        s(!0),
                        m(),
                        setTimeout(function () {
                            window.close();
                        }, 3e4);
                } catch (h) {
                    const j = (p = h.response) == null ? void 0 : p.data;
                    P.fire({
                        icon: 'error',
                        title: 'Error',
                        text: `${j.Error || j.error || j.message || ''}`,
                    });
                }
            },
            startGetStatePassword: async (n) => {
                try {
                    const { data: d } = await I.get(
                            `/auth/state-password/${n}`
                        ),
                        { encripted: m } = d,
                        p = Te(m);
                    m || t('/');
                    const h = p.data || {},
                        { estado: c } = h;
                    c === !1 && t('/');
                } catch {
                    t('/');
                }
            },
        };
    },
    Rs = () => {
        const { image: a, changeImage: s } = Ls(),
            { imagen: t, titulo: l, categoria: r } = a;
        return e.jsxs('div', {
            className: 'banner animate__animated animate__fadeInLeft',
            children: [
                e.jsx('img', { src: t, alt: l, className: 'banner__img' }),
                e.jsx('i', {
                    onClick: () => s(),
                    className: 'fa fa-angle-left',
                    'aria-hidden': 'true',
                }),
                e.jsx('i', {
                    onClick: () => s(),
                    className: 'fa fa-angle-right',
                    'aria-hidden': 'true',
                }),
                e.jsxs('div', {
                    className: 'banner__copy ',
                    children: [
                        e.jsxs('span', {
                            className: 'category',
                            children: [
                                'Boda, ',
                                e.jsx('em', {
                                    className: 'bold-Orange',
                                    children: r,
                                }),
                            ],
                        }),
                        e.jsx('h1', {
                            className: 'banner__title',
                            children: l,
                        }),
                    ],
                }),
            ],
        });
    },
    Fs = () =>
        e.jsx('div', {
            className: 'video-content',
            children: e.jsx('div', {
                className: 'container',
                children: e.jsx('div', {
                    className: 'row',
                    children: e.jsx('div', {
                        className: 'col-lg-10 offset-lg-1',
                        children: e.jsxs('div', {
                            className: 'video-frame',
                            children: [
                                e.jsx('img', {
                                    src: '/assets/video-frame.jpg',
                                    alt: '',
                                }),
                                e.jsx('a', {
                                    href: 'https://www.youtube.com/watch?v=4bD3oEVvl7w',
                                    target: '_blank',
                                    children: e.jsx('i', {
                                        className: 'fa fa-play',
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
            }),
        }),
    ws = () =>
        e.jsxs(e.Fragment, {
            children: [
                e.jsx('div', {
                    className: 'video section',
                    children: e.jsx('div', {
                        className: 'container',
                        children: e.jsx('div', {
                            className: 'row',
                            children: e.jsx('div', {
                                className: 'col-lg-4 offset-lg-4',
                                children: e.jsxs('div', {
                                    className: 'section-heading text-center',
                                    children: [
                                        e.jsx('h6', { children: '| Video' }),
                                        e.jsx('h2', {
                                            children:
                                                'La diferencia de sentirse bien',
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                }),
                e.jsx(Fs, {}),
            ],
        }),
    Ms = () =>
        e.jsx('footer', {
            children: e.jsx('div', {
                className: 'container',
                children: e.jsx('div', {
                    className: 'col-lg-8',
                    children: e.jsx('p', {
                        children:
                            'Copyright © 2023 SATOVAR Co., Ltd. Todos los derechos reservados.',
                    }),
                }),
            }),
        }),
    ca = ({ Title: a }) =>
        e.jsx('div', {
            className: 'page-heading header-text',
            children: e.jsx('div', {
                className: 'container',
                children: e.jsx('div', {
                    className: 'row',
                    children: e.jsxs('div', {
                        className: 'col-lg-12',
                        children: [
                            e.jsxs('span', {
                                className: 'breadcrumb',
                                children: [
                                    e.jsx(B, { to: '/', children: 'SATOVAR' }),
                                    ' / ',
                                    a,
                                ],
                            }),
                            e.jsx('h3', { children: a }),
                        ],
                    }),
                }),
            }),
        }),
    ae = ({ Title: a }) => {
        const { CategoryActive: s, startCategoryActive: t } = oe();
        return e.jsx('li', {
            children: e.jsx(B, {
                to: '#!',
                'data-filter': '.sac',
                onClick: () => t(a),
                className: s === a ? 'is_active' : '',
                children: a,
            }),
        });
    },
    Us = () =>
        e.jsxs('ul', {
            className: 'properties-filter',
            children: [
                e.jsx(ae, {
                    Title: 'Mostrar todo',
                    OnAction: () => console.log('prueba'),
                }),
                e.jsx(ae, {
                    Title: 'Saco',
                    OnAction: () => console.log('prueba'),
                }),
                e.jsx(ae, {
                    Title: 'Pantalón',
                    OnAction: () => console.log('prueba'),
                }),
                e.jsx(ae, {
                    Title: 'Camisa',
                    OnAction: () => console.log('prueba'),
                }),
                e.jsx(ae, {
                    Title: 'Traje',
                    OnAction: () => console.log('prueba'),
                }),
                e.jsx(ae, {
                    Title: 'Chaleco',
                    OnAction: () => console.log('prueba'),
                }),
            ],
        }),
    Ze = ({
        id: a,
        nombre: s,
        precio: t,
        imagen: l,
        descripcion: r,
        color: o,
        tallas: n,
    }) => {
        const { startAddProduct: d, productscart: m } = ne();
        return (
            u.useEffect(() => {
                localStorage.setItem('cart', JSON.stringify(m));
            }, [m]),
            e.jsx('div', {
                className:
                    'col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 tra',
                children: e.jsxs('div', {
                    className: 'item',
                    children: [
                        e.jsx('a', {
                            href: '#!',
                            children: e.jsx('img', {
                                width: '250px',
                                height: '250px',
                                src: l,
                                alt: s,
                            }),
                        }),
                        e.jsx('span', { className: 'category', children: o }),
                        e.jsxs('h6', { children: ['₡', t] }),
                        e.jsx('h4', {
                            children: e.jsxs('a', {
                                href: 'property-details.html',
                                children: [s, ' '],
                            }),
                        }),
                        n.length > 0
                            ? e.jsx('div', {
                                  className: 'icon-button  ',
                                  children: e.jsxs(B, {
                                      onClick: () => {
                                          !m.map((p) => p.id).includes(a) &&
                                              d({
                                                  id: a,
                                                  nombre: s,
                                                  precio: t,
                                                  imagen: l,
                                                  descripcion: r,
                                                  cantidad: 1,
                                              });
                                      },
                                      to:
                                          (m.map((p) => p.id).includes(a) &&
                                              '/carrito') ||
                                          '',
                                      children: [
                                          e.jsx('i', {
                                              className:
                                                  (m
                                                      .map((p) => p.id)
                                                      .includes(a) &&
                                                      'fa fa-credit-card-alt') ||
                                                  'fa fa-shopping-cart',
                                              children: ' ',
                                          }),
                                          m.map((p) => p.id).includes(a)
                                              ? 'Agregado, ir al carrito'
                                              : 'Añadir al carrito',
                                      ],
                                  }),
                              })
                            : e.jsx('span', {
                                  className: 'text-danger',
                                  children: 'Producto Agotado',
                              }),
                    ],
                }),
            })
        );
    };
var Pe = ((a) => (
    (a[(a.S = 1)] = 'S'),
    (a[(a.M = 2)] = 'M'),
    (a[(a.L = 3)] = 'L'),
    (a[(a.XL = 4)] = 'XL'),
    (a[(a.XXL = 5)] = 'XXL'),
    (a[(a.PROPIAS = 6)] = 'PROPIAS'),
    a
))(Pe || {});
const Vs = ({ id: a, title: s, category: t, sizes: l, price: r, image: o }) => {
        const { startAddProduct: n, productscart: d } = ne();
        u.useEffect(() => {
            localStorage.setItem('cart', JSON.stringify(d));
        }, [d]),
            console.log(l);
        const m = Object.keys(Pe).filter((p) => !isNaN(Number(Pe[p])));
        return e.jsx(e.Fragment, {
            children: e.jsx('div', {
                className: 'col-lg-4 col-md-6',
                children: e.jsxs('div', {
                    className: 'item',
                    children: [
                        e.jsx('a', {
                            href: 'property-details.html',
                            children: e.jsx('img', {
                                width: '250px',
                                height: '250px',
                                src: o,
                                alt: s,
                            }),
                        }),
                        e.jsx('span', { className: 'category', children: t }),
                        e.jsxs('h6', { children: ['₡ ', r] }),
                        e.jsx('h4', {
                            children: e.jsxs('a', {
                                href: 'property-details.html',
                                children: [s, ' '],
                            }),
                        }),
                        e.jsxs('ul', {
                            children: [
                                e.jsxs('li', {
                                    children: [
                                        'Tallas disponibles:',
                                        ' ',
                                        e.jsx('span', {
                                            children:
                                                m == null
                                                    ? void 0
                                                    : m.map((p, h) =>
                                                          (l == null
                                                              ? void 0
                                                              : l.find(
                                                                    (c) =>
                                                                        (c ==
                                                                        null
                                                                            ? void 0
                                                                            : c
                                                                                  .T_TALLA
                                                                                  .CV_TALLA) ==
                                                                        p
                                                                )) !== void 0
                                                              ? p +
                                                                (h ===
                                                                m.length - 1
                                                                    ? ''
                                                                    : ' / ')
                                                              : ''
                                                      ),
                                        }),
                                    ],
                                }),
                                e.jsxs('li', {
                                    children: [
                                        'Disponibilidad: ',
                                        e.jsx('span', {
                                            children: 'Verificar en tienda',
                                        }),
                                    ],
                                }),
                                e.jsxs('li', {
                                    children: [
                                        'Duración del alquiler: ',
                                        e.jsx('span', {
                                            children: 'Fin de semana',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        l.length > 0
                            ? e.jsx('div', {
                                  className: 'icon-button',
                                  children: e.jsxs(B, {
                                      onClick: () =>
                                          n({
                                              id: a,
                                              nombre: s,
                                              precio: r,
                                              imagen: o,
                                              descripcion: '',
                                              cantidad: 1,
                                          }),
                                      to:
                                          (d.map((p) => p.id).includes(a) &&
                                              '/carrito') ||
                                          '',
                                      children: [
                                          e.jsx('i', {
                                              className:
                                                  (d
                                                      .map((p) => p.id)
                                                      .includes(a) &&
                                                      'fa fa-credit-card-alt') ||
                                                  'fa fa-shopping-cart',
                                          }),
                                          ' ',
                                          d.map((p) => p.id).includes(a)
                                              ? 'Agregado, ir al carrito'
                                              : 'Añadir al carrito',
                                      ],
                                  }),
                              })
                            : e.jsx('span', {
                                  className: 'text-danger',
                                  children: 'Producto Agotado',
                              }),
                    ],
                }),
            }),
        });
    },
    ks = ({ input: a, button: s, children: t = null }) => {
        const { onInputChange: l, formState: r } = V(),
            { startLogin: o, startGoogleSignIn: n } = te(),
            { email: d = '', password: m = '' } = r,
            { startSendEmail: p } = la();
        return e.jsxs(e.Fragment, {
            children: [
                e.jsxs('form', {
                    children: [
                        a.map((h, c) =>
                            e.jsxs(
                                'div',
                                {
                                    className: 'form-outline mb-4',
                                    children: [
                                        e.jsx('input', {
                                            onChange: (j) => l(j),
                                            type: h.type,
                                            id: h.id,
                                            name: h.id,
                                            value: h.id === 'email' ? d : m,
                                            className:
                                                'form-control mx-auto text-center w-50',
                                        }),
                                        e.jsx('label', {
                                            className: 'form-label',
                                            htmlFor: h.id,
                                            children: h.label,
                                        }),
                                    ],
                                },
                                c
                            )
                        ),
                        e.jsx(ia, {
                            type: s.type,
                            title: s.title,
                            onClick: (h) => o(d, m, h),
                        }),
                        e.jsx('br', {}),
                        e.jsxs('div', {
                            className: 'text-center',
                            children: [
                                e.jsx('p', { children: 'o ingrese con:' }),
                                e.jsx('button', {
                                    onClick: n,
                                    type: 'button',
                                    className: 'btn btn-link btn-floating mx-1',
                                    children: e.jsx('i', {
                                        className: 'fab fa-google',
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                e.jsx('button', {
                    onClick: p,
                    className: ' btn btn-link',
                    children: '¿Olvidaste tu contraseña?',
                }),
            ],
        });
    },
    Gs = ({ input: a, button: s, title: t, children: l }) =>
        e.jsx(e.Fragment, {
            children: e.jsx('section', {
                className: 'text-center',
                children: e.jsx('div', {
                    className: 'container',
                    children: e.jsx('div', {
                        className: 'row d-flex justify-content-center',
                        children: e.jsx('div', {
                            className: 'col-lg-8',
                            children: e.jsx('div', {
                                className: 'card shadow-5-strong',
                                style: {
                                    background: 'hsla(0, 0%, 100%, 0.8)',
                                    backdropFilter: 'blur(30px)',
                                    marginTop: '-25%',
                                },
                                children: e.jsxs('div', {
                                    className: 'card-body py-5 px-md-5',
                                    children: [
                                        e.jsxs('h2', {
                                            className: 'fw-bold mb-5',
                                            children: [
                                                'SATOVAR ',
                                                e.jsx('br', {}),
                                                ' ',
                                                e.jsx('br', {}),
                                                ' ',
                                                t,
                                            ],
                                        }),
                                        e.jsx(ks, {
                                            input: a,
                                            button: s,
                                            children: l || null,
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                }),
            }),
        }),
    ia = ({ type: a = Oe.orange, title: s, onClick: t, style: l }) =>
        e.jsx('button', {
            onClick: (r) => {
                t(r);
            },
            className: l || 'btn btn-primary btn-block mb-4',
            style:
                a === 'orange'
                    ? { background: '#F35525', border: '#F35525' }
                    : { background: '#6c757d', border: '#6c757d' },
            children: s,
        }),
    Bs = () =>
        e.jsx('div', {
            id: 'map',
            children: e.jsx('iframe', {
                src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.994863344234!2d-84.2148467544168!3d10.017281811747068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9c871fbddb3%3A0xb1f90fbc26bf36cb!2sProvincia%20de%20Alajuela%2C%20Alajuela!5e0!3m2!1ses-419!2scr!4v1702967002692!5m2!1ses-419!2scr',
                width: '100%',
                height: '500px',
                style: {
                    border: '0',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
                },
            }),
        }),
    da = () =>
        e.jsx('div', {
            className: 'p-5 bg-image',
            style: {
                backgroundImage:
                    "url('/assets/measures-a-man-hand-for-clothes.jpg')",
                height: '300px',
            },
        }),
    $s = () => {
        const { userGoogle: a, startCreateUser: s } = te(),
            t = {
                Nombre: '',
                Apellido1: '',
                Apellido2: '',
                Correo: '',
                Cedula: '',
                Direccion: '',
                Telefono: '',
                Clave: '',
            },
            {
                formState: l = {},
                onInputChange: r,
                onResetForm: o,
                setFormState: n,
            } = V(t);
        u.useEffect(() => {
            n({
                ...l,
                Nombre: (a == null ? void 0 : a.Nombre) || '',
                Apellido1: (a == null ? void 0 : a.Apellido1) || '',
                Apellido2: (a == null ? void 0 : a.Apellido2) || '',
                Correo: (a == null ? void 0 : a.Correo) || '',
            });
        }, [a]);
        const d = Q();
        return e.jsxs('form', {
            children: [
                e.jsxs('div', {
                    className: 'form-row row',
                    children: [
                        e.jsxs('div', {
                            className: ' col col-md-4 mb-3',
                            children: [
                                e.jsx('input', {
                                    onChange: r,
                                    type: 'text',
                                    className: 'form-control',
                                    value: l.Nombre,
                                    id: 'Nombre',
                                    name: 'Nombre',
                                    required: !0,
                                }),
                                e.jsx('label', {
                                    className: 'form-label',
                                    htmlFor: 'nombre',
                                    children: 'Nombre',
                                }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: ' col col-md-4 mb-3',
                            children: [
                                e.jsx('input', {
                                    onChange: r,
                                    type: 'text',
                                    className: 'form-control',
                                    id: 'Apellido1',
                                    value: l.Apellido1,
                                    required: !0,
                                    name: 'Apellido1',
                                }),
                                e.jsx('label', {
                                    className: 'form-label',
                                    htmlFor: 'apellido1',
                                    children: 'Primer apellido',
                                }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: 'col col-md-4 mb-3',
                            children: [
                                e.jsx('input', {
                                    onChange: r,
                                    type: 'text',
                                    className: 'form-control',
                                    id: 'Apellido2',
                                    value: l.Apellido2,
                                    name: 'Apellido2',
                                }),
                                ' ',
                                e.jsx('label', {
                                    className: 'form-label',
                                    htmlFor: 'apellido2',
                                    children: 'Segundo apellido',
                                }),
                            ],
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: 'form-outline mb-4',
                    children: [
                        e.jsx('input', {
                            onChange: r,
                            type: 'text',
                            id: 'Cedula',
                            value: l.Cedula,
                            name: 'Cedula',
                            className: 'form-control',
                        }),
                        e.jsx('label', {
                            className: 'form-label',
                            htmlFor: 'cedula',
                            children: 'Cédula',
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: 'form-outline mb-4',
                    children: [
                        e.jsx('input', {
                            onChange: r,
                            type: 'text',
                            id: 'Telefono',
                            value: l.Telefono,
                            name: 'Telefono',
                            className: 'form-control',
                        }),
                        e.jsx('label', {
                            className: 'form-label',
                            htmlFor: 'telefono',
                            children: 'Teléfono',
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: 'form-outline mb-4',
                    children: [
                        e.jsx('input', {
                            onChange: r,
                            type: 'text',
                            id: 'Direccion',
                            value: l.Direccion,
                            name: 'Direccion',
                            className: 'form-control',
                        }),
                        e.jsx('label', {
                            className: 'form-label',
                            htmlFor: 'direccion',
                            children: 'Dirección',
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: 'form-outline mb-4',
                    children: [
                        e.jsx('input', {
                            onChange: r,
                            type: 'email',
                            id: 'Correo',
                            name: 'Correo',
                            value: l.Correo,
                            className: 'form-control',
                        }),
                        e.jsx('label', {
                            className: 'form-label',
                            htmlFor: 'email',
                            children: 'Dirección de correo',
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: 'form-outline mb-4',
                    children: [
                        e.jsx('input', {
                            onChange: r,
                            type: 'password',
                            id: 'Clave',
                            name: 'Clave',
                            value: l.Clave,
                            className: a
                                ? 'd-none form-control'
                                : 'd-block form-control',
                        }),
                        e.jsx('label', {
                            className: a ? 'd-none' : 'd-block form-label',
                            htmlFor: 'password',
                            children: 'Contraseña',
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className:
                        ' m-auto d-flex justify-content-center align-items-center  flex-column w-25',
                    children: [
                        e.jsx('button', {
                            onClick: (m) =>
                                s(
                                    {
                                        Nombre: l.Nombre,
                                        Apellido1: l.Apellido1,
                                        Apellido2: l.Apellido2,
                                        Cedula: l.Cedula,
                                        Correo: l.Correo,
                                        Direccion: l.Direccion,
                                        Telefono: l.Telefono,
                                        Clave: l.Clave,
                                    },
                                    m,
                                    o
                                ),
                            type: 'submit',
                            className: 'btn btn-secondary btn-block mb-4',
                            children: 'Registrar',
                        }),
                        e.jsx('button', {
                            onClick: () => d(-1),
                            className: 'btn btn-secondary btn-block',
                            children: 'Atrás',
                        }),
                    ],
                }),
            ],
        });
    },
    Je = () =>
        e.jsx(e.Fragment, {
            children: e.jsx('div', {
                className: 'container_loader',
                children: e.jsx('iframe', {
                    src: 'https://lottie.host/embed/94a77c29-f7cd-420a-8e60-cd446a2aa32f/xrOZ5BzdD4.json',
                }),
            }),
        }),
    zs = {
        cinturaCamisa: '',
        pechocamisa: '',
        caderaCamisa: '',
        espaldaCamisa: '',
        hombroCamisa: '',
        cuelloCamisa: '',
    },
    qs = () => {
        var o, n, d, m, p, h;
        const { startSaveMeasureShirtTop: a, measureShirt: s } = me(),
            { formState: t, onInputChange: l, setFormState: r } = V(zs);
        return (
            u.useEffect(() => {
                a(t);
            }, [t]),
            u.useEffect(() => {
                var c, j, i, C, g, N;
                r({
                    ...t,
                    pechocamisa:
                        (c = s == null ? void 0 : s.medida) == null
                            ? void 0
                            : c.CI_PECHO,
                    cinturaCamisa:
                        (j = s == null ? void 0 : s.medida) == null
                            ? void 0
                            : j.CI_CINTURA,
                    caderaCamisa:
                        (i = s == null ? void 0 : s.medida) == null
                            ? void 0
                            : i.CI_CADERA,
                    espaldaCamisa:
                        (C = s == null ? void 0 : s.medida) == null
                            ? void 0
                            : C.CI_ESPALDA,
                    hombroCamisa:
                        (g = s == null ? void 0 : s.medida) == null
                            ? void 0
                            : g.CI_HOMBRO,
                    cuelloCamisa:
                        (N = s == null ? void 0 : s.medida) == null
                            ? void 0
                            : N.CI_CUELLO,
                });
            }, [s]),
            e.jsxs('form', {
                children: [
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Pecho:',
                            }),
                            e.jsx('input', {
                                type: 'number',
                                className: 'form-control',
                                id: 'pechocamisa',
                                disabled: !!(
                                    (o = s.medida) != null && o.CI_PECHO
                                ),
                                value: t.pechocamisa,
                                onChange: l,
                                name: 'pechocamisa',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Cintura:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (n = s.medida) != null && n.CI_CINTURA
                                ),
                                type: 'number',
                                onChange: l,
                                value: t.cinturaCamisa,
                                className: 'form-control',
                                id: 'cinturacamisa',
                                name: 'cinturaCamisa',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Cadera:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (d = s.medida) != null && d.CI_CADERA
                                ),
                                type: 'number',
                                onChange: l,
                                value: t.caderaCamisa,
                                className: 'form-control',
                                id: 'caderacamisa',
                                name: 'caderaCamisa',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Espalda:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (m = s.medida) != null && m.CI_ESPALDA
                                ),
                                type: 'number',
                                className: 'form-control',
                                id: 'espaldaCamisa',
                                value: t.espaldaCamisa,
                                onChange: l,
                                name: 'espaldaCamisa',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Hombro:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (p = s.medida) != null && p.CI_HOMBRO
                                ),
                                type: 'number',
                                className: 'form-control',
                                id: 'hombrocamisa',
                                value: t.hombroCamisa,
                                onChange: l,
                                name: 'hombroCamisa',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Cuello:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (h = s.medida) != null && h.CI_CUELLO
                                ),
                                type: 'number',
                                className: 'form-control',
                                id: 'cuelloCamisa',
                                value: t.cuelloCamisa,
                                onChange: l,
                                name: 'cuelloCamisa',
                                required: !0,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    Hs = () => {
        var o, n, d, m, p, h, c, j, i, C, g, N;
        const { formState: a, onInputChange: s, setFormState: t } = V(),
            { startSaveMeasureShirtLarge: l, measureShirt: r } = me();
        return (
            u.useEffect(() => {
                l(a);
            }, [a]),
            u.useEffect(() => {
                var _;
                t({
                    ...a,
                    LargoMangaCamisa:
                        (_ = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : _.CI_L_MANGA,
                });
            }, [r]),
            e.jsxs('form', {
                children: [
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'LargoMangaCamisa',
                                className: 'form-label',
                                children: 'Largo manga:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (o = r.medida) != null && o.CI_L_MANGA
                                ),
                                type: 'number',
                                className: 'form-control',
                                onChange: s,
                                value:
                                    (n = r.medida) != null && n.CI_L_MANGA
                                        ? (d = r.medida) == null
                                            ? void 0
                                            : d.CI_L_MANGA
                                        : a.LargoMangaCamisa,
                                id: 'LargoMangaCamisa',
                                name: 'LargoMangaCamisa',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'LargoTotalCamisa',
                                className: 'form-label',
                                children: 'Largo total:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (m = r.medida) != null && m.CI_L_TOTAL
                                ),
                                type: 'number',
                                className: 'form-control',
                                id: 'LargoTotalCamisa',
                                onChange: s,
                                name: 'LargoTotalCamisa',
                                value:
                                    (p = r.medida) != null && p.CI_L_TOTAL
                                        ? (h = r.medida) == null
                                            ? void 0
                                            : h.CI_L_TOTAL
                                        : a.LargoTotalCamisa,
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'Brazo',
                                className: 'form-label',
                                children: 'Brazo:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (c = r.medida) != null && c.CI_BRAZO
                                ),
                                type: 'number',
                                className: 'form-control',
                                id: 'BrazoCamisa',
                                onChange: s,
                                name: 'BrazoCamisa',
                                value:
                                    (j = r.medida) != null && j.CI_BRAZO
                                        ? (i = r.medida) == null
                                            ? void 0
                                            : i.CI_BRAZO
                                        : a.BrazoCamisa,
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'Pu;oCamisa',
                                className: 'form-label',
                                children: 'Puño:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (C = r.medida) != null && C.CI_PUNO
                                ),
                                type: 'number',
                                className: 'form-control',
                                id: 'PunoCamisa',
                                onChange: s,
                                name: 'PunoCamisa',
                                value:
                                    (g = r.medida) != null && g.CI_PUNO
                                        ? (N = r.medida) == null
                                            ? void 0
                                            : N.CI_PUNO
                                        : a.PunoCamisa,
                                required: !0,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    Ws = () => {
        var o, n, d;
        const [a, s] = u.useState(''),
            { startSaveMeasureShirtDetails: t, measureShirt: l } = me();
        u.useEffect(() => {
            t(a);
        }, [a]);
        const r = ({ target: m }) => {
            const { value: p } = m;
            s(p);
        };
        return e.jsx('form', {
            children: e.jsxs('div', {
                className: 'mb-3',
                children: [
                    e.jsx('label', {
                        htmlFor: 'DetallesCamisa',
                        className: 'form-label',
                        children: 'Detalles adicionales:',
                    }),
                    e.jsx('textarea', {
                        disabled: !!((o = l.medida) != null && o.CV_DETALLES),
                        value:
                            (n = l.medida) != null && n.CV_DETALLES
                                ? (d = l.medida) == null
                                    ? void 0
                                    : d.CV_DETALLES
                                : a,
                        onChange: r,
                        className: 'form-control',
                        id: 'DetallesCamisa',
                        name: 'DetallesCamisa',
                        rows: 4,
                    }),
                ],
            }),
        });
    },
    Xs = () => {
        const {
            salesTotal: a,
            startGetSales: s,
            ordersPending: t,
            startGetOrdersPending: l,
            ordersCompleted: r,
            startGetOrdersCompleted: o,
        } = na();
        return (
            u.useEffect(() => {
                s(), l(), o();
            }, []),
            e.jsx('div', {
                className: 'team-grid',
                children: e.jsxs('div', {
                    className: 'container',
                    children: [
                        e.jsxs('div', {
                            className: 'intro',
                            children: [
                                e.jsx('h2', {
                                    className: 'text-center',
                                    children: 'Ventas ',
                                }),
                                e.jsx('p', {
                                    className: 'text-center',
                                    children:
                                        'Actualización en tiempo real de los ingresos y usuarios de la plataforma',
                                }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: 'row people',
                            style: { backgroundImage: 'url()' },
                            children: [
                                e.jsx('div', {
                                    className: 'col-md-4 col-lg-3 item ',
                                    children: e.jsx(ge, {
                                        Title: 'Ingresos',
                                        valor: +a.total_ingresos,
                                        icon: ['fa fa-money', 'fa fa-dollar'],
                                    }),
                                }),
                                e.jsx('div', {
                                    className: 'col-md-4 col-lg-3 item ',
                                    children: e.jsx(ge, {
                                        Title: 'Pedidos actuales',
                                        valor: +t.CantidadPedidos,
                                        icon: [
                                            'fa fa-shopping-cart',
                                            'fa fa-box',
                                        ],
                                    }),
                                }),
                                e.jsx('div', {
                                    className: 'col-md-4 col-lg-3 item ',
                                    children: e.jsx(ge, {
                                        Title: 'Pedidos completados',
                                        valor: +r.CantidadPedidos,
                                        icon: ['fa fa-check', 'fa fa-shop'],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    },
    ge = ({ Title: a, valor: s, icon: t }) =>
        e.jsx('article', {
            children: e.jsx('div', {
                className: 'box box-color1 animate__bounceIn',
                style: { backgroundImage: 'url()' },
                children: e.jsxs('div', {
                    className: 'cover',
                    children: [
                        e.jsx('h3', { className: 'name', children: a }),
                        e.jsxs('p', {
                            className: 'title',
                            children: [
                                a.includes('Ingresos') ? '₡' : '',
                                ' ',
                                s,
                            ],
                        }),
                        e.jsxs('div', {
                            className: 'social',
                            children: [
                                e.jsx('a', {
                                    href: '#',
                                    children: e.jsx('i', { className: t[0] }),
                                }),
                                e.jsx('a', { href: '#' }),
                                e.jsx('a', {
                                    href: '#',
                                    children: e.jsx('i', { className: t[1] }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    Ke = ({ title: a, series: s, xAxis: t }) => {
        const l = u.useRef(null);
        return (
            u.useEffect(() => {
                const r = Le(l.current);
                return (
                    r.setOption({
                        title: { left: 'center', text: a },
                        color: ['#ee626b'],
                        toolbox: {
                            show: !0,
                            feature: {
                                mark: { show: !0 },
                                saveAsImage: { show: !0 },
                            },
                        },
                        tooltip: {},
                        xAxis: { data: [...t] },
                        yAxis: {},
                        series: [s],
                    }),
                    () => {
                        r.dispose();
                    }
                );
            }, [s]),
            e.jsx('div', { ref: l, style: { width: '100%', height: '400px' } })
        );
    },
    Ys = () => {
        const {
            salesYear: a,
            startGetSalesYear: s,
            salesMonth: t,
            startGetSalesMonth: l,
            productMostSale: r,
            startGetProductMostSale: o,
            startGetFabricMostSale: n,
            fabricMostSale: d,
        } = na();
        return (
            u.useEffect(() => {
                l(), s(), o(), n();
            }, []),
            e.jsxs('div', {
                className: 'container-graficas',
                children: [
                    e.jsxs('div', {
                        className: 'row',
                        children: [
                            e.jsx('div', {
                                className: 'col',
                                children: e.jsx(Ke, {
                                    title: 'Ventas por mes',
                                    xAxis: [
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
                                    ],
                                    series: {
                                        name: 'Ventas',
                                        type: We.line,
                                        data: [
                                            parseFloat(
                                                t == null ? void 0 : t.ENERO
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.FEBRERO
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.MARZO
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.ABRIL
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.MAYO
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.JUNIO
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.JULIO
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.AGOSTO
                                            ),
                                            parseFloat(
                                                t == null
                                                    ? void 0
                                                    : t.SEPTIEMBRE
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.OCTUBRE
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.NOVIEMBRE
                                            ),
                                            parseFloat(
                                                t == null ? void 0 : t.DICIEMBRE
                                            ),
                                        ],
                                    },
                                }),
                            }),
                            e.jsx('div', {
                                className: 'col',
                                children: e.jsx(Ke, {
                                    title: 'Ventas por año',
                                    xAxis: [...a.map((m) => m.ANIO)],
                                    series: {
                                        name: 'Ventas',
                                        type: We.bar,
                                        data: [
                                            ...a.map((m) =>
                                                parseFloat(m.VALOR)
                                            ),
                                        ],
                                    },
                                }),
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'row',
                        children: [
                            e.jsx('div', {
                                className: 'col',
                                children: e.jsx(Zs, {
                                    title: 'Productos que mas se venden',
                                    data: [...r],
                                }),
                            }),
                            e.jsx('div', {
                                className: 'col',
                                children: e.jsx(Js, {
                                    title: 'Telas que mas se utilizan',
                                    data: [...d],
                                }),
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    Zs = ({ data: a, title: s }) => {
        const t = u.useRef(null);
        return (
            u.useEffect(() => {
                const l = Le(t.current);
                return (
                    l.setOption({
                        title: { left: 'center', text: s },
                        tooltip: { trigger: 'item' },
                        toolbox: {
                            show: !0,
                            feature: {
                                mark: { show: !0 },
                                saveAsImage: { show: !0 },
                            },
                        },
                        series: [{ type: 'pie', data: a }],
                    }),
                    () => {
                        l.dispose();
                    }
                );
            }, [a]),
            e.jsx('div', { ref: t, style: { width: '100%', height: '400px' } })
        );
    },
    Js = ({ data: a, title: s }) => {
        const t = u.useRef(null);
        return (
            u.useEffect(() => {
                const l = Le(t.current);
                return (
                    l.setOption({
                        title: { left: 'center', text: s },
                        legend: { top: 'bottom' },
                        tooltip: { trigger: 'item' },
                        toolbox: {
                            show: !0,
                            feature: {
                                mark: { show: !0 },
                                saveAsImage: { show: !0 },
                            },
                        },
                        series: [
                            {
                                startAngle: 180,
                                endAngle: 360,
                                name: 'Nightingale Chart',
                                type: 'pie',
                                roseType: 'area',
                                itemStyle: { borderRadius: 8 },
                                data: a,
                            },
                        ],
                    }),
                    () => {
                        l.dispose();
                    }
                );
            }, [a]),
            e.jsx('div', { ref: t, style: { width: '100%', height: '400px' } })
        );
    },
    Ks = () => {
        const {
                orders: a,
                startGetAllOrders: s,
                startUpdateStatusOrder: t,
            } = Fe(),
            { formState: l, setFormState: r } = V(),
            o = ({ target: n }, d) => {
                const { name: m, value: p } = n;
                r({ ...l, [m]: p }), t(d, +p);
            };
        return (
            u.useEffect(() => {
                s();
            }, []),
            u.useEffect(() => {
                r((n) => {
                    const d = { ...n };
                    return (
                        a.forEach((m) => {
                            d[`Estado-${m.CI_ID_PEDIDO}`] =
                                m.CI_ID_ESTADO.toString();
                        }),
                        d
                    );
                });
            }, [a]),
            e.jsxs('div', {
                className: 'pedidos ',
                children: [
                    e.jsxs('div', {
                        className: 'container mt-3',
                        children: [
                            e.jsx('h2', { children: 'Lista de pedidos' }),
                            e.jsx('hr', {}),
                        ],
                    }),
                    e.jsx('div', {
                        className: ' mt-3 scrollable-container',
                        children: e.jsxs('table', {
                            className: 'table',
                            children: [
                                e.jsx('thead', {
                                    children: e.jsxs('tr', {
                                        children: [
                                            e.jsx('th', {
                                                children: 'N° Pedido',
                                            }),
                                            e.jsx('th', { children: 'Cédula' }),
                                            e.jsx('th', { children: 'Nombre' }),
                                            e.jsx('th', {
                                                children: 'Apellido',
                                            }),
                                            e.jsx('th', {
                                                children: 'Teléfono',
                                            }),
                                            e.jsx('th', { children: 'Lugar' }),
                                            e.jsx('th', { children: 'Total' }),
                                            e.jsx('th', {
                                                children: 'Fecha de entrega',
                                            }),
                                            e.jsx('th', { children: 'Estado' }),
                                        ],
                                    }),
                                }),
                                e.jsx('tbody', {
                                    children:
                                        a == null
                                            ? void 0
                                            : a.map((n) => {
                                                  var d,
                                                      m,
                                                      p,
                                                      h,
                                                      c,
                                                      j,
                                                      i,
                                                      C,
                                                      g,
                                                      N,
                                                      _,
                                                      v;
                                                  return (
                                                      n.CI_ID_ESTADO === 1 &&
                                                      e.jsxs(
                                                          'tr',
                                                          {
                                                              className: Ss(
                                                                  (m =
                                                                      (d =
                                                                          n.T_COMPRA) ==
                                                                      null
                                                                          ? void 0
                                                                          : d
                                                                                .T_DETALLE_COMPRA[0]) ==
                                                                      null
                                                                      ? void 0
                                                                      : m.CF_FECHA_ENTREGA
                                                              ),
                                                              children: [
                                                                  e.jsx('td', {
                                                                      children:
                                                                          e.jsx(
                                                                              B,
                                                                              {
                                                                                  to: `/pedido/${
                                                                                      n ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : n.CI_ID_PEDIDO
                                                                                  }`,
                                                                                  children:
                                                                                      n ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : n.CI_ID_PEDIDO,
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          e.jsx(
                                                                              B,
                                                                              {
                                                                                  to: `/perfil/${
                                                                                      (p =
                                                                                          n ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : n.T_COMPRA) ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : p
                                                                                                .T_USUARIO
                                                                                                .CV_CEDULA
                                                                                  }`,
                                                                                  className:
                                                                                      'enlace-perfil',
                                                                                  children:
                                                                                      (h =
                                                                                          n ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : n.T_COMPRA) ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : h
                                                                                                .T_USUARIO
                                                                                                .CV_CEDULA,
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          (j =
                                                                              (c =
                                                                                  n ==
                                                                                  null
                                                                                      ? void 0
                                                                                      : n.T_COMPRA) ==
                                                                              null
                                                                                  ? void 0
                                                                                  : c.T_USUARIO) ==
                                                                          null
                                                                              ? void 0
                                                                              : j.CV_NOMBRE,
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          (i =
                                                                              n ==
                                                                              null
                                                                                  ? void 0
                                                                                  : n.T_COMPRA) ==
                                                                          null
                                                                              ? void 0
                                                                              : i
                                                                                    .T_USUARIO
                                                                                    .CV_APELLIDO1,
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          (C =
                                                                              n ==
                                                                              null
                                                                                  ? void 0
                                                                                  : n.T_COMPRA) ==
                                                                          null
                                                                              ? void 0
                                                                              : C
                                                                                    .T_USUARIO
                                                                                    .CV_TELEFONO,
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          (g =
                                                                              n ==
                                                                              null
                                                                                  ? void 0
                                                                                  : n.T_COMPRA) ==
                                                                          null
                                                                              ? void 0
                                                                              : g
                                                                                    .T_USUARIO
                                                                                    .CV_DIRECCION,
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              '₡ ',
                                                                              (N =
                                                                                  n ==
                                                                                  null
                                                                                      ? void 0
                                                                                      : n.T_COMPRA) ==
                                                                              null
                                                                                  ? void 0
                                                                                  : N.CD_TOTAL,
                                                                          ],
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          ((v =
                                                                              (_ =
                                                                                  n ==
                                                                                  null
                                                                                      ? void 0
                                                                                      : n.T_COMPRA) ==
                                                                              null
                                                                                  ? void 0
                                                                                  : _
                                                                                        .T_DETALLE_COMPRA[0]) ==
                                                                          null
                                                                              ? void 0
                                                                              : v.CF_FECHA_ENTREGA.split(
                                                                                    'T'
                                                                                )[0]) ||
                                                                          'No hay fecha',
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          e.jsxs(
                                                                              'select',
                                                                              {
                                                                                  onChange:
                                                                                      (
                                                                                          f
                                                                                      ) =>
                                                                                          o(
                                                                                              f,
                                                                                              n.CI_ID_PEDIDO
                                                                                          ),
                                                                                  name: `Estado-${
                                                                                      n ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : n.CI_ID_PEDIDO
                                                                                  }`,
                                                                                  id: `Estado-${
                                                                                      n ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : n.CI_ID_PEDIDO
                                                                                  }`,
                                                                                  value: l[
                                                                                      `Estado-${
                                                                                          n ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : n.CI_ID_PEDIDO
                                                                                      }`
                                                                                  ],
                                                                                  children:
                                                                                      [
                                                                                          e.jsx(
                                                                                              'option',
                                                                                              {
                                                                                                  value: 1,
                                                                                                  children:
                                                                                                      'Pendiente',
                                                                                              }
                                                                                          ),
                                                                                          e.jsx(
                                                                                              'option',
                                                                                              {
                                                                                                  value: 2,
                                                                                                  children:
                                                                                                      'Completado',
                                                                                              }
                                                                                          ),
                                                                                          e.jsx(
                                                                                              'option',
                                                                                              {
                                                                                                  value: 3,
                                                                                                  children:
                                                                                                      'En proceso',
                                                                                              }
                                                                                          ),
                                                                                      ],
                                                                              }
                                                                          ),
                                                                  }),
                                                              ],
                                                          },
                                                          n == null
                                                              ? void 0
                                                              : n.CI_ID_PEDIDO
                                                      )
                                                  );
                                              }),
                                }),
                            ],
                        }),
                    }),
                ],
            })
        );
    },
    Qs = () => {
        var o, n, d;
        const { formState: a, onInputChange: s, setFormState: t } = V(),
            { startSaveMeasureWaistcoatTop: l, measureWaistcoat: r } = he();
        return (
            u.useEffect(() => {
                l(a);
            }, [a]),
            u.useEffect(() => {
                var m, p, h;
                t({
                    ...a,
                    pechoChaleco:
                        (m = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : m.CI_PECHO,
                    CinturaChaleco:
                        (p = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : p.CI_CINTURA,
                    CaderaChaleco:
                        (h = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : h.CI_CADERA,
                });
            }, [r]),
            e.jsxs('form', {
                children: [
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Pecho:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (o = r.medida) != null && o.CI_PECHO
                                ),
                                onChange: s,
                                value: a.pechoChaleco,
                                type: 'number',
                                className: 'form-control',
                                id: 'pechoChaleco',
                                name: 'pechoChaleco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Cintura:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (n = r.medida) != null && n.CI_CINTURA
                                ),
                                onChange: s,
                                value: a.CinturaChaleco,
                                type: 'number',
                                className: 'form-control',
                                id: 'CinturaChaleco',
                                name: 'CinturaChaleco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'headingTopShirt',
                                className: 'form-label',
                                children: 'Cadera:',
                            }),
                            e.jsx('input', {
                                disabled: !!(
                                    (d = r.medida) != null && d.CI_CADERA
                                ),
                                onChange: s,
                                value: a.CaderaChaleco,
                                type: 'number',
                                className: 'form-control',
                                id: 'CaderaChaleco',
                                name: 'CaderaChaleco',
                                required: !0,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    et = () => {
        var o, n;
        const { formState: a, onInputChange: s, setFormState: t } = V(),
            { startSaveMeasureWaistcoatLarge: l, measureWaistcoat: r } = he();
        return (
            u.useEffect(() => {
                l(a);
            }, [a]),
            u.useEffect(() => {
                var d;
                t({
                    ...a,
                    LargoTotalChaleco:
                        (d = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : d.CI_L_TOTAL,
                });
            }, [r]),
            e.jsx('form', {
                children: e.jsxs('div', {
                    className: 'mb-3',
                    children: [
                        e.jsx('label', {
                            htmlFor: 'LargoTotalCamisa',
                            className: 'form-label',
                            children: 'Largo total:',
                        }),
                        e.jsx('input', {
                            onChange: s,
                            disabled: !!(
                                (o = r.medida) != null && o.CI_L_TOTAL
                            ),
                            value:
                                ((n = r.medida) == null
                                    ? void 0
                                    : n.CI_L_TOTAL) || a.LargoTotalCamisa,
                            type: 'number',
                            className: 'form-control',
                            id: 'LargoTotalCamisa',
                            name: 'LargoTotalChaleco',
                            required: !0,
                        }),
                    ],
                }),
            })
        );
    },
    at = () => {
        var o, n;
        const [a, s] = u.useState(''),
            { startSaveMeasureWaistcoatDetails: t, measureWaistcoat: l } = he();
        u.useEffect(() => {
            t(a);
        }, [a]);
        const r = ({ target: d }) => {
            const { value: m } = d;
            s(m);
        };
        return e.jsx('form', {
            children: e.jsxs('div', {
                className: 'mb-3',
                children: [
                    e.jsx('label', {
                        htmlFor: 'DetallesCamisa',
                        className: 'form-label',
                        children: 'Detalles adicionales:',
                    }),
                    e.jsx('input', {
                        disabled: !!((o = l.medida) != null && o.CV_DETALLES),
                        onChange: r,
                        value:
                            ((n = l.medida) == null ? void 0 : n.CV_DETALLES) ||
                            a,
                        type: 'text',
                        className: 'form-control',
                        id: 'DetallesCamisa',
                        name: 'DetallesCamisa',
                    }),
                ],
            }),
        });
    },
    st = {
        Catalogo: 1,
        Categoria: '1',
        Foto: '',
        Nombre: '',
        Precio: '',
        Tela: '1',
        StyleInitial: !1,
        'Cantidad PROPIAS': '999999999',
    },
    tt = () => {
        const {
                formState: a,
                onInputChange: s,
                onResetForm: t,
                setFormState: l,
            } = V(st),
            {
                startGetInfoProduct: r,
                size: o,
                category: n,
                style: d,
                fabric: m,
                startCreateProduct: p,
                products: h,
            } = Re();
        u.useEffect(() => {
            var i, C;
            t(),
                l({
                    ...a,
                    Nombre: '',
                    FotoProductoUpdate: '',
                    Categoria: `${
                        ((i = n == null ? void 0 : n.at(0)) == null
                            ? void 0
                            : i.CI_ID_CATEGORIA) || 1
                    }`,
                    Tela: `${
                        (C = m == null ? void 0 : m.at(0)) == null
                            ? void 0
                            : C.CI_ID_TELA
                    }`,
                    Precio: '',
                    Catalogo: '1',
                    ...o.reduce(
                        (g, N) => (
                            +(N == null ? void 0 : N.CI_ID_TALLA) == 6
                                ? (g[
                                      `Cantidad ${
                                          N == null ? void 0 : N.CV_TALLA
                                      }`
                                  ] = '99999999')
                                : (g[
                                      `Cantidad ${
                                          N == null ? void 0 : N.CV_TALLA
                                      }`
                                  ] = ''),
                            g
                        ),
                        {}
                    ),
                }),
                document
                    .querySelectorAll('input[type=checkbox]')
                    .forEach((g) => {
                        g.checked = !1;
                    });
        }, [h]);
        const c = u.useRef(null),
            j = u.useRef(null);
        return (
            u.useEffect(() => {
                r();
            }, []),
            e.jsx('div', {
                className: 'modal fade',
                id: 'register-product',
                tabIndex: -1,
                role: 'dialog',
                'aria-labelledby': 'exampleModalCenterTitle',
                'aria-hidden': 'true',
                children: e.jsx('div', {
                    className: 'modal-dialog d-flex justify-content-center ',
                    children: e.jsxs('div', {
                        className: 'modal-content w-100',
                        children: [
                            e.jsxs('div', {
                                className: 'modal-header text-center',
                                children: [
                                    e.jsx('h5', {
                                        className: 'modal-title text-center ',
                                        id: 'exampleModalLabel2',
                                        children: 'Registro de productos',
                                    }),
                                    e.jsx('button', {
                                        ref: c,
                                        type: 'button',
                                        className: 'btn-close',
                                        'data-dismiss': 'modal',
                                        'aria-label': 'Close',
                                    }),
                                ],
                            }),
                            e.jsx('div', {
                                className: 'row justify-content-center',
                                children: e.jsx('div', {
                                    className: 'col-12 col-md-8 col-lg-6',
                                    children: e.jsx('div', {
                                        className: 'form-ingreso p-3',
                                        children: e.jsxs('form', {
                                            onSubmit: (i) => i.preventDefault(),
                                            action: '',
                                            children: [
                                                e.jsxs('div', {
                                                    className: 'mb-3 mt-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor: 'Nombre',
                                                            className:
                                                                'form-label',
                                                            children: 'Nombre:',
                                                        }),
                                                        e.jsx('input', {
                                                            onChange: s,
                                                            value: a.Nombre,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Nombre',
                                                            placeholder:
                                                                'Nombre',
                                                            name: 'Nombre',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3 mt-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor: 'Foto',
                                                            className:
                                                                'form-label',
                                                            children: 'Foto',
                                                        }),
                                                        e.jsx('input', {
                                                            value: a.Foto,
                                                            onChange: s,
                                                            type: 'file',
                                                            accept: 'image/*',
                                                            className:
                                                                'form-control-sm',
                                                            id: 'Foto',
                                                            placeholder:
                                                                'Arrastre o busque una foto',
                                                            name: 'Foto',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor:
                                                                'Categoria',
                                                            className:
                                                                'form-label',
                                                            children:
                                                                'Categoría:',
                                                        }),
                                                        e.jsx('select', {
                                                            onChange: s,
                                                            value: a.Categoria,
                                                            name: 'Categoria',
                                                            id: 'Categoria',
                                                            children: n.map(
                                                                (i) =>
                                                                    e.jsx(
                                                                        'option',
                                                                        {
                                                                            value:
                                                                                i ==
                                                                                null
                                                                                    ? void 0
                                                                                    : i.CI_ID_CATEGORIA,
                                                                            children:
                                                                                i ==
                                                                                null
                                                                                    ? void 0
                                                                                    : i.CV_DESCRIPCION,
                                                                        },
                                                                        i ==
                                                                            null
                                                                            ? void 0
                                                                            : i.CI_ID_CATEGORIA
                                                                    )
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3 mt-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            className:
                                                                'form-label',
                                                            children: 'Estilo:',
                                                        }),
                                                        e.jsx('br', {}),
                                                        d.map((i) =>
                                                            e.jsxs(e.Fragment, {
                                                                children: [
                                                                    e.jsxs(
                                                                        'label',
                                                                        {
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'input',
                                                                                        {
                                                                                            ref: j,
                                                                                            onChange:
                                                                                                s,
                                                                                            type: 'checkbox',
                                                                                            name: `style-${
                                                                                                i ==
                                                                                                null
                                                                                                    ? void 0
                                                                                                    : i.CV_DESCRIPCION
                                                                                            }`,
                                                                                            id: `style-${
                                                                                                i ==
                                                                                                null
                                                                                                    ? void 0
                                                                                                    : i.CV_DESCRIPCION
                                                                                            }`,
                                                                                            value:
                                                                                                i ==
                                                                                                null
                                                                                                    ? void 0
                                                                                                    : i.CI_ID_ESTILO,
                                                                                        }
                                                                                    ),
                                                                                    ' ',
                                                                                    i ==
                                                                                    null
                                                                                        ? void 0
                                                                                        : i.CV_DESCRIPCION,
                                                                                ],
                                                                        },
                                                                        i ==
                                                                            null
                                                                            ? void 0
                                                                            : i.CI_ID_ESTILO
                                                                    ),
                                                                    e.jsx(
                                                                        'br',
                                                                        {}
                                                                    ),
                                                                ],
                                                            })
                                                        ),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor:
                                                                'TelaRegistro',
                                                            className:
                                                                'form-label',
                                                            children: 'Tela:',
                                                        }),
                                                        e.jsx('select', {
                                                            id: 'TelaRegistro',
                                                            onChange: s,
                                                            name: 'Tela',
                                                            children: m.map(
                                                                (i) =>
                                                                    e.jsx(
                                                                        'option',
                                                                        {
                                                                            value:
                                                                                i ==
                                                                                null
                                                                                    ? void 0
                                                                                    : i.CI_ID_TELA,
                                                                            children:
                                                                                i ==
                                                                                null
                                                                                    ? void 0
                                                                                    : i.CV_NOMBRE,
                                                                        },
                                                                        i ==
                                                                            null
                                                                            ? void 0
                                                                            : i.CI_ID_TELA
                                                                    )
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className:
                                                        'mb-3 mt-3 d-flex  flex-column ',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor:
                                                                'TallasRegistro',
                                                            className:
                                                                'form-label',
                                                            children:
                                                                'Tallas disponibles:',
                                                        }),
                                                        e.jsx('br', {}),
                                                        o.map((i) =>
                                                            e.jsx(e.Fragment, {
                                                                children:
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'label',
                                                                                        {
                                                                                            style: {
                                                                                                width: '50px',
                                                                                            },
                                                                                            children:
                                                                                                i.CI_ID_TALLA ===
                                                                                                6
                                                                                                    ? ''
                                                                                                    : i ==
                                                                                                      null
                                                                                                    ? void 0
                                                                                                    : i.CV_TALLA,
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'input',
                                                                                        {
                                                                                            id: `Cantidad ${
                                                                                                i ==
                                                                                                null
                                                                                                    ? void 0
                                                                                                    : i.CV_TALLA
                                                                                            }`,
                                                                                            onChange:
                                                                                                s,
                                                                                            value: a[
                                                                                                `Cantidad ${
                                                                                                    i ==
                                                                                                    null
                                                                                                        ? void 0
                                                                                                        : i.CV_TALLA
                                                                                                }`
                                                                                            ],
                                                                                            type: 'text',
                                                                                            style: {},
                                                                                            className:
                                                                                                i.CI_ID_TALLA ===
                                                                                                6
                                                                                                    ? 'd-none'
                                                                                                    : 'cantidad-talla p-2  justify-content-end ',
                                                                                            placeholder:
                                                                                                '',
                                                                                            name: `Cantidad ${
                                                                                                i ==
                                                                                                null
                                                                                                    ? void 0
                                                                                                    : i.CV_TALLA
                                                                                            }`,
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'br',
                                                                                        {}
                                                                                    ),
                                                                                ],
                                                                        },
                                                                        i ==
                                                                            null
                                                                            ? void 0
                                                                            : i.CI_ID_TALLA
                                                                    ),
                                                            })
                                                        ),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor: 'Precio',
                                                            className:
                                                                'form-label',
                                                            children: 'Precio:',
                                                        }),
                                                        e.jsx('input', {
                                                            onChange: s,
                                                            value: a.Precio,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Precio',
                                                            placeholder: '350',
                                                            name: 'Precio',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            style: {
                                                                marginRight:
                                                                    '2px',
                                                            },
                                                            htmlFor:
                                                                'CatalogoRegistro',
                                                            className:
                                                                'form-label',
                                                            children:
                                                                'Catálogo:',
                                                        }),
                                                        e.jsxs('select', {
                                                            value: a.Catalogo,
                                                            name: 'Catalogo',
                                                            id: 'CatalogoRegistro',
                                                            onChange: s,
                                                            children: [
                                                                e.jsx(
                                                                    'option',
                                                                    {
                                                                        value: 2,
                                                                        children:
                                                                            'Alquiler',
                                                                    }
                                                                ),
                                                                e.jsx(
                                                                    'option',
                                                                    {
                                                                        value: 1,
                                                                        children:
                                                                            'Venta',
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                e.jsx('button', {
                                                    onClick: () => {
                                                        p(a, t, c);
                                                    },
                                                    type: 'submit',
                                                    className:
                                                        'btn btn-primary ',
                                                    style: {
                                                        backgroundColor:
                                                            '#F35525',
                                                        border: '#F35525',
                                                    },
                                                    children:
                                                        'Guardar Producto',
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    rt = () => {
        const {
            startGetInfoProduct: a,
            size: s = [],
            category: t = [],
            style: l = [],
            fabric: r = [],
            activeProduct: o,
            startGetEditProduct: n,
            startResetProductActive: d,
        } = Re();
        u.useEffect(() => {
            a();
        }, [o]);
        const m = u.useRef(null),
            {
                onInputChange: p,
                onResetForm: h,
                formState: c,
                setFormState: j,
            } = V();
        u.useEffect(() => {
            var C, g, N, _, v;
            h(),
                j({
                    ...c,
                    Nombre: (o == null ? void 0 : o.CV_NOMBRE) || '',
                    FotoProductoUpdate: '',
                    Categoria:
                        (C = o == null ? void 0 : o.T_CATEGORIA) == null
                            ? void 0
                            : C.CI_ID_CATEGORIA.toString(),
                    Tela: `${
                        (g = o == null ? void 0 : o.T_TELA) == null
                            ? void 0
                            : g.CI_ID_TELA
                    }`,
                    Precio: o == null ? void 0 : o.CD_PRECIO,
                    Catalogo: `${
                        (N = o == null ? void 0 : o.T_CATALOGO) == null
                            ? void 0
                            : N.CI_ID_CATALOGO
                    }`,
                    ...((_ = o.T_PRODUCTO_X_TALLA) == null
                        ? void 0
                        : _.reduce(
                              (f, S) => (
                                  (f[`Cantidad ${S.T_TALLA.CV_TALLA}`] =
                                      S.CI_CANTIDAD.toString()),
                                  f
                              ),
                              {}
                          )),
                    ...((v = o.T_ESTILO_X_PRODUCTO) == null
                        ? void 0
                        : v.reduce(
                              (f, S) => (
                                  (f[`style-${S.T_ESTILO.CV_DESCRIPCION}`] =
                                      S.T_ESTILO.CI_ID_ESTILO.toString()),
                                  f
                              ),
                              {}
                          )),
                }),
                document
                    .querySelectorAll('input[type=checkbox]')
                    .forEach((f) => {
                        var S;
                        (S = o.T_ESTILO_X_PRODUCTO) == null ||
                            S.forEach((b) => {
                                f.value === b.T_ESTILO.CI_ID_ESTILO.toString()
                                    ? (f.checked = !0)
                                    : (f.checked = !1);
                            });
                    });
        }, [o]);
        const i = u.useRef(null);
        return e.jsx('div', {
            className: 'modal fade w-100 m-0',
            id: 'update-product',
            tabIndex: -1,
            role: 'dialog',
            'aria-labelledby': 'exampleModalCenterTitle',
            'aria-hidden': 'true',
            children: e.jsx('div', {
                className: 'modal-dialog d-flex justify-content-center ',
                children: e.jsxs('div', {
                    className: 'modal-content w-100',
                    children: [
                        e.jsxs('div', {
                            className: 'modal-header text-center',
                            children: [
                                e.jsx('h5', {
                                    className: 'modal-title text-center ',
                                    id: 'exampleModalLabel2',
                                    children: 'Actualizar producto',
                                }),
                                e.jsx('button', {
                                    onClick: d,
                                    ref: i,
                                    type: 'button',
                                    className: 'btn-close',
                                    'data-dismiss': 'modal',
                                    'aria-label': 'Close',
                                }),
                            ],
                        }),
                        e.jsx('div', {
                            className: 'row justify-content-center',
                            children: e.jsx('div', {
                                className: 'col-12 col-md-8 ',
                                children: e.jsx('div', {
                                    className: 'form-ingreso p-3',
                                    children: e.jsxs('form', {
                                        onSubmit: (C) => C.preventDefault(),
                                        action: '',
                                        children: [
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor:
                                                            'NombreActualizado',
                                                        className: 'form-label',
                                                        children: 'Nombre:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: p,
                                                        value: c.Nombre,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Nombre',
                                                        placeholder: 'Nombre',
                                                        name: 'Nombre',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor:
                                                            'FotoActualizada',
                                                        className: 'form-label',
                                                        children: 'Foto',
                                                    }),
                                                    e.jsx('img', {
                                                        onClick: () => {
                                                            var C;
                                                            (C = m.current) ==
                                                                null ||
                                                                C.click();
                                                        },
                                                        className: '',
                                                        width: 100,
                                                        height: 100,
                                                        src: o.CV_FOTO,
                                                        alt: '',
                                                    }),
                                                    e.jsx('input', {
                                                        ref: m,
                                                        value: c.FotoProductoUpdate,
                                                        onChange: p,
                                                        type: 'file',
                                                        accept: 'image/*',
                                                        height: '100',
                                                        className:
                                                            'fotoUpdate opacity-1',
                                                        id: 'FotoProductoUpdate',
                                                        placeholder:
                                                            'Arrastre o busque una foto',
                                                        name: 'FotoProductoUpdate',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor:
                                                            'CategoriaActualizada',
                                                        className: 'form-label',
                                                        children: 'Categoría:',
                                                    }),
                                                    e.jsx('select', {
                                                        onChange: p,
                                                        value: c.Categoria,
                                                        name: 'Categoria',
                                                        children: t.map((C) =>
                                                            e.jsx(
                                                                'option',
                                                                {
                                                                    value: C.CI_ID_CATEGORIA,
                                                                    children:
                                                                        C.CV_DESCRIPCION,
                                                                },
                                                                C.CI_ID_CATEGORIA
                                                            )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor:
                                                            'EstiloActualizado',
                                                        className: 'form-label',
                                                        children: 'Estilo:',
                                                    }),
                                                    e.jsx('br', {}),
                                                    l.map((C) =>
                                                        e.jsxs(e.Fragment, {
                                                            children: [
                                                                e.jsxs(
                                                                    'label',
                                                                    {
                                                                        children:
                                                                            [
                                                                                e.jsx(
                                                                                    'input',
                                                                                    {
                                                                                        onChange:
                                                                                            p,
                                                                                        type: 'checkbox',
                                                                                        name: `style-${C.CV_DESCRIPCION}`,
                                                                                        value: C.CI_ID_ESTILO,
                                                                                    }
                                                                                ),
                                                                                ' ',
                                                                                C.CV_DESCRIPCION,
                                                                            ],
                                                                    },
                                                                    C.CI_ID_ESTILO
                                                                ),
                                                                e.jsx('br', {}),
                                                            ],
                                                        })
                                                    ),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor:
                                                            'TelaActualizada',
                                                        className: 'form-label',
                                                        children: 'Tela:',
                                                    }),
                                                    e.jsx('select', {
                                                        onChange: p,
                                                        value: c.Tela,
                                                        name: 'Tela',
                                                        children: r.map((C) =>
                                                            e.jsx(
                                                                'option',
                                                                {
                                                                    value: C.CI_ID_TELA,
                                                                    children:
                                                                        C.CV_NOMBRE,
                                                                },
                                                                C.CI_ID_TELA
                                                            )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor:
                                                            'TallasActualizadas',
                                                        className: 'form-label',
                                                        children:
                                                            'Tallas disponibles:',
                                                    }),
                                                    e.jsx('br', {}),
                                                    s.map((C) =>
                                                        e.jsx(e.Fragment, {
                                                            children: e.jsxs(
                                                                'div',
                                                                {
                                                                    children: [
                                                                        e.jsx(
                                                                            'label',
                                                                            {
                                                                                style: {
                                                                                    width: '50px',
                                                                                },
                                                                                children:
                                                                                    C.CI_ID_TALLA ===
                                                                                    6
                                                                                        ? ''
                                                                                        : C.CV_TALLA,
                                                                            }
                                                                        ),
                                                                        e.jsx(
                                                                            'input',
                                                                            {
                                                                                onChange:
                                                                                    p,
                                                                                value: c[
                                                                                    `Cantidad ${C.CV_TALLA}`
                                                                                ],
                                                                                type: 'text',
                                                                                style: {
                                                                                    marginLeft:
                                                                                        '20px',
                                                                                },
                                                                                className:
                                                                                    C.CI_ID_TALLA ===
                                                                                    6
                                                                                        ? 'd-none'
                                                                                        : 'cantidad-talla p-2',
                                                                                placeholder:
                                                                                    '',
                                                                                name: `Cantidad ${C.CV_TALLA}`,
                                                                            }
                                                                        ),
                                                                        e.jsx(
                                                                            'br',
                                                                            {}
                                                                        ),
                                                                    ],
                                                                },
                                                                C.CI_ID_TALLA
                                                            ),
                                                        })
                                                    ),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor:
                                                            'PrecioActualizado',
                                                        className: 'form-label',
                                                        children: 'Precio:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: p,
                                                        value: c.Precio,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Precio',
                                                        placeholder: '350',
                                                        name: 'Precio',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        style: {
                                                            marginRight: '10px',
                                                        },
                                                        htmlFor: 'Catalogo',
                                                        className: 'form-label',
                                                        children: 'Catálogo:',
                                                    }),
                                                    e.jsxs('select', {
                                                        value: c.Catalogo,
                                                        name: 'Catalogo',
                                                        onChange: p,
                                                        children: [
                                                            e.jsx('option', {
                                                                value: 2,
                                                                children:
                                                                    'Alquiler',
                                                            }),
                                                            e.jsx('option', {
                                                                value: 1,
                                                                children:
                                                                    'Venta',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            e.jsx('button', {
                                                onClick: () =>
                                                    n({ ...c, inputRef: i }, i),
                                                type: 'submit',
                                                className: 'btn btn-primary ',
                                                style: {
                                                    backgroundColor: '#F35525',
                                                    border: '#F35525',
                                                },
                                                children: 'Editar Producto',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    ot = () => {
        var o, n, d, m, p;
        const { id: a } = ee(),
            {
                startGetProfileUserInfo: s,
                userInfo: t,
                startGetProfileUserOrder: l,
                userOrders: r,
            } = le();
        return (
            u.useEffect(() => {
                s(a), l(a);
            }, []),
            t.userWithoutCLAVE === null
                ? e.jsx(aa, { to: '/pedidos' })
                : e.jsxs('div', {
                      className: 'datos-usuario',
                      children: [
                          e.jsx('div', {
                              className: 'container-usuario text-center border',
                              children: e.jsx('h1', {
                                  children: 'Datos del usuario',
                              }),
                          }),
                          e.jsx('div', {
                              className: ' container',
                              children: e.jsx('div', {
                                  className: 'text-center',
                                  children: e.jsxs('div', {
                                      className: 'container',
                                      children: [
                                          e.jsx('h5', { children: 'Nombre' }),
                                          e.jsx('p', {
                                              children:
                                                  (o = t.userWithoutCLAVE) ==
                                                  null
                                                      ? void 0
                                                      : o.CV_NOMBRE,
                                          }),
                                          e.jsx('h5', { children: 'Cédula' }),
                                          e.jsx('p', {
                                              children:
                                                  (n = t.userWithoutCLAVE) ==
                                                  null
                                                      ? void 0
                                                      : n.CV_CEDULA,
                                          }),
                                          e.jsx('h5', {
                                              children: 'Correo eletrónico',
                                          }),
                                          e.jsx('p', {
                                              children:
                                                  (d = t.userWithoutCLAVE) ==
                                                  null
                                                      ? void 0
                                                      : d.CV_CORREO,
                                          }),
                                          e.jsx('h5', {
                                              children: 'Dirección',
                                          }),
                                          e.jsx('p', {
                                              children:
                                                  (m = t.userWithoutCLAVE) ==
                                                  null
                                                      ? void 0
                                                      : m.CV_DIRECCION,
                                          }),
                                          e.jsx('h5', { children: 'Teléfono' }),
                                          e.jsx('p', {
                                              children:
                                                  (p = t.userWithoutCLAVE) ==
                                                  null
                                                      ? void 0
                                                      : p.CV_TELEFONO,
                                          }),
                                          e.jsx('h5', {
                                              children: 'N° Pedido',
                                          }),
                                          r == null
                                              ? void 0
                                              : r.map((h) =>
                                                    e.jsxs(
                                                        'p',
                                                        {
                                                            children: [
                                                                e.jsxs(B, {
                                                                    to: 'perfil.html',
                                                                    children: [
                                                                        'Pedido#',
                                                                        h.CI_ID_PEDIDO,
                                                                    ],
                                                                }),
                                                                ' ',
                                                                '/',
                                                                ' ',
                                                                new Date(
                                                                    h.T_COMPRA.CF_FECHA_PAGO
                                                                ).toLocaleDateString(
                                                                    'es-Es',
                                                                    {
                                                                        weekday:
                                                                            'long',
                                                                        year: 'numeric',
                                                                        month: 'long',
                                                                        day: 'numeric',
                                                                    }
                                                                ),
                                                                ' ',
                                                            ],
                                                        },
                                                        h.CI_ID_PEDIDO
                                                    )
                                                ),
                                      ],
                                  }),
                              }),
                          }),
                      ],
                  })
        );
    },
    nt = () => {
        var m, p;
        const { id: a } = ee(),
            {
                startGetMeasureShirt: s,
                measureShirt: t,
                startCreateMeasureShirt: l,
                startUpdateMeasureShirt: r,
            } = le(),
            { onInputChange: o, formState: n, setFormState: d } = V();
        return (
            u.useEffect(() => {
                s(a);
            }, [a]),
            u.useEffect(() => {
                var h, c, j, i, C, g, N, _, v, f, S;
                d({
                    ...n,
                    PechoCamisa: `${
                        (h = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : h.CI_PECHO
                    }`,
                    CinturaCamisa: `${
                        (c = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : c.CI_CINTURA
                    }`,
                    CaderaCamisa: `${
                        (j = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : j.CI_CADERA
                    }`,
                    EspaldaCamisa: `${
                        (i = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : i.CI_ESPALDA
                    }`,
                    HombroCamisa: `${
                        (C = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : C.CI_HOMBRO
                    }`,
                    CuelloCamisa: `${
                        (g = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : g.CI_CUELLO
                    }`,
                    L_mangaCamisa: `${
                        (N = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : N.CI_L_MANGA
                    }`,
                    L_totalCamisa: `${
                        (_ = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : _.CI_L_TOTAL
                    }`,
                    BrazoCamisa: `${
                        (v = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : v.CI_BRAZO
                    }`,
                    PunioCamisa: `${
                        (f = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : f.CI_PUNO
                    }`,
                    DetalleCamisa: `${
                        ((S = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : S.CV_DETALLES) || ''
                    }`,
                });
            }, [t]),
            e.jsxs('div', {
                className: 'col-md-2 border med-camisa',
                children: [
                    e.jsx('div', {
                        className: 'titulo-cont-medidas text-center',
                        children: e.jsx('h2', { children: 'Camisa' }),
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Pecho',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.PechoCamisa,
                                type: 'number',
                                name: 'PechoCamisa',
                                className: 'form-control',
                                placeholder: '96',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cintura',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.CinturaCamisa,
                                name: 'CinturaCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '85',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cadera',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.CaderaCamisa,
                                name: 'CaderaCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '96',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Espalda',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.EspaldaCamisa,
                                name: 'EspaldaCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '43',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Hombro',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.HombroCamisa,
                                name: 'HombroCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '16',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cuello',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.CuelloCamisa,
                                name: 'CuelloCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '24',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'L. Manga',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.L_mangaCamisa,
                                name: 'L_mangaCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '65',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'L. Total',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.L_totalCamisa,
                                name: 'L_totalCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '75',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Brazo',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.BrazoCamisa,
                                name: 'BrazoCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '26',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Puño',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.PunioCamisa,
                                name: 'PunioCamisa',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '17',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                className: 'form-label input-group-text',
                                children: 'Detalles:',
                            }),
                            e.jsx('textarea', {
                                onChange: o,
                                value: n.DetalleCamisa,
                                typeof: 'string',
                                className: 'form-control',
                                id: 'pwd',
                                placeholder: 'Tradicional',
                                name: 'DetalleCamisa',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'botones m-auto',
                        children: [
                            e.jsx('button', {
                                onClick: () =>
                                    r(
                                        n,
                                        t == null
                                            ? void 0
                                            : t.medida.CI_ID_CAMISA,
                                        a
                                    ),
                                className:
                                    (m = t == null ? void 0 : t.medida) !=
                                        null && m.CI_ID_CAMISA
                                        ? 'btn btn-warning'
                                        : 'd-none',
                                type: 'button',
                                name: 'Editar',
                                children: 'Actualizar',
                            }),
                            e.jsx('button', {
                                onClick: () => l(n, a),
                                className:
                                    (p = t == null ? void 0 : t.medida) !=
                                        null && p.CI_ID_CAMISA
                                        ? 'd-none'
                                        : 'btn btn-success',
                                type: 'button',
                                name: 'Guardar',
                                children: 'Crear',
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    lt = () => {
        var m, p;
        const { id: a } = ee(),
            { formState: s, setFormState: t, onInputChange: l } = V(),
            {
                startGetMeasureSuitJacket: r,
                measureSuitJacket: o,
                startSaveSuitJacket: n,
                startUpdateMeasureSuitJacket: d,
            } = le();
        return (
            u.useEffect(() => {
                r(a);
            }, [a]),
            u.useEffect(() => {
                var h, c, j, i, C, g, N, _, v, f;
                t({
                    ...s,
                    PechoSaco:
                        (h = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : h.CI_PECHO.toString(),
                    CinturaSaco:
                        (c = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : c.CI_CINTURA.toString(),
                    CaderaSaco:
                        (j = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : j.CI_CADERA.toString(),
                    EspaldaSaco:
                        (i = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : i.CI_ESPALDA.toString(),
                    HombroSaco:
                        (C = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : C.CI_HOMBRO.toString(),
                    L_mangaSaco:
                        (g = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : g.CI_L_MANGA.toString(),
                    L_totalSaco:
                        (N = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : N.CI_L_TOTAL.toString(),
                    BrazoSaco:
                        (_ = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : _.CI_BRAZO.toString(),
                    PunioSaco:
                        (v = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : v.CI_PUNO.toString(),
                    DetalleSaco:
                        ((f = o == null ? void 0 : o.medida) == null
                            ? void 0
                            : f.CV_DETALLES) || '',
                });
            }, [o]),
            e.jsxs('div', {
                className: 'col-md-2 border med-saco',
                children: [
                    e.jsx('div', {
                        className: 'titulo-cont-medidas text-center',
                        children: e.jsx('h2', { children: 'Saco' }),
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Pecho',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.PechoSaco,
                                name: 'PechoSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '100',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cintura',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.CinturaSaco,
                                name: 'CinturaSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '90',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cadera',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.CaderaSaco,
                                name: 'CaderaSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '100',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Espalda',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.EspaldaSaco,
                                name: 'EspaldaSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '45',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Hombro',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.HombroSaco,
                                name: 'HombroSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '16',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'L. Manga',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.L_mangaSaco,
                                name: 'L_mangaSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '64',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'L. Total',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.L_totalSaco,
                                name: 'L_totalSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '70',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Brazo',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.BrazoSaco,
                                name: 'BrazoSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '28',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Puño',
                            }),
                            e.jsx('input', {
                                onChange: l,
                                value: s.PunioSaco,
                                name: 'PunioSaco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '20',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: '',
                                className: 'form-label input-group-text',
                                children: 'Detalles:',
                            }),
                            e.jsx('textarea', {
                                onChange: l,
                                value: s.DetalleSaco,
                                typeof: 'text',
                                className: 'form-control',
                                id: 'pwd',
                                placeholder: 'Saco con dos aberturas',
                                name: 'DetalleSaco',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'botones m-auto',
                        children: [
                            e.jsx('button', {
                                onClick: () => {
                                    var h;
                                    return d(
                                        s,
                                        (h = o == null ? void 0 : o.medida) ==
                                            null
                                            ? void 0
                                            : h.CI_ID_SACO,
                                        a
                                    );
                                },
                                className:
                                    (m = o == null ? void 0 : o.medida) !=
                                        null && m.CI_ID_SACO
                                        ? 'btn btn-warning'
                                        : 'd-none',
                                type: 'button',
                                name: 'Editar',
                                children: 'Actualizar',
                            }),
                            e.jsx('button', {
                                onClick: () => n(s, a),
                                className:
                                    (p = o == null ? void 0 : o.medida) !=
                                        null && p.CI_ID_SACO
                                        ? 'd-none'
                                        : 'btn btn-success',
                                type: 'button',
                                name: 'Guardar',
                                children: 'Crear',
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    ct = () => {
        var m, p;
        const { id: a } = ee(),
            { onInputChange: s, formState: t, setFormState: l } = V(),
            {
                measurePants: r,
                startGetMeasurePants: o,
                startSavePant: n,
                startUpdateMeasurePants: d,
            } = le();
        return (
            u.useEffect(() => {
                o(a);
            }, [a]),
            u.useEffect(() => {
                var h, c, j, i, C, g, N;
                l({
                    ...t,
                    CinturaPantalon:
                        (h = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : h.CI_CINTURA.toString(),
                    CaderaPantalon:
                        (c = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : c.CI_CADERA.toString(),
                    TiroPantalon:
                        (j = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : j.CI_TIRO.toString(),
                    RodillaPantalon:
                        (i = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : i.CI_RODILLA.toString(),
                    RuedoPantalon:
                        (C = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : C.CI_RUEDO.toString(),
                    LargoPantalon:
                        (g = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : g.CI_LARGO.toString(),
                    DetallePantalon:
                        ((N = r == null ? void 0 : r.medida) == null
                            ? void 0
                            : N.CV_DETALLES) || '',
                });
            }, [r]),
            e.jsxs('div', {
                className: 'col-md-2 border med-chaleco',
                children: [
                    e.jsx('div', {
                        className: 'titulo-cont-medidas text-center',
                        children: e.jsx('h2', { children: 'Pantalón' }),
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cintura',
                            }),
                            e.jsx('input', {
                                value: t.CinturaPantalon,
                                onChange: s,
                                name: 'CinturaPantalon',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '83',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cadera',
                            }),
                            e.jsx('input', {
                                value: t.CaderaPantalon,
                                onChange: s,
                                name: 'CaderaPantalon',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '95',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Tiro',
                            }),
                            e.jsx('input', {
                                value: t.TiroPantalon,
                                onChange: s,
                                name: 'TiroPantalon',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '17',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Rodilla',
                            }),
                            e.jsx('input', {
                                onChange: s,
                                value: t.RodillaPantalon,
                                name: 'RodillaPantalon',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '42',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Ruedo',
                            }),
                            e.jsx('input', {
                                value: t.RuedoPantalon,
                                onChange: s,
                                name: 'RuedoPantalon',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '34',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Largo',
                            }),
                            e.jsx('input', {
                                value: t.LargoPantalon,
                                onChange: s,
                                name: 'LargoPantalon',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '96',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: '',
                                className: 'form-label input-group-text',
                                children: 'Detalles:',
                            }),
                            e.jsx('textarea', {
                                value: t.DetallePantalon,
                                onChange: s,
                                typeof: 'text',
                                className: 'form-control',
                                id: 'pwd',
                                placeholder: 'Estilo tradicional',
                                name: 'DetallePantalon',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'botones m-auto',
                        children: [
                            e.jsx('button', {
                                onClick: () => {
                                    var h;
                                    return d(
                                        t,
                                        (h = r == null ? void 0 : r.medida) ==
                                            null
                                            ? void 0
                                            : h.CI_ID_PANTALON,
                                        a
                                    );
                                },
                                className:
                                    (m = r == null ? void 0 : r.medida) !=
                                        null && m.CI_ID_PANTALON
                                        ? 'btn btn-warning'
                                        : 'd-none',
                                type: 'button',
                                name: 'Editar',
                                children: 'Actualizar',
                            }),
                            e.jsx('button', {
                                onClick: () => n(t, a),
                                className:
                                    (p = r == null ? void 0 : r.medida) !=
                                        null && p.CI_ID_PANTALON
                                        ? 'd-none'
                                        : 'btn btn-success',
                                type: 'button',
                                name: 'Guardar',
                                children: 'Crear',
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    it = () => {
        var m, p;
        const { id: a } = ee(),
            {
                startGetMeasureWaistcoat: s,
                measureWaistcoat: t,
                CreateMeasureWaistcoat: l,
                startUpdateMeasureWaistcoat: r,
            } = le(),
            { onInputChange: o, formState: n, setFormState: d } = V();
        return (
            u.useEffect(() => {
                s(a);
            }, [a]),
            u.useEffect(() => {
                var h, c, j, i, C;
                d({
                    ...n,
                    PechoChaleco: `${
                        (h = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : h.CI_PECHO
                    }`,
                    CinturaChaleco: `${
                        (c = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : c.CI_CINTURA
                    }`,
                    CaderaChaleco: `${
                        (j = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : j.CI_CADERA
                    }`,
                    L_totalChaleco: `${
                        (i = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : i.CI_L_TOTAL
                    }`,
                    DetalleChaleco: `${
                        ((C = t == null ? void 0 : t.medida) == null
                            ? void 0
                            : C.CV_DETALLES) || ''
                    }`,
                });
            }, [t]),
            e.jsxs('div', {
                className: 'col-md-2 border med-pantalon text-center',
                children: [
                    e.jsx('div', {
                        className: 'titulo-cont-medidas',
                        children: e.jsx('h2', { children: 'Chaleco' }),
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Pecho',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.PechoChaleco,
                                name: 'PechoChaleco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '90',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cintura',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.CinturaChaleco,
                                name: 'CinturaChaleco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '90',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'Cadera',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.CaderaChaleco,
                                name: 'CaderaChaleco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '90',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'input-group',
                        children: [
                            e.jsx('span', {
                                className: 'input-group-text',
                                children: 'L. Total',
                            }),
                            e.jsx('input', {
                                onChange: o,
                                value: n.L_totalChaleco,
                                name: 'L_totalChaleco',
                                type: 'number',
                                className: 'form-control',
                                placeholder: '60',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: '',
                                className: 'form-label input-group-text',
                                children: 'Detalles:',
                            }),
                            e.jsx('textarea', {
                                onChange: o,
                                value: n.DetalleChaleco,
                                typeof: 'text',
                                className: 'form-control',
                                id: 'pwd',
                                placeholder: 'Atrás de tela y con faja',
                                name: 'DetalleChaleco',
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'botones',
                        children: [
                            e.jsx('button', {
                                onClick: () => {
                                    var h;
                                    return r(
                                        n,
                                        (h = t == null ? void 0 : t.medida) ==
                                            null
                                            ? void 0
                                            : h.CI_ID_CHALECO,
                                        a
                                    );
                                },
                                className:
                                    (m = t == null ? void 0 : t.medida) !=
                                        null && m.CI_ID_CHALECO
                                        ? 'btn btn-warning'
                                        : 'd-none',
                                type: 'button',
                                name: 'Editar',
                                children: 'Actualizar',
                            }),
                            e.jsx('button', {
                                onClick: () => l(n, a),
                                className:
                                    (p = t == null ? void 0 : t.medida) !=
                                        null && p.CI_ID_CHALECO
                                        ? 'd-none'
                                        : 'btn btn-success',
                                type: 'button',
                                name: 'Guardar',
                                children: 'Crear',
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    dt = () => {
        const { onInputChange: a, formState: s, setFormState: t } = V(),
            { startSaveUpperPant: l, measurePant: r } = ue();
        return (
            u.useEffect(() => {
                t({
                    ...s,
                    CinturaPantalon: r == null ? void 0 : r.CI_CINTURA,
                    CaderaPantalon: r == null ? void 0 : r.CI_CADERA,
                    TiroPantalon: r == null ? void 0 : r.CI_TIRO,
                    RodillaPantalon: r == null ? void 0 : r.CI_RODILLA,
                    RuedoPantalon: r == null ? void 0 : r.CI_RUEDO,
                });
            }, [r]),
            u.useEffect(() => {
                l(s);
            }, [s]),
            e.jsxs('form', {
                children: [
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'CinturaPantalon',
                                className: 'form-label',
                                children: 'Cintura:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_CINTURA) !==
                                    void 0,
                                onChange: a,
                                value: s.CinturaPantalon,
                                type: 'number',
                                className: 'form-control',
                                id: 'CinturaPantalon',
                                name: 'CinturaPantalon',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'CaderaPantalon',
                                className: 'form-label',
                                children: 'Cadera:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_CADERA) !==
                                    void 0,
                                onChange: a,
                                value: s.CaderaPantalon,
                                type: 'number',
                                className: 'form-control',
                                id: 'CaderaPantalon',
                                name: 'CaderaPantalon',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'TiroPantalon',
                                className: 'form-label',
                                children: 'Tiro:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_TIRO) !== void 0,
                                onChange: a,
                                value: s.TiroPantalon,
                                type: 'number',
                                className: 'form-control',
                                id: 'TiroPantalon',
                                name: 'TiroPantalon',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'RodillaPantalon',
                                className: 'form-label',
                                children: 'Rodilla:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_RODILLA) !==
                                    void 0,
                                onChange: a,
                                value: s.RodillaPantalon,
                                type: 'number',
                                className: 'form-control',
                                id: 'RodillaPantalon',
                                name: 'RodillaPantalon',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'RuedoPantalon',
                                className: 'form-label',
                                children: 'Ruedo:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_RUEDO) !==
                                    void 0,
                                onChange: a,
                                value: s.RuedoPantalon,
                                type: 'number',
                                className: 'form-control',
                                id: 'RuedoPantalon',
                                name: 'RuedoPantalon',
                                required: !0,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    mt = () => {
        const { onInputChange: a, formState: s, setFormState: t } = V(),
            { startLargePant: l, measurePant: r } = ue();
        return (
            u.useEffect(() => {
                l(s);
            }, [s]),
            u.useEffect(() => {
                t({
                    ...s,
                    LargoTotalPantalon: r == null ? void 0 : r.CI_LARGO,
                });
            }, [r]),
            e.jsx('form', {
                children: e.jsxs('div', {
                    className: 'mb-3',
                    children: [
                        e.jsx('label', {
                            htmlFor: 'LargoTotalPantalon',
                            className: 'form-label',
                            children: 'Largo total:',
                        }),
                        e.jsx('input', {
                            disabled:
                                (r == null ? void 0 : r.CI_LARGO) !== void 0,
                            onChange: a,
                            value: s.LargoTotalPantalon,
                            type: 'number',
                            className: 'form-control',
                            id: 'LargoTotalPantalon',
                            name: 'LargoTotalPantalon',
                            required: !0,
                        }),
                    ],
                }),
            })
        );
    },
    ht = () => {
        const { onInputChange: a, formState: s, setFormState: t } = V(),
            { startDetailsPant: l, measurePant: r } = ue();
        return (
            u.useEffect(() => {
                l(s);
            }, [s]),
            u.useEffect(() => {
                t({
                    ...s,
                    DetallesPantalon: r == null ? void 0 : r.CV_DETALLES,
                });
            }, [r]),
            e.jsx('form', {
                children: e.jsxs('div', {
                    className: 'mb-3',
                    children: [
                        e.jsx('label', {
                            htmlFor: 'DetallesPantalon',
                            className: 'form-label',
                            children: 'Detalles adicionales:',
                        }),
                        e.jsx('textarea', {
                            disabled:
                                (r == null ? void 0 : r.CV_DETALLES) !== void 0,
                            value: s.DetallesPantalon,
                            onChange: a,
                            className: 'form-control',
                            id: 'DetallesPantalon',
                            name: 'DetallesPantalon',
                            rows: 4,
                        }),
                    ],
                }),
            })
        );
    },
    ut = () => {
        const { onInputChange: a, formState: s, setFormState: t } = V(),
            { startSaveSuitJacketTop: l, measureSuitJacket: r } = pe();
        return (
            u.useEffect(() => {
                l(s);
            }, [s]),
            u.useEffect(() => {
                t({
                    ...s,
                    PechoSaco: r == null ? void 0 : r.CI_PECHO,
                    CinturaSaco: r == null ? void 0 : r.CI_CINTURA,
                    CaderaSaco: r == null ? void 0 : r.CI_CADERA,
                    EspaldaSaco: r == null ? void 0 : r.CI_ESPALDA,
                    HombroSaco: r == null ? void 0 : r.CI_HOMBRO,
                });
            }, [r]),
            e.jsxs('form', {
                children: [
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'PechoSaco',
                                className: 'form-label',
                                children: 'Pecho:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_PECHO) !==
                                    void 0,
                                onChange: a,
                                value: s.PechoSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'PechoSaco',
                                name: 'PechoSaco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'CinturaSaco',
                                className: 'form-label',
                                children: 'Cintura:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_CINTURA) !==
                                    void 0,
                                onChange: a,
                                value: s.CinturaSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'CinturaSaco',
                                name: 'CinturaSaco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'CaderaSaco',
                                className: 'form-label',
                                children: 'Cadera:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_CADERA) !==
                                    void 0,
                                onChange: a,
                                value: s.CaderaSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'CaderaSaco',
                                name: 'CaderaSaco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'EspaldaSaco',
                                className: 'form-label',
                                children: 'Espalda:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_ESPALDA) !==
                                    void 0,
                                onChange: a,
                                value: s.EspaldaSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'EspaldaSaco',
                                name: 'EspaldaSaco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'HombroSaco',
                                className: 'form-label',
                                children: 'Hombro:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_HOMBRO) !==
                                    void 0,
                                onChange: a,
                                value: s.HombroSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'HombroSaco',
                                name: 'HombroSaco',
                                required: !0,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    pt = () => {
        const { formState: a, setFormState: s, onInputChange: t } = V(),
            { startSaveSuitJacketLarge: l, measureSuitJacket: r } = pe();
        return (
            u.useEffect(() => {
                l(a);
            }, [a]),
            u.useEffect(() => {
                s({
                    ...a,
                    L_mangaSaco: r == null ? void 0 : r.CI_L_MANGA,
                    L_totalSaco: r == null ? void 0 : r.CI_L_TOTAL,
                    BrazoSaco: r == null ? void 0 : r.CI_BRAZO,
                    PunioSaco: r == null ? void 0 : r.CI_PUNO,
                });
            }, [r]),
            e.jsxs('form', {
                children: [
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'L_mangaSaco',
                                className: 'form-label',
                                children: 'Largo manga:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_L_MANGA) !==
                                    void 0,
                                onChange: t,
                                value: a.L_mangaSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'L_mangaSaco',
                                name: 'L_mangaSaco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'L_totalSaco',
                                className: 'form-label',
                                children: 'Largo total:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_L_TOTAL) !==
                                    void 0,
                                onChange: t,
                                value: a.L_totalSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'L_totalSaco',
                                name: 'L_totalSaco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'BrazoSaco',
                                className: 'form-label',
                                children: 'Brazo:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_BRAZO) !==
                                    void 0,
                                onChange: t,
                                value: a.BrazoSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'BrazoSaco',
                                name: 'BrazoSaco',
                                required: !0,
                            }),
                        ],
                    }),
                    e.jsxs('div', {
                        className: 'mb-3',
                        children: [
                            e.jsx('label', {
                                htmlFor: 'PunioSaco',
                                className: 'form-label',
                                children: 'Puño:',
                            }),
                            e.jsx('input', {
                                disabled:
                                    (r == null ? void 0 : r.CI_PUNO) !== void 0,
                                onChange: t,
                                value: a.PunioSaco,
                                type: 'number',
                                className: 'form-control',
                                id: 'PunioSaco',
                                name: 'PunioSaco',
                                required: !0,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    xt = () => {
        const { formState: a, setFormState: s, onInputChange: t } = V(),
            { startSaveSuitJacketDetails: l, measureSuitJacket: r } = pe();
        return (
            u.useEffect(() => {
                l(a);
            }, [a]),
            u.useEffect(() => {
                s({ ...a, DetallesSaco: r == null ? void 0 : r.CV_DETALLES });
            }, [r]),
            e.jsx('form', {
                children: e.jsxs('div', {
                    className: 'mb-3',
                    children: [
                        e.jsx('label', {
                            htmlFor: 'DetallesSaco',
                            className: 'form-label',
                            children: 'Detalles adicionales:',
                        }),
                        e.jsx('textarea', {
                            disabled:
                                (r == null ? void 0 : r.CV_DETALLES) !== void 0,
                            onChange: t,
                            value: a.DetallesSaco,
                            className: 'form-control',
                            id: 'DetallesSaco',
                            name: 'DetallesSaco',
                            rows: 4,
                        }),
                    ],
                }),
            })
        );
    },
    Ct = () => {
        var l, r, o, n, d, m, p, h, c, j, i, C, g, N, _, v, f, S, b, D, L, F;
        const { id: a } = ee(),
            { order: s, startgetInvoice: t } = Os();
        return (
            u.useEffect(() => {
                t(a);
            }, [a]),
            e.jsx(e.Fragment, {
                children: e.jsxs('div', {
                    className: 'container-fluid',
                    children: [
                        e.jsx('div', {
                            id: 'bill-display',
                            children: e.jsxs('table', {
                                className: 'table table-bordered',
                                children: [
                                    e.jsxs('caption', {
                                        className: 'text-center',
                                        children: [
                                            'Factura',
                                            ' ',
                                            e.jsx('small', {
                                                className: 'pull-right',
                                                children: '(original)',
                                            }),
                                        ],
                                    }),
                                    e.jsxs('tr', {
                                        children: [
                                            e.jsxs('td', {
                                                colSpan: 3,
                                                rowSpan: 3,
                                                children: [
                                                    e.jsx('div', {
                                                        className: 'box-title',
                                                        children:
                                                            'Datos del cliente',
                                                    }),
                                                    e.jsxs('div', {
                                                        className:
                                                            'box-content',
                                                        children: [
                                                            'Nombre:',
                                                            ' ',
                                                            (r =
                                                                (l =
                                                                    s == null
                                                                        ? void 0
                                                                        : s.T_COMPRA) ==
                                                                null
                                                                    ? void 0
                                                                    : l.T_USUARIO) ==
                                                            null
                                                                ? void 0
                                                                : r.CV_NOMBRE,
                                                            e.jsx('br', {}),
                                                            'Direccion:',
                                                            ' ',
                                                            (n =
                                                                (o =
                                                                    s == null
                                                                        ? void 0
                                                                        : s.T_COMPRA) ==
                                                                null
                                                                    ? void 0
                                                                    : o.T_USUARIO) ==
                                                            null
                                                                ? void 0
                                                                : n.CV_DIRECCION,
                                                            e.jsx('br', {}),
                                                            'Correo:',
                                                            ' ',
                                                            (m =
                                                                (d =
                                                                    s == null
                                                                        ? void 0
                                                                        : s.T_COMPRA) ==
                                                                null
                                                                    ? void 0
                                                                    : d.T_USUARIO) ==
                                                            null
                                                                ? void 0
                                                                : m.CV_CORREO,
                                                            e.jsx('br', {}),
                                                            'Telefono +506',
                                                            '  ',
                                                            (h =
                                                                (p =
                                                                    s == null
                                                                        ? void 0
                                                                        : s.T_COMPRA) ==
                                                                null
                                                                    ? void 0
                                                                    : p.T_USUARIO) ==
                                                            null
                                                                ? void 0
                                                                : h.CV_TELEFONO,
                                                            e.jsx('br', {}),
                                                            e.jsxs(B, {
                                                                to: `/perfil/${
                                                                    (j =
                                                                        (c =
                                                                            s ==
                                                                            null
                                                                                ? void 0
                                                                                : s.T_COMPRA) ==
                                                                        null
                                                                            ? void 0
                                                                            : c.T_USUARIO) ==
                                                                    null
                                                                        ? void 0
                                                                        : j.CV_CEDULA
                                                                }`,
                                                                children: [
                                                                    'Cedula : ',
                                                                    (C =
                                                                        (i =
                                                                            s ==
                                                                            null
                                                                                ? void 0
                                                                                : s.T_COMPRA) ==
                                                                        null
                                                                            ? void 0
                                                                            : i.T_USUARIO) ==
                                                                    null
                                                                        ? void 0
                                                                        : C.CV_CEDULA,
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('td', {
                                                colSpan: 2,
                                                children: [
                                                    e.jsx('div', {
                                                        className: 'box-title',
                                                        children: 'Factura #',
                                                    }),
                                                    e.jsx('div', {
                                                        className:
                                                            'box-content',
                                                        children:
                                                            s == null
                                                                ? void 0
                                                                : s.CI_ID_PEDIDO,
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('td', {
                                                colSpan: 2,
                                                children: [
                                                    e.jsx('div', {
                                                        className: 'box-title',
                                                        children:
                                                            'Fecha de compra',
                                                    }),
                                                    e.jsx('div', {
                                                        className:
                                                            'box-content',
                                                        children:
                                                            (g =
                                                                s == null
                                                                    ? void 0
                                                                    : s.T_COMPRA) ==
                                                            null
                                                                ? void 0
                                                                : g.CF_FECHA_PAGO.split(
                                                                      'T'
                                                                  ).at(0),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsx('tr', {
                                        children: e.jsxs('td', {
                                            colSpan: 3,
                                            children: [
                                                e.jsx('div', {
                                                    className: 'box-title',
                                                    children: 'Total',
                                                }),
                                                e.jsxs('div', {
                                                    className: 'box-content',
                                                    children: [
                                                        'Subtotal: ',
                                                        (N =
                                                            s == null
                                                                ? void 0
                                                                : s.T_COMPRA) ==
                                                        null
                                                            ? void 0
                                                            : N.CD_SUBTOTAL,
                                                        e.jsx('br', {}),
                                                        'Impuesto: ',
                                                        (_ =
                                                            s == null
                                                                ? void 0
                                                                : s.T_COMPRA) ==
                                                        null
                                                            ? void 0
                                                            : _.CD_IMPUESTOS,
                                                        e.jsx('br', {}),
                                                        'Total: ',
                                                        (v =
                                                            s == null
                                                                ? void 0
                                                                : s.T_COMPRA) ==
                                                        null
                                                            ? void 0
                                                            : v.CD_TOTAL,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.jsxs('tr', {
                                        children: [
                                            e.jsxs('td', {
                                                colSpan: 2,
                                                children: [
                                                    e.jsx('div', {
                                                        className: 'box-title',
                                                        children: 'Estado',
                                                    }),
                                                    e.jsx('div', {
                                                        className:
                                                            'box-content',
                                                        children:
                                                            (f =
                                                                s == null
                                                                    ? void 0
                                                                    : s.T_ESTADO) ==
                                                            null
                                                                ? void 0
                                                                : f.CV_DESCRIPCION,
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('td', {
                                                colSpan: 2,
                                                children: [
                                                    e.jsx('div', {
                                                        className: 'box-title',
                                                        children:
                                                            'Fecha de entrega',
                                                    }),
                                                    e.jsx('div', {
                                                        className:
                                                            'box-content',
                                                        children:
                                                            (D =
                                                                (b =
                                                                    (S =
                                                                        s.T_COMPRA) ==
                                                                    null
                                                                        ? void 0
                                                                        : S.T_DETALLE_COMPRA) ==
                                                                null
                                                                    ? void 0
                                                                    : b.at(
                                                                          0
                                                                      )) == null
                                                                ? void 0
                                                                : D.CF_FECHA_ENTREGA.split(
                                                                      'T'
                                                                  ).at(0),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsxs('tr', {
                                        className: 'heading-row v-row',
                                        children: [
                                            e.jsx('td', {
                                                children: 'Producto',
                                            }),
                                            e.jsx('td', { children: 'Medida' }),
                                            e.jsx('td', {
                                                children: 'Cantidad',
                                            }),
                                            e.jsx('td', {
                                                children: 'Precio unitario',
                                            }),
                                            e.jsx('td', { children: 'Monto' }),
                                        ],
                                    }),
                                    (F =
                                        (L = s == null ? void 0 : s.T_COMPRA) ==
                                        null
                                            ? void 0
                                            : L.T_DETALLE_COMPRA) == null
                                        ? void 0
                                        : F.map((E) => {
                                              var k, x, A, O;
                                              return e.jsxs(
                                                  'tr',
                                                  {
                                                      className: 'v-row',
                                                      children: [
                                                          e.jsx('td', {
                                                              className:
                                                                  'text-center',
                                                              children:
                                                                  (k =
                                                                      E == null
                                                                          ? void 0
                                                                          : E.T_PRODUCTO) ==
                                                                  null
                                                                      ? void 0
                                                                      : k.CV_NOMBRE,
                                                          }),
                                                          e.jsx('td', {
                                                              className:
                                                                  'text-center',
                                                              children:
                                                                  (A =
                                                                      (x =
                                                                          E ==
                                                                          null
                                                                              ? void 0
                                                                              : E.T_PRODUCTO_X_TALLA) ==
                                                                      null
                                                                          ? void 0
                                                                          : x.T_TALLA) ==
                                                                  null
                                                                      ? void 0
                                                                      : A.CV_TALLA,
                                                          }),
                                                          e.jsx('td', {
                                                              className:
                                                                  'text-center',
                                                              children:
                                                                  E == null
                                                                      ? void 0
                                                                      : E.CI_CANTIDAD,
                                                          }),
                                                          e.jsx('td', {
                                                              className:
                                                                  'text-center',
                                                              children:
                                                                  (O =
                                                                      E == null
                                                                          ? void 0
                                                                          : E.T_PRODUCTO) ==
                                                                  null
                                                                      ? void 0
                                                                      : O.CD_PRECIO,
                                                          }),
                                                          e.jsx('td', {
                                                              className:
                                                                  'text-center',
                                                              children:
                                                                  +E.T_PRODUCTO
                                                                      .CD_PRECIO *
                                                                  (E == null
                                                                      ? void 0
                                                                      : E.CI_CANTIDAD),
                                                          }),
                                                      ],
                                                  },
                                                  E.T_PRODUCTO.CV_NOMBRE
                                              );
                                          }),
                                    e.jsx('br', {}),
                                    e.jsx('tr', {
                                        children: e.jsxs('td', {
                                            colSpan: 7,
                                            className: 'text-center',
                                            children: [
                                                'SATOVAR',
                                                e.jsx('br', {}),
                                                'Esta es una factura generada por computadora.',
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        e.jsx('div', {
                            className: 'icon-button  ',
                            children: e.jsxs(B, {
                                onClick: () => window.print(),
                                to: '',
                                children: [
                                    e.jsx('i', {
                                        className: 'fa fa fa-print',
                                        children: ' ',
                                    }),
                                    'Imprimir',
                                ],
                            }),
                        }),
                    ],
                }),
            })
        );
    },
    jt = () => {
        const {
                orders: a,
                startGetAllOrders: s,
                startUpdateStatusOrder: t,
            } = Fe(),
            { formState: l, setFormState: r } = V(),
            o = ({ target: n }, d) => {
                const { name: m, value: p } = n;
                r({ ...l, [m]: p }), console.log(p), t(d, +p);
            };
        return (
            u.useEffect(() => {
                s();
            }, []),
            u.useEffect(() => {
                r((n) => {
                    const d = { ...n };
                    return (
                        a.forEach((m) => {
                            d[`Estado-${m.CI_ID_PEDIDO}`] =
                                m.CI_ID_ESTADO.toString();
                        }),
                        d
                    );
                });
            }, [a]),
            e.jsxs('div', {
                className: 'container mt-2 border tabla-proceso',
                children: [
                    e.jsxs('div', {
                        className: 'text-center',
                        children: [
                            e.jsx('h2', { children: 'Pedidos en progreso' }),
                            e.jsx('hr', {}),
                        ],
                    }),
                    e.jsxs('table', {
                        className: 'table table-striped',
                        children: [
                            e.jsx('thead', {
                                children: e.jsxs('tr', {
                                    children: [
                                        e.jsx('th', { children: 'N° Pedido' }),
                                        e.jsx('th', { children: 'Cédula' }),
                                        e.jsx('th', { children: 'Télefono' }),
                                        e.jsx('th', {
                                            children: 'Fecha de entrega',
                                        }),
                                        e.jsx('th', { children: 'Estado ' }),
                                    ],
                                }),
                            }),
                            e.jsx('tbody', {
                                children:
                                    a == null
                                        ? void 0
                                        : a.map((n) => {
                                              var d;
                                              return (
                                                  n.CI_ID_ESTADO === 3 &&
                                                  e.jsxs(
                                                      'tr',
                                                      {
                                                          children: [
                                                              e.jsx('td', {
                                                                  children:
                                                                      e.jsx(B, {
                                                                          to: `/pedido/${n.CI_ID_PEDIDO}`,
                                                                          children:
                                                                              n.CI_ID_PEDIDO,
                                                                      }),
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      e.jsx(B, {
                                                                          to: `/perfil/${n.T_COMPRA.T_USUARIO.CV_CEDULA}`,
                                                                          className:
                                                                              'enlace-perfil',
                                                                          children:
                                                                              n
                                                                                  .T_COMPRA
                                                                                  .T_USUARIO
                                                                                  .CV_CEDULA,
                                                                      }),
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      n.T_COMPRA
                                                                          .T_USUARIO
                                                                          .CV_TELEFONO,
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      (d =
                                                                          n.T_COMPRA.T_DETALLE_COMPRA.at(
                                                                              0
                                                                          )) ==
                                                                      null
                                                                          ? void 0
                                                                          : d.CF_FECHA_ENTREGA.split(
                                                                                'T'
                                                                            ).at(
                                                                                0
                                                                            ),
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      e.jsxs(
                                                                          'select',
                                                                          {
                                                                              onChange:
                                                                                  (
                                                                                      m
                                                                                  ) =>
                                                                                      o(
                                                                                          m,
                                                                                          n.CI_ID_PEDIDO
                                                                                      ),
                                                                              name: `Estado-${n.CI_ID_PEDIDO}`,
                                                                              id: `Estado-${n.CI_ID_PEDIDO}`,
                                                                              value: l[
                                                                                  `Estado-${n.CI_ID_PEDIDO}`
                                                                              ],
                                                                              children:
                                                                                  [
                                                                                      e.jsx(
                                                                                          'option',
                                                                                          {
                                                                                              value: 1,
                                                                                              children:
                                                                                                  'Pendiente',
                                                                                          }
                                                                                      ),
                                                                                      e.jsx(
                                                                                          'option',
                                                                                          {
                                                                                              value: 2,
                                                                                              children:
                                                                                                  'Completado',
                                                                                          }
                                                                                      ),
                                                                                      e.jsx(
                                                                                          'option',
                                                                                          {
                                                                                              value: 3,
                                                                                              children:
                                                                                                  'En proceso',
                                                                                          }
                                                                                      ),
                                                                                  ],
                                                                          }
                                                                      ),
                                                              }),
                                                          ],
                                                      },
                                                      n.CI_ID_PEDIDO
                                                  )
                                              );
                                          }),
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    Qe = {
        Nombre: '',
        Apellido1: '',
        Apellido2: '',
        Cedula: '',
        Correo: '',
        Direccion: '',
        Telefono: '',
        Clave: '',
        Rol: se.Cliente.toString(),
    },
    gt = () => {
        const {
                formState: a,
                onInputChange: s,
                onResetForm: t,
                setFormState: l,
            } = V(Qe),
            { startCreateUser: r, Users: o } = we();
        u.useEffect(() => {
            t(), l({ ...Qe });
        }, [o]);
        const n = u.useRef(null);
        return (
            console.log(a),
            e.jsx('div', {
                className: 'modal fade',
                id: 'register-user',
                tabIndex: -1,
                role: 'dialog',
                'aria-labelledby': 'exampleModalCenterTitle',
                'aria-hidden': 'true',
                children: e.jsx('div', {
                    className: 'modal-dialog d-flex justify-content-center ',
                    children: e.jsxs('div', {
                        className: 'modal-content w-100',
                        children: [
                            e.jsxs('div', {
                                className: 'modal-header text-center',
                                children: [
                                    e.jsx('h5', {
                                        className: 'modal-title text-center ',
                                        id: 'exampleModalLabel2',
                                        children: 'Registro de usuarios',
                                    }),
                                    e.jsx('button', {
                                        ref: n,
                                        type: 'button',
                                        className: 'btn-close',
                                        'data-dismiss': 'modal',
                                        'aria-label': 'Close',
                                    }),
                                ],
                            }),
                            e.jsx('div', {
                                className: 'row justify-content-center',
                                children: e.jsx('div', {
                                    className: 'col-12 col-md-8 ',
                                    children: e.jsx('div', {
                                        className: 'form-ingreso p-3',
                                        children: e.jsxs('form', {
                                            onSubmit: (d) => d.preventDefault(),
                                            action: '',
                                            children: [
                                                e.jsxs('div', {
                                                    className: 'mb-3 mt-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor: 'Nombre',
                                                            className:
                                                                'form-label',
                                                            children: 'Nombre:',
                                                        }),
                                                        e.jsx('input', {
                                                            onChange: s,
                                                            value: a.Nombre,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Nombre',
                                                            placeholder:
                                                                'Nombre',
                                                            name: 'Nombre',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3 mt-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor:
                                                                'Apellido1',
                                                            className:
                                                                'form-label',
                                                            children:
                                                                'Primer apellido',
                                                        }),
                                                        e.jsx('input', {
                                                            value: a.Apellido1,
                                                            onChange: s,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Apellido1',
                                                            placeholder:
                                                                'Primer apellido',
                                                            name: 'Apellido1',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor:
                                                                'Apellido2',
                                                            className:
                                                                'form-label',
                                                            children:
                                                                'Segundo apellido:',
                                                        }),
                                                        e.jsx('input', {
                                                            value: a.Apellido2,
                                                            onChange: s,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Apellido2',
                                                            placeholder:
                                                                'Segundo apellido',
                                                            name: 'Apellido2',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor:
                                                                'TelaRegistro',
                                                            className:
                                                                'form-label',
                                                            children: 'Cédula:',
                                                        }),
                                                        e.jsx('input', {
                                                            value: a.Cedula,
                                                            onChange: s,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Cedula',
                                                            placeholder:
                                                                'Cédula',
                                                            name: 'Cedula',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor: 'Correo',
                                                            className:
                                                                'form-label',
                                                            children:
                                                                'Correo electrónico:',
                                                        }),
                                                        e.jsx('input', {
                                                            onChange: s,
                                                            value: a.Correo,
                                                            type: 'email',
                                                            className:
                                                                'form-control',
                                                            id: 'Correo',
                                                            placeholder:
                                                                'Correo electrónico',
                                                            name: 'Correo',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor:
                                                                'Direccion',
                                                            className:
                                                                'form-label',
                                                            children:
                                                                'Dirección:',
                                                        }),
                                                        e.jsx('input', {
                                                            onChange: s,
                                                            value: a.Direccion,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Direccion',
                                                            placeholder:
                                                                'Dirección',
                                                            name: 'Direccion',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor: 'Telefono',
                                                            className:
                                                                'form-label',
                                                            children:
                                                                'Teléfono:',
                                                        }),
                                                        e.jsx('input', {
                                                            onChange: s,
                                                            value: a.Telefono,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Telefono',
                                                            placeholder:
                                                                'Teléfono',
                                                            name: 'Telefono',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor: 'Clave',
                                                            className:
                                                                'form-label',
                                                            children: 'Clave:',
                                                        }),
                                                        e.jsx('input', {
                                                            onChange: s,
                                                            value: a.Clave,
                                                            type: 'text',
                                                            className:
                                                                'form-control',
                                                            id: 'Clave',
                                                            placeholder:
                                                                'Clave',
                                                            name: 'Clave',
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs('div', {
                                                    className: 'mb-3',
                                                    children: [
                                                        e.jsx('label', {
                                                            htmlFor: 'Rol',
                                                            className:
                                                                'form-label',
                                                            children: 'Rol:',
                                                        }),
                                                        e.jsxs('select', {
                                                            onChange: s,
                                                            value: a.Rol,
                                                            className:
                                                                'form-control',
                                                            id: 'Rol',
                                                            name: 'Rol',
                                                            children: [
                                                                e.jsx(
                                                                    'option',
                                                                    {
                                                                        value: 1,
                                                                        children:
                                                                            'Administrador',
                                                                    }
                                                                ),
                                                                e.jsx(
                                                                    'option',
                                                                    {
                                                                        value: 2,
                                                                        children:
                                                                            'Cliente',
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                e.jsx('button', {
                                                    onClick: () => {
                                                        r(a, t, n);
                                                    },
                                                    type: 'submit',
                                                    className:
                                                        'btn btn-primary m-auto ',
                                                    style: {
                                                        padding: '10px 10px',
                                                        backgroundColor:
                                                            '#F35525',
                                                        border: '#F35525',
                                                    },
                                                    children: 'Guardar usuario',
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    bt = {
        Nombre: '',
        Apellido1: '',
        Apellido2: '',
        Cedula: '',
        Correo: '',
        Direccion: '',
        Telefono: '',
        Clave: '',
        Rol: se.Cliente.toString(),
    },
    Nt = () => {
        const {
                formState: a,
                onInputChange: s,
                onResetForm: t,
                setFormState: l,
            } = V(bt),
            { startUpdateUser: r, ActiveUser: o } = we();
        u.useEffect(() => {
            t(),
                l({
                    ...a,
                    Nombre: o == null ? void 0 : o.CV_NOMBRE,
                    Apellido1: o == null ? void 0 : o.CV_APELLIDO1,
                    Apellido2: o == null ? void 0 : o.CV_APELLIDO2,
                    Cedula: o == null ? void 0 : o.CV_CEDULA,
                    Correo: o == null ? void 0 : o.CV_CORREO,
                    Direccion: o == null ? void 0 : o.CV_DIRECCION,
                    Telefono: o == null ? void 0 : o.CV_TELEFONO,
                    Rol:
                        o != null && o.CI_ID_ROL
                            ? o.CI_ID_ROL.toString()
                            : se.Cliente.toString(),
                });
        }, [o]);
        const n = u.useRef(null);
        return e.jsx('div', {
            className: 'modal fade',
            id: 'update-user',
            tabIndex: -1,
            role: 'dialog',
            'aria-labelledby': 'exampleModalCenterTitle',
            'aria-hidden': 'true',
            children: e.jsx('div', {
                className: 'modal-dialog d-flex justify-content-center ',
                children: e.jsxs('div', {
                    className: 'modal-content w-100',
                    children: [
                        e.jsxs('div', {
                            className: 'modal-header text-center',
                            children: [
                                e.jsx('h5', {
                                    className: 'modal-title text-center ',
                                    id: 'exampleModalLabel2',
                                    children: 'Actualizacion de usuarios',
                                }),
                                e.jsx('button', {
                                    ref: n,
                                    type: 'button',
                                    className: 'btn-close',
                                    'data-dismiss': 'modal',
                                    'aria-label': 'Close',
                                }),
                            ],
                        }),
                        e.jsx('div', {
                            className: 'row justify-content-center',
                            children: e.jsx('div', {
                                className: 'col-12 col-md-8 ',
                                children: e.jsx('div', {
                                    className: 'form-ingreso p-3',
                                    children: e.jsxs('form', {
                                        onSubmit: (d) => d.preventDefault(),
                                        action: '',
                                        children: [
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Nombre',
                                                        className: 'form-label',
                                                        children: 'Nombre:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Nombre,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Nombre',
                                                        placeholder: 'Nombre',
                                                        name: 'Nombre',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Apellido1',
                                                        className: 'form-label',
                                                        children:
                                                            'Primer apellido',
                                                    }),
                                                    e.jsx('input', {
                                                        value: a.Apellido1,
                                                        onChange: s,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Apellido1',
                                                        placeholder:
                                                            'Primer apellido',
                                                        name: 'Apellido1',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Apellido2',
                                                        className: 'form-label',
                                                        children:
                                                            'Segundo apellido:',
                                                    }),
                                                    e.jsx('input', {
                                                        value: a.Apellido2,
                                                        onChange: s,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Apellido2',
                                                        placeholder:
                                                            'Segundo apellido',
                                                        name: 'Apellido2',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'TelaRegistro',
                                                        className: 'form-label',
                                                        children: 'Cédula:',
                                                    }),
                                                    e.jsx('input', {
                                                        value: a.Cedula,
                                                        onChange: s,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Cedula',
                                                        placeholder: 'Cedula',
                                                        name: 'Cedula',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Correo',
                                                        className: 'form-label',
                                                        children:
                                                            'Correo electrónico:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Correo,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Correo',
                                                        placeholder:
                                                            'Correo electronico',
                                                        name: 'Correo',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Direccion',
                                                        className: 'form-label',
                                                        children: 'Dirección:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Direccion,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Direccion',
                                                        placeholder:
                                                            'Direccion',
                                                        name: 'Direccion',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Telefono',
                                                        className: 'form-label',
                                                        children: 'Teléfono:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Telefono,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Telefono',
                                                        placeholder: 'Telefono',
                                                        name: 'Telefono',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Clave',
                                                        className: 'form-label',
                                                        children: 'Clave:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Clave,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Clave',
                                                        placeholder: 'Clave',
                                                        name: 'Clave',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Rol',
                                                        className: 'form-label',
                                                        children: 'Rol:',
                                                    }),
                                                    e.jsxs('select', {
                                                        onChange: s,
                                                        value: a.Rol,
                                                        className:
                                                            'form-control',
                                                        id: 'Rol',
                                                        name: 'Rol',
                                                        children: [
                                                            e.jsx('option', {
                                                                value: 1,
                                                                children:
                                                                    'Administrador',
                                                            }),
                                                            e.jsx('option', {
                                                                value: 2,
                                                                children:
                                                                    'Cliente',
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                            e.jsx('button', {
                                                onClick: () => {
                                                    r(
                                                        a,
                                                        t,
                                                        n,
                                                        o == null
                                                            ? void 0
                                                            : o.CI_ID_USUARIO
                                                    );
                                                },
                                                type: 'submit',
                                                className:
                                                    'btn btn-primary m-auto ',
                                                style: {
                                                    padding: '10px 10px',
                                                    backgroundColor: '#F35525',
                                                    border: '#F35525',
                                                },
                                                children: 'Editar usuario',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    ea = { Nombre: '', Foto: '', Precio: '' },
    ft = () => {
        const {
                formState: a,
                onInputChange: s,
                onResetForm: t,
                setFormState: l,
            } = V(ea),
            { Fabrics: r, startCreateFabric: o } = Me();
        u.useEffect(() => {
            t(), l({ ...ea });
        }, [r]);
        const n = u.useRef(null);
        return e.jsx('div', {
            className: 'modal fade',
            id: 'register-fabric',
            tabIndex: -1,
            role: 'dialog',
            'aria-labelledby': 'exampleModalCenterTitle',
            'aria-hidden': 'true',
            children: e.jsx('div', {
                className: 'modal-dialog d-flex justify-content-center ',
                children: e.jsxs('div', {
                    className: 'modal-content w-100',
                    children: [
                        e.jsxs('div', {
                            className: 'modal-header text-center',
                            children: [
                                e.jsx('h5', {
                                    className: 'modal-title text-center ',
                                    id: 'exampleModalLabel2',
                                    children: 'Registro de telas',
                                }),
                                e.jsx('button', {
                                    ref: n,
                                    type: 'button',
                                    className: 'btn-close',
                                    'data-dismiss': 'modal',
                                    'aria-label': 'Close',
                                }),
                            ],
                        }),
                        e.jsx('div', {
                            className: 'row justify-content-center',
                            children: e.jsx('div', {
                                className: 'col-12 col-md-8 ',
                                children: e.jsx('div', {
                                    className: 'form-ingreso p-3',
                                    children: e.jsxs('form', {
                                        onSubmit: (d) => d.preventDefault(),
                                        action: '',
                                        children: [
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Nombre',
                                                        className: 'form-label',
                                                        children: 'Nombre:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Nombre,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Nombre',
                                                        placeholder: 'Nombre',
                                                        name: 'Nombre',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Foto',
                                                        className: 'form-label',
                                                        children: 'Foto',
                                                    }),
                                                    e.jsx('input', {
                                                        value: a.Foto,
                                                        onChange: s,
                                                        type: 'file',
                                                        accept: 'image/*',
                                                        className:
                                                            'form-control-sm',
                                                        id: 'Foto',
                                                        placeholder:
                                                            'Primer apellido',
                                                        name: 'Foto',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Precio',
                                                        className: 'form-label',
                                                        children: 'Precio:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Precio,
                                                        type: 'number',
                                                        className:
                                                            'form-control',
                                                        id: 'Precio',
                                                        placeholder: 'Precio',
                                                        name: 'Precio',
                                                    }),
                                                ],
                                            }),
                                            e.jsx('button', {
                                                onClick: () => {
                                                    o(a, t, n);
                                                },
                                                type: 'submit',
                                                className:
                                                    'btn btn-primary m-auto ',
                                                style: {
                                                    padding: '10px 10px',
                                                    backgroundColor: '#F35525',
                                                    border: '#F35525',
                                                },
                                                children: 'Crear tela',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    vt = { Nombre: '', Foto: '', Precio: '' },
    _t = () => {
        const {
                formState: a,
                onInputChange: s,
                onResetForm: t,
                setFormState: l,
            } = V(vt),
            { startUpdateFabric: r, ActiveFabric: o } = Me();
        u.useEffect(() => {
            t(),
                l({
                    ...a,
                    Nombre: (o == null ? void 0 : o.CV_NOMBRE) || '',
                    Foto: '',
                    Precio: (o == null ? void 0 : o.CD_PRECIO) || '0',
                });
        }, [o]);
        const n = u.useRef(null),
            d = u.useRef(null);
        return e.jsx('div', {
            className: 'modal fade',
            id: 'update-fabric',
            tabIndex: -1,
            role: 'dialog',
            'aria-labelledby': 'exampleModalCenterTitle',
            'aria-hidden': 'true',
            children: e.jsx('div', {
                className: 'modal-dialog d-flex justify-content-center ',
                children: e.jsxs('div', {
                    className: 'modal-content w-100',
                    children: [
                        e.jsxs('div', {
                            className: 'modal-header text-center',
                            children: [
                                e.jsx('h5', {
                                    className: 'modal-title text-center ',
                                    id: 'exampleModalLabel2',
                                    children: 'Actualizar tela',
                                }),
                                e.jsx('button', {
                                    ref: n,
                                    type: 'button',
                                    className: 'btn-close',
                                    'data-dismiss': 'modal',
                                    'aria-label': 'Close',
                                }),
                            ],
                        }),
                        e.jsx('div', {
                            className: 'row justify-content-center',
                            children: e.jsx('div', {
                                className: 'col-12 col-md-8 ',
                                children: e.jsx('div', {
                                    className: 'form-ingreso p-3',
                                    children: e.jsxs('form', {
                                        onSubmit: (m) => m.preventDefault(),
                                        action: '',
                                        children: [
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Nombre',
                                                        className: 'form-label',
                                                        children: 'Nombre:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Nombre,
                                                        type: 'text',
                                                        className:
                                                            'form-control',
                                                        id: 'Nombre',
                                                        placeholder: 'Nombre',
                                                        name: 'Nombre',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3 mt-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor:
                                                            'FotoActualizar',
                                                        className: 'form-label',
                                                        children: 'Foto',
                                                    }),
                                                    e.jsx('img', {
                                                        style: {
                                                            cursor: 'pointer',
                                                        },
                                                        onClick: () => {
                                                            var m;
                                                            return (m =
                                                                d.current) ==
                                                                null
                                                                ? void 0
                                                                : m.click();
                                                        },
                                                        src:
                                                            o == null
                                                                ? void 0
                                                                : o.CV_FOTO,
                                                        alt:
                                                            o == null
                                                                ? void 0
                                                                : o.CV_NOMBRE,
                                                    }),
                                                    e.jsx('input', {
                                                        ref: d,
                                                        value: a.FotoActualizar,
                                                        onChange: s,
                                                        type: 'file',
                                                        accept: 'image/*',
                                                        className:
                                                            'form-control-sm ',
                                                        id: 'FotoActualizar',
                                                        placeholder:
                                                            'Primer apellido',
                                                        name: 'FotoActualizar',
                                                    }),
                                                ],
                                            }),
                                            e.jsxs('div', {
                                                className: 'mb-3',
                                                children: [
                                                    e.jsx('label', {
                                                        htmlFor: 'Precio',
                                                        className: 'form-label',
                                                        children: 'Precio:',
                                                    }),
                                                    e.jsx('input', {
                                                        onChange: s,
                                                        value: a.Precio,
                                                        type: 'number',
                                                        className:
                                                            'form-control',
                                                        id: 'Precio',
                                                        placeholder: 'Precio',
                                                        name: 'Precio',
                                                    }),
                                                ],
                                            }),
                                            e.jsx('button', {
                                                onClick: () => {
                                                    r(
                                                        a,
                                                        t,
                                                        n,
                                                        o == null
                                                            ? void 0
                                                            : o.CI_ID_TELA
                                                    );
                                                },
                                                type: 'submit',
                                                className:
                                                    'btn btn-primary m-auto ',
                                                style: {
                                                    padding: '10px 10px',
                                                    backgroundColor: '#F35525',
                                                    border: '#F35525',
                                                },
                                                children: 'Actualizar tela',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        });
    },
    It = { password: '', passwordConfirmation: '' },
    At = () => {
        const { token: a } = ee(),
            {
                startResetPassword: s,
                reset: t,
                startGetStatePassword: l,
            } = la(),
            { onInputChange: r, formState: o, onResetForm: n } = V(It);
        return (
            u.useEffect(() => {
                l(a || '');
            }, [a]),
            e.jsx('div', {
                className: 'container mt-2',
                children: e.jsxs('div', {
                    className:
                        'row justify-content-center align-items-center text-center p-2',
                    children: [
                        e.jsx('div', {
                            className:
                                'm-1 col-sm-8 col-md-6 col-lg-4 shadow-sm p-3 mb-5 bg-white border rounded',
                            children: e.jsxs('div', {
                                className: 'pt-5 pb-5',
                                children: [
                                    e.jsx('p', {
                                        className: 'text-center  mt-3',
                                        children: 'Reestablecer contraseña',
                                    }),
                                    e.jsxs('form', {
                                        onSubmit: (d) => d.preventDefault(),
                                        className:
                                            'form text-center gap-3 d-flex flex-column',
                                        children: [
                                            e.jsx('div', {
                                                className:
                                                    'form-group input-group-md',
                                                children: e.jsx('input', {
                                                    value: o.password,
                                                    onChange: r,
                                                    type: 'password',
                                                    className:
                                                        'form-control w-75 m-auto',
                                                    id: 'password',
                                                    name: 'password',
                                                    'aria-describedby':
                                                        'emailHelp',
                                                    placeholder:
                                                        'Digita tu nueva contraseña',
                                                }),
                                            }),
                                            e.jsx('div', {
                                                className:
                                                    'form-group input-group-md',
                                                children: e.jsx('input', {
                                                    onChange: r,
                                                    value: o.passwordConfirmation,
                                                    type: 'password',
                                                    className:
                                                        'form-control w-75 m-auto',
                                                    id: 'passwordConfirmation',
                                                    name: 'passwordConfirmation',
                                                    placeholder:
                                                        'Confirma tu nueva contraseña',
                                                }),
                                            }),
                                            e.jsx('button', {
                                                disabled: t,
                                                onClick: () =>
                                                    s(
                                                        o,
                                                        (a == null
                                                            ? void 0
                                                            : a.toString()) ||
                                                            '',
                                                        n
                                                    ),
                                                className:
                                                    'btn btn-lg btn-block btn-secondary mt-4 w-75 m-auto',
                                                type: 'submit',
                                                children:
                                                    'Reestablece tu contraseña',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        t &&
                            e.jsx('h6', {
                                className: ' ',
                                children:
                                    'La página se cerrará automáticamente en 30 segundos.',
                            }),
                    ],
                }),
            })
        );
    },
    St = ({ children: a }) => {
        const s = _a();
        console.log(s), u.useEffect(() => {}, [s]);
        const { isLoading: t } = te(),
            { isLoading: l } = ne();
        return t
            ? e.jsx(Je, {})
            : l
            ? e.jsx(Je, {})
            : e.jsxs(e.Fragment, {
                  children: [
                      !s.pathname.includes('forgot/password') && e.jsx(Aa, {}),
                      a,
                      !s.pathname.includes('forgot/password') && e.jsx(Ms, {}),
                  ],
              });
    },
    be = ({ Counter: a, Text1: s, Text2: t }) =>
        e.jsx('div', {
            className: 'col-lg-4',
            children: e.jsxs('div', {
                className: 'counter',
                children: [
                    e.jsx('h2', {
                        className: 'timer count-title count-number',
                        'data-to': `+${a}`,
                        'data-speed': '1000',
                    }),
                    e.jsxs('p', {
                        className: 'count-text ',
                        children: [s, e.jsx('br', {}), t],
                    }),
                ],
            }),
        }),
    Et = () =>
        e.jsxs('div', {
            className: 'row',
            children: [
                e.jsx(be, {
                    Counter: 5e3,
                    Text1: 'Clientes',
                    Text2: 'satisfechos',
                }),
                e.jsx(be, {
                    Counter: 20,
                    Text1: 'Años',
                    Text2: 'de experiencia',
                }),
                e.jsx(be, {
                    Counter: 10,
                    Text1: 'Menciones',
                    Text2: 'en revistas',
                }),
            ],
        }),
    yt = () =>
        e.jsx('div', {
            className: 'fun-facts',
            children: e.jsx('div', {
                className: 'container',
                children: e.jsx('div', {
                    className: 'row',
                    children: e.jsx('div', {
                        className: 'col-lg-12',
                        children: e.jsx('div', {
                            className: 'wrapper',
                            children: e.jsx(Et, {}),
                        }),
                    }),
                }),
            }),
        }),
    Dt = () =>
        e.jsxs('div', {
            className: 'col-lg-5',
            children: [
                e.jsxs('div', {
                    className: 'section-heading',
                    children: [
                        e.jsx('h6', { children: '| Diseña' }),
                        e.jsx('h2', {
                            children:
                                'Estilo exclusivo y elegancia personalizada.',
                        }),
                    ],
                }),
                e.jsxs('div', {
                    className: 'accordion',
                    id: 'accordionExample',
                    children: [
                        e.jsxs('div', {
                            className: 'accordion-item',
                            children: [
                                e.jsx('h2', {
                                    className: 'accordion-header',
                                    id: 'headingTwo',
                                    children: e.jsx('button', {
                                        className: 'accordion-button collapsed',
                                        type: 'button',
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#collapseTwo',
                                        'aria-expanded': 'false',
                                        'aria-controls': 'collapseTwo',
                                        children: '¿Por qué elegirnos?',
                                    }),
                                }),
                                e.jsx('div', {
                                    id: 'collapseTwo',
                                    className: 'accordion-collapse collapse',
                                    'aria-labelledby': 'headingTwo',
                                    'data-bs-parent': '#accordionExample',
                                    children: e.jsx('div', {
                                        className: 'accordion-body',
                                        children:
                                            'Somos una empresa con años de experiencia en el mundo de la moda y el diseño. Miles de clientes han confiado su estilo y diseño a nuestros sastres expertos. Nuestro compromiso es brindar a cada cliente una experiencia única, adaptando nuestras creaciones a sus gustos y necesidades. Ya sea que busques un atuendo elegante, moderno o clásico, nuestro equipo está aquí para ayudarte a lucir tu mejor versión.',
                                    }),
                                }),
                            ],
                        }),
                        e.jsxs('div', {
                            className: 'accordion-item',
                            children: [
                                e.jsx('h2', {
                                    className: 'accordion-header',
                                    id: 'headingThree',
                                    children: e.jsx('button', {
                                        className: 'accordion-button collapsed',
                                        type: 'button',
                                        'data-bs-toggle': 'collapse',
                                        'data-bs-target': '#collapseThree',
                                        'aria-expanded': 'false',
                                        'aria-controls': 'collapseThree',
                                        children: '¿Por qué somos los mejores?',
                                    }),
                                }),
                                e.jsx('div', {
                                    id: 'collapseThree',
                                    className: 'accordion-collapse collapse',
                                    'aria-labelledby': 'headingThree',
                                    'data-bs-parent': '#accordionExample',
                                    children: e.jsx('div', {
                                        className: 'accordion-body',
                                        children:
                                            'Nuestro compromiso es brindar a cada cliente una experiencia única, adaptando nuestras creaciones a sus gustos y necesidades. Ya sea que busques un atuendo elegante, moderno o clásico, nuestro equipo está aquí para ayudarte a lucir tu mejor versión.',
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    Tt = () =>
        e.jsx('div', {
            className: 'info-table',
            children: e.jsxs('ul', {
                children: [
                    e.jsxs('li', {
                        children: [
                            e.jsx('img', {
                                src: '/assets/icons8-traje-formal-100.png',
                                alt: '',
                                style: { maxWidth: '52px' },
                            }),
                            e.jsxs('h4', {
                                children: [
                                    'Amplia variedad de estilos y tallas.',
                                    e.jsx('br', {}),
                                    e.jsx('span', {
                                        children:
                                            'Descubre trajes únicos que expresan tu individualidad, ¡estilo personalizado para todos!',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs('li', {
                        children: [
                            e.jsx('img', {
                                src: '/assets/icons8-coser-100.png',
                                alt: '',
                                style: { maxWidth: '52px' },
                            }),
                            e.jsxs('h4', {
                                children: [
                                    'Confección a medida',
                                    e.jsx('br', {}),
                                    e.jsxs('span', {
                                        children: [
                                            ' ',
                                            'Diseña tu estilo. Nuestros sastres expertos crean moda exclusiva para ti.',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsxs('li', {
                        children: [
                            e.jsx('img', {
                                src: '/assets/icons8-producto-exclusivo-96.png',
                                alt: '',
                                style: { maxWidth: '52px' },
                            }),
                            e.jsxs('h4', {
                                children: [
                                    'Diseños exclusivos',
                                    e.jsx('br', {}),
                                    e.jsxs('span', {
                                        children: [
                                            'Colección única: clásicos y tendencias. ¡Viste la elegancia atemporal y moderna!',
                                            ' ',
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
    Pt = () =>
        e.jsx('div', {
            className: 'featured section',
            children: e.jsx('div', {
                className: 'container',
                children: e.jsxs('div', {
                    className: 'row',
                    children: [
                        e.jsx('div', {
                            className: 'col-lg-4',
                            children: e.jsxs('div', {
                                className: 'left-image ',
                                children: [
                                    e.jsx('img', {
                                        src: '/assets/traje_vino.jpg',
                                        alt: '',
                                    }),
                                    e.jsx(B, {
                                        to: '/compra',
                                        children: e.jsx('img', {
                                            src: '/assets/icons8-marca-de-verificación-de-instagram-96.png',
                                            alt: '',
                                            style: {
                                                maxWidth: '80px',
                                                padding: '0px',
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        e.jsx(Dt, {}),
                        e.jsx('div', {
                            className: 'col-lg-3',
                            children: e.jsx(Tt, {}),
                        }),
                    ],
                }),
            }),
        }),
    Lt = () =>
        e.jsx(e.Fragment, {
            children: e.jsxs('div', {
                className: 'animate__animated animate__fadeIn',
                children: [
                    e.jsx(Rs, {}),
                    e.jsx(Pt, {}),
                    e.jsx(ws, {}),
                    e.jsx(yt, {}),
                ],
            }),
        }),
    Ot = () => {
        const {
            products: a = [],
            startGetProduct: s,
            CategoryActive: t,
        } = oe();
        return (
            u.useEffect(() => {
                s();
            }, [t]),
            e.jsxs(e.Fragment, {
                children: [
                    e.jsx(ca, { Title: 'Comprar' }),
                    e.jsx('div', {
                        className:
                            'section properties animate__animated animate__fadeIn',
                        children: e.jsxs('div', {
                            className: 'container',
                            children: [
                                e.jsx(Us, {}),
                                e.jsx('div', {
                                    className: 'row properties-box ',
                                    children: a.map((l) =>
                                        l.catalogo === ie.Venta &&
                                        t === 'Mostrar todo'
                                            ? e.jsx(Ze, { ...l }, l.id)
                                            : l.nombre.includes(t) &&
                                              l.catalogo === ie.Venta &&
                                              e.jsx(Ze, { ...l }, l.id)
                                    ),
                                }),
                            ],
                        }),
                    }),
                ],
            })
        );
    },
    Rt = () => {
        const a = Q();
        return e.jsxs(e.Fragment, {
            children: [
                e.jsx(da, {}),
                e.jsx(Gs, {
                    input: _s,
                    button: As,
                    title: 'Inicio sesión',
                    children: e.jsx(ia, {
                        title: 'Registrarse',
                        type: Oe.grey,
                        onClick: (s) => {
                            s.preventDefault(), a('/auth/registro');
                        },
                    }),
                }),
            ],
        });
    },
    Ft = () => {
        const { products: a, startGetProduct: s } = oe();
        return (
            u.useEffect(() => {
                s();
            }, []),
            e.jsx(e.Fragment, {
                children: e.jsx('div', {
                    className: 'properties section',
                    children: e.jsxs('div', {
                        className: 'container',
                        children: [
                            e.jsx('div', {
                                className: 'row',
                                children: e.jsx('div', {
                                    className: 'col-lg-4 offset-lg-4',
                                    children: e.jsxs('div', {
                                        className:
                                            'section-heading text-center',
                                        children: [
                                            e.jsx('h6', {
                                                children: '| ALQUILERES',
                                            }),
                                            e.jsx('h2', {
                                                children:
                                                    'Los mejores en alquiler de prendas',
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            e.jsx('div', {
                                className:
                                    'row animate__animated animate__fadeIn',
                                children: a.map(
                                    (t) =>
                                        t.catalogo === ie.Alquiler &&
                                        e.jsx(
                                            Vs,
                                            {
                                                title: t.nombre,
                                                category: t.color,
                                                sizes: t.tallas,
                                                price: t.precio,
                                                image: t.imagen,
                                                id: t.id,
                                            },
                                            t.id
                                        )
                                ),
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    wt = () => {
        const { status: a, user: s } = te(),
            { CreateMeasureShirt: t, startGetMeasureShirt: l } = me(),
            { CreateMeasureWaistcoat: r, startGetMeasureWaistcoat: o } = he(),
            { startSavePant: n, startGetMeasurePant: d } = ue(),
            { startSaveSuitJacket: m, startGetMeasureSuitJacket: p } = pe();
        return (
            u.useEffect(() => {
                l(), o(), d(), p();
            }, [s]),
            e.jsx('div', {
                className: 'section best-deal',
                children: e.jsx('div', {
                    className: 'container',
                    children: e.jsxs('div', {
                        className: 'row animate__animated animate__fadeIn',
                        children: [
                            e.jsx('div', {
                                className: 'col-lg-4',
                                children: e.jsxs('div', {
                                    className: 'section-heading',
                                    children: [
                                        e.jsx('h6', {
                                            children: '| CONFECCIÓN',
                                        }),
                                        e.jsx('h2', {
                                            children: '¡Hacemos tu estilo!',
                                        }),
                                    ],
                                }),
                            }),
                            e.jsx('div', {
                                className: 'col-lg-12 ',
                                children: e.jsx('div', {
                                    className: 'tabs-content',
                                    children: e.jsxs('div', {
                                        className: 'row',
                                        children: [
                                            e.jsx('div', {
                                                className: 'nav-wrapper ',
                                                children: e.jsxs('ul', {
                                                    className: 'nav nav-tabs',
                                                    role: 'tablist',
                                                    children: [
                                                        e.jsx('li', {
                                                            className:
                                                                'nav-item',
                                                            role: 'presentation',
                                                            children: e.jsx(
                                                                'button',
                                                                {
                                                                    className:
                                                                        'nav-link active',
                                                                    id: 'appartment-tab',
                                                                    'data-bs-toggle':
                                                                        'tab',
                                                                    'data-bs-target':
                                                                        '#appartment',
                                                                    type: 'button',
                                                                    role: 'tab',
                                                                    'aria-controls':
                                                                        'appartment',
                                                                    'aria-selected':
                                                                        'true',
                                                                    children:
                                                                        'Camisa',
                                                                }
                                                            ),
                                                        }),
                                                        e.jsx('li', {
                                                            className:
                                                                'nav-item',
                                                            role: 'presentation',
                                                            children: e.jsx(
                                                                'button',
                                                                {
                                                                    className:
                                                                        'nav-link',
                                                                    id: 'villa-tab',
                                                                    'data-bs-toggle':
                                                                        'tab',
                                                                    'data-bs-target':
                                                                        '#villa',
                                                                    type: 'button',
                                                                    role: 'tab',
                                                                    'aria-controls':
                                                                        'villa',
                                                                    'aria-selected':
                                                                        'false',
                                                                    children:
                                                                        'Chaleco',
                                                                }
                                                            ),
                                                        }),
                                                        e.jsx('li', {
                                                            className:
                                                                'nav-item',
                                                            role: 'presentation',
                                                            children: e.jsx(
                                                                'button',
                                                                {
                                                                    className:
                                                                        'nav-link',
                                                                    id: 'penthouse-tab',
                                                                    'data-bs-toggle':
                                                                        'tab',
                                                                    'data-bs-target':
                                                                        '#penthouse',
                                                                    type: 'button',
                                                                    role: 'tab',
                                                                    'aria-controls':
                                                                        'penthouse',
                                                                    'aria-selected':
                                                                        'false',
                                                                    children:
                                                                        'Pantalón',
                                                                }
                                                            ),
                                                        }),
                                                        e.jsx('li', {
                                                            className:
                                                                'nav-item',
                                                            role: 'presentation',
                                                            children: e.jsx(
                                                                'button',
                                                                {
                                                                    className:
                                                                        'nav-link',
                                                                    id: 'shirt-tab',
                                                                    'data-bs-toggle':
                                                                        'tab',
                                                                    'data-bs-target':
                                                                        '#shirt',
                                                                    type: 'button',
                                                                    role: 'tab',
                                                                    'aria-controls':
                                                                        'shirt',
                                                                    'aria-selected':
                                                                        'false',
                                                                    children:
                                                                        'Saco',
                                                                }
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            e.jsxs('div', {
                                                className: 'tab-content',
                                                id: 'myTabContent',
                                                children: [
                                                    e.jsx('div', {
                                                        className:
                                                            'tab-pane fade show active',
                                                        id: 'appartment',
                                                        role: 'tabpanel',
                                                        'aria-labelledby':
                                                            'appartment-tab',
                                                        children: e.jsxs(
                                                            'div',
                                                            {
                                                                className:
                                                                    'row',
                                                                children: [
                                                                    e.jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-3',
                                                                            children:
                                                                                e.jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'info-table',
                                                                                        children:
                                                                                            e.jsxs(
                                                                                                'ul',
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Confort de primer nivel ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Estilo personalizado',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Durabilidad y frescura',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Diseños Modernos',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    e.jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-6',
                                                                            children:
                                                                                e.jsx(
                                                                                    'img',
                                                                                    {
                                                                                        src: '/assets/camisa.jpg',
                                                                                        alt: '',
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-3',
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'h4',
                                                                                        {
                                                                                            children:
                                                                                                'Medidas para camisa',
                                                                                        }
                                                                                    ),
                                                                                    e.jsxs(
                                                                                        'div',
                                                                                        {
                                                                                            id: 'accordion',
                                                                                            className:
                                                                                                'accordion',
                                                                                            children:
                                                                                                [
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'headingTopShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button collapsed',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapsTopShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'false',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapsTopPant',
                                                                                                                                        children:
                                                                                                                                            'Medidas superiores camisa',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapsTopShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'headingTopShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                qs,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'headingLengthShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapseLengthShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'true',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapseLengthPant',
                                                                                                                                        children:
                                                                                                                                            'Medidas largo camisa',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapseLengthShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'headingLengthShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                Hs,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'DetailsShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapseDetailsShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'true',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapseLengthPant',
                                                                                                                                        children:
                                                                                                                                            'Detalles adicionales camisa',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapseDetailsShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'DetailsShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                Ws,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                ],
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'div',
                                                                                        {
                                                                                            className:
                                                                                                'icon-button',
                                                                                            children:
                                                                                                e.jsxs(
                                                                                                    B,
                                                                                                    {
                                                                                                        onClick:
                                                                                                            a ===
                                                                                                            'authenticated'
                                                                                                                ? t
                                                                                                                : () => {},
                                                                                                        to:
                                                                                                            a ===
                                                                                                            'not-authenticated'
                                                                                                                ? '/auth/login'
                                                                                                                : '',
                                                                                                        children:
                                                                                                            [
                                                                                                                e.jsx(
                                                                                                                    'i',
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            'fa fa-calendar',
                                                                                                                    }
                                                                                                                ),
                                                                                                                ' ',
                                                                                                                'Guardar medidas',
                                                                                                            ],
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        ),
                                                    }),
                                                    e.jsx('div', {
                                                        className:
                                                            'tab-pane fade',
                                                        id: 'villa',
                                                        role: 'tabpanel',
                                                        'aria-labelledby':
                                                            'villa-tab',
                                                        children: e.jsxs(
                                                            'div',
                                                            {
                                                                className:
                                                                    'row',
                                                                children: [
                                                                    e.jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-3',
                                                                            children:
                                                                                e.jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'info-table',
                                                                                        children:
                                                                                            e.jsxs(
                                                                                                'ul',
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Elegancia adicional',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Ajuste y comodidad',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Estilo versátil',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Detalles sofisticados',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    e.jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-6',
                                                                            children:
                                                                                e.jsx(
                                                                                    'img',
                                                                                    {
                                                                                        src: '/assets/chaleco.jpg',
                                                                                        alt: '',
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-3',
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'h4',
                                                                                        {
                                                                                            children:
                                                                                                'Medidas para chaleco',
                                                                                        }
                                                                                    ),
                                                                                    e.jsxs(
                                                                                        'div',
                                                                                        {
                                                                                            id: 'accordion',
                                                                                            className:
                                                                                                'accordion',
                                                                                            children:
                                                                                                [
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'headingTopShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button collapsed',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapsTopShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'false',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapsTopPant',
                                                                                                                                        children:
                                                                                                                                            'Medidas superiores chaleco',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapsTopShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'headingTopShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                Qs,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'headingLengthShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapseLengthShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'true',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapseLengthPant',
                                                                                                                                        children:
                                                                                                                                            'Medidas largo chaleco',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapseLengthShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'headingLengthShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                et,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'DetailsShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapseDetailsShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'true',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapseLengthPant',
                                                                                                                                        children:
                                                                                                                                            'Detalles adicionales chaleco',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapseDetailsShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'DetailsShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                at,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                ],
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'div',
                                                                                        {
                                                                                            className:
                                                                                                'icon-button',
                                                                                            children:
                                                                                                e.jsxs(
                                                                                                    B,
                                                                                                    {
                                                                                                        to:
                                                                                                            a ===
                                                                                                            'not-authenticated'
                                                                                                                ? '/auth/login'
                                                                                                                : '',
                                                                                                        onClick:
                                                                                                            a ===
                                                                                                            'authenticated'
                                                                                                                ? r
                                                                                                                : () => {},
                                                                                                        children:
                                                                                                            [
                                                                                                                e.jsx(
                                                                                                                    'i',
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            'fa fa-calendar',
                                                                                                                    }
                                                                                                                ),
                                                                                                                ' ',
                                                                                                                'Guardar medidas',
                                                                                                            ],
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        ),
                                                    }),
                                                    e.jsx('div', {
                                                        className:
                                                            'tab-pane fade',
                                                        id: 'penthouse',
                                                        role: 'tabpanel',
                                                        'aria-labelledby':
                                                            'penthouse-tab',
                                                        children: e.jsxs(
                                                            'div',
                                                            {
                                                                className:
                                                                    'row',
                                                                children: [
                                                                    e.jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-3',
                                                                            children:
                                                                                e.jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'info-table',
                                                                                        children:
                                                                                            e.jsxs(
                                                                                                'ul',
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Elegancia a la medida ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Telas de primera calidad',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Detalles personalizados',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Versatilidad estilizada',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    e.jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-6',
                                                                            children:
                                                                                e.jsx(
                                                                                    'img',
                                                                                    {
                                                                                        src: '/assets/pantalon.jpg',
                                                                                        alt: '',
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-3',
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'h4',
                                                                                        {
                                                                                            children:
                                                                                                'Medidas para pantalón',
                                                                                        }
                                                                                    ),
                                                                                    e.jsxs(
                                                                                        'div',
                                                                                        {
                                                                                            id: 'accordion',
                                                                                            className:
                                                                                                'accordion',
                                                                                            children:
                                                                                                [
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'headingTopShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button collapsed',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapsTopShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'false',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapsTopPant',
                                                                                                                                        children:
                                                                                                                                            'Medidas superiores pantalón',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapsTopShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'headingTopShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                dt,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'headingLengthShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapseLengthShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'true',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapseLengthPant',
                                                                                                                                        children:
                                                                                                                                            'Medidas largo pantalón',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapseLengthShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'headingLengthShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                mt,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'DetailsShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapseDetailsShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'true',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapseLengthPant',
                                                                                                                                        children:
                                                                                                                                            'Detalles adicionales pantalón',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapseDetailsShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'DetailsShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                ht,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                ],
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'div',
                                                                                        {
                                                                                            className:
                                                                                                'icon-button',
                                                                                            children:
                                                                                                e.jsxs(
                                                                                                    B,
                                                                                                    {
                                                                                                        to:
                                                                                                            a ===
                                                                                                            'not-authenticated'
                                                                                                                ? '/auth/login'
                                                                                                                : '',
                                                                                                        onClick:
                                                                                                            a ===
                                                                                                            'authenticated'
                                                                                                                ? n
                                                                                                                : () => {},
                                                                                                        children:
                                                                                                            [
                                                                                                                e.jsx(
                                                                                                                    'i',
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            'fa fa-save',
                                                                                                                    }
                                                                                                                ),
                                                                                                                ' ',
                                                                                                                'Guardar medidas',
                                                                                                            ],
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        ),
                                                    }),
                                                    e.jsx('div', {
                                                        className:
                                                            'tab-pane fade',
                                                        id: 'shirt',
                                                        role: 'tabpanel',
                                                        'aria-labelledby':
                                                            'shirt-tab',
                                                        children: e.jsxs(
                                                            'div',
                                                            {
                                                                className:
                                                                    'row',
                                                                children: [
                                                                    e.jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-3',
                                                                            children:
                                                                                e.jsx(
                                                                                    'div',
                                                                                    {
                                                                                        className:
                                                                                            'info-table',
                                                                                        children:
                                                                                            e.jsxs(
                                                                                                'ul',
                                                                                                {
                                                                                                    children:
                                                                                                        [
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Elegancia a la medida ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Telas de primera calidad',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Detalles personalizados',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                            e.jsxs(
                                                                                                                'li',
                                                                                                                {
                                                                                                                    children:
                                                                                                                        [
                                                                                                                            'Versatilidad estilizada',
                                                                                                                            ' ',
                                                                                                                            e.jsx(
                                                                                                                                'span',
                                                                                                                                {}
                                                                                                                            ),
                                                                                                                        ],
                                                                                                                }
                                                                                                            ),
                                                                                                        ],
                                                                                                }
                                                                                            ),
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    e.jsx(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-6',
                                                                            children:
                                                                                e.jsx(
                                                                                    'img',
                                                                                    {
                                                                                        src: '/assets/saco3.jpg',
                                                                                        alt: 'Camisa',
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'col-lg-3',
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'h4',
                                                                                        {
                                                                                            children:
                                                                                                'Medidas para saco',
                                                                                        }
                                                                                    ),
                                                                                    e.jsxs(
                                                                                        'div',
                                                                                        {
                                                                                            id: 'accordion',
                                                                                            className:
                                                                                                'accordion',
                                                                                            children:
                                                                                                [
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'headingTopShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button collapsed',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapsTopShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'false',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapsTopPant',
                                                                                                                                        children:
                                                                                                                                            'Medidas superiores saco',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapsTopShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'headingTopShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                ut,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'headingLengthShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapseLengthShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'true',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapseLengthPant',
                                                                                                                                        children:
                                                                                                                                            'Medidas largo saco',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapseLengthShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'headingLengthShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                pt,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                    e.jsxs(
                                                                                                        'div',
                                                                                                        {
                                                                                                            className:
                                                                                                                'accordion-item',
                                                                                                            children:
                                                                                                                [
                                                                                                                    e.jsx(
                                                                                                                        'h2',
                                                                                                                        {
                                                                                                                            className:
                                                                                                                                'accordion-header',
                                                                                                                            id: 'DetailsShirt',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'button',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-button',
                                                                                                                                        type: 'button',
                                                                                                                                        'data-bs-toggle':
                                                                                                                                            'collapse',
                                                                                                                                        'data-bs-target':
                                                                                                                                            '#collapseDetailsShirt',
                                                                                                                                        'aria-expanded':
                                                                                                                                            'true',
                                                                                                                                        'aria-controls':
                                                                                                                                            'collapseLengthPant',
                                                                                                                                        children:
                                                                                                                                            'Detalles adicionales saco',
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                    e.jsx(
                                                                                                                        'div',
                                                                                                                        {
                                                                                                                            id: 'collapseDetailsShirt',
                                                                                                                            className:
                                                                                                                                'accordion-collapse collapse',
                                                                                                                            'aria-labelledby':
                                                                                                                                'DetailsShirt',
                                                                                                                            'data-bs-parent':
                                                                                                                                '#accordion',
                                                                                                                            children:
                                                                                                                                e.jsx(
                                                                                                                                    'div',
                                                                                                                                    {
                                                                                                                                        className:
                                                                                                                                            'accordion-body',
                                                                                                                                        children:
                                                                                                                                            e.jsx(
                                                                                                                                                xt,
                                                                                                                                                {}
                                                                                                                                            ),
                                                                                                                                    }
                                                                                                                                ),
                                                                                                                        }
                                                                                                                    ),
                                                                                                                ],
                                                                                                        }
                                                                                                    ),
                                                                                                ],
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'div',
                                                                                        {
                                                                                            className:
                                                                                                'icon-button',
                                                                                            children:
                                                                                                e.jsxs(
                                                                                                    B,
                                                                                                    {
                                                                                                        to:
                                                                                                            a ===
                                                                                                            'not-authenticated'
                                                                                                                ? '/auth/login'
                                                                                                                : '',
                                                                                                        onClick:
                                                                                                            a ===
                                                                                                            'authenticated'
                                                                                                                ? m
                                                                                                                : () => {},
                                                                                                        children:
                                                                                                            [
                                                                                                                e.jsx(
                                                                                                                    'i',
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            'fa fa-save',
                                                                                                                    }
                                                                                                                ),
                                                                                                                ' ',
                                                                                                                'Guardar medidas',
                                                                                                            ],
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            })
        );
    },
    Mt = ({
        id: a,
        nombre: s,
        precio: t,
        imagen: l,
        descripcion: r,
        cantidad: o,
    }) => {
        const {
                startProductDelete: n,
                startAddSize: d,
                productscart: m,
                startCountProduct: p,
                starCalculateMount: h,
            } = ne(),
            { products: c } = oe(),
            [j, i] = u.useState(
                c
                    .filter((v) => v.id === a)
                    .flatMap((v) =>
                        v.tallas
                            .filter(
                                (f) =>
                                    f.T_TALLA.CI_ID_TALLA ===
                                    v.tallas[0].T_TALLA.CI_ID_TALLA
                            )
                            .map((f) => f.T_TALLA.CI_ID_TALLA)
                    )[0]
            ),
            C = ({ target: v }) => {
                const { value: f } = v;
                i(+f);
            },
            [g, N] = u.useState(o || 1),
            _ = ({ target: v }) => {
                const { value: f } = v;
                N(parseInt(f)), p(a, parseInt(f));
            };
        return (
            d(a, j),
            u.useEffect(() => {
                N(1);
            }, [j]),
            u.useEffect(() => {
                h();
            }, [g]),
            u.useEffect(() => {
                h();
            }, [m]),
            e.jsx('div', {
                className: 'card-body',
                children: e.jsxs('div', {
                    className:
                        'd-flex gap-5  justify-between align-items-center',
                    children: [
                        e.jsxs('div', {
                            className:
                                'd-flex flex-row w-100 align-items-center',
                            children: [
                                e.jsx('div', {
                                    children: e.jsx('img', {
                                        src: l,
                                        className: 'img-fluid rounded-3',
                                        alt: 'Shopping item',
                                        style: {
                                            width: '65px',
                                            height: '65px',
                                        },
                                    }),
                                }),
                                e.jsxs('div', {
                                    className: 'ms-3 w-100',
                                    children: [
                                        e.jsx('h4', {
                                            className: ' w-100 ',
                                            children: s,
                                        }),
                                        e.jsx('p', {
                                            className: 'small mb-0',
                                            children: r,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsx('select', {
                            onChange: C,
                            value: j,
                            className: 'form-select w-50 h-100  ',
                            name: `talla${a}`,
                            id: 'talla',
                            children: c.map((v) =>
                                v.id === a
                                    ? v.tallas.map((f) =>
                                          e.jsx(
                                              'option',
                                              {
                                                  value: f.T_TALLA.CI_ID_TALLA,
                                                  children: f.T_TALLA.CV_TALLA,
                                              },
                                              f.T_TALLA.CI_ID_TALLA
                                          )
                                      )
                                    : ''
                            ),
                        }),
                        e.jsxs('div', {
                            className:
                                'd-flex justify-content-md-around  gap-5 flex-row align-items-center',
                            children: [
                                e.jsx('div', {
                                    style: { width: '80px' },
                                    children: e.jsx('input', {
                                        min: 1,
                                        max:
                                            j === 6
                                                ? 1
                                                : c
                                                      .filter((v) => v.id === a)
                                                      .flatMap((v) =>
                                                          v.tallas
                                                              .filter(
                                                                  (f) =>
                                                                      f.T_TALLA
                                                                          .CI_ID_TALLA ===
                                                                      j
                                                              )
                                                              .map(
                                                                  (f) =>
                                                                      f.CI_CANTIDAD
                                                              )
                                                      )
                                                      .reduce(
                                                          (v, f) =>
                                                              Math.max(v, f),
                                                          0
                                                      ),
                                        onChange: _,
                                        name: `Cantidad-${a}`,
                                        type: 'number',
                                        value: g,
                                        className:
                                            j === 6
                                                ? 'd-none'
                                                : 'd-block form-control',
                                    }),
                                }),
                                e.jsx('div', {
                                    style: { width: '80px' },
                                    children: e.jsxs('span', {
                                        className: '',
                                        children: ['₡ ', t],
                                    }),
                                }),
                                e.jsx('a', {
                                    href: '#!',
                                    style: { color: '#cecece' },
                                    children: e.jsx('i', {
                                        onClick: () => {
                                            N(0), n(a);
                                        },
                                        className: 'fas fa-trash-alt',
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    },
    Ut = {
        NOMBRE: '',
        NUM_TARJETA: '',
        EXPIRA: '',
        CVV: '',
        FECHA_ENTREGA: '',
    },
    Vt = () => {
        const {
                productscart: a,
                startShoppinCart: s,
                starCalculateMount: t,
                subtotal: l,
                total: r,
            } = ne(),
            { startGetProduct: o } = oe(),
            { onInputChange: n, formState: d, setFormState: m } = V(Ut);
        u.useEffect(() => {
            o(), t();
        }, []);
        const p = u.useRef(null);
        return (
            u.useEffect(() => {
                d.EXPIRA.length === 2 && !d.EXPIRA.includes('/')
                    ? m({ ...d, EXPIRA: d.EXPIRA + '/' })
                    : d.EXPIRA.length === 5
                    ? d.EXPIRA.charAt(2) !== '/' &&
                      m({ ...d, EXPIRA: d.EXPIRA.split('/')[0] })
                    : d.EXPIRA.length > 5 &&
                      m({ ...d, EXPIRA: d.EXPIRA.substring(0, 5) }),
                    console.log(d);
            }, [d.EXPIRA]),
            u.useEffect(() => {
                localStorage.setItem('cart', JSON.stringify(a));
            }, [a]),
            console.log(d),
            e.jsx('section', {
                className: 'h-100 h-custom animate__animated animate__fadeIn',
                style: { backgroundColor: '#eee' },
                children: e.jsx('div', {
                    className: 'container py-5 h-100',
                    children: e.jsx('div', {
                        className:
                            'row d-flex justify-content-center align-items-center h-100',
                        children: e.jsx('div', {
                            className: 'col',
                            children: e.jsx('div', {
                                className: 'card',
                                children: e.jsx('div', {
                                    className: 'card-body p-4',
                                    children: e.jsxs('div', {
                                        className: 'row',
                                        children: [
                                            e.jsxs('div', {
                                                className: 'col-lg-7',
                                                children: [
                                                    e.jsx('h5', {
                                                        className: 'mb-3',
                                                        children: e.jsxs(B, {
                                                            to: '/compra',
                                                            className:
                                                                'text-body',
                                                            children: [
                                                                e.jsx('i', {
                                                                    className:
                                                                        'fas fa-long-arrow-alt-left me-2',
                                                                }),
                                                                'Seguir comprando',
                                                            ],
                                                        }),
                                                    }),
                                                    e.jsx('hr', {}),
                                                    e.jsxs('div', {
                                                        className:
                                                            'd-flex justify-content-between align-items-center mb-4',
                                                        children: [
                                                            e.jsxs('div', {
                                                                children: [
                                                                    e.jsx('p', {
                                                                        className:
                                                                            'mb-1',
                                                                        children:
                                                                            'Carrito de compras',
                                                                    }),
                                                                    e.jsx('p', {
                                                                        className:
                                                                            'mb-0',
                                                                        children:
                                                                            'Usted tiene 0 elementos en su carrito de compras',
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsx('input', {
                                                                onChange: n,
                                                                value: d.FECHA_ENTREGA,
                                                                name: 'FECHA_ENTREGA',
                                                                min: `${
                                                                    new Date(
                                                                        new Date().getTime() +
                                                                            3 *
                                                                                24 *
                                                                                60 *
                                                                                60 *
                                                                                1e3
                                                                    )
                                                                        .toISOString()
                                                                        .split(
                                                                            'T'
                                                                        )[0]
                                                                }`,
                                                                max: `${
                                                                    new Date(
                                                                        new Date().getFullYear(),
                                                                        new Date().getMonth() +
                                                                            5,
                                                                        0
                                                                    )
                                                                        .toISOString()
                                                                        .split(
                                                                            'T'
                                                                        )[0]
                                                                }`,
                                                                type: 'date',
                                                                placeholder:
                                                                    'Fecha de entrega',
                                                                className:
                                                                    'btn btn-primary ',
                                                                style: {
                                                                    backgroundColor:
                                                                        '#F35525',
                                                                    border: '#F35525',
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                    e.jsx('div', {
                                                        className: 'card mb-3',
                                                        children: a.map((h) =>
                                                            e.jsx(
                                                                Mt,
                                                                {
                                                                    id: h.id,
                                                                    nombre: h.nombre,
                                                                    precio: h.precio,
                                                                    imagen: h.imagen,
                                                                    descripcion:
                                                                        h.descripcion,
                                                                    cantidad:
                                                                        h.cantidad,
                                                                },
                                                                h.id
                                                            )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            e.jsx('div', {
                                                className: 'col-lg-5',
                                                children: e.jsx('div', {
                                                    className:
                                                        'card bg-primary text-white rounded-3',
                                                    children: e.jsxs('div', {
                                                        className: 'card-body',
                                                        style: {
                                                            backgroundColor:
                                                                '#E97C5B',
                                                            border: '#E97C5B',
                                                        },
                                                        children: [
                                                            e.jsx('div', {
                                                                className:
                                                                    'd-flex justify-content-between align-items-center mb-4',
                                                                children: e.jsx(
                                                                    'h5',
                                                                    {
                                                                        className:
                                                                            'mb-0',
                                                                        children:
                                                                            'Detalles de la tarjeta',
                                                                    }
                                                                ),
                                                            }),
                                                            e.jsx('p', {
                                                                className:
                                                                    'small mb-2',
                                                                children:
                                                                    'Tipo de tarjetas',
                                                            }),
                                                            e.jsx('a', {
                                                                href: '#!',
                                                                type: 'submit',
                                                                className:
                                                                    'text-white',
                                                                children: e.jsx(
                                                                    'i',
                                                                    {
                                                                        className:
                                                                            'fab fa-cc-mastercard fa-2x me-2',
                                                                    }
                                                                ),
                                                            }),
                                                            e.jsx('a', {
                                                                href: '#!',
                                                                type: 'submit',
                                                                className:
                                                                    'text-white',
                                                                children: e.jsx(
                                                                    'i',
                                                                    {
                                                                        className:
                                                                            'fab fa-cc-visa fa-2x me-2',
                                                                    }
                                                                ),
                                                            }),
                                                            e.jsx('a', {
                                                                href: '#!',
                                                                type: 'submit',
                                                                className:
                                                                    'text-white',
                                                                children: e.jsx(
                                                                    'i',
                                                                    {
                                                                        className:
                                                                            'fab fa-cc-amex fa-2x me-2',
                                                                    }
                                                                ),
                                                            }),
                                                            e.jsx('a', {
                                                                href: '#!',
                                                                type: 'submit',
                                                                className:
                                                                    'text-white',
                                                                children: e.jsx(
                                                                    'i',
                                                                    {
                                                                        className:
                                                                            'fab fa-cc-paypal fa-2x',
                                                                    }
                                                                ),
                                                            }),
                                                            e.jsxs('form', {
                                                                className:
                                                                    'mt-4',
                                                                children: [
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'form-outline form-white mb-4',
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'input',
                                                                                        {
                                                                                            type: 'text',
                                                                                            id: 'typeName',
                                                                                            className:
                                                                                                'form-control form-control-lg',
                                                                                            size: 17,
                                                                                            onChange:
                                                                                                n,
                                                                                            value:
                                                                                                d.NOMBRE ||
                                                                                                '',
                                                                                            name: 'NOMBRE',
                                                                                            placeholder:
                                                                                                'Nombre completo',
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'label',
                                                                                        {
                                                                                            className:
                                                                                                'form-label',
                                                                                            htmlFor:
                                                                                                'typeName',
                                                                                            children:
                                                                                                'Propietario de la tarjeta',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'form-outline form-white mb-4',
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'input',
                                                                                        {
                                                                                            type: 'tel',
                                                                                            id: 'NUM_TARJETA',
                                                                                            className:
                                                                                                'form-control form-control-lg',
                                                                                            size: 17,
                                                                                            pattern:
                                                                                                '[0-9\\s]{13,19}',
                                                                                            placeholder:
                                                                                                'xxxx xxxx xxxx xxxx',
                                                                                            minLength: 19,
                                                                                            autoComplete:
                                                                                                'cc-number',
                                                                                            maxLength: 19,
                                                                                            name: 'NUM_TARJETA',
                                                                                            value:
                                                                                                d.NUM_TARJETA ||
                                                                                                '',
                                                                                            onChange:
                                                                                                n,
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'label',
                                                                                        {
                                                                                            className:
                                                                                                'form-label',
                                                                                            htmlFor:
                                                                                                'typeText',
                                                                                            children:
                                                                                                'Número de la tarjeta',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'row mb-4',
                                                                            children:
                                                                                [
                                                                                    e.jsx(
                                                                                        'div',
                                                                                        {
                                                                                            className:
                                                                                                'col-md-6',
                                                                                            children:
                                                                                                e.jsxs(
                                                                                                    'div',
                                                                                                    {
                                                                                                        className:
                                                                                                            'form-outline form-white',
                                                                                                        children:
                                                                                                            [
                                                                                                                e.jsx(
                                                                                                                    'input',
                                                                                                                    {
                                                                                                                        ref: p,
                                                                                                                        type: 'text',
                                                                                                                        id: 'typeExp',
                                                                                                                        className:
                                                                                                                            'form-control form-control-lg',
                                                                                                                        placeholder:
                                                                                                                            'MM/YYYY',
                                                                                                                        pattern:
                                                                                                                            '\\d*',
                                                                                                                        size: 7,
                                                                                                                        minLength: 7,
                                                                                                                        maxLength: 5,
                                                                                                                        name: 'EXPIRA',
                                                                                                                        value: d.EXPIRA,
                                                                                                                        onChange:
                                                                                                                            n,
                                                                                                                    }
                                                                                                                ),
                                                                                                                e.jsx(
                                                                                                                    'label',
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            'form-label',
                                                                                                                        htmlFor:
                                                                                                                            'typeExp',
                                                                                                                        children:
                                                                                                                            'Expira',
                                                                                                                    }
                                                                                                                ),
                                                                                                            ],
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'div',
                                                                                        {
                                                                                            className:
                                                                                                'col-md-6',
                                                                                            children:
                                                                                                e.jsxs(
                                                                                                    'div',
                                                                                                    {
                                                                                                        className:
                                                                                                            'form-outline form-white',
                                                                                                        children:
                                                                                                            [
                                                                                                                e.jsx(
                                                                                                                    'input',
                                                                                                                    {
                                                                                                                        type: 'password',
                                                                                                                        id: 'typeText',
                                                                                                                        className:
                                                                                                                            'form-control form-control-lg',
                                                                                                                        placeholder:
                                                                                                                            '●●●',
                                                                                                                        size: 1,
                                                                                                                        minLength: 3,
                                                                                                                        maxLength: 3,
                                                                                                                        name: 'CVV',
                                                                                                                        value: d.CVV,
                                                                                                                        onChange:
                                                                                                                            n,
                                                                                                                    }
                                                                                                                ),
                                                                                                                e.jsx(
                                                                                                                    'label',
                                                                                                                    {
                                                                                                                        className:
                                                                                                                            'form-label',
                                                                                                                        htmlFor:
                                                                                                                            'typeText',
                                                                                                                        children:
                                                                                                                            'CVV',
                                                                                                                    }
                                                                                                                ),
                                                                                                            ],
                                                                                                    }
                                                                                                ),
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                            e.jsx('hr', {
                                                                className:
                                                                    'my-4',
                                                            }),
                                                            e.jsxs('div', {
                                                                className:
                                                                    'd-flex justify-content-between',
                                                                children: [
                                                                    e.jsx('p', {
                                                                        className:
                                                                            'mb-2',
                                                                        children:
                                                                            'Subtotal',
                                                                    }),
                                                                    e.jsxs(
                                                                        'p',
                                                                        {
                                                                            className:
                                                                                'mb-2',
                                                                            children:
                                                                                [
                                                                                    '₡',
                                                                                    l,
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                            e.jsxs('div', {
                                                                className:
                                                                    'd-flex justify-content-between',
                                                                children: [
                                                                    e.jsx('p', {
                                                                        className:
                                                                            'mb-2',
                                                                        children:
                                                                            'Envío',
                                                                    }),
                                                                    e.jsx('p', {
                                                                        className:
                                                                            'mb-2',
                                                                        children:
                                                                            a.length >
                                                                            0
                                                                                ? '₡3000'
                                                                                : '₡0',
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsxs('div', {
                                                                className:
                                                                    'd-flex justify-content-between mb-4',
                                                                children: [
                                                                    e.jsx('p', {
                                                                        className:
                                                                            'mb-2',
                                                                        children:
                                                                            'Total (Incl. impuestos)',
                                                                    }),
                                                                    e.jsxs(
                                                                        'p',
                                                                        {
                                                                            className:
                                                                                'mb-2',
                                                                            children:
                                                                                [
                                                                                    '₡',
                                                                                    r,
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                            e.jsx('button', {
                                                                onClick: () =>
                                                                    s(d),
                                                                disabled:
                                                                    a.length <=
                                                                    0,
                                                                type: 'button',
                                                                className:
                                                                    'btn btn-info btn-block btn-lg',
                                                                style: {
                                                                    backgroundColor:
                                                                        '#6BD699',
                                                                },
                                                                children:
                                                                    e.jsxs(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                'd-flex justify-content-between',
                                                                            children:
                                                                                [
                                                                                    e.jsxs(
                                                                                        'span',
                                                                                        {
                                                                                            className:
                                                                                                'me-2',
                                                                                            children:
                                                                                                [
                                                                                                    '₡',
                                                                                                    r,
                                                                                                    ' ',
                                                                                                ],
                                                                                        }
                                                                                    ),
                                                                                    e.jsxs(
                                                                                        'span',
                                                                                        {
                                                                                            children:
                                                                                                [
                                                                                                    'Comprar',
                                                                                                    ' ',
                                                                                                    e.jsx(
                                                                                                        'i',
                                                                                                        {
                                                                                                            className:
                                                                                                                'fas fa-long-arrow-alt-right ms-2',
                                                                                                        }
                                                                                                    ),
                                                                                                ],
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    }),
                }),
            })
        );
    },
    kt = () =>
        e.jsx('form', {
            id: 'contact-form',
            action: '',
            method: 'post',
            children: e.jsxs('div', {
                className: 'row',
                children: [
                    e.jsx('div', {
                        className: 'col-lg-12',
                        children: e.jsxs('fieldset', {
                            children: [
                                e.jsx('label', {
                                    htmlFor: 'name',
                                    children: 'Nombre completo',
                                }),
                                e.jsx('input', {
                                    type: 'name',
                                    name: 'name',
                                    id: 'name',
                                    placeholder: 'Tu nombre...',
                                    autoComplete: 'on',
                                    required: !0,
                                }),
                            ],
                        }),
                    }),
                    e.jsx('div', {
                        className: 'col-lg-12',
                        children: e.jsxs('fieldset', {
                            children: [
                                e.jsx('label', {
                                    htmlFor: 'email',
                                    children: 'Dirección de correo',
                                }),
                                e.jsx('input', {
                                    type: 'text',
                                    name: 'email',
                                    id: 'email',
                                    pattern: '[^ @]*@[^ @]*',
                                    placeholder: 'Tu e-mail...',
                                    required: !0,
                                }),
                            ],
                        }),
                    }),
                    e.jsx('div', {
                        className: 'col-lg-12',
                        children: e.jsxs('fieldset', {
                            children: [
                                e.jsx('label', {
                                    htmlFor: 'subject',
                                    children: 'Asunto',
                                }),
                                e.jsx('input', {
                                    type: 'subject',
                                    name: 'subject',
                                    id: 'subject',
                                    placeholder: 'Asunto...',
                                    autoComplete: 'on',
                                }),
                            ],
                        }),
                    }),
                    e.jsx('div', {
                        className: 'col-lg-12',
                        children: e.jsxs('fieldset', {
                            children: [
                                e.jsx('label', {
                                    htmlFor: 'message',
                                    children: 'Mensaje',
                                }),
                                e.jsx('textarea', {
                                    name: 'message',
                                    id: 'message',
                                    placeholder: 'Tu mensaje',
                                }),
                            ],
                        }),
                    }),
                    e.jsx('div', {
                        className: 'col-lg-12',
                        children: e.jsx('fieldset', {
                            children: e.jsx('button', {
                                type: 'submit',
                                id: 'form-submit',
                                className: 'orange-button',
                                children: 'Enviar mensaje',
                            }),
                        }),
                    }),
                ],
            }),
        }),
    Gt = () =>
        e.jsx(e.Fragment, {
            children: e.jsxs('div', {
                className: 'animate__animated animate__fadeIn',
                children: [
                    e.jsx(ca, { Title: 'Contáctenos' }),
                    e.jsx('div', {
                        className: 'contact-page section',
                        children: e.jsx('div', {
                            className: 'container',
                            children: e.jsxs('div', {
                                className: 'row',
                                children: [
                                    e.jsxs('div', {
                                        className: 'col-lg-6',
                                        children: [
                                            e.jsxs('div', {
                                                className: 'section-heading',
                                                children: [
                                                    e.jsx('h6', {
                                                        children:
                                                            '| Contactenos',
                                                    }),
                                                    e.jsx('h2', {
                                                        children:
                                                            'Póngase en contacto con nuestros agentes',
                                                    }),
                                                ],
                                            }),
                                            e.jsx('p', {
                                                children:
                                                    'Estamos aquí para atender sus consultas y brindarle la mejor asistencia posible. Si tiene preguntas, comentarios o inquietudes, no dude en comunicarse con nuestro equipo de agentes capacitados. Valoramos su opinión y estamos aquí para ayudarle en lo que necesite.',
                                            }),
                                            e.jsxs('div', {
                                                className: 'row',
                                                children: [
                                                    e.jsx('div', {
                                                        className: 'col-lg-12',
                                                        children: e.jsxs(
                                                            'div',
                                                            {
                                                                className:
                                                                    'item phone',
                                                                children: [
                                                                    e.jsx(
                                                                        'img',
                                                                        {
                                                                            src: '/assets/phone-icon.png',
                                                                            alt: '',
                                                                            style: {
                                                                                maxWidth:
                                                                                    '52px',
                                                                            },
                                                                        }
                                                                    ),
                                                                    e.jsxs(
                                                                        'h6',
                                                                        {
                                                                            children:
                                                                                [
                                                                                    '506-0000-8655',
                                                                                    e.jsx(
                                                                                        'br',
                                                                                        {}
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'span',
                                                                                        {
                                                                                            children:
                                                                                                'Número de teléfono',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        ),
                                                    }),
                                                    e.jsx('div', {
                                                        className: 'col-lg-12',
                                                        children: e.jsxs(
                                                            'div',
                                                            {
                                                                className:
                                                                    'item email',
                                                                children: [
                                                                    e.jsx(
                                                                        'img',
                                                                        {
                                                                            src: '/assets/email-icon.png',
                                                                            alt: '',
                                                                            style: {
                                                                                maxWidth:
                                                                                    '52px',
                                                                            },
                                                                        }
                                                                    ),
                                                                    e.jsxs(
                                                                        'h6',
                                                                        {
                                                                            children:
                                                                                [
                                                                                    'cotizar@SATOVAR.co',
                                                                                    e.jsx(
                                                                                        'br',
                                                                                        {}
                                                                                    ),
                                                                                    e.jsx(
                                                                                        'span',
                                                                                        {
                                                                                            children:
                                                                                                'Correo empresarial',
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        }
                                                                    ),
                                                                ],
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    e.jsx('div', {
                                        className: 'col-lg-6',
                                        children: e.jsx(kt, {}),
                                    }),
                                    e.jsx('div', {
                                        className: 'col-lg-12',
                                        children: e.jsx(Bs, {}),
                                    }),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
        }),
    Bt = () =>
        e.jsxs('section', {
            className: 'text-center',
            children: [
                e.jsx(da, {}),
                e.jsx('div', {
                    className: 'container',
                    children: e.jsx('div', {
                        className: 'row d-flex justify-content-center',
                        children: e.jsx('div', {
                            className: 'col-lg-8',
                            children: e.jsx('div', {
                                className: 'card shadow-5-strong',
                                style: {
                                    background: 'hsla(0, 0%, 100%, 0.8)',
                                    backdropFilter: 'blur(30px)',
                                    marginTop: '-25%',
                                },
                                children: e.jsxs('div', {
                                    className: 'card-body py-5 px-md-5',
                                    children: [
                                        e.jsxs('h2', {
                                            className: 'fw-bold mb-5',
                                            children: [
                                                'SATOVAR',
                                                ' ',
                                                e.jsx('div', {
                                                    style: { color: '#F35525' },
                                                    children: 'Registro',
                                                }),
                                            ],
                                        }),
                                        e.jsx($s, {}),
                                    ],
                                }),
                            }),
                        }),
                    }),
                }),
            ],
        }),
    $t = () => e.jsxs(e.Fragment, { children: [e.jsx(Xs, {}), e.jsx(Ys, {})] }),
    zt = () => {
        const {
                orders: a,
                startGetAllOrders: s,
                startUpdateStatusOrder: t,
            } = Fe(),
            { formState: l, setFormState: r } = V(),
            o = ({ target: n }, d) => {
                const { name: m, value: p } = n;
                r({ ...l, [m]: p }), t(d, +p);
            };
        return (
            u.useEffect(() => {
                s();
            }, []),
            u.useEffect(() => {
                r((n) => {
                    const d = { ...n };
                    return (
                        a.forEach((m) => {
                            d[`Estado-${m.CI_ID_PEDIDO}`] =
                                m.CI_ID_ESTADO.toString();
                        }),
                        d
                    );
                });
            }, [a]),
            e.jsx('div', {
                className: 'col',
                children: e.jsxs('div', {
                    className: 'container mt-2 border tabla-terminado',
                    children: [
                        e.jsxs('div', {
                            className: 'text-center',
                            children: [
                                e.jsx('h2', { children: 'Pedidos terminados' }),
                                e.jsx('hr', {}),
                            ],
                        }),
                        e.jsxs('table', {
                            className: 'table table-striped',
                            children: [
                                e.jsx('thead', {
                                    children: e.jsxs('tr', {
                                        children: [
                                            e.jsx('th', {
                                                children: 'N° Pedido',
                                            }),
                                            e.jsx('th', { children: 'Cédula' }),
                                            e.jsx('th', { children: 'Lugar' }),
                                            e.jsx('th', {
                                                children: 'Teléfono',
                                            }),
                                            e.jsx('th', {
                                                children: 'Fecha de entrega',
                                            }),
                                            e.jsx('th', {
                                                children: 'Estado ',
                                            }),
                                        ],
                                    }),
                                }),
                                e.jsx('tbody', {
                                    children:
                                        a == null
                                            ? void 0
                                            : a.map((n) => {
                                                  var d;
                                                  return (
                                                      n.CI_ID_ESTADO === 2 &&
                                                      e.jsxs('tr', {
                                                          children: [
                                                              e.jsx('td', {
                                                                  children:
                                                                      e.jsx(B, {
                                                                          to: `/pedido/${n.CI_ID_PEDIDO}`,
                                                                          children:
                                                                              n.CI_ID_PEDIDO,
                                                                      }),
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      e.jsx(B, {
                                                                          to: `/perfil/${n.T_COMPRA.T_USUARIO.CV_CEDULA}`,
                                                                          className:
                                                                              'enlace-perfil',
                                                                          children:
                                                                              n
                                                                                  .T_COMPRA
                                                                                  .T_USUARIO
                                                                                  .CV_CEDULA,
                                                                      }),
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      n.T_COMPRA
                                                                          .T_USUARIO
                                                                          .CV_DIRECCION,
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      n.T_COMPRA
                                                                          .T_USUARIO
                                                                          .CV_NOMBRE,
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      (d =
                                                                          n.T_COMPRA.T_DETALLE_COMPRA.at(
                                                                              0
                                                                          )) ==
                                                                      null
                                                                          ? void 0
                                                                          : d.CF_FECHA_ENTREGA.split(
                                                                                'T'
                                                                            ).at(
                                                                                0
                                                                            ),
                                                              }),
                                                              e.jsx('td', {
                                                                  children:
                                                                      e.jsxs(
                                                                          'select',
                                                                          {
                                                                              onChange:
                                                                                  (
                                                                                      m
                                                                                  ) =>
                                                                                      o(
                                                                                          m,
                                                                                          n.CI_ID_PEDIDO
                                                                                      ),
                                                                              name: `Estado-${n.CI_ID_PEDIDO}`,
                                                                              id: `Estado-${n.CI_ID_PEDIDO}`,
                                                                              value: l[
                                                                                  `Estado-${n.CI_ID_PEDIDO}`
                                                                              ],
                                                                              children:
                                                                                  [
                                                                                      e.jsx(
                                                                                          'option',
                                                                                          {
                                                                                              value: 1,
                                                                                              children:
                                                                                                  'Pendiente',
                                                                                          }
                                                                                      ),
                                                                                      e.jsx(
                                                                                          'option',
                                                                                          {
                                                                                              value: 2,
                                                                                              children:
                                                                                                  'Completado',
                                                                                          }
                                                                                      ),
                                                                                      e.jsx(
                                                                                          'option',
                                                                                          {
                                                                                              value: 3,
                                                                                              children:
                                                                                                  'En proceso',
                                                                                          }
                                                                                      ),
                                                                                  ],
                                                                          }
                                                                      ),
                                                              }),
                                                          ],
                                                      })
                                                  );
                                              }),
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    },
    qt = () =>
        e.jsxs(e.Fragment, {
            children: [
                e.jsx(Ks, {}),
                e.jsxs('div', {
                    className: 'container-pedidos mt-3',
                    children: [
                        e.jsx('div', {
                            className: 'text-center',
                            children: e.jsx('h1', {
                                children: e.jsx('br', {}),
                            }),
                        }),
                        e.jsx('div', {
                            className: 'container-pedidos mt-3',
                            children: e.jsx('div', {
                                className: 'container-pedidos',
                                children: e.jsxs('div', {
                                    className: 'row',
                                    children: [
                                        e.jsx('div', {
                                            className: 'col ',
                                            children: e.jsx(jt, {}),
                                        }),
                                        e.jsx(zt, {}),
                                    ],
                                }),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    Ht = () => {
        const {
            startGetProductsAll: a,
            products: s,
            startSetActiveProduct: t,
            startResetProductActive: l,
            startDeleteProduct: r,
            startActiveProduct: o,
        } = Re();
        return (
            u.useEffect(() => {
                a();
            }, []),
            e.jsxs(e.Fragment, {
                children: [
                    e.jsxs('div', {
                        className: 'container ',
                        children: [
                            e.jsx('div', {
                                className: 'title-box',
                                children: e.jsx('h1', {
                                    children: 'Mantenimiento de productos',
                                }),
                            }),
                            e.jsxs('button', {
                                onClick: () => l(),
                                type: 'button',
                                className: 'btn btn-dark',
                                'data-toggle': 'modal',
                                'data-target': '#register-product',
                                children: [
                                    e.jsx('b', { children: '+' }),
                                    ' Añadir producto',
                                ],
                            }),
                            e.jsxs('table', {
                                className:
                                    'table table-bordered grocery-crud-table table-hover ',
                                children: [
                                    e.jsx('thead', {
                                        children: e.jsxs('tr', {
                                            children: [
                                                e.jsx('th', {
                                                    children: 'Foto',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Nombre',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Precio',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Tela',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Catálogo',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Categoría',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Estado',
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.jsx('tbody', {
                                        children:
                                            s == null
                                                ? void 0
                                                : s.map((n) => {
                                                      var d;
                                                      return e.jsxs(
                                                          'tr',
                                                          {
                                                              className:
                                                                  'animate__animated animate__fadeIn',
                                                              children: [
                                                                  e.jsx('td', {
                                                                      children:
                                                                          e.jsx(
                                                                              'img',
                                                                              {
                                                                                  width: 100,
                                                                                  height: 100,
                                                                                  src:
                                                                                      n ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : n.CV_FOTO,
                                                                                  alt:
                                                                                      n ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : n.CV_NOMBRE,
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          n ==
                                                                          null
                                                                              ? void 0
                                                                              : n.CV_NOMBRE,
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          n ==
                                                                          null
                                                                              ? void 0
                                                                              : n.CD_PRECIO,
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              (d =
                                                                                  n ==
                                                                                  null
                                                                                      ? void 0
                                                                                      : n.T_TELA) ==
                                                                              null
                                                                                  ? void 0
                                                                                  : d.CV_NOMBRE,
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              n ==
                                                                              null
                                                                                  ? void 0
                                                                                  : n
                                                                                        .T_CATALOGO
                                                                                        .CV_DESCRIPCION,
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              n ==
                                                                              null
                                                                                  ? void 0
                                                                                  : n
                                                                                        .T_CATEGORIA
                                                                                        .CV_DESCRIPCION,
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      className:
                                                                          (n ==
                                                                          null
                                                                              ? void 0
                                                                              : n.CB_ESTADO) ===
                                                                          !0
                                                                              ? 'text-success'
                                                                              : 'text-danger',
                                                                      children:
                                                                          [
                                                                              n.CB_ESTADO ===
                                                                              !0
                                                                                  ? 'Activo'
                                                                                  : 'Inactivo',
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              e.jsx(
                                                                                  'button',
                                                                                  {
                                                                                      type: 'button',
                                                                                      className:
                                                                                          'btn btn-dark',
                                                                                      'data-toggle':
                                                                                          'modal',
                                                                                      'data-target':
                                                                                          '#update-product',
                                                                                      onClick:
                                                                                          () => {
                                                                                              l(),
                                                                                                  t(
                                                                                                      n
                                                                                                  );
                                                                                          },
                                                                                      children:
                                                                                          'Editar',
                                                                                  }
                                                                              ),
                                                                              e.jsx(
                                                                                  'button',
                                                                                  {
                                                                                      onClick:
                                                                                          (n ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : n.CB_ESTADO) ===
                                                                                          !0
                                                                                              ? () =>
                                                                                                    r(
                                                                                                        n ==
                                                                                                            null
                                                                                                            ? void 0
                                                                                                            : n.CI_ID_PRODUCTO
                                                                                                    )
                                                                                              : () =>
                                                                                                    o(
                                                                                                        n ==
                                                                                                            null
                                                                                                            ? void 0
                                                                                                            : n.CI_ID_PRODUCTO
                                                                                                    ),
                                                                                      className:
                                                                                          'btn btn-secondary  m-1',
                                                                                      children:
                                                                                          n.CB_ESTADO ===
                                                                                          !1
                                                                                              ? 'Activar'
                                                                                              : 'Desactivar',
                                                                                  }
                                                                              ),
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                              ],
                                                          },
                                                          n.CI_ID_PRODUCTO
                                                      );
                                                  }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx(tt, {}),
                    e.jsx(rt, {}),
                ],
            })
        );
    },
    Wt = () =>
        e.jsxs(e.Fragment, {
            children: [
                e.jsx(ot, {}),
                e.jsx('div', {
                    className: 'datos-medidas',
                    children: e.jsxs('div', {
                        className:
                            'row container-medidas border animate__animated animate__fadeIn ',
                        children: [
                            e.jsx(nt, {}),
                            e.jsx(lt, {}),
                            e.jsx(ct, {}),
                            e.jsx(it, {}),
                        ],
                    }),
                }),
            ],
        }),
    Xt = () => {
        const {
            Users: a,
            startGetAllUsers: s,
            startResetActiveUser: t,
            startDeleteUser: l,
            startSetActiveUser: r,
        } = we();
        return (
            u.useEffect(() => {
                s();
            }, []),
            e.jsxs(e.Fragment, {
                children: [
                    e.jsxs('div', {
                        className: 'container',
                        children: [
                            e.jsx('div', {
                                className: 'title-box',
                                children: e.jsx('h1', {
                                    children: 'Mantenimiento de usuarios',
                                }),
                            }),
                            e.jsxs('button', {
                                onClick: () => t(),
                                type: 'button',
                                className: 'btn btn-dark',
                                'data-toggle': 'modal',
                                'data-target': '#register-user',
                                children: [
                                    e.jsx('b', { children: '+' }),
                                    ' Añadir Usuario',
                                ],
                            }),
                            e.jsxs('table', {
                                className:
                                    'table table-bordered grocery-crud-table table-hover',
                                children: [
                                    e.jsx('thead', {
                                        children: e.jsxs('tr', {
                                            children: [
                                                e.jsx('th', {
                                                    children: 'Nombre',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Primer apellido',
                                                }),
                                                e.jsx('th', {
                                                    children:
                                                        'Segundo apellido',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Cédula',
                                                }),
                                                e.jsx('th', {
                                                    children:
                                                        'Correo electrónico',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Dirección',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Teléfono',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Rol',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Estado',
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.jsx('tbody', {
                                        children:
                                            a == null
                                                ? void 0
                                                : a.map((o) =>
                                                      e.jsxs(
                                                          'tr',
                                                          {
                                                              className:
                                                                  'animate__animated animate__fadeIn',
                                                              children: [
                                                                  e.jsx('td', {
                                                                      children:
                                                                          o.CV_NOMBRE,
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          o.CV_APELLIDO1,
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          o.CV_APELLIDO2,
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              e.jsx(
                                                                                  B,
                                                                                  {
                                                                                      to: `/perfil/${o.CV_CEDULA}`,
                                                                                      children:
                                                                                          o.CV_CEDULA,
                                                                                  }
                                                                              ),
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              o.CV_CORREO,
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              o.CV_DIRECCION,
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              o.CV_TELEFONO,
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              o.CI_ID_ROL ===
                                                                              se.Administrador
                                                                                  ? 'Administrador'
                                                                                  : 'Cliente',
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      className:
                                                                          o.CB_ESTADO ===
                                                                          !0
                                                                              ? 'text-success'
                                                                              : 'text-danger',
                                                                      children:
                                                                          [
                                                                              o.CB_ESTADO ===
                                                                              !0
                                                                                  ? 'Activo'
                                                                                  : 'Inactivo',
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              e.jsx(
                                                                                  'button',
                                                                                  {
                                                                                      type: 'button',
                                                                                      className:
                                                                                          'btn btn-dark',
                                                                                      'data-toggle':
                                                                                          'modal',
                                                                                      'data-target':
                                                                                          '#update-user',
                                                                                      onClick:
                                                                                          () => {
                                                                                              t(),
                                                                                                  r(
                                                                                                      o
                                                                                                  );
                                                                                          },
                                                                                      children:
                                                                                          'Editar',
                                                                                  }
                                                                              ),
                                                                              e.jsx(
                                                                                  'button',
                                                                                  {
                                                                                      onClick:
                                                                                          () =>
                                                                                              l(
                                                                                                  o ==
                                                                                                      null
                                                                                                      ? void 0
                                                                                                      : o.CI_ID_USUARIO
                                                                                              ),
                                                                                      className:
                                                                                          'btn btn-secondary  m-1',
                                                                                      children:
                                                                                          (o ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : o.CB_ESTADO) ===
                                                                                          !1
                                                                                              ? 'Activar'
                                                                                              : 'Desactivar',
                                                                                  }
                                                                              ),
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                              ],
                                                          },
                                                          o.CI_ID_USUARIO
                                                      )
                                                  ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx(gt, {}),
                    e.jsx(Nt, {}),
                ],
            })
        );
    },
    Yt = () => {
        const {
            Fabrics: a,
            startGetAllFabric: s,
            startResetActiveFabric: t,
            startSetActiveFabric: l,
            startDeleteFabric: r,
        } = Me();
        return (
            u.useEffect(() => {
                s();
            }, []),
            e.jsxs(e.Fragment, {
                children: [
                    e.jsxs('div', {
                        className: 'container',
                        children: [
                            e.jsx('div', {
                                className: 'title-box',
                                children: e.jsx('h1', {
                                    children: 'Mantenimiento de telas',
                                }),
                            }),
                            e.jsxs('button', {
                                onClick: () => t(),
                                type: 'button',
                                className: 'btn btn-dark',
                                'data-toggle': 'modal',
                                'data-target': '#register-fabric',
                                children: [
                                    e.jsx('b', { children: '+' }),
                                    ' Añadir tela',
                                ],
                            }),
                            e.jsxs('table', {
                                className:
                                    'table table-bordered grocery-crud-table table-hover',
                                children: [
                                    e.jsx('thead', {
                                        children: e.jsxs('tr', {
                                            children: [
                                                e.jsx('th', {
                                                    children: 'Foto',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Nombre',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Precio',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Estado',
                                                }),
                                                e.jsx('th', {
                                                    children: 'Acción',
                                                }),
                                            ],
                                        }),
                                    }),
                                    e.jsx('tbody', {
                                        children:
                                            a == null
                                                ? void 0
                                                : a.map((o) =>
                                                      e.jsxs(
                                                          'tr',
                                                          {
                                                              className:
                                                                  'animate__animated animate__fadeIn',
                                                              children: [
                                                                  e.jsx('td', {
                                                                      children:
                                                                          e.jsx(
                                                                              'img',
                                                                              {
                                                                                  width: '60px',
                                                                                  height: '60px',
                                                                                  src:
                                                                                      o ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : o.CV_FOTO,
                                                                                  alt:
                                                                                      o ==
                                                                                      null
                                                                                          ? void 0
                                                                                          : o.CV_NOMBRE,
                                                                              }
                                                                          ),
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          o ==
                                                                          null
                                                                              ? void 0
                                                                              : o.CV_NOMBRE,
                                                                  }),
                                                                  e.jsx('td', {
                                                                      children:
                                                                          o ==
                                                                          null
                                                                              ? void 0
                                                                              : o.CD_PRECIO,
                                                                  }),
                                                                  e.jsx('td', {
                                                                      className:
                                                                          (o ==
                                                                          null
                                                                              ? void 0
                                                                              : o.CB_ESTADO) ===
                                                                          !0
                                                                              ? 'text-success'
                                                                              : 'text-danger',
                                                                      children:
                                                                          o !=
                                                                              null &&
                                                                          o.CB_ESTADO
                                                                              ? 'Activo'
                                                                              : 'Inactivo',
                                                                  }),
                                                                  e.jsxs('td', {
                                                                      children:
                                                                          [
                                                                              e.jsx(
                                                                                  'button',
                                                                                  {
                                                                                      type: 'button',
                                                                                      className:
                                                                                          'btn btn-dark',
                                                                                      'data-toggle':
                                                                                          'modal',
                                                                                      'data-target':
                                                                                          '#update-fabric',
                                                                                      onClick:
                                                                                          () => {
                                                                                              t(),
                                                                                                  l(
                                                                                                      o
                                                                                                  );
                                                                                          },
                                                                                      children:
                                                                                          'Editar',
                                                                                  }
                                                                              ),
                                                                              e.jsx(
                                                                                  'button',
                                                                                  {
                                                                                      onClick:
                                                                                          () =>
                                                                                              r(
                                                                                                  o ==
                                                                                                      null
                                                                                                      ? void 0
                                                                                                      : o.CI_ID_TELA
                                                                                              ),
                                                                                      className:
                                                                                          'btn btn-secondary  m-1',
                                                                                      children:
                                                                                          (o ==
                                                                                          null
                                                                                              ? void 0
                                                                                              : o.CB_ESTADO) ===
                                                                                          !1
                                                                                              ? 'Activar'
                                                                                              : 'Desactivar',
                                                                                  }
                                                                              ),
                                                                              ' ',
                                                                          ],
                                                                  }),
                                                              ],
                                                          },
                                                          o.CI_ID_TELA
                                                      )
                                                  ),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    e.jsx(ft, {}),
                    e.jsx(_t, {}),
                ],
            })
        );
    },
    Zt = () => e.jsx(At, {}),
    Jt = () => e.jsx(Ct, {}),
    Kt = () => {
        const { startCheckAuthToken: a, status: s, user: t } = te();
        return (
            u.useEffect(() => {
                a(), console.log('Estoy validando el token');
            }, []),
            e.jsx(St, {
                children: e.jsxs(Ia, {
                    children: [
                        (t == null ? void 0 : t.CI_ID_ROL) === 2 ||
                        s === 'not-authenticated'
                            ? e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx(z, {
                                          path: '/auth/login',
                                          element: e.jsx(Rt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/compra',
                                          element: e.jsx(Ot, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/carrito',
                                          element: e.jsx(Vt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/alquiler',
                                          element: e.jsx(Ft, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/contacto',
                                          element: e.jsx(Gt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/auth/registro',
                                          element: e.jsx(Bt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/confeccion',
                                          element: e.jsx(wt, {}),
                                      }),
                                  ],
                              })
                            : e.jsxs(e.Fragment, {
                                  children: [
                                      e.jsx(z, {
                                          path: '/ventas',
                                          element: e.jsx($t, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/pedidos',
                                          element: e.jsx(qt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/producto',
                                          element: e.jsx(Ht, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/perfil/:id',
                                          element: e.jsx(Wt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/pedido/:id',
                                          element: e.jsx(Jt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/usuario',
                                          element: e.jsx(Xt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/tela',
                                          element: e.jsx(Yt, {}),
                                      }),
                                      e.jsx(z, {
                                          path: '/*',
                                          element: e.jsx(aa, { to: '/ventas' }),
                                      }),
                                  ],
                              }),
                        e.jsx(z, {
                            path: '/forgot/password/:token',
                            element: e.jsx(Zt, {}),
                        }),
                        e.jsx(z, { path: '/*', element: e.jsx(Lt, {}) }),
                    ],
                }),
            })
        );
    };
function Qt() {
    return e.jsx(pa, {
        store: fs,
        children: e.jsx(Ca, { children: e.jsx(Kt, {}) }),
    });
}
ua.createRoot(document.getElementById('root')).render(
    e.jsx(ha.StrictMode, { children: e.jsx(Qt, {}) })
);
