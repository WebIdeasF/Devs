export function Diagnosticos() {
    return (
        <div className="container-perfil">
            <p className='nombre-app-registro'>His Clin</p>
            <p className='texto-seccion'>Mis diagnosticos</p>
            <div className='container-btns'>
                <div className='container-datos'>
                    <button className='btn'>MP</button>
                    <button className='btn'>CIE10</button>
                </div>
            </div>
            <div className='container-busqueda-paciente'>
                <div className="busqueda-paciente">
                    <input className="input-busqueda" type="text" />
                    <button className="btn-busqueda">Agregar</button>
                </div> 
            </div>
            <div className="container-pac">

            </div>
        </div>
    )
}