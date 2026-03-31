import React, { useState, useEffect, useRef } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import Overlay from '../ui/Overlay';
import '../../styles/AuthForm.css';

// Componente principal que maneja autenticación (login / registro)
const AuthForm = () => {

  // Estado para saber si se muestra el formulario de registro o login
  const [isSignUp, setIsSignUp] = useState(false);

  // Estado global del formulario (controla inputs)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Estado para manejar errores (ej: credenciales incorrectas)
  const [error, setError] = useState('');

  // Estado para indicar carga (ej: mientras se hace login/register)
  const [loading, setLoading] = useState(false);

  // Referencia al contenedor principal (para manipular clases CSS)
  const containerRef = useRef(null);

  // Efecto que maneja la animación entre login y registro
  useEffect(() => {
    if (containerRef.current) {
      if (isSignUp) {
        // Agrega clase para mostrar panel de registro
        containerRef.current.classList.add('right-panel-active');
      } else {
        // Remueve clase para mostrar panel de login
        containerRef.current.classList.remove('right-panel-active');
      }
    }
  }, [isSignUp]); // Se ejecuta cada vez que cambia isSignUp

  // Alterna entre login y registro
  const toggleForm = () => {
    setIsSignUp(prev => !prev); // Cambia el estado actual
    setError(''); // Limpia errores al cambiar de formulario
  };

  // Maneja cambios en los inputs (controlados)
  const handleInputChange = (e) => {
    setFormData({
      ...formData, // Mantiene los valores anteriores
      [e.target.name]: e.target.value // Actualiza el campo correspondiente
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página

    // Aquí luego conectarás con el backend
    console.log('Enviar:', formData);
  };

  return (
    // Contenedor principal con referencia para animaciones
    <div className="container" ref={containerRef}>

      {/* Formulario de registro */}
      <SignUpForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        error={error}
        loading={loading}
      />

      {/* Formulario de login */}
      <SignInForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        error={error}
        loading={loading}
      />
      
      {/* Panel overlay que permite cambiar entre login/register */}
      <Overlay toggleForm={toggleForm} />

    </div>
  );
};

// Exportación del componente
export default AuthForm;