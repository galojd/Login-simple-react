// eslint-disable-next-line react/prop-types
const Home = ({usuario, setUsuario}) => {
    const handleLogout = () => setUsuario([]);
    return (
        <div>
            <h1>Bienvenidos al himalaya</h1>
            <h2>{usuario}</h2>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>);
}

export {
    Home
}