import '../estilos/AntecedentesPersonales.css'

export function AntecedentesPersonales() {
    return (
        <div className="container-datosContacto">
            <p className='nombre-app-registro'>His Clin</p>
            <p className='texto-seccion'>Antecedentes personales</p>
            <div className='container-btns'>
                <div className='container-datos'>
                    <button className='btn-dp'>AP</button>
                    <button className='btn-dc'>AF / ALE</button>
                </div>
                <button className='btn-guardar'>Guardar</button>
            </div>
            <div>
                <h2 className='pl pb'>Antecedentes Personales</h2>
                <div className="container-ap">
                    <div className='inputs-checkbox'>
                        <ul>
                            <li><input type="checkbox" name="" id="" /> Hipertension</li>
                            <li><input type="checkbox" name="" id="" /> Diabetes</li>
                            <li><input type="checkbox" name="" id="" /> Colesterol elev.</li>
                            <li><input type="checkbox" name="" id="" /> Cirugias</li>
                            <li><input type="checkbox" name="" id="" /> Otros</li>
                        </ul>
                    </div>
                    <div className='inputs-checkbox'>
                        <ul>
                            <li><input type="checkbox" name="" id="" /> Enf. Cardiov.</li>
                            <li><input type="checkbox" name="" id="" /> Enf. Renal</li>
                            <li><input type="checkbox" name="" id="" /> Neoplasias</li>
                            <li><input type="checkbox" name="" id="" /> EPOC</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='pl pb'>Mas informacion</h2>
                <div className="container-ap">
                    
                </div>
            </div>
        </div>
    )
}