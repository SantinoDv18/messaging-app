// Importa BrowserRouter, Routes y Route para manejar la navegación
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importa la página principal de autenticación

import AuthPage from "./pages/AuthPage";
import HealtCheck from "./pages/HealthCheck";

// Componente raíz de la aplicación
function App() {

 // Define las rutas de la aplicación usando BrowserRouter, Routes y Route
 // La ruta "/" renderiza el componente AuthPage
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/health" element={<HealtCheck />} />
      </Routes>
    </BrowserRouter>
  );
}

// Exporta el componente para que React lo use en index.js
export default App;