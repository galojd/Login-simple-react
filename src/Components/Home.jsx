import { useNavigate} from 'react-router-dom';
import "./Formulario.css";

// eslint-disable-next-line react/prop-types
const Home = ({usuario, setUsuario}) => {
    const history = useNavigate();

    const handleLogout = () => {
        setUsuario([]);
        history.push('/login'); // Redirige al formulario de login después del logout
    };

    const siguiente = () => {
        history('/otroformulario');

    }

    return (
        <div className="home">
            <h1>Bienvenidos al himalaya</h1>
            <h2>{usuario}</h2>
            <button onClick={handleLogout}>Cerrar sesión</button>
            <button onClick={siguiente}>Siguiente</button>
        </div>);
}

export {
    Home
}