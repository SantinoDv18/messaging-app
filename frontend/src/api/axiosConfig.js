import axios from "axios";

// Crear una instancia personalizada de Axios
// Esto permite reutilizar la misma configuración en toda la app
const api = axios.create({

    // URL base del backend
    // Usa variable de entorno si existe (.env)
    // Si no, usa localhost como fallback
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",

    // Headers por defecto para todas las peticiones
    headers: {
        "Content-Type": "application/json", // Indica que enviamos JSON
    },

    // withCredentials: true, 
    // Permite enviar cookies automáticamente
    // No es necesario si usas JWT en headers
});


// Exportar la instancia para usarla en toda la aplicación
export default api;