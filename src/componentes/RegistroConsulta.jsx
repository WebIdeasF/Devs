import '../estilos/RegistroConsulta.css'

export function RegistroConsulta (){
    return (
        <div className="container-registroConsulta">
               <p className='nombre-app-registro'>His Clin</p>
            <p className='texto-seccion'>Registro de consulta</p>
            <div className='container-btns'>
                <div className='container-datos'>
                    <button className='btn'>DP</button>
                    <button className='btn'>ANT</button>
                    <button className='btn'>LAB</button>
                    <button className='btn'>IMG</button>
                    <button className='btn'>PDF</button>
                </div>
                <button className='btn-guardar'>Guardar</button>
            </div>
            <div >
                <h2 className='fecha-consulta'>Fecha de consulta 22/02/2023</h2>
                <input className='input-consulta' placeholder='Diagnostico' type="text" /><button className='btn-consulta'> + </button>
                
                <input className='input-consulta' placeholder='Controles' type="text" />

                <input className='input-consulta' placeholder='Medicacion' type="text" /><button className='btn-consulta'> + </button>
            </div>
            
            <div className='container-consulta'>
                <p className='texto-consulta'>Ingrese aqui el texto de la consulta</p>
            </div>
        </div>
    )
}