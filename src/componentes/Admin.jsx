import '../estilos/Admin.css'

export function Admin() {
    return (
        <div className="container-datosContacto">
            <p className='nombre-app-registro'>His Clin</p>
            <div className='container-texto-seccion'>
                <p className="texto-seccion">nombre administrador</p>
                <p className='texto-seccion'>usuarios</p>
            </div>
            <div className='div-admin'>
                {/* <div className='flex'>
                    <p>estado</p>
                    <p>apellido</p>
                    <p>nombre</p>
                    <p>espec</p>
                </div>
                <div className='flex'>
                    <select name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                    <div className='flex'>
                        <input className='input-user' type="text" />
                        <input className='input-user' type="text" />
                        <input className='input-user' type="text" />
                    </div>
                    <div  className='flex'>
                        <p>e</p>
                        <p>d</p>
                    </div>
                </div> */}

                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Estado</th>
                            <th>Apellido</th>
                            <th>Nombre</th>
                            <th>Espec.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select name="" id="">
                                    <option value="">I</option>
                                    <option value="">A</option>
                                    <option value="">B</option>
                                </select>
                            </td>
                            <td>Emmanuel</td>
                            <td>Yapura</td>
                            <td>doc</td>
                        </tr>
                        <tr>
                            <td>
                                <select name="" id="">
                                    <option value="">I</option>
                                    <option value="">A</option>
                                    <option value="">B</option>
                                </select>
                            </td>
                            <td>Emmanuel</td>
                            <td>Yapura</td>
                            <td>doc</td>
                        </tr>
                        <tr>
                            <td>
                                <select name="" id="">
                                    <option value="">I</option>
                                    <option value="">A</option>
                                    <option value="">B</option>
                                </select>
                            </td>
                            <td>Emmanuel</td>
                            <td>Yapura</td>
                            <td>doc</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >
    )
}