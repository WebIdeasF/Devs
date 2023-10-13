import '../estilos/DatosPersonales.css'

export function DatosPersonales() {

    return (
        <div className="container-datosPersonales">
            <p className='nombre-app-registro'>His Clin</p>
            <p className='texto-seccion'>Datos personales</p>
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
                    <label className='label-dp' htmlFor="apellido">Apellido *</label>
                    <input className='input-dp' type="text" id="apellido" />
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="nombre"> Nombre *</label>
                    <input className='input-dp' type="text" id="nombre" />
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="fecha">Fecha de nacimiento</label>
                    <input className='input-dp' type="date" id='fecha' />
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="sexo">Sexo</label>
                    <input className='input-dp' type="text" id="sexo" />
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="documento">Documento</label>
                    <input className='input-dp' type="number" id='documento'/>
                </div>
            </form>

        </div>
    )
}