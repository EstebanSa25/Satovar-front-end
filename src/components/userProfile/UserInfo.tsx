import { useParams } from 'react-router-dom';

export const UserInfo = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div className='datos-usuario'>
            <div className='container-usuario text-center border'>
                <h1>DATOS USUARIO</h1>
            </div>
            <div className=' container'>
                <div className='text-center'>
                    <div className='container'>
                        <h5>Nombre</h5>
                        <p>Carlos Mendez Ruiz</p>
                        <h5>Cédula</h5>
                        <p>5-8365-836</p>
                        <h5>Correo eletrónico</h5>
                        <p>CarlosMenR@hotmail.com</p>
                        <h5>Dirección</h5>
                        <p>Cartago, Las Lomas, Calle 12-14, avenida 25.</p>
                        <p>Casa color vino con porton negro, de 2 pisos</p>
                        <h5>Teléfono</h5>
                        <p>7845-5436</p>
                        <h5>N. Pedido</h5>
                        <p>
                            <a href='perfil.html'>-93733040</a> / 20 marz. 2024
                        </p>
                        <p>
                            <a href='pedido2.html'>-64972383</a> / 05 mayo 2024
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
