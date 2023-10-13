import '../estilos/PerfilPaciente.css'

export function PerfilPaciente() {

    const datosPaciente = [
        {
            fecha: "22/03/2023",
            descripcion: "prueba de sonido con instrumentos"
        }
    ]

    return (
        <div className="container-perfilPaciente">
            <p className='nombre-app-registro'>His Clin</p>
            <p className='texto-seccion'>Nombre paciente</p>
            <div className='container-btns'>
                <div className='container-datos'>
                    <button className='btn'>DP</button>
                    <button className='btn'>ANT</button>
                    <button className='btn'>LAB</button>
                    <button className='btn'>IMG</button>
                    <button className='btn'>PDF</button>
                    <button className='btn'>+ CON</button>
                </div>
                <button className='btn-guardar'>-</button>
            </div>
            <div className="container-pac">
                {
                    datosPaciente.length > 0 ?
                        (
                            <div className='container-diagnostico'>
                                <div className='header-diagnostico'>
                                    <span className='fecha-diagnostico'>{datosPaciente[0].fecha}</span>
                                    <div>
                                        <button className='btn-editar'>editar</button>
                                        <button className='btn-cerrar'>x</button>
                                    </div>
                                </div>
                                <h5 className='texto-diagnostico'>diagnostico</h5>
                                <p className='descripcion-diagnostico'>{datosPaciente[0].descripcion}</p>
                            </div>
                        ) :
                        (
                            <p className='texto-pac'>Esta es la pagina de evolucion del paciente aqui apareceran los registros de consulta. Para agregar una consulta toque sobre + CON</p>
                        )

                }

            </div>
        </div>
    )
}