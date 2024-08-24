import "./Formulario.css"
import { useState } from "react"
// eslint-disable-next-line react/prop-types
const Formulario = ({setUsuario}) => {
    const [ usuario, setUsario] = useState("");
    const [ password, setPassoword] = useState("");
    const [ error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        if(usuario === "" || password===""){
            setError(true);
            return;
        }
        setError(false);
        setUsuario([usuario]);
    }

    return (
        <section>
            <>
                <h1>LOGIN</h1>
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Ingresar Usuario</label>
                        <input type="text" value={usuario} onChange={e => setUsario(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Ingresar Contraseña</label>
                        <input type="password" value={password} onChange={e => setPassoword(e.target.value)}/>
                    </div>
                    
                    <button className="custom-button">Ingresar</button>
                </form>   
            </>
            {error && <p>Todos los campos son obligatorios</p>}
           
        </section>
    )
}

export {Formulario}