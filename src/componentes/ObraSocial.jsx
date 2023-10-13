import '../estilos/ObraSocial.css'

export function ObraSocial() {
    return (
        <div className="container-obraSocial">
            <p className='nombre-app-registro'>His Clin</p>
            <p className='texto-seccion'>Obra social</p>
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
                    <label className='label-dp' htmlFor="obraSocial">Obra Social</label>
                    <input className='input-dp' type="text" id="obraSocial" />
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="plan">Plan OS</label>
                    <input className='input-dp' type="text" id="plan" />
                </div>

                <div className='container-inputs-registro'>
                    <label className='label-dp' htmlFor="numeroOS">Numero OS</label>
                    <input className='input-dp' type="number" id="numeroOS" />
                </div>
            </form>
        </div>
    )
}
