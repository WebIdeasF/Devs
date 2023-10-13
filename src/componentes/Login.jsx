import '../estilos/Login.css'
import logo from '../imagenes/Logo_IdeasFac_0__2023-09-03_SIN FONDO.png'

export function Login() {
    return (
        <div className='container-login'>
            <div className='header-login'>
                <img src={logo} width={70} height={70} alt="logo" />
                <p className='nombre-app'>His Clin</p>
            </div>
            <h3 className='titulo-app'> Software Mobile para consultorios </h3>
            <form className="formulario" action="">
                <div className='container-input'>
                    <label className='label-login' htmlFor="usuario">Usuario ID</label>
                    <input className='input-login' type="text" id="usuario" />
                </div>
                <div className='container-input'>
                    <label className='label-login' htmlFor="contraseña">Contraseña</label>
                    <input className='input-login' type="text" id="contraseña" />
                </div>
                <button className='btn-ingreso'>Acceder</button>
                <a href='#' className='texto-datos'>No recuerdo mis datos de acceso</a>
            </form>

            {/* Aca iria el img logo */}
            <div>
                <p>WIF. software</p>
                <p>Desk & mobile</p>
                <button className='btn-info'>Informacion</button>
            </div>

            <button className='btn-registro'>Enviar solicitud de registro</button>
        </div>
    )
}