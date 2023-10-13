import '../estilos/Perfil.css'

export function Perfil() {

    const paciente = [{
        nombre: 'Pablo',
        apellido: 'Galeano'
    }]

    return (
        <div className='container-perfil'>
            <p className='nombre-app-registro'>His Clin</p>
            <div className="perfil">
                <div className="nombre-perfil">
                    <h2 className="nombre-usuario">Lic. RAUL ROMERO</h2>
                    <p className="cantidad-pacientes">3 pacientes registrados</p>
                </div>
                {/* Aca iria un emoji de tuerca */}
            </div>
            <p className="texto-seccion">Agregar / Buscar pacientes</p>
            <div className='container-busqueda-paciente'>
                <div className="busqueda-paciente">
                    <input className="input-busqueda" type="text" />
                    <button className="btn-busqueda">Buscar</button>
                    <button className="btn-pac"> + PAC </button>
                </div>
                <p className="texto-busqueda">Ingrese apellido, nombre o parte del mismo. Para ver la lista completa de pacientes ingrese un *</p>
            </div>
            <div className="container-pac">
                {paciente.length > 0 ?
                    (
                        <div className='container-paciente'>
                            <span className='nombre-paciente'>{paciente[0].nombre}, {paciente[0].apellido}</span> <button className='btn-paciente'>add</button>
                        </div>
                    ) :
                    (
                        <p className='texto-pac'>Esta es la pagina para buscar y agregar pacientes. Pulse sobre + PAC para agregar un registro de paciente.</p>
                    )
                }
            </div>
        </div>
    )
}