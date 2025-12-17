import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={estilos.container}>
      <h1 style={estilos.titulo}>Bienvenido a App Música 🎧</h1>
      <p style={estilos.subtitulo}>¿Qué deseas hacer hoy?</p>
      
      <div style={estilos.gridBotones}>
        {/* Botón hacia la página de Búsqueda */}
        <Link to="/buscar" style={estilos.boton}>
          <span style={estilos.icono}>🔍</span>
          <span style={estilos.textoBoton}>Buscar Canciones</span>
        </Link>

        {/* Botón hacia la página de Subida */}
        <Link to="/subir" style={estilos.boton}>
          <span style={estilos.icono}>📤</span>
          <span style={estilos.textoBoton}>Subir Música</span>
        </Link>
      </div>
    </div>
  );
}

const estilos = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    textAlign: 'center'
  },
  titulo: { fontSize: '2.5rem', marginBottom: '10px' },
  subtitulo: { fontSize: '1.2rem', color: '#b3b3b3', marginBottom: '40px' },
  gridBotones: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  boton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '200px',
    height: '150px',
    backgroundColor: '#181818',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '15px',
    transition: 'transform 0.2s, background-color 0.2s',
    border: '1px solid #333',
    cursor: 'pointer'
  },
  icono: { fontSize: '3rem', marginBottom: '10px' },
  textoBoton: { fontWeight: 'bold', fontSize: '1.1rem' }
};

export default Home;