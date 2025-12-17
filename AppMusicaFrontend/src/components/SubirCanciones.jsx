import { useState } from 'react';
import axios from 'axios';

function SubirCanciones({ alFinalizar }) {
  const [datos, setDatos] = useState({
    titulo: '',
    album: '',
    genero: '',
    fechaLanzamiento: '',
    coverImageUrl: '' // URL de la imagen de portada
  });
  const [archivo, setArchivo] = useState(null);
  const [subiendo, setSubiendo] = useState(false);

  // Manejar cambios en inputs de texto
  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  // Manejar el archivo de audio
  const handleFileChange = (e) => {
    setArchivo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!archivo) return alert("Por favor selecciona un archivo de audio");

    setSubiendo(true);
    
    // IMPORTANTE: Para enviar archivos usamos FormData
    const formData = new FormData();
    formData.append('titulo', datos.titulo);
    formData.append('fechaLanzamiento', datos.fechaLanzamiento);
    formData.append('coverImageUrl', datos.coverImageUrl);
    formData.append('cancion', archivo); // Este nombre "cancion" debe coincidir con req.files.cancion en tu controller

    try {
      await axios.post('http://localhost:5000/api/canciones/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("¡Canción subida con éxito!");
      alFinalizar(); // Función para refrescar la lista
    } catch (error) {
      console.error("Error al subir:", error.response?.data || error.message);
      alert("Error al subir la canción");
    } finally {
      setSubiendo(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={estilos.form}>
      <h3>Subir Nueva Canción</h3>
      <input name="titulo" placeholder="Título" onChange={handleChange} required style={estilos.input} />
      <input name="fechaLanzamiento" type="date" onChange={handleChange} required style={estilos.input} />
      <input name="coverImageUrl" placeholder="URL de la imagen de portada" onChange={handleChange} required style={estilos.input} />
      
      <label style={{ display: 'block', margin: '10px 0' }}>Archivo de audio (MP3):</label>
      <input type="file" accept="audio/*" onChange={handleFileChange} required />

      <button type="submit" disabled={subiendo} style={estilos.boton}>
        {subiendo ? 'Subiendo a Cloudinary...' : 'Guardar Canción'}
      </button>
    </form>
  );
}

const estilos = {
  form: { background: '#282828', padding: '20px', borderRadius: '10px', marginBottom: '20px' },
  input: { display: 'block', width: '100%', marginBottom: '10px', padding: '8px', borderRadius: '4px', border: 'none' },
  boton: { background: '#1DB954', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }
};

export default SubirCanciones;