import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Subir from './views/canciones/subir'; 
import Buscar from './views/canciones/buscar'; 

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#121212', color: 'white', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/buscar" element={<Buscar />} />
          <Route path="/subir" element={<Subir />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;