import '../estilos/DatosContacto.css'

export function DatosContacto() {
    return (
        <div className="container-datosContacto">
            <p className='nombre-app-registro'>His Clin</p>
            <p className='texto-seccion'>Datos de contacto</p>
            <div className='container-btns'>
                <div className='container-datos'>
                    <button className='btn-dp'>DP</button>
                    <button className='btn-dc'>DC</button>
                    <button className='btn-os'>OS</button>
                </div>
                <button className='btn-guardar'>Guardar</button>
            </div>

            <form className='formulario-dp'>
                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="telefono">Telefono</label>
                    <input className='input-dp' type="number" id="telefono" />
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="email">Email</label>
                    <input className='input-dp' type="email" id="email"/>
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="direccion">Direccion</label>
                    <input className='input-dp' type="text" id="direccion"/>
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="info">Mas informacion</label>
                    <textarea className='input-dp' id="info" cols="20" rows="10"></textarea>
                </div>
            </form>
        </div>
    )
}