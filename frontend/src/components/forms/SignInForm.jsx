// Componente de formulario para iniciar sesión
// Recibe props desde el componente padre (AuthForm)
const SignInForm = ({ formData, handleInputChange, handleSubmit, error, loading }) => {
  return (
    // Contenedor principal del formulario de login
    <div className="form-container sign-in-container">

      {/* Formulario que ejecuta handleSubmit al enviarse */}
      <form onSubmit={handleSubmit}>

        {/* Título del formulario */}
        <h1>Iniciar Sesión</h1>

        {/* Input para el email */}
        <input
          type="email"                 // Tipo email (validación básica del navegador)
          name="email"                 // Nombre del campo (clave en formData)
          placeholder="Email"          // Texto guía
          value={formData.email}       // Valor controlado desde el estado
          onChange={handleInputChange} // Maneja cambios en el input
          required                     // Campo obligatorio
        />

        {/* Input para la contraseña */}
        <input
          type="password"              // Tipo password (oculta el texto)
          name="password"              // Clave en formData
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        {/* Botón tipo "link" para recuperación de contraseña (aún sin lógica) */}
        <button type="button" className="link-button">
          ¿Olvidaste tu contraseña?
        </button>

        {/* Mostrar error si existe */}
        {error && <div className="error">{error}</div>}

        {/* Botón de envío */}
        <button type="submit" disabled={loading}>
          {/* Cambia el texto si está cargando */}
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>

      </form>
    </div>
  );
};

// Exportación del componente
export default SignInForm;