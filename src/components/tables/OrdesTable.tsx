export const OrdesTable = () => {
    return (
        <div className='pedidos '>
            <div className='container mt-3'>
                <h2>Lista de Pedidos</h2>
                <hr />
            </div>
            <div className=' mt-3 scrollable-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>N. Pedido</th>
                            <th>Cédula</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Producto</th>
                            <th>Lugar</th>
                            <th>Precio</th>
                            <th>Teléfono</th>
                            <th>Fecha Entrega</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-danger'>
                            <td>93733040</td>
                            <td>
                                <a href='perfil.html' className='enlace-perfil'>
                                    5-8365-836
                                </a>
                            </td>
                            <td>Carlos</td>
                            <td>Mendez Ruiz</td>
                            <td>Traje</td>
                            <td>Cartago</td>
                            <td>$380</td>
                            <td>7845-5436</td>
                            <td>20 marz. 2024</td>
                            <td>
                                <select>
                                    <option>Espera</option>
                                    <option>proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-danger'>
                            <td>73540284</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    5-98637-8464
                                </a>
                            </td>
                            <td>Luis</td>
                            <td>Castillo Mena</td>
                            <td>Saco</td>
                            <td>Alajuela</td>
                            <td>$120</td>
                            <td>3473-5374</td>
                            <td>21 marz. 2024</td>
                            <td>
                                <select>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-danger'>
                            <td>93733040</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    5-8326-44836
                                </a>
                            </td>
                            <td>Sandra</td>
                            <td>Rivas Trejos</td>
                            <td>Pantalon</td>
                            <td>Heredia</td>
                            <td>$89</td>
                            <td>7537-9083</td>
                            <td>21 marz. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-danger'>
                            <td>09735467</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    5-1738-3746
                                </a>
                            </td>
                            <td>Emily</td>
                            <td>Torres Murillo</td>
                            <td>Camisa</td>
                            <td>Heredia</td>
                            <td>$79</td>
                            <td>7345-9834</td>
                            <td>22 marz. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-danger'>
                            <td>84563493</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    8-4534-976
                                </a>
                            </td>
                            <td>Juan</td>
                            <td>Gonzales Mejias</td>
                            <td>Pantalon</td>
                            <td>Cartago</td>
                            <td>$89</td>
                            <td>0000-0000</td>
                            <td>23 marz. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-danger'>
                            <td>12453926</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    6-473-836
                                </a>
                            </td>
                            <td>Ronald</td>
                            <td>Picado Cespedez</td>
                            <td>Camisa</td>
                            <td>Puntarenas</td>
                            <td>$89</td>
                            <td>5483-9467</td>
                            <td>24 marz. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-warning'>
                            <td>93733940</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    4-6384-973
                                </a>
                            </td>
                            <td>Naydeling</td>
                            <td>Ramos Jimenez</td>
                            <td>Pantalon</td>

                            <td>Alajuela</td>
                            <td>$89</td>
                            <td>6445-8960</td>
                            <td>01 Abril. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-warning'>
                            <td>54633465</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    2-8453-3
                                </a>
                            </td>
                            <td>Key</td>
                            <td>Fletes Ortega</td>
                            <td>camisa</td>
                            <td>Heredia</td>
                            <td>$60</td>
                            <td>5649-9876</td>
                            <td>01 Abril. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-warning'>
                            <td>25645678</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    5-53-8364
                                </a>
                            </td>
                            <td>Freder</td>
                            <td>Lociga Murillo</td>
                            <td>Camisa</td>
                            <td>Heredia</td>
                            <td>$89</td>
                            <td>6444-8895</td>
                            <td>02 Abril. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-warning'>
                            <td>435840975</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    1-7454-638
                                </a>
                            </td>
                            <td>Kim</td>
                            <td>fernandez Vasquez</td>
                            <td>Camisa</td>
                            <td>Alajuela</td>
                            <td>$56</td>
                            <td>6345-7894</td>
                            <td>03 Abril. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-warning'>
                            <td>45348768</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    2-8657-7385
                                </a>
                            </td>
                            <td>Naydeling</td>
                            <td>Ramos Jimenez</td>
                            <td>Pantalon</td>
                            <td>Alajuela</td>
                            <td>$89</td>
                            <td>6445-8960</td>
                            <td>01 Abril. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>43579847</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-4646-9364
                                </a>
                            </td>
                            <td>Mario</td>
                            <td>Vega Luna</td>
                            <td>Pantalon</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6436-9846</td>
                            <td>05 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>64972383</td>
                            <td>
                                <a
                                    href='pedido2.html'
                                    className='enlace-perfil'
                                >
                                    5-8365-836
                                </a>
                            </td>
                            <td>Carlos</td>
                            <td>Mendez Ruiz</td>
                            <td>Camisa</td>
                            <td>Cartago</td>
                            <td>$60</td>
                            <td>7845-5436</td>
                            <td>05 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>64589235</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    5-8465-986
                                </a>
                            </td>
                            <td>Ericka</td>
                            <td>Vargas Rosa</td>
                            <td>Camisa</td>
                            <td>Alajueala</td>
                            <td>$66</td>
                            <td>6234-9837</td>
                            <td>05 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>64589235</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    5-7355-094
                                </a>
                            </td>
                            <td>Rosa</td>
                            <td>Garcia Perez</td>
                            <td>Pantalon</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-8970</td>
                            <td>06 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='table-success'>
                            <td>00000000</td>
                            <td>
                                <a href='' className='enlace-perfil'>
                                    0-0000-0000
                                </a>
                            </td>
                            <td>Default</td>
                            <td>Default </td>
                            <td>Default</td>
                            <td>Heredia</td>
                            <td>$86</td>
                            <td>6321-0000</td>
                            <td>07 Mayo. 2024</td>
                            <td>
                                <select>
                                    <option></option>
                                    <option>Espera</option>
                                    <option>Proceso</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
