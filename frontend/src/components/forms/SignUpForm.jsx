// Componente de formulario para registro de usuarios
// Recibe props desde el componente padre (AuthForm)
const SignUpForm = ({ formData, handleInputChange, handleSubmit, error, loading }) => {
  return (
    // Contenedor principal del formulario de registro
    <div className="form-container sign-up-container">

      {/* Formulario que ejecuta handleSubmit al enviarse */}
      <form onSubmit={handleSubmit}>

        {/* Título del formulario */}
        <h1>Crear Cuenta</h1>

        {/* Input para el username */}
        <input
          type="text"                  // Tipo texto
          name="username"              // Clave en formData
          placeholder="Username"       // Texto guía
          value={formData.username}    // Valor controlado
          onChange={handleInputChange} // Maneja cambios
          required                     // Campo obligatorio
        />

        {/* Input para el email */}
        <input
          type="email"                 // Tipo email (validación básica)
          name="email"                 // Clave en formData
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        {/* Input para la contraseña */}
        <input
          type="password"              // Oculta el texto ingresado
          name="password"              // Clave en formData
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        {/* Mostrar error si existe */}
        {error && <div className="error">{error}</div>}

        {/* Botón de envío */}
        <button type="submit" disabled={loading}>
          {/* Cambia el texto si está cargando */}
          {loading ? 'Cargando...' : 'Registrarse'}
        </button>

      </form>
    </div>
  );
};

// Exportación del componente
export default SignUpForm;