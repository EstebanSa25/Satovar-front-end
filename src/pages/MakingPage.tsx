import { Link } from 'react-router-dom';
import {
    MeasureDetailsShirt,
    MeasureLargeShirt,
    MeasureTopShirt,
} from '../components';
import { UseAuth } from '../hooks/UseAuth';
import { UseMeasureShirt } from '../hooks';
import { useEffect } from 'react';

export const MakingPage = () => {
    const { status } = UseAuth();
    const { CreateMeasureShirt, startGetMeasureShirt } = UseMeasureShirt();

    useEffect(() => {
        startGetMeasureShirt();
    }, []);

    return (
        <div className='section best-deal'>
            <div className='container'>
                <div className='row animate__animated animate__fadeIn'>
                    <div className='col-lg-4'>
                        <div className='section-heading'>
                            <h6>| CONFECCIÓN</h6>
                            <h2>Hacemos tu estilo!</h2>
                        </div>
                    </div>
                    <div className='col-lg-12 '>
                        <div className='tabs-content'>
                            <div className='row'>
                                <div className='nav-wrapper '>
                                    <ul className='nav nav-tabs' role='tablist'>
                                        <li
                                            className='nav-item'
                                            role='presentation'
                                        >
                                            <button
                                                className='nav-link active'
                                                id='appartment-tab'
                                                data-bs-toggle='tab'
                                                data-bs-target='#appartment'
                                                type='button'
                                                role='tab'
                                                aria-controls='appartment'
                                                aria-selected='true'
                                            >
                                                Camisa
                                            </button>
                                        </li>
                                        <li
                                            className='nav-item'
                                            role='presentation'
                                        >
                                            <button
                                                className='nav-link'
                                                id='villa-tab'
                                                data-bs-toggle='tab'
                                                data-bs-target='#villa'
                                                type='button'
                                                role='tab'
                                                aria-controls='villa'
                                                aria-selected='false'
                                            >
                                                Chaleco
                                            </button>
                                        </li>
                                        <li
                                            className='nav-item'
                                            role='presentation'
                                        >
                                            <button
                                                className='nav-link'
                                                id='penthouse-tab'
                                                data-bs-toggle='tab'
                                                data-bs-target='#penthouse'
                                                type='button'
                                                role='tab'
                                                aria-controls='penthouse'
                                                aria-selected='false'
                                            >
                                                Pantalón
                                            </button>
                                        </li>
                                        <li
                                            className='nav-item'
                                            role='presentation'
                                        >
                                            <button
                                                className='nav-link'
                                                id='shirt-tab'
                                                data-bs-toggle='tab'
                                                data-bs-target='#shirt'
                                                type='button'
                                                role='tab'
                                                aria-controls='shirt'
                                                aria-selected='false'
                                            >
                                                Saco
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className='tab-content' id='myTabContent'>
                                    <div
                                        className='tab-pane fade show active'
                                        id='appartment'
                                        role='tabpanel'
                                        aria-labelledby='appartment-tab'
                                    >
                                        <div className='row'>
                                            <div className='col-lg-3'>
                                                <div className='info-table'>
                                                    <ul>
                                                        <li>
                                                            Confort de primer
                                                            nivel <span></span>
                                                        </li>
                                                        <li>
                                                            Estilo Personalizado{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Durabilidad y
                                                            Frescura{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Diseños Modernos{' '}
                                                            <span></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <img
                                                    src='src/assets/images/camisa.jpg'
                                                    alt=''
                                                />
                                            </div>
                                            <div className='col-lg-3'>
                                                <h4>Medidas para Camisa</h4>

                                                <div
                                                    id='accordion'
                                                    className='accordion'
                                                >
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='headingTopShirt'
                                                        >
                                                            <button
                                                                className='accordion-button collapsed'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapsTopShirt'
                                                                aria-expanded='false'
                                                                aria-controls='collapsTopPant'
                                                            >
                                                                Medidas
                                                                Superiores
                                                                Camisa
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapsTopShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingTopShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <MeasureTopShirt />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='headingLengthShirt'
                                                        >
                                                            <button
                                                                className='accordion-button'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapseLengthShirt'
                                                                aria-expanded='true'
                                                                aria-controls='collapseLengthPant'
                                                            >
                                                                Medidas de Largo
                                                                Camisa
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseLengthShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingLengthShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <MeasureLargeShirt />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='DetailsShirt'
                                                        >
                                                            <button
                                                                className='accordion-button'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapseDetailsShirt'
                                                                aria-expanded='true'
                                                                aria-controls='collapseLengthPant'
                                                            >
                                                                Detalles
                                                                Adicionales
                                                                Camisa
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseDetailsShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='DetailsShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <MeasureDetailsShirt />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='icon-button'>
                                                    <Link
                                                        onClick={
                                                            status ===
                                                            'authenticated'
                                                                ? CreateMeasureShirt
                                                                : () => {}
                                                        }
                                                        to={
                                                            status ===
                                                            'not-authenticated'
                                                                ? '/auth/login'
                                                                : ''
                                                        }
                                                    >
                                                        <i className='fa fa-calendar'></i>{' '}
                                                        Guardar Medidas
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className='tab-pane fade'
                                        id='villa'
                                        role='tabpanel'
                                        aria-labelledby='villa-tab'
                                    >
                                        <div className='row'>
                                            <div className='col-lg-3'>
                                                <div className='info-table'>
                                                    <ul>
                                                        <li>
                                                            TElegancia Adicional{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Ajuste y Comodidad{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Estilo Versatil{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Detalles
                                                            Sofisticados
                                                            <span></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <img
                                                    src='src/assets/images/chaleco.jpg'
                                                    alt=''
                                                />
                                            </div>
                                            <div className='col-lg-3'>
                                                <h4>Medidas Chaleco</h4>
                                                <div
                                                    id='accordion'
                                                    className='accordion'
                                                >
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='headingTopShirt'
                                                        >
                                                            <button
                                                                className='accordion-button collapsed'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapsTopShirt'
                                                                aria-expanded='false'
                                                                aria-controls='collapsTopPant'
                                                            >
                                                                Medidas
                                                                Superiores
                                                                Chaleco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapsTopShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingTopShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Pecho:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='cinturacamisa'
                                                                            name='cinturaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Cintura:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='caderacamisa'
                                                                            name='caderaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Cadera:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='espaldaCamisa'
                                                                            name='espaldaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='headingLengthShirt'
                                                        >
                                                            <button
                                                                className='accordion-button'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapseLengthShirt'
                                                                aria-expanded='true'
                                                                aria-controls='collapseLengthPant'
                                                            >
                                                                Medidas de Largo
                                                                Chaleco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseLengthShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingLengthShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='LargoTotalCamisa'
                                                                            className='form-label'
                                                                        >
                                                                            Largo
                                                                            total:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='LargoTotalCamisa'
                                                                            name='LargoTotalCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='DetailsShirt'
                                                        >
                                                            <button
                                                                className='accordion-button'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapseDetailsShirt'
                                                                aria-expanded='true'
                                                                aria-controls='collapseLengthPant'
                                                            >
                                                                Detalles
                                                                Adicionales
                                                                Chaleco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseDetailsShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='DetailsShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='DetallesCamisa'
                                                                            className='form-label'
                                                                        >
                                                                            Detalles
                                                                            Adicionales:
                                                                        </label>
                                                                        <input
                                                                            type='text'
                                                                            className='form-control'
                                                                            id='DetallesCamisa'
                                                                            name='DetallesCamisa'
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='icon-button'>
                                                    <a href='login.html'>
                                                        <i className='fa fa-calendar'></i>{' '}
                                                        Guardar Medidas
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className='tab-pane fade'
                                        id='penthouse'
                                        role='tabpanel'
                                        aria-labelledby='penthouse-tab'
                                    >
                                        <div className='row'>
                                            <div className='col-lg-3'>
                                                <div className='info-table'>
                                                    <ul>
                                                        <li>
                                                            Elegancia a Medida{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Telas Premium
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Detalles
                                                            Personalizados{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Versatilidad
                                                            Estilizada{' '}
                                                            <span></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <img
                                                    src='src/assets/images/pantalon.jpg'
                                                    alt=''
                                                />
                                            </div>
                                            <div className='col-lg-3'>
                                                <h4>Medidas Pantalón</h4>
                                                <div
                                                    id='accordion'
                                                    className='accordion'
                                                >
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='headingTopShirt'
                                                        >
                                                            <button
                                                                className='accordion-button collapsed'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapsTopShirt'
                                                                aria-expanded='false'
                                                                aria-controls='collapsTopPant'
                                                            >
                                                                Medidas
                                                                Superiores
                                                                Pantalón
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapsTopShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingTopShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Cintura:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='cinturacamisa'
                                                                            name='cinturaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Cadera:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='caderacamisa'
                                                                            name='caderaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Tiro:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='espaldaCamisa'
                                                                            name='espaldaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Rodilla:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='hombrocamisa'
                                                                            name='hombroCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Ruedo:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='cuelloCamisa'
                                                                            name='cuelloCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='headingLengthShirt'
                                                        >
                                                            <button
                                                                className='accordion-button'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapseLengthShirt'
                                                                aria-expanded='true'
                                                                aria-controls='collapseLengthPant'
                                                            >
                                                                Medidas de Largo
                                                                Pantalón
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseLengthShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingLengthShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='LargoTotalCamisa'
                                                                            className='form-label'
                                                                        >
                                                                            Largo
                                                                            total:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='LargoTotalCamisa'
                                                                            name='LargoTotalCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='DetailsShirt'
                                                        >
                                                            <button
                                                                className='accordion-button'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapseDetailsShirt'
                                                                aria-expanded='true'
                                                                aria-controls='collapseLengthPant'
                                                            >
                                                                Detalles
                                                                Adicionales
                                                                Pantalón
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseDetailsShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='DetailsShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='DetallesCamisa'
                                                                            className='form-label'
                                                                        >
                                                                            Detalles
                                                                            Adicionales:
                                                                        </label>
                                                                        <textarea
                                                                            className='form-control'
                                                                            id='DetallesCamisa'
                                                                            name='DetallesCamisa'
                                                                            rows={
                                                                                4
                                                                            }
                                                                        ></textarea>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='icon-button'>
                                                    <a href='login.html'>
                                                        <i className='fa fa-save'></i>{' '}
                                                        Guardar Medidas
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className='tab-pane fade'
                                        id='shirt'
                                        role='tabpanel'
                                        aria-labelledby='shirt-tab'
                                    >
                                        <div className='row'>
                                            <div className='col-lg-3'>
                                                <div className='info-table'>
                                                    <ul>
                                                        <li>
                                                            Elegancia a Medida{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Telas Premium
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Detalles
                                                            Personalizados{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Versatilidad
                                                            Estilizada{' '}
                                                            <span></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <img
                                                    src='src/assets/images/saco3.jpg'
                                                    alt='Camisa'
                                                />
                                            </div>
                                            <div className='col-lg-3'>
                                                <h4>Medidas Saco</h4>

                                                <div
                                                    id='accordion'
                                                    className='accordion'
                                                >
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='headingTopShirt'
                                                        >
                                                            <button
                                                                className='accordion-button collapsed'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapsTopShirt'
                                                                aria-expanded='false'
                                                                aria-controls='collapsTopPant'
                                                            >
                                                                Medidas
                                                                Superiores Saco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapsTopShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingTopShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Cintura:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='cinturacamisa'
                                                                            name='cinturaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Cadera:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='caderacamisa'
                                                                            name='caderaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Espalda:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='espaldaCamisa'
                                                                            name='espaldaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='headingTopShirt'
                                                                            className='form-label'
                                                                        >
                                                                            Hombro:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='hombrocamisa'
                                                                            name='hombroCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='headingLengthShirt'
                                                        >
                                                            <button
                                                                className='accordion-button'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapseLengthShirt'
                                                                aria-expanded='true'
                                                                aria-controls='collapseLengthPant'
                                                            >
                                                                Medidas de Largo
                                                                saco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseLengthShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingLengthShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='LargoMangaCamisa'
                                                                            className='form-label'
                                                                        >
                                                                            Largo
                                                                            manga:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='LargoMangaCamisa'
                                                                            name='LargoMangaCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='LargoTotalCamisa'
                                                                            className='form-label'
                                                                        >
                                                                            Largo
                                                                            total:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='LargoTotalCamisa'
                                                                            name='LargoTotalCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='Brazo'
                                                                            className='form-label'
                                                                        >
                                                                            Brazo:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='Brazo'
                                                                            name='Brazo'
                                                                            required
                                                                        />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='Pu;oCamisa'
                                                                            className='form-label'
                                                                        >
                                                                            Puño:
                                                                        </label>
                                                                        <input
                                                                            type='number'
                                                                            className='form-control'
                                                                            id='Pu;oCamisa'
                                                                            name='Pu;oCamisa'
                                                                            required
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='accordion-item'>
                                                        <h2
                                                            className='accordion-header'
                                                            id='DetailsShirt'
                                                        >
                                                            <button
                                                                className='accordion-button'
                                                                type='button'
                                                                data-bs-toggle='collapse'
                                                                data-bs-target='#collapseDetailsShirt'
                                                                aria-expanded='true'
                                                                aria-controls='collapseLengthPant'
                                                            >
                                                                Detalles
                                                                Adicionales Saco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseDetailsShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='DetailsShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                <form>
                                                                    <div className='mb-3'>
                                                                        <label
                                                                            htmlFor='DetallesCamisa'
                                                                            className='form-label'
                                                                        >
                                                                            Detalles
                                                                            Adicionales:
                                                                        </label>
                                                                        <textarea
                                                                            className='form-control'
                                                                            id='DetallesCamisa'
                                                                            name='DetallesCamisa'
                                                                            rows={
                                                                                4
                                                                            }
                                                                        ></textarea>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='icon-button'>
                                                    <a href='login.html'>
                                                        <i className='fa fa-save'></i>{' '}
                                                        Guardar Medidas
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
