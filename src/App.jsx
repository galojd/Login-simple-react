import './App.css'
import { Formulario } from './Components/formulario'
import { Home } from './Components/Home'
import { useState } from "react"
function App() {
  const [usuario, setUsuario] = useState([]);

  return (
   <div className='App'>
      {
        !usuario.length > 0
          ? <Formulario  setUsuario={setUsuario}/>
          : <Home usuario = {usuario} setUsuario = {setUsuario}/>
      }
   </div>
    
   
  )
}

export default App
