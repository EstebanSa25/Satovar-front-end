import { Link } from 'react-router-dom';
import {
    MeasureDetailsPant,
    MeasureDetailsShirt,
    MeasureDetailsSuitJacket,
    MeasureDetailsWaistcoat,
    MeasureLargePant,
    MeasureLargeShirt,
    MeasureLargeSuitJacket,
    MeasureLargeWaistcoat,
    MeasureTopShirt,
    MeasureUppderPant,
    MeasureUpperSuitJacket,
    MeasureUpperWaistcoat,
} from '../components';
import { UseAuth } from '../hooks/UseAuth';
import {
    UseMeasurePant,
    UseMeasureShirt,
    UseMeasureSuitJacket,
    UseMeasureWaistcoat,
} from '../hooks';
import { useEffect } from 'react';

export const MakingPage = () => {
    const { status, user } = UseAuth();
    const { CreateMeasureShirt, startGetMeasureShirt } = UseMeasureShirt();
    const { CreateMeasureWaistcoat, startGetMeasureWaistcoat } =
        UseMeasureWaistcoat();
    const { startSavePant, startGetMeasurePant } = UseMeasurePant();
    const { startSaveSuitJacket, startGetMeasureSuitJacket } =
        UseMeasureSuitJacket();
    useEffect(() => {
        startGetMeasureShirt();
        startGetMeasureWaistcoat();
        startGetMeasurePant();
        startGetMeasureSuitJacket();
    }, [user]);

    return (
        <div className='section best-deal'>
            <div className='container'>
                <div className='row animate__animated animate__fadeIn'>
                    <div className='col-lg-4'>
                        <div className='section-heading'>
                            <h6>| CONFECCIÓN</h6>
                            <h2>¡Hacemos tu estilo!</h2>
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
                                                            Estilo personalizado{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Durabilidad y
                                                            frescura{' '}
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
                                                <h4>Medidas para camisa</h4>

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
                                                                superiores
                                                                camisa
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
                                                                Medidas largo
                                                                camisa
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
                                                                adicionales
                                                                camisa
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
                                                        Guardar medidas
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
                                                            Elegancia adicional{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Ajuste y comodidad{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Estilo versátil{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Detalles
                                                            sofisticados
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
                                                <h4>Medidas para chaleco</h4>
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
                                                                superiores
                                                                chaleco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapsTopShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingTopShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                {/*  */}
                                                                <MeasureUpperWaistcoat />
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
                                                                Medidas largo
                                                                chaleco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseLengthShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingLengthShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                {/*  */}
                                                                <MeasureLargeWaistcoat />
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
                                                                adicionales
                                                                chaleco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseDetailsShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='DetailsShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                {/*  */}
                                                                <MeasureDetailsWaistcoat />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='icon-button'>
                                                    <Link
                                                        to={
                                                            status ===
                                                            'not-authenticated'
                                                                ? '/auth/login'
                                                                : ''
                                                        }
                                                        onClick={
                                                            status ===
                                                            'authenticated'
                                                                ? CreateMeasureWaistcoat
                                                                : () => {}
                                                        }
                                                    >
                                                        <i className='fa fa-calendar'></i>{' '}
                                                        Guardar medidas
                                                    </Link>
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
                                                            Elegancia a la
                                                            medida <span></span>
                                                        </li>
                                                        <li>
                                                            Telas de primera
                                                            calidad
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Detalles
                                                            personalizados{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Versatilidad
                                                            estilizada{' '}
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
                                                <h4>Medidas para pantalón</h4>
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
                                                                superiores
                                                                pantalón
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapsTopShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingTopShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                {/*  */}
                                                                <MeasureUppderPant />
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
                                                                Medidas largo
                                                                pantalón
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseLengthShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingLengthShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                {/*  */}
                                                                <MeasureLargePant />
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
                                                                adicionales
                                                                pantalón
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseDetailsShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='DetailsShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                {/*  */}
                                                                <MeasureDetailsPant />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='icon-button'>
                                                    <Link
                                                        to={
                                                            status ===
                                                            'not-authenticated'
                                                                ? '/auth/login'
                                                                : ''
                                                        }
                                                        onClick={
                                                            status ===
                                                            'authenticated'
                                                                ? startSavePant
                                                                : () => {}
                                                        }
                                                    >
                                                        <i className='fa fa-save'></i>{' '}
                                                        Guardar medidas
                                                    </Link>
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
                                                            Elegancia a la
                                                            medida <span></span>
                                                        </li>
                                                        <li>
                                                            Telas de primera
                                                            calidad
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Detalles
                                                            personalizados{' '}
                                                            <span></span>
                                                        </li>
                                                        <li>
                                                            Versatilidad
                                                            estilizada{' '}
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
                                                <h4>Medidas para saco</h4>

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
                                                                superiores saco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapsTopShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='headingTopShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                {/*  */}
                                                                <MeasureUpperSuitJacket />
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
                                                                Medidas largo
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
                                                                {/*  */}
                                                                <MeasureLargeSuitJacket />
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
                                                                adicionales saco
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id='collapseDetailsShirt'
                                                            className='accordion-collapse collapse'
                                                            aria-labelledby='DetailsShirt'
                                                            data-bs-parent='#accordion'
                                                        >
                                                            <div className='accordion-body'>
                                                                {/*  */}
                                                                <MeasureDetailsSuitJacket />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='icon-button'>
                                                    <Link
                                                        to={
                                                            status ===
                                                            'not-authenticated'
                                                                ? '/auth/login'
                                                                : ''
                                                        }
                                                        onClick={
                                                            status ===
                                                            'authenticated'
                                                                ? startSaveSuitJacket
                                                                : () => {}
                                                        }
                                                    >
                                                        <i className='fa fa-save'></i>{' '}
                                                        Guardar medidas
                                                    </Link>
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
