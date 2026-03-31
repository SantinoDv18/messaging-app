// Componente visual (UI) que muestra el overlay animado
// Permite cambiar entre login y registro
const Overlay = ({ toggleForm }) => {
  return (
    // Contenedor principal del overlay
    <div className="overlay-container">

      {/* Wrapper que contiene ambos paneles */}
      <div className="overlay">
    
        {/* Panel izquierdo (cuando estás en registro → invita a login) */}
        <div className="overlay-panel overlay-left">

          {/* Título */}
          <h1>¡Bienvenido de nuevo!</h1>

          {/* Texto descriptivo */}
          <p>Para mantenerte conectado ingresa con tu info personal</p>
          
          {/* Botón que cambia a modo login */}
          <button className="ghost" onClick={toggleForm}>
            Iniciar Sesión
          </button>
        </div>

        {/* Panel derecho (cuando estás en login → invita a registro) */}
        <div className="overlay-panel overlay-right">

          {/* Título */}
          <h1>¡Hola, Amigo!</h1>

          {/* Texto descriptivo */}
          <p>Ingresa tus datos personales y empieza el viaje con nosotros</p>

          {/* Botón que cambia a modo registro */}
          <button className="ghost" onClick={toggleForm}>
            Registrarse
          </button>
        </div>

      </div>
    </div>
  );
};

// Exportación del componente
export default Overlay;