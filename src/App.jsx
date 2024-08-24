import './App.css';
import { Formulario } from './Components/formulario';
import { Home } from './Components/Home';
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { OtroFormulario } from './Components/OtroFormulario';

function App() {
  const [usuario, setUsuario] = useState([]);

  return (
    <Router>
        <div className='App'>
            <Routes>
                <Route path='/login' element={!usuario.length > 0 ? <Formulario setUsuario={setUsuario} /> : <Navigate to="/" />} />
                <Route path="/" element={usuario.length > 0 ? <Home usuario={usuario} setUsuario={setUsuario} /> : <Navigate to="/login" />} />
                <Route path='/otroformulario' element={<OtroFormulario /> }/>{}
            </Routes>
        </div>
    </Router>
);
}

export default App
