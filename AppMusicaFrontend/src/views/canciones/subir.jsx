import SubirCanciones from '../../components/subirCanciones';

export default function Subir() {
  return (
    <div>
      <h2>📤 Subir nueva música</h2>
      
      <SubirCanciones alFinalizar={() => alert("¡Canción lista!")} />
    </div>
  )
}