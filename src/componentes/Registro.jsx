import '../estilos/Registro.css'

export function Registro() {
    return (
        <div className="container-registro">
            <p className='nombre-app-registro'>His Clin</p>
            <form className="formulario-registro">
                <p className='text-registro'>Asegurese de completar correctamente los datos del formulario debajo. Una vez recibida la solicitud de regristro, se creara automaticamente su ID de usuario y podra ingresar a la aplicacion.</p>
                <div className='container-inputs-registro'>
                    <label className='label-registro' htmlFor="titulo">Titulo</label>
                    <input className='input-registro' type="text" id='titulo'/>
                </div>
                <div className='container-inputs-registro'>
                    <label className='label-registro' htmlFor="apellido">Apellido</label>
                    <input className='input-registro' type="text" id='apellido'/>
                </div>
                <div className='container-inputs-registro'>
                    <label className='label-registro' htmlFor="nombre">Nombre</label>
                    <input className='input-registro' type="text" id='nombre'/>
                </div>
                <div className='container-inputs-registro'>
                    <label className='label-registro' htmlFor="especialidad">Especialidad</label>
                    <input className='input-registro' type="text" id='especialidad' />
                </div>
                <div className='container-inputs-registro'>
                    <label className='label-registro' htmlFor="email">Email</label>
                    <input className='input-registro' type="text" id='email' />
                </div>

                <button className='btn-solicitud'>Enviar solicitud</button>
            </form>
        </div>
    )
}