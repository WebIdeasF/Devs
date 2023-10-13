import logo from './logo.svg';
import './App.css';
import { Login } from './componentes/Login';
import { Registro } from './componentes/Registro';
import { Perfil } from './componentes/Perfil';
import { DatosPersonales } from './componentes/DatosPersonales';
import { ObraSocial } from './componentes/ObraSocial';
import { DatosContacto } from './componentes/DatosContacto';
import { PerfilPaciente } from './componentes/PerfilPaciente';
import { RegistroConsulta } from './componentes/RegistroConsulta';
import { AntecedentesPersonales } from './componentes/AntecedentesPersonales';
import { AntecedentesFA } from './componentes/AntecedentesFA';
import { Diagnosticos } from './componentes/Diagnosticos';

function App() {
  return (
    <div className="App">
      <PerfilPaciente />
    </div>
  );
}

export default App;
